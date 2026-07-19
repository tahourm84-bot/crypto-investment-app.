export async function sendWelcomeEmail(formData: FormData) {
  // 1. لا تجعل العملية معلقة، قم ببدء الإرسال دون انتظار الرد
  resend.emails.send({
    from: 'onboarding@resend.dev', // استخدم هذا العنوان مؤقتاً لتجاوز رفض الدومين
    to: 'target@example.com',
    subject: 'مرحباً بك',
    html: '<p>شكراً لاشتراكك</p>'
  }).catch((err) => console.error("إرسال الخلفية فشل:", err));

  // 2. أعد نتيجة "نجاح" فورية للموقع ليغلق واجهة Processing
  return { success: true };
}
