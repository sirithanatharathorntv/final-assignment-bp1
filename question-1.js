// Question #1: Inventory Management

const inventory = {
  apple: { price: 35, quantity: 100 },
  banana: { price: 10, quantity: 50 },
};

// เริ่มเขียนโค้ดตรงนี้
// 1. แก้ไขจำนวนสินค้า Apple จาก 100 เป็น 200
inventory.apple.quantity = 200;
// 2. เพิ่มสินค้าใหม่ "orange" ที่มีราคา 20 บาท และมีจำนวน 300 ชิ้นในสต็อก
inventory.orange = { price: 20, quantity: 300 };
console.log(inventory);
// 3. คำนวณมูลค่ารวมของจำนวนสินค้าทั้งหมดในสต็อกด้วย Loop
let totalInventory = 0;
let totalAmount = 0;
for (const item in inventory) {
  totalAmount = inventory[item].price * inventory[item].quantity;
  totalInventory = totalInventory + totalAmount;
}
// 4. แสดงผลลัพธ์
console.log(`Total inventory value: ${totalInventory} baht`)