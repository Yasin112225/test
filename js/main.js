window.addEventListener('load', function() {
    // مدت زمان لودر (مثلاً 3 ثانیه)
    var loaderTime = 10000000; // 3000 میلی‌ثانیه معادل 3 ثانیه
  
    // بعد از زمان مشخص شده، لودر را مخفی کن
    setTimeout(function() {
      document.getElementById('loader').style.display = 'none';
      document.getElementById('content').style.display = 'block';
    }, loaderTime);
  });
  