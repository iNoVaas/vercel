# 📊 Meta Pixel Events - Quick Reference

## 🎯 User Journey & Tracked Events

```
┌─────────────────────────────────────────────────────────────┐
│                     USER JOURNEY                            │
└─────────────────────────────────────────────────────────────┘

1. 📱 User clicks Facebook/Instagram Ad
          ↓
2. 🏠 Lands on your website
          ↓ 
   📍 EVENT: PageView (automatic)
          ↓
3. 👀 Browses products, clicks on a product
          ↓
   📍 EVENT: ViewContent
          Data: product name, ID, price, DZD
          ↓
4. 🛒 Clicks "Ajouter Au Panier"
          ↓
   📍 EVENT: AddToCart
          Data: product name, ID, price, DZD
          ↓
5. 📦 Goes to shipping address page
          ↓
   📍 EVENT: InitiateCheckout
          ↓
6. ✅ Clicks "Commander" and completes order
          ↓
   📍 EVENT: Purchase
          Data: currency (DZD)
          ↓
7. 🎉 Order confirmed!
```

## 📈 What Meta Does With This Data

### 1. **Optimization**
Meta uses these events to find people similar to those who:
- View products (ViewContent)
- Add to cart (AddToCart)
- Complete purchases (Purchase)

### 2. **Tracking ROI**
You can see:
- How many people clicked your ad → viewed products
- How many added to cart
- How many actually purchased
- Cost per purchase

### 3. **Retargeting**
Create audiences of people who:
- ✅ Viewed products but didn't add to cart
- ✅ Added to cart but didn't checkout
- ✅ Started checkout but didn't complete
- ✅ Purchased (to upsell other products)

### 4. **Lookalike Audiences**
Meta finds people similar to your purchasers

## 🎯 Event Details

| Event | When | Where | Data Sent |
|-------|------|-------|-----------|
| **PageView** | Every page load | All pages | Automatic |
| **ViewContent** | Product viewed | `/product/[slug]` | Product name, ID, price, DZD |
| **AddToCart** | Add to cart clicked | Product pages | Product name, ID, price, DZD |
| **InitiateCheckout** | Checkout started | `/shipping-adresse` | None |
| **Purchase** | Order completed | Order confirmation | Currency: DZD |

## 🔧 Setup Checklist

- [ ] Get Pixel ID from Meta Business Manager
- [ ] Add to Vercel Environment Variables: `NEXT_PUBLIC_FACEBOOK_PIXEL_ID`
- [ ] Redeploy site on Vercel
- [ ] Test using Meta Pixel Helper Chrome extension
- [ ] Verify events in Meta Events Manager → Test Events
- [ ] Wait 20-30 min for data in Ads Manager dashboard

## 🎨 Code Implementation

### Files Updated:
```
✅ /components/meta-pixel.tsx          - Pixel script loader
✅ /lib/pixel.ts                       - Event tracking functions
✅ /app/layout.tsx                     - Pixel initialization
✅ /app/(root)/confirmed/              - Purchase tracking
✅ /components/ui/shared/products/     - AddToCart tracking
✅ /app/(root)/shipping-adresse/       - InitiateCheckout tracking
✅ /app/(root)/product/[slug]/         - ViewContent tracking
```

## 💡 Pro Tips

1. **Test Before Running Ads**
   - Use Chrome's Meta Pixel Helper
   - Check Events Manager → Test Events
   - Do a full purchase flow

2. **Wait for Data**
   - Events show in Test Events immediately
   - Dashboard data takes 20-30 minutes

3. **Verify on Mobile**
   - Test on actual mobile device
   - Check in incognito mode

4. **Create Custom Conversions**
   - In Events Manager
   - Use for specific optimization goals

## 🚀 Ready to Go!

Once you add your Pixel ID and redeploy, Meta will start tracking:
- Who visits from your ads
- What they do on your site  
- Who purchases

This data makes your ads smarter and cheaper over time! 🎯
