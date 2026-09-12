"use client";

import { useEffect } from "react";
import * as pixel from "@/lib/pixel";

export function OrderSuccessTracker({ orderTotal }: { orderTotal: number }) {
  useEffect(() => {
    // Track Purchase event on order success page
    pixel.event("Purchase", {
      content_type: "product",
      value: orderTotal,
    });
  }, [orderTotal]);

  return null; // This component doesn't render anything
}
