import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h- flex flex-col items-center justify-center text-center px-6 py-20">
      {/* 404 كبير */}
      <div className="relative">
        <h1 className="text- md:text- font-black leading-none text-gray-100 select-none">
          404
        </h1>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl md:text-3xl font-bold text-gray-900">
            Grand Wave
          </span>
        </div>
      </div>

      <h2 className="mt-2 text-2xl md:text-3xl font-bold text-gray-900">
        Oops! الصفحة دي غرقت
      </h2>
      <p className="mt-3 text-gray-500 max-w-lg">
        اللينك اللي دخلت عليه مش موجود او اتنقل لمكان تاني.
        ارجع للموجة الرئيسية وكمل رحلتك معانا.
      </p>

      <div className="mt-8 flex gap-3">
        <Link
          href="/"
          className="px-8 py-3 bg-[#0a0a0a] text-white rounded-full font-medium hover:bg-black transition"
        >
          العودة للرئيسية
        </Link>
        <Link
          href="/#contact"
          className="px-8 py-3 bg-white border border-gray-200 text-gray-900 rounded-full font-medium hover:bg-gray-50 transition"
        >
          تواصل معنا
        </Link>
      </div>
    </div>
  );
}