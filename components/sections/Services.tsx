import { Palette, MonitorSmartphone, Search, ShieldCheck, Zap, Rocket } from "lucide-react";

const services = [
  {
    id: 1,
    icon: Palette,
    title: "تصميم إبداعي مخصص",
    desc: "تصميمات عصرية فريدة تعكس هوية علامتك التجارية وتترك انطباع لا ينسى عند عملائك.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    id: 2,
    icon: MonitorSmartphone,
    title: "متجاوب 100% مع كل الأجهزة",
    desc: "موقعك هيظهر بشكل مثالي على الموبايل والتابلت والكمبيوتر بدون أي مشاكل.",
    color: "bg-violet-50 text-violet-600",
  },
  {
    id: 3,
    icon: Zap,
    title: "سرعة فائقة",
    desc: "نبني مواقع بتقنية Next.js بتفتح في أقل من ثانية عشان متخسرش ولا عميل.",
    color: "bg-amber-50 text-amber-600",
  },
  {
    id: 4,
    icon: Search,
    title: "مهيأ لمحركات البحث SEO",
    desc: "كود نظيف وهيكلة صح تخلي جوجل يحب موقعك ويظهرك في أول النتائج.",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    id: 5,
    icon: ShieldCheck,
    title: "أمان وحماية قصوى",
    desc: "حماية ضد الاختراق والسبام مع شهادة SSL مجانية ونسخ احتياطي دوري.",
    color: "bg-red-50 text-red-600",
  },
  {
    id: 6,
    icon: Rocket,
    title: "دعم فني وصيانة",
    desc: "مش بنسيبك بعد التسليم، معاك دعم فني وتعديلات وصيانة شهرية.",
    color: "bg-cyan-50 text-cyan-600",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-3 block">خدماتنا</span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            كل ما تحتاجه لنمو أعمالك
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            نقدم باقة متكاملة من الحلول الرقمية المصممة خصيصًا لزيادة مبيعاتك.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative p-8 rounded-2xl border border-slate-100 bg-white hover:border-blue-100 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${service.color}`}>
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed text-">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}