'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendWelcomeEmail(formData: FormData) {
  const subscriberEmail = formData.get('email') as string;

  if (!subscriberEmail) {
    return { success: false, error: 'الرجاء إدخال البريد الإلكتروني' };
  }

  try {
    const result = await resend.emails.send({
      from: 'Mohamed Market Analyst <no-reply@send.mohamedmarket.work.gd>',
      to: subscriberEmail,
      subject: 'مرحباً بك في منصة محمد لتحليل الأسواق',
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2>أهلاً بك في عالم التحليل الرقمي!</h2>
          <p>شكراً لاشتراكك. ستتلقى الآن أحدث التحليلات الفنية وتحديثات العملات الرقمية مباشرة إلى بريدك.</p>
          <hr />
          <p style="font-size: 12px; color: #777;">&copy; 2026 Mohamed Market Analyst.</p>
        </div>
      `,
    });

    if (result.error) {
      console.error('Resend Error:', result.error);
      return { success: false, error: result.error.message };
    }

    return { success: true, data: result.data };
  } catch (error: any) {
    console.error('Unexpected Error:', error);
    return { success: false, error: 'حدث خطأ أثناء الإرسال، تأكد من إعدادات الدومين في Resend' };
  }
}
