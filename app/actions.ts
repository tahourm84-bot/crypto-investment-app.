'use server';

import { Resend } from 'resend';

// استدعاء مفتاح الـ API بشكل آمن من إعدادات Vercel
const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendWelcomeEmail(formData: FormData) {
  const subscriberEmail = formData.get('email') as string;

  if (!subscriberEmail) {
    return { success: false, error: 'Email is required' };
  }

  try {
    const data = await resend.emails.send({
      // إيميل الإرسال الاحترافي الجديد المربوط بالدومين الخاص بك
      from: 'Mohamed Market Analyst <no-reply@send.mohamedmarket.work.gd>',
      to: subscriberEmail,
      subject: 'Welcome to Mohamed Market Analyst Platform!',
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2>Welcome to Mohamed Market Analyst!</h2>
          <p>Thank you for subscribing. You will now receive regular technical analysis, cryptocurrency market updates, and premium insights directly to your inbox.</p>
          <hr style="border: none; border-top: 1px solid #eee;" />
          <p style="font-size: 12px; color: #777;">&copy; 2026 Mohamed Market Analyst. All rights reserved.</p>
        </div>
      `,
    });

    return { success: true, data };
  } catch (error: any) {
    return { success: false, error: error.message || 'Failed to send email' };
  }
}
