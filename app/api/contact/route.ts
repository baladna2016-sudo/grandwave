// app/api/contact/route.ts
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { name, phone, email, message, plan } = await req.json();

    // 1. ابعت الايميل لو المفتاح موجود بس
    if (process.env.RESEND_API_KEY) {
      try {
        const { Resend } = await import('resend');
        const resend = new Resend(process.env.RESEND_API_KEY);
        await resend.emails.send({
          from: 'GrandWave <onboarding@resend.dev>',
          to: ['baladna2016@gmail.com'],
          subject: `طلب جديد - ${plan} من ${name}`,
          html: `<div dir="rtl"><h2>طلب جديد 🚀</h2><p><b>الاسم:</b> ${name}</p><p><b>الموبايل:</b> ${phone}</p><p><b>الايميل:</b> ${email}</p><p><b>الباقة:</b> ${plan}</p><p>${message}</p></div>`,
        });
      } catch (e) {
        console.log("Email Error", e);
      }
    } else {
      console.log('Contact (no RESEND key):', { name, phone, plan });
    }

    // 2. ابعت واتساب في الخلفية لو الاعدادات موجودة
    if (process.env.ULTRAMSG_INSTANCE && process.env.ULTRAMSG_TOKEN) {
      fetch(`https://api.ultramsg.com/${process.env.ULTRAMSG_INSTANCE}/messages/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          token: process.env.ULTRAMSG_TOKEN,
          to: process.env.MY_WHATSAPP_NUMBER,
          body: `طلب جديد 🚀\n\nالاسم: ${name}\nالموبايل: ${phone}\nالباقة: ${plan}\nالرسالة: ${message}`,
        }),
      }).catch(e => console.log("WA Error", e));
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: true });
  }
}