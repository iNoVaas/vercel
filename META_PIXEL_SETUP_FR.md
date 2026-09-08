# 🎯 Guide de Configuration Meta Pixel

## 📋 Vue d'ensemble

Ton intégration Meta Pixel est **déjà codée et prête** ! Ce guide va t'aider à l'activer en ajoutant ton Pixel ID depuis Meta Business Manager.

## ✅ Ce qui est déjà implémenté

Ton site suit maintenant ces événements importants :

1. **PageView** - Automatique sur chaque chargement de page
2. **ViewContent** - Quand quelqu'un voit une page produit
3. **AddToCart** - Quand quelqu'un ajoute un produit au panier
4. **InitiateCheckout** - Quand quelqu'un commence le processus de commande
5. **Purchase** - Quand quelqu'un finalise une commande

## 🔧 Comment obtenir ton Meta Pixel ID

1. Va sur **Meta Business Manager** : https://business.facebook.com
2. Clique sur **Tous les outils** → **Gestionnaire d'événements**
3. Sélectionne ton Pixel (ou crée-en un nouveau si tu n'en as pas)
4. Clique sur **Paramètres** dans la barre latérale gauche
5. Copie ton **Pixel ID** (c'est un numéro comme : `1759198755317745`)

## 🚀 Comment ajouter ton Pixel ID

### Option 1 : Utiliser les variables d'environnement Vercel (Recommandé)

1. Va sur ton tableau de bord Vercel
2. Clique sur **Settings** → **Environment Variables**
3. Ajoute une nouvelle variable :
   - **Name** : `NEXT_PUBLIC_FACEBOOK_PIXEL_ID`
   - **Value** : Ton Pixel ID (ex : `1759198755317745`)
   - **Environment** : Sélectionne tout (Production, Preview, Development)
4. Clique sur **Save**
5. **Redéploie** ton site pour que les changements prennent effet

### Option 2 : Utiliser un fichier .env.local (Pour le développement local)

Crée un fichier appelé `.env.local` à la racine de ton projet :

```bash
NEXT_PUBLIC_FACEBOOK_PIXEL_ID=TON_PIXEL_ID_ICI
```

**Important** : Ne commit pas ce fichier sur GitHub. Ajoute-le à `.gitignore`.

## 📊 Détails du suivi des événements

### 1. PageView
- **Où** : Automatique sur toutes les pages
- **Quand** : À chaque navigation
- **But** : Suivre le trafic global du site

### 2. ViewContent
- **Où** : Pages de détail produit (`/product/[slug]`)
- **Quand** : L'utilisateur voit un produit
- **Données envoyées** : Nom du produit, ID, prix, devise
- **But** : Suivre l'intérêt pour les produits

### 3. AddToCart
- **Où** : Pages produit et page panier
- **Quand** : L'utilisateur clique sur "Ajouter Au Panier"
- **Données envoyées** : Nom du produit, ID, prix, devise
- **But** : Suivre l'entonnoir de conversion

### 4. InitiateCheckout
- **Où** : Page d'adresse de livraison
- **Quand** : L'utilisateur arrive au checkout
- **But** : Suivre l'abandon de panier

### 5. Purchase
- **Où** : Confirmation de commande
- **Quand** : L'utilisateur finalise la commande
- **Données envoyées** : Type de devise
- **But** : Suivre les conversions et le ROAS

## 🔍 Comment vérifier que ça fonctionne

### Après le déploiement :

1. Va sur **Meta Gestionnaire d'événements**
2. Clique sur ton Pixel
3. Clique sur **Tester les événements** dans la barre latérale gauche
4. Ouvre ton site web
5. Tu devrais voir les événements apparaître en temps réel !

### Teste chaque événement :

- Va sur la page d'accueil → PageView ✓
- Clique sur un produit → ViewContent ✓
- Ajoute au panier → AddToCart ✓
- Va au checkout → InitiateCheckout ✓
- Finalise la commande → Purchase ✓

## 📱 Utiliser Meta Pixel Helper (Extension Chrome)

1. Installe **Meta Pixel Helper** depuis le Chrome Web Store
2. Visite ton site web
3. Clique sur l'icône de l'extension
4. Elle te montrera quels événements se déclenchent

## 🎨 Pixel ID actuel

Ton code contient actuellement un Pixel ID par défaut : `1759198755317745`

**Pour utiliser ton propre Pixel ID**, ajoute la variable d'environnement comme décrit ci-dessus.

## 🔒 Notes importantes

- Le Pixel ID doit commencer par `NEXT_PUBLIC_` pour fonctionner côté client
- Redéploie toujours après avoir ajouté des variables d'environnement dans Vercel
- Teste en mode navigation privée pour éviter les interférences d'extensions
- Les événements peuvent prendre 20-30 minutes pour apparaître dans le tableau de bord Meta Ads Manager

## 🛠️ Fichiers modifiés

Les fichiers suivants incluent maintenant le suivi Meta Pixel :

1. `/components/meta-pixel.tsx` - Script principal du pixel
2. `/lib/pixel.ts` - Fonctions d'aide du pixel
3. `/app/layout.tsx` - Initialisation du pixel
4. `/app/(root)/confirmed/confirmed-order-form.tsx` - Suivi Purchase
5. `/components/ui/shared/products/add-cart.tsx` - Suivi AddToCart
6. `/app/(root)/shipping-adresse/shipping-adress-from.tsx` - Suivi InitiateCheckout
7. `/app/(root)/product/[slug]/product-details-client.tsx` - Suivi ViewContent

## 🎯 Ce que ça permet

Avec Meta Pixel correctement configuré, tu peux :

✅ Suivre les conversions depuis tes pubs Facebook/Instagram
✅ Créer des Audiences personnalisées basées sur le comportement du site
✅ Créer des Audiences similaires (Lookalike)
✅ Optimiser les pubs pour les achats
✅ Mesurer le ROAS (Retour sur investissement publicitaire)
✅ Recibler les visiteurs qui n'ont pas acheté

## 📞 Besoin d'aide ?

Si les événements n'apparaissent pas :
1. Vérifie la console du navigateur pour les erreurs
2. Vérifie que le Pixel ID est correct
3. Assure-toi d'avoir redéployé après avoir ajouté la variable d'environnement
4. Teste en mode navigation privée
5. Attends 20-30 minutes pour que les données apparaissent dans Meta

---

## 🚀 Commandes de démarrage rapide

### Développement local
```bash
# Crée le fichier .env.local
echo "NEXT_PUBLIC_FACEBOOK_PIXEL_ID=TON_PIXEL_ID" > .env.local

# Redémarre le serveur de dev
npm run dev
```

### Déploiement Vercel
```bash
# Ajoute à Vercel
vercel env add NEXT_PUBLIC_FACEBOOK_PIXEL_ID

# Redéploie
vercel --prod
```

---

**Ton intégration Meta Pixel est complète ! Il suffit d'ajouter ton Pixel ID et de redéployer.** 🎉
