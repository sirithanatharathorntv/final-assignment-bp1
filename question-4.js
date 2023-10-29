// Question 4: Shipping Cost Calculator

function calculateShippingCost(order) {
  // เริ่มเขียนโค้ดที่นี่
  //ถ้ายอดของ Order มีค่า 4000 Baht ขึ้นไป Function จะ Return ข้อความว่า "Shipping is free."
  if (order >= 4000) {
    return "Shipping is free."
    //ถ้ายอดของ Order มีค่า 2000 Baht ขึ้นไป Function จะ Return ข้อความว่า "Shipping cost is 250 Baht."    
  } else if (order >= 2000) {
    return "Shipping cost is 250 Baht."
    //นอกเหนือจากเงื่อนไขด้านบน Function จะ Return ข้อความว่า "Shipping cost is 500 Baht."    
  } else {
    return "Shipping cost is 500 Baht."
  }
}

// ตัวอย่างการใช้งาน
const orderTotal1 = 6000;
const orderTotal2 = 3000;
const orderTotal3 = 150;

console.log(calculateShippingCost(orderTotal1)); // "Shipping is free."
console.log(calculateShippingCost(orderTotal2)); // "Shipping cost is 250 Baht."
console.log(calculateShippingCost(orderTotal3)); // "Shipping cost is 500 Baht."
