import Link from "next/link";
import { ArrowLeft, ShieldCheck, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-600 ring-1 ring-inset ring-blue-600/20 mb-8">
          <Zap className="w-4 h-4" />
          <span>مواقع فائقة السرعة وآمنة 100%</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight max-w-4xl mx-auto mb-6">
          نحول أفكارك إلى <span className="text-blue-600">مواقع إلكترونية</span> احترافية تنمي أعمالك
        </h1>

        <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          نصمم ونطور مواقع ويب مخصصة باستخدام أحدث التقنيات مع التركيز على السرعة العالية، الأمان المطلق، وتجربة المستخدم المتميزة.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link href="#contact" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-base px-8 py-6 rounded-md font-medium shadow-sm transition-colors">
            ابدأ مشروعك الآن
            <ArrowLeft className="w-5 h-5" />
          </Link>

          <Link href="#portfolio" className="w-full sm:w-auto inline-flex items-center justify-center text-base px-8 py-6 rounded-md font-medium border border-slate-200 bg-white hover:bg-slate-50 text-slate-900 transition-colors">
            معاينة أحدث الأعمال
          </Link>
        </div>

        <div className="pt-8 border-t border-slate-200/60 max-w-xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-slate-500 text-sm">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-600" />
            <span>تأمين شامل ضد الاختراق</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-amber-500" />
            <span>سرعة تحميل أقل من ثانية</span>
          </div>
        </div>

      </div>
    </section>
  );
}