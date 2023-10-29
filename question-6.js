// Question #6: Calculating Total Price in User's Cart

function filterInStockProducts(products) {
  // เริ่มเขียนโค้ดตรงนี้
  let array = [];
  for (i = 0; i < products.length; i++) {
    //กรองสินค้าที่หมดสต็อก (quantity เป็น 0)
    if (products[i].quantity > 0) {
      //ผลลัพธ์ออกมาเป็น Array อันใหม่ที่มี Value เป็นสินค้าที่มี quantity มากกว่า 0
      array.push(products[i]);
    }
  }
  return array;
}

// ตัวอย่างการใช้งาน
const products = [
  { name: "apple", quantity: 2 },
  { name: "banana", quantity: 0 },
  { name: "orange", quantity: 5 },
];

console.log(filterInStockProducts(products));
// ผลลัพธ์ที่ได้จากการ Execute Function คือ
// [{ name: "apple", quantity: 2 }, { name: "orange", quantity: 5 }]
