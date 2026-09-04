"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, Loader2, Check } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "", plan: "استفسار عام" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSent(true);
        setForm({ name: "", email: "", phone: "", message: "", plan: "استفسار عام" });
        setTimeout(() => setSent(false), 4000);
      } else {
        alert("حصل مشكلة، جرب تاني");
      }
    } catch (err) {
      alert("حصل مشكلة في الاتصال");
    }
    setLoading(false);
  }

  return (
    <section id="contact" className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* معلومات التواصل */}
          <div>
            <span className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-3 block">تواصل معنا</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
              عندك فكرة؟<br /> خلينا ننفذها.
            </h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              املا الفورم وهنرد عليك خلال 24 ساعة، أو كلمنا مباشرة.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-xs font-bold tracking-widest text-slate-400 uppercase">الإيميل</p>
                  <p className="font-bold text-slate-900">grandwave39@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-xs font-bold tracking-widest text-slate-400 uppercase">الموبايل</p>
                  <p className="font-bold text-slate-900">01008411708</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-xs font-bold tracking-widest text-slate-400 uppercase">العنوان</p>
                  <p className="font-bold text-slate-900">القاهرة، مصر - متاح عن بعد</p>
                </div>
              </div>
            </div>
          </div>

          {/* الفورم */}
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <div className="space-y-5">
              <div>
                <label className="text-sm font-bold text-slate-900 mb-2 block">الاسم</label>
                <input required type="text" placeholder="احمد محمد" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all text-sm" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-bold text-slate-900 mb-2 block">الموبايل</label>
                  <input required type="text" placeholder="01xxxxxxxx" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all text-sm" />
                </div>
                <div>
                  <label className="text-sm font-bold text-slate-900 mb-2 block">الإيميل</label>
                  <input required type="email" placeholder="ahmed@example.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all text-sm" />
                </div>
              </div>
              <div>
                <label className="text-sm font-bold text-slate-900 mb-2 block">رسالتك</label>
                <textarea required rows={4} placeholder="احكيلي عن مشروعك..." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all text-sm resize-none" />
              </div>

              <button disabled={loading || sent} type="submit" className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 transition-colors">
                {loading ? <><Loader2 className="w-4 h-4 animate-spin" /> جاري الإرسال...</> : sent ? <><Check className="w-4 h-4" /> تم الإرسال بنجاح!</> : <><Send className="w-4 h-4" /> إرسال الرسالة</>}
              </button>
              <p className="text-xs text-center text-slate-400">بالضغط على إرسال أنت توافق على سياسة الخصوصية</p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}