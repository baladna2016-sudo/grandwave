import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "متجر إلكتروني للأزياء",
    category: "متجر إلكتروني",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    link: "#",
    color: "bg-violet-500",
  },
  {
    id: 2,
    title: "منصة تعليمية تفاعلية",
    category: "منصة تعليمية",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
    link: "#",
    color: "bg-blue-500",
  },
  {
    id: 3,
    title: "موقع شركة عقارات فاخرة",
    category: "موقع شركات",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    link: "#",
    color: "bg-emerald-500",
  },
  {
    id: 4,
    title: "تطبيق حجز مطاعم",
    category: "تطبيق ويب",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    link: "#",
    color: "bg-amber-500",
  },
  {
    id: 5,
    title: "موقع شخصي لمصور",
    category: "بورتفوليو",
    image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800&q=80",
    link: "#",
    color: "bg-red-500",
  },
  {
    id: 6,
    title: "لوحة تحكم تحليلية",
    category: "Dashboard",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    link: "#",
    color: "bg-cyan-500",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-3 block">أعمالنا</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              مشاريع نفتخر بها
            </h2>
          </div>
          <p className="text-lg text-slate-600 max-w-md lg:text-right">
            كل مشروع هو قصة نجاح جديدة، شوف بنفسك جودة شغلنا.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={project.link}
              className="group relative overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="h- overflow-hidden bg-slate-100 relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* الـ overlay الجديد بدون gradient */}
                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/40 transition-colors duration-300" />
              </div>

              <div className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                <ArrowUpRight className="w-5 h-5 text-slate-900" />
              </div>

              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`w-2 h-2 rounded-full ${project.color}`}></span>
                  <span className="text-xs font-bold tracking-widest text-slate-500 uppercase">{project.category}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors flex items-center justify-between">
                  {project.title}
                  <ExternalLink className="w-4 h-4 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}