// Question 5: Calculating Total Price in User's Cart

function calculateTotalPrice(array) {
  // เริ่มเขียนโค้ดตรงนี้
  let total = 0;
  let sumTotal = 0;
  for (i = 0; i < array.length; i++) {
    //คำนวณราคาสินค้ารวมในตะกร้า
    total = array[i].price * array[i].quantity;
    sumTotal = sumTotal + total;
  }
  return sumTotal
}

// ตัวอย่างการใช้งาน

const cart = [
  { name: "apple", price: 10, quantity: 2 },
  { name: "banana", price: 15, quantity: 1 },
  { name: "orange", price: 5, quantity: 3 },
];

console.log(calculateTotalPrice(cart)); // ผลลัพธ์จากการ Execute ตัว Function จะต้องได้: 50
