'use server';

import { Resend } from 'resend';

// تأكد من وضع مفتاح الـ API الخاص بك هنا
const resend = new Resend('ضع_مفتاح_API_KEY_الخاص_بك_هنا');

export async function sendWelcomeEmail(formData: FormData) {
  const email = formData.get('email') as string;

  if (!email) {
    return { success: false, error: 'Email is required' };
  }

  try {
    const response = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: [email],
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

    return { success: true, data: response };
  } catch (error: any) {
    return { success: false, error: error.message };
    
  }
            }
