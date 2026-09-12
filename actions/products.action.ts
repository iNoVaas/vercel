"use server";

import { prisma } from "@/db/prisma";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import {
  convertCartToPlainObject,
  prismaToJson,
  formatError,
} from "@/lib/utils";
import { LATEST_PRODUCTS_LIMIT, PAGE_SIZE } from "@/lib/constants";
import { productInsertSchema, updateProductSchema } from "@/lib/validators";
import type { Product } from "@/types";
import { cache } from "react";

import sampleData from "@/db/sample-data";

const getFallbackProducts = (): Product[] => {
  return sampleData.products.map((p, i) => ({
    id: `sample-${i + 1}`,
    name: p.name,
    slug: p.slug,
    category: p.category,
    description: p.description,
    images: p.images,
    price: p.price,
    brand: p.brand,
    rating: String(p.rating),
    numReviews: p.numReviews,
    stock: p.stock,
    isFeatured: p.isFeatured,
    banner: p.banner,
    createdAt: new Date(),
  })) as Product[];
};

// ----------------------------
// Get latest products
// ----------------------------
export const getLatestProducts = cache(
  async (limit = 7): Promise<Product[]> => {
    try {
      const data = await prisma.product.findMany({
        orderBy: { createdAt: "desc" },
        take: limit,
        select: {
          id: true,
          name: true,
          slug: true,
          price: true,
          images: true,
          category: true,
          isFeatured: true,
          createdAt: true,
        },
      });

      if (data && data.length > 0) {
        return prismaToJson(data) as Product[];
      }
    } catch {}

    return getFallbackProducts().slice(0, limit);
  },
);

// ----------------------------
// Get product by slug
// ----------------------------
export async function getProductBySlug(slug: string): Promise<Product | null> {
  try {
    const product = await prisma.product.findFirst({
      where: { slug },
    });
    if (product) return prismaToJson(product) as Product;
  } catch {}

  const fallbacks = getFallbackProducts();
  return fallbacks.find((p) => p.slug === slug) || fallbacks[0] || null;
}

// ----------------------------
// Get all products with pagination & optional category/search
// ----------------------------
export async function getAllProducts({
  query,
  limit = PAGE_SIZE,
  page = 1,
  category,
}: {
  query?: string;
  limit?: number;
  page?: number;
  category?: string;
}) {
  try {
    const where = category ? { category } : undefined;

    const data = await prisma.product.findMany({
      where,
      orderBy: { createdAt: "desc" },
      skip: (page - 1) * limit,
      take: limit,
    });

    const dataCount = await prisma.product.count({ where });

    if (data && data.length > 0) {
      const products: Product[] = prismaToJson(data) as Product[];
      return {
        data: products,
        totalPages: Math.ceil(dataCount / limit),
        dataCount,
      };
    }
  } catch {}

  const fallbacks = getFallbackProducts();
  const filtered = category
    ? fallbacks.filter((p) => p.category === category)
    : fallbacks;

  return {
    data: filtered.slice((page - 1) * limit, page * limit),
    totalPages: Math.ceil(filtered.length / limit) || 1,
    dataCount: filtered.length,
  };
}

// ----------------------------
// Get product by ID
// ----------------------------
export async function getProductById(id: string): Promise<Product | null> {
  try {
    const data = await prisma.product.findUnique({ where: { id } });
    if (data) return convertCartToPlainObject(data) as unknown as Product;
  } catch {}

  const fallbacks = getFallbackProducts();
  return fallbacks.find((p) => p.id === id) || fallbacks[0] || null;
}

// ----------------------------
// Delete Product
// ----------------------------
export async function deleteProduct(productId: string) {
  try {
    await prisma.product.delete({ where: { id: productId } });

    // ✅ ONLY ONE revalidatePath - revalidates entire app
    revalidatePath("/", "layout");

    return { success: true, message: "Product deleted successfully" };
  } catch (error: unknown) {
    return { success: false, message: formatError(error) };
  }
}

// ----------------------------
// Create Product
// ----------------------------
export async function createProduct(data: z.infer<typeof productInsertSchema>) {
  try {
    const validated = productInsertSchema.parse(data);
    await prisma.product.create({ data: validated });

    // ✅ ONLY ONE revalidatePath - revalidates entire app
    // revalidatePath("/", "layout");

    return { success: true, message: "Product created successfully" };
  } catch (error: unknown) {
    return { success: false, message: formatError(error) };
  }
}

// ----------------------------
// Update Product
// ----------------------------
export async function updateProduct(data: z.infer<typeof updateProductSchema>) {
  try {
    const validated = updateProductSchema.parse(data);

    const exists = await prisma.product.findUnique({
      where: { id: validated.id },
    });
    if (!exists) throw new Error("Product not found");

    await prisma.product.update({
      where: { id: validated.id },
      data: validated,
    });

    // ✅ ONLY ONE revalidatePath - revalidates entire app
    //revalidatePath("/", "layout");

    return { success: true, message: "Product updated successfully" };
  } catch (error: unknown) {
    return { success: false, message: formatError(error) };
  }
}

// ----------------------------
// Get products by category
// ----------------------------
export async function getProductsByCategory(
  categorySlug: string,
): Promise<Product[]> {
  try {
    const categoryName = categorySlug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    const products = await prisma.product.findMany({
      where: {
        category: { contains: categoryName, mode: "insensitive" },
        stock: { gt: 0 },
      },
      orderBy: { createdAt: "desc" },
    });

    if (products && products.length > 0) {
      return products.map((p) => convertCartToPlainObject(p) as unknown as Product);
    }
  } catch {}

  return getFallbackProducts();
}

// ----------------------------
// Get last product
// ----------------------------
export const getLastProduct = cache(async (): Promise<Product | null> => {
  try {
    const data = await prisma.product.findFirst({
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        name: true,
        slug: true,
        price: true,
        images: true,
        category: true,
        isFeatured: true,
        createdAt: true,
      },
    });

    if (data) return prismaToJson(data) as Product;
  } catch {}

  const fallbacks = getFallbackProducts();
  return fallbacks[0] || null;
});

// actions/categories.action.ts

export const getLatestCategoryImages = cache(async () => {
  try {
    const allProducts = await prisma.product.findMany({
      select: {
        category: true,
        images: true,
        createdAt: true,
      },
      orderBy: {
        createdAt: "desc", // Newest first
      },
    });

    if (allProducts && allProducts.length > 0) {
      const categoryMap = new Map<string, string>();
      for (const product of allProducts) {
        const categoryName = product.category.trim();
        if (!categoryMap.has(categoryName) && product.images?.[0]) {
          categoryMap.set(categoryName, product.images[0]);
        }
      }
      return Array.from(categoryMap.entries())
        .map(([name, image]) => ({ name, image }))
        .sort((a, b) => a.name.localeCompare(b.name));
    }
  } catch {}

  const fallbacks = getFallbackProducts();
  const categoryMap = new Map<string, string>();
  for (const product of fallbacks) {
    const categoryName = product.category.trim();
    if (!categoryMap.has(categoryName) && product.images?.[0]) {
      categoryMap.set(categoryName, product.images[0]);
    }
  }
  return Array.from(categoryMap.entries())
    .map(([name, image]) => ({ name, image }))
    .sort((a, b) => a.name.localeCompare(b.name));
});
