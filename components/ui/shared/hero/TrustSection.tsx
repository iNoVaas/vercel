import { Truck, ShieldCheck, RefreshCcw } from "lucide-react";

export default function TrustSection() {
  return (
    <section className="w-full bg-matte-black/60 border-y border-white/10 py-16 mb-24">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 text-center px-6">
        {/* Livraison */}
        <div className="flex flex-col items-center">
          <div className="mb-5 rounded-full bg-white/5 p-5">
            <Truck className="h-9 w-9 text-primary" />
          </div>
          <h3 className="text-base font-bold uppercase tracking-wide text-white">
            توصيل سريع
          </h3>
          <p className="mt-3 text-sm text-white/70 max-w-xs">
            توصيل سريع خلال 24 إلى 48 ساعة لجميع الولايات مع إمكانية التتبع.
          </p>
        </div>

        {/* Paiement */}
        <div className="flex flex-col items-center border-x border-white/10 px-6">
          <div className="mb-5 rounded-full bg-white/5 p-5">
            <ShieldCheck className="h-9 w-9 text-primary" />
          </div>
          <h3 className="text-base font-bold uppercase tracking-wide text-white">
            دفع آمن / عند الاستلام
          </h3>
          <p className="mt-3 text-sm text-white/70 max-w-xs">
            معاملات آمنة وتأكيد طلبيتك بكل سهولة عند الاستلام.
          </p>
        </div>

        {/* Retour */}
        <div className="flex flex-col items-center">
          <div className="mb-5 rounded-full bg-white/5 p-5">
            <RefreshCcw className="h-9 w-9 text-primary" />
          </div>
          <h3 className="text-base font-bold uppercase tracking-wide text-white">
            إرجاع سهل
          </h3>
          <p className="mt-3 text-sm text-white/70 max-w-xs">
            لديك 14 يومًا لتغيير رأيك وإرجاع المنتج بكل سهولة وبدون تعقيدات.
          </p>
        </div>
      </div>
    </section>
  );
}
