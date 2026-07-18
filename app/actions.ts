'use server';

import { Resend } from 'resend';

// مفتاح الـ API الخاص بك لتشغيل النظام
const resend = new Resend('re_WfHYddDX_LY7GX64zQEDrPNQuSz3GW8k9');

export async function sendWelcomeEmail(formData: FormData) {
  const subscriberEmail = formData.get('email') as string;

  if (!subscriberEmail) {
    return { success: false, error: 'Email is required' };
  }

  try {
    // 1. الإيميل الأول: يرسل للمشترك مباشرة للترحيب به
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: [subscriberEmail],
      subject: 'Welcome to Mohamed Market Analyst Platform! 🚀',
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #0b0f19; color: #f3f4f6; border-radius: 12px; border: 1px solid #1f2937;">
          <h2 style="color: #10b981; font-size: 22px; margin-bottom: 15px;">Welcome to the Platform!</h2>
          <p style="font-size: 14px; line-height: 1.6; color: #d1d5db;">Hello,</p>
          <p style="font-size: 14px; line-height: 1.6; color: #d1d5db;">Thank you for subscribing to <strong>Mohamed Market Analyst Platform</strong>.</p>
          <p style="font-size: 14px; line-height: 1.6; color: #d1d5db;">You will now receive instant technical alerts, setups, and trend reports directly in your inbox.</p>
          
          <div style="margin: 25px 0; padding: 15px; background-color: #030712; border-radius: 8px; border: 1px solid #374151; text-align: center;">
            <p style="font-size: 12px; color: #9ca3af; margin: 0 0 10px 0;">Our verified USDT BEP20 Deposit Address:</p>
            <code style="font-family: monospace; font-size: 13px; color: #34d399; word-break: break-all;">0x99da633903a98b19df8354a0fb9b05719a836afd</code>
          </div>

          <p style="font-size: 14px; line-height: 1.6; color: #d1d5db;">Get ready for the next market move!</p>
          <hr style="border: 0; border-top: 1px solid #1f2937; margin: 20px 0;">
          <p style="font-size: 12px; color: #6b7280; text-align: center;">&copy; 2026 Mohamed Market Analyst. All rights reserved.</p>
        </div>
      `,
    });

    // 2. الإيميل الثاني: يرسل إليك أنت لتنبيهك بالمشترك الجديد
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['mohamed.tahour.dz@gmail.com'], // بريدك الشخصي لتلقي الإشعارات
      subject: '🎉 New Subscriber Alert! - Mohamed Market Analyst',
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #0b0f19; color: #f3f4f6; border-radius: 12px; border: 1px solid #1f2937;">
          <h2 style="color: #3b82f6; font-size: 20px; margin-bottom: 15px;">Notification: New Registration</h2>
          <p style="font-size: 14px; color: #d1d5db;">Hello Mohamed,</p>
          <p style="font-size: 14px; color: #d1d5db;">A new user has just subscribed to your platform updates.</p>
          
          <div style="margin: 20px 0; padding: 15px; background-color: #030712; border-radius: 8px; border: 1px solid #1f2937;">
            <p style="font-size: 12px; color: #9ca3af; margin: 0;">User Email:</p>
            <span style="font-family: monospace; font-size: 15px; color: #3b82f6; font-weight: bold;">${subscriberEmail}</span>
          </div>
          
          <hr style="border: 0; border-top: 1px solid #1f2937; margin: 20px 0;">
          <p style="font-size: 12px; color: #6b7280; text-align: center;">Mohamed Market Analyst &bull; Internal System Alert</p>
        </div>
      `,
    });

    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}
