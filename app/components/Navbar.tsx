"use client";
import { useState } from "react";
import Link from "next/link";
import { Code2, Menu, X, Sparkles, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/", label: "الرئيسية" },
    { href: "#services", label: "خدماتنا" },
    { href: "#portfolio", label: "أعمالنا" },
    { href: "#pricing", label: "الأسعار" },
    { href: "#contact", label: "تواصل معنا" },
  ];

  return (
    <>
      <header className="sticky top-0 w-full border-b border-slate-100 bg-white/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-extrabold text-xl text-slate-900">
            <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-sm">
              <Code2 className="w-5 h-5" />
            </div>
            <span>GRANDWAVE<span className="text-blue-600">WEB</span></span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm font-bold text-slate-600">
            {links.map(link => (
              <Link key={link.href} href={link.href} className="hover:text-blue-600 transition-colors">
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link href="#contact" className="hidden sm:block">
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white gap-2 font-bold rounded-full px-5">
                <Sparkles className="w-4 h-4" />
                اطلب موقعك الآن
              </Button>
            </Link>
            <button onClick={() => setOpen(true)} className="md:hidden w-10 h-10 bg-slate-900 text-white rounded-full flex items-center justify-center">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 md:hidden" style={{ zIndex: 9999 }}>
          <div onClick={() => setOpen(false)} className="absolute inset-0 bg-slate-900/20 backdrop-blur-sm" />

          <div className="absolute inset-x-0 top-0 bg-white rounded-b- shadow-2xl p-6 pb-8">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2 font-black text-">
                <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center">
                  <Code2 className="w-4 h-4" />
                </div>
                GRANDWAVE<span className="text-blue-600">WEB</span>
              </div>
              <button onClick={() => setOpen(false)} className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex flex-col">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="group flex items-center justify-between py-5 border-b border-slate-100 last:border-0"
                >
                  <span className="text- font-black tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors" style={{ fontWeight: 900 }}>
                    {link.label}
                  </span>
                  <span className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center transition-all">
                    <ArrowLeft className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>

            {/* الزرار الأزرق */}
            <Link href="#contact" onClick={() => setOpen(false)} className="mt-8 block">
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-7 rounded-full text- font-black flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20">
                <Sparkles className="w-5 h-5" />
                اطلب موقعك الآن
              </Button>
            </Link>

            <p className="text-center text- font-bold tracking-[0.2em] text-slate-400 mt-6">MADE IN EGYPT • EST. 2026</p>
          </div>
        </div>
      )}
    </>
  );
}