export const FB_PIXEL_ID =
  process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID || "1759198755317745";

export const pageview = () => {
  if (typeof window !== "undefined" && (window as any).fbq) {
    (window as any).fbq("track", "PageView");
  }
};

export const event = (name: string, options: Record<string, any> = {}) => {
  console.log("🎯 Meta Pixel Event:", name, options); // Debug log
  if (typeof window !== "undefined" && (window as any).fbq) {
    (window as any).fbq("track", name, options);
    console.log("✅ Meta Pixel Event Sent:", name); // Success log
  } else {
    console.warn("⚠️ Meta Pixel not loaded or fbq not available"); // Warning
  }
};
