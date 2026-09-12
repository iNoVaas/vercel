# ✅ Deployment Checklist - Meta Pixel Integration

## 🎯 Quick Deployment Steps

### Step 1: Get Your Meta Pixel ID
1. Go to https://business.facebook.com
2. Navigate to: **All Tools** → **Events Manager**
3. Select your Pixel (or create new one)
4. Go to **Settings** 
5. Copy your **Pixel ID** (example: `1759198755317745`)

---

### Step 2: Add to Vercel
1. Go to your Vercel dashboard: https://vercel.com
2. Select your project
3. Go to **Settings** → **Environment Variables**
4. Click **Add New**
5. Fill in:
   ```
   Name:  NEXT_PUBLIC_FACEBOOK_PIXEL_ID
   Value: [paste your Pixel ID]
   Environment: ✅ Production ✅ Preview ✅ Development
   ```
6. Click **Save**

---

### Step 3: Redeploy
Option A - Automatic:
- Push any commit to your GitHub main branch
- Vercel will auto-deploy

Option B - Manual:
- In Vercel dashboard → **Deployments**
- Click **•••** on latest deployment → **Redeploy**

---

### Step 4: Verify It's Working

#### A. Install Meta Pixel Helper (Chrome)
1. Go to: https://chrome.google.com/webstore
2. Search: "Meta Pixel Helper"
3. Install the extension

#### B. Test Your Site
1. Open your website in Chrome
2. Click the Meta Pixel Helper icon
3. You should see your Pixel ID

#### C. Test Events Manager
1. Go to Meta Events Manager
2. Click your Pixel → **Test Events**
3. Open your website
4. Do these actions:

```
✅ Visit homepage         → PageView should appear
✅ Click on a product    → ViewContent should appear
✅ Add to cart           → AddToCart should appear
✅ Go to shipping        → InitiateCheckout should appear
✅ Complete order        → Purchase should appear
```

---

## 📱 Full Test Scenario

```bash
# Do this complete flow:

1. Open site in incognito mode
2. Browse homepage                     # PageView fires
3. Click on any product               # ViewContent fires
4. Select size (if applicable)
5. Click "Ajouter Au Panier"          # AddToCart fires
6. Click "Voir Le Panier"
7. Click "Continuer" 
8. Fill shipping address              # InitiateCheckout fires
9. Click "Continuer"
10. Click "Commander"                 # Purchase fires
```

---

## 🔍 Troubleshooting

### Events Not Showing?

**Check 1:** Browser Console
```
1. Press F12 on your site
2. Go to Console tab
3. Look for errors
```

**Check 2:** Pixel ID
```
1. Verify in Vercel: Settings → Environment Variables
2. Make sure it starts with NEXT_PUBLIC_
3. No spaces, no quotes
```

**Check 3:** Deployment
```
1. Check Vercel deployment logs
2. Make sure build succeeded
3. Check deployment time (must be AFTER adding env var)
```

**Check 4:** Browser Extensions
```
1. Test in incognito mode
2. Disable ad blockers
3. Disable privacy extensions
```

**Check 5:** Timing
```
- Test Events show immediately ✅
- Dashboard data takes 20-30 minutes ⏰
```

---

## 📊 Where to See Results

### Real-time Testing:
- **Meta Events Manager** → Test Events (immediate)
- **Chrome Meta Pixel Helper** (immediate)

### Campaign Data:
- **Meta Ads Manager** → Your Campaign (20-30 min delay)
- **Meta Events Manager** → Overview (20-30 min delay)

---

## 🎯 Success Criteria

Your integration is successful when:

- [ ] Meta Pixel Helper shows your Pixel ID
- [ ] Test Events shows all 5 events
- [ ] No errors in browser console
- [ ] All events have green checkmark in Test Events
- [ ] Data appears in Ads Manager (after 20-30 min)

---

## 🚀 You're Done!

Once all checkboxes are ✅, your Meta Pixel is fully operational!

### What happens now:
- Meta tracks all visitors from your ads
- You can create retargeting audiences
- Your ads will optimize for purchases
- You can measure ROI accurately

---

## 📞 Need Help?

If stuck:
1. Check browser console for errors
2. Verify Pixel ID in Vercel env vars
3. Test in incognito mode
4. Wait 20-30 minutes for dashboard data
5. Check Meta Pixel Helper extension

---

## 🎉 Next Steps After Setup

1. **Create a Custom Conversion** in Events Manager
2. **Set up Retargeting Campaigns** in Ads Manager
3. **Create Lookalike Audiences** from purchasers
4. **Optimize your ads** for Purchase events
5. **Track your ROAS** (Return on Ad Spend)

---

**Good luck! Your ads are about to get smarter! 📈**
