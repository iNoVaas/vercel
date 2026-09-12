# 🎯 Meta Pixel Setup Guide

## 📋 Overview

Your Meta Pixel integration is **already coded and ready**! This guide will help you activate it by adding your Pixel ID from Meta Business Manager.

## ✅ What's Already Implemented

Your site now tracks these important events:

1. **PageView** - Automatic on every page load
2. **ViewContent** - When someone views a product detail page
3. **AddToCart** - When someone adds a product to cart
4. **InitiateCheckout** - When someone starts the checkout process (shipping page)
5. **Purchase** - When someone completes an order

## 🔧 How to Get Your Meta Pixel ID

1. Go to **Meta Business Manager**: https://business.facebook.com
2. Click on **All Tools** → **Events Manager**
3. Select your Pixel (or create a new one if you don't have one)
4. Click on **Settings** in the left sidebar
5. Copy your **Pixel ID** (it's a number like: `1759198755317745`)

## 🚀 How to Add Your Pixel ID

### Option 1: Using Vercel Environment Variables (Recommended)

1. Go to your Vercel project dashboard
2. Click on **Settings** → **Environment Variables**
3. Add a new variable:
   - **Name**: `NEXT_PUBLIC_FACEBOOK_PIXEL_ID`
   - **Value**: Your Pixel ID (e.g., `1759198755317745`)
   - **Environment**: Select all (Production, Preview, Development)
4. Click **Save**
5. **Redeploy** your site for changes to take effect

### Option 2: Using .env.local File (For Local Development)

Create a file called `.env.local` in the root of your project:

```bash
NEXT_PUBLIC_FACEBOOK_PIXEL_ID=YOUR_PIXEL_ID_HERE
```

**Important**: Don't commit this file to GitHub. Add it to `.gitignore`.

## 📊 Events Tracking Details

### 1. PageView
- **Where**: Automatic on all pages
- **When**: Every page navigation
- **Purpose**: Track overall site traffic

### 2. ViewContent
- **Where**: Product detail pages (`/product/[slug]`)
- **When**: User views a product
- **Data Sent**: Product name, ID, price, currency
- **Purpose**: Track product interest

### 3. AddToCart
- **Where**: Product pages and cart page
- **When**: User clicks "Ajouter Au Panier"
- **Data Sent**: Product name, ID, price, currency
- **Purpose**: Track conversion funnel

### 4. InitiateCheckout
- **Where**: Shipping address page
- **When**: User reaches checkout
- **Purpose**: Track checkout abandonment

### 5. Purchase
- **Where**: Order confirmation
- **When**: User completes order
- **Data Sent**: Currency type
- **Purpose**: Track conversions and ROAS (Return on Ad Spend)

## 🔍 How to Verify It's Working

### After deploying:

1. Go to **Meta Events Manager**
2. Click on your Pixel
3. Click on **Test Events** in the left sidebar
4. Open your website
5. You should see events appearing in real-time!

### Test each event:

- Browse to homepage → PageView ✓
- Click on a product → ViewContent ✓
- Add to cart → AddToCart ✓
- Go to checkout → InitiateCheckout ✓
- Complete order → Purchase ✓

## 📱 Using Meta Pixel Helper (Chrome Extension)

1. Install **Meta Pixel Helper** from Chrome Web Store
2. Visit your website
3. Click the extension icon
4. It will show you which events are firing

## 🎨 Current Pixel ID

Your code currently has a default Pixel ID: `1759198755317745`

**To use your own Pixel ID**, add the environment variable as described above.

## 🔒 Important Notes

- The Pixel ID must start with `NEXT_PUBLIC_` to work on the client-side
- Always redeploy after adding environment variables in Vercel
- Test in incognito mode to avoid browser extensions interfering
- Events may take 20-30 minutes to show in Meta Ads Manager dashboard

## 🛠️ Files Modified

The following files now include Meta Pixel tracking:

1. `/components/meta-pixel.tsx` - Main pixel script
2. `/lib/pixel.ts` - Pixel helper functions
3. `/app/layout.tsx` - Pixel initialization
4. `/app/(root)/confirmed/confirmed-order-form.tsx` - Purchase tracking
5. `/components/ui/shared/products/add-cart.tsx` - AddToCart tracking
6. `/app/(root)/shipping-adresse/shipping-adress-from.tsx` - InitiateCheckout tracking
7. `/app/(root)/product/[slug]/product-details-client.tsx` - ViewContent tracking

## 🎯 What This Enables

With Meta Pixel properly configured, you can:

✅ Track conversions from Facebook/Instagram ads
✅ Build Custom Audiences based on site behavior
✅ Create Lookalike Audiences
✅ Optimize ads for purchases
✅ Measure ROAS (Return on Ad Spend)
✅ Retarget visitors who didn't purchase

## 📞 Need Help?

If events aren't showing:
1. Check browser console for errors
2. Verify Pixel ID is correct
3. Make sure you redeployed after adding env variable
4. Test in incognito mode
5. Wait 20-30 minutes for data to appear in Meta dashboard

---

## 🚀 Quick Start Commands

### Local Development
```bash
# Create .env.local file
echo "NEXT_PUBLIC_FACEBOOK_PIXEL_ID=YOUR_PIXEL_ID" > .env.local

# Restart dev server
npm run dev
```

### Vercel Deployment
```bash
# Add to Vercel
vercel env add NEXT_PUBLIC_FACEBOOK_PIXEL_ID

# Redeploy
vercel --prod
```

---

**Your Meta Pixel integration is complete! Just add your Pixel ID and redeploy.** 🎉
