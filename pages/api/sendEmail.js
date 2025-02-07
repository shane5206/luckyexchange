import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // 设置CORS头
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // 嚴格檢查環境變數
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.error('環境變數未正確設定');
    return res.status(500).json({
      error: '伺服器配置錯誤',
      details: '請聯繫網站管理員'
    });
  }

  const { name, email, message } = req.body;

  console.log('當前郵件配置:', {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS ? '*******' : '未設定'
  });

  // 郵件傳輸設定
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    },
    tls: {
      rejectUnauthorized: false
    },
    logger: true,
    debug: true
  });

  // 郵件內容
  const mailOptions = {
    from: `"Website Contact" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    envelope: {
      from: process.env.EMAIL_USER ? `contact@${process.env.EMAIL_USER.split('@')[1]}` : 'contact@yourdomain.com',
      to: process.env.EMAIL_USER || 'your-email@domain.com'
    },
    replyTo: email,
    subject: `New message from ${name}`,
    text: message,
    html: `
      <h3>New Contact Form Submission</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Mail send error:', error);
    res.status(500).json({
      error: 'Failed to send email',
      details: error.response ? error.response : error.message
    });
  }
}
