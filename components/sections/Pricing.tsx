// components/sections/Pricing.tsx
import { Check, Crown, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const plans = [
  {
    name: "الانطلاقة",
    price: "2,999",
    sub: "للبدايات",
    features: ["دومين.com سنة", "استضافة + SSL", "صفحة واحدة احترافية", "متجاوب مع الموبايل", "ربط واتساب", "تسليم 48 ساعة"],
    dark: false,
  },
  {
    name: "الشركات",
    price: "4,999",
    sub: "الأكثر طلباً",
    dark: true,
    features: ["موقع 5 صفحات كامل", "5 ايميلات رسمية", "لوحة تحكم", "تهيئة SEO لجوجل", "دومين واستضافة سنة", "دعم فني شهر"],
  },
  {
    name: "المتجر",
    price: "7,999",
    sub: "للمبيعات",
    features: ["متجر منتجات لا محدود", "ربط فوري / باي موب", "إدارة الطلبات", "تقارير مبيعات", "دومين واستضافة سنة", "تدريب مجاني"],
    dark: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white" dir="rtl">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text- font-black tracking-tighter text-black" style={{ fontWeight: 900 }}>
            باقات <span className="text-blue-600">واضحة</span> وشاملة
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-7 max-w-6xl mx-auto items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`
                group relative flex flex-col justify-between
                rounded- p-10
                border- transition-all duration-500
                hover:-translate-y-3 hover:shadow-2xl
                ${
                plan.dark
             ? "bg-[#0f172a] border-[#0f172a] text-white shadow-[0_30px_80px_-20px_rgba(15,23,42,0.6)] md:scale-[1.06] rounded-"
                  : "bg-[#f8f9fb] border-white text-black shadow-[0_15px_40px_-20px_rgba(0,0,0,0.1)] hover:bg-white hover:shadow-[0_30px_80px_-20px_rgba(0,0,0,0.15)] hover:border-slate-100"
              }`}
              style={{ borderRadius: plan.dark? '70px' : '60px' }}
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className={`text- font-black px-5 py-2.5 rounded-full ${plan.dark? "bg-white text-black" : "bg-white text-slate-600 border shadow-sm"}`}>
                    {plan.sub}
                  </span>
                  <div className={`w- h- rounded-full flex items-center justify-center ${plan.dark? "bg-blue-600 text-white" : "bg-black text-white"}`}>
                    {plan.dark? <Crown className="w-6 h-6" /> : <Rocket className="w-6 h-6" />}
                  </div>
                </div>

                <h3 className="text- font-black" style={{ fontWeight: 900 }}>{plan.name}</h3>

                <div className="flex items-end gap-1 mt-5">
                  <span className="text- font-black leading-none tracking-tighter" style={{ fontWeight: 900 }}>{plan.price}</span>
                  <span className="font-black text- mb-1 mr-1">جنيه</span>
                </div>

                <div className={`w-full h- my-8 rounded-full ${plan.dark? "bg-white/10" : "bg-slate-200"}`} />

                <ul className="space-y-4">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-3">
                      <span className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${plan.dark? "bg-white text-black" : "bg-black text-white"}`}>
                        <Check className="w-4 h-4" strokeWidth={3} />
                      </span>
                      <span className={`text- font-bold ${plan.dark? "text-white" : "text-slate-700"}`}>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link href="#contact" className="mt-10 block">
                <Button className={`w-full h- rounded-full font-black text- ${plan.dark? "bg-blue-600 hover:bg-blue-700 text-white" : "bg-black hover:bg-zinc-800 text-white"}`}>
                  احجز الباقة
                </Button>
              </Link>
            </div>
          ))}
        </div>

        <p className="text-center text- font-black text-slate-400 mt-14 bg-[#f8f9fb] w-fit mx-auto px-8 py-4 rounded-full border border-slate-100">
          * الدفع مرة واحدة في السنة، مفيش أسعار مخفية ولا مصاريف شهرية
        </p>
      </div>
    </section>
  );
}