function blowCandle() {
    const flames = [
      document.getElementById('flame1'),
      document.getElementById('flame2'),
      document.getElementById('flame3')
    ];
    const name = document.getElementById('nameInput').value.trim();
    const wish = document.getElementById('wishText');
  
  
    flames.forEach(f => f.style.display = 'none');
  
   
    if (name) {
      wish.innerText = `สุขสันต์วันเกิดนะ ${name}!  ขอให้เจอแต่สิ่งดีๆ เข้ามาในชีวิต ขอให้มีความสุข สุขกาย สุขใจ ขอให้ชีวิตมีความเจริญก้าวหน้า ขอให้สิ่งที่ขอสมหวังนะดังที่ปรารถนานะ`;
    } else {
      wish.innerText = `บอกให้กรอกชื่อไง อ่านหนังสือไม่ออกหรอ!!!`;
    }
  
    wish.style.display = 'block';
  }

console.log("DEV BY Natthawat Khomkhum")
console.log("อนุญาติให้ปรับแต่งดัดแปลงโคดและใช้งานโคดในเชิงพาณิชย์ได้ครับ")
  