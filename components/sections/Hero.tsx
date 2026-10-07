"use client";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, Zap } from "lucide-react";
import heroImg from "@/public/hero.jpeg";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10 lg:gap-8 items-center">

          <div className="text-center lg:text-right w-full">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-600 ring-1 ring-inset ring-blue-600/20 mb-8">
              <Zap className="w-4 h-4" />
              <span>مواقع فائقة السرعة وآمنة 100%</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
              نحول أفكارك إلى <span className="text-blue-600">مواقع إلكترونية</span> احترافية تنمي أعمالك
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              نصمم ونطور مواقع ويب مخصصة باستخدام أحدث التقنيات مع التركيز على السرعة العالية، الأمان المطلق، وتجربة المستخدم المتميزة.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
              <Link href="#contact" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-base px-8 py-6 rounded-md font-medium shadow-sm">
                ابدأ مشروعك الآن
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <Link href="#portfolio" className="w-full sm:w-auto inline-flex items-center justify-center text-base px-8 py-6 rounded-md font-medium border border-slate-200 bg-white hover:bg-slate-50 text-slate-900">
                معاينة أحدث الأعمال
              </Link>
            </div>

            <div className="pt-8 border-t border-slate-200/60 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-8 text-slate-500 text-sm">
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

          {/* الصورة - هتظهر فوق في الموبايل */}
          <div className="relative w-full">
            <div className="w-full h- sm:h- lg:h- rounded-2xl overflow-hidden shadow-2xl bg-white ring-1 ring-slate-200">
              <img
                src={heroImg.src}
                alt="تصميم مواقع احترافية"
                className="w-full h-full object-cover block"
              />
            </div>
            <div className="absolute -z-10 top-6 -right-6 w-full h-full rounded-2xl bg-blue-50 hidden lg:block"></div>
          </div>

        </div>
      </div>
    </section>
  );
}