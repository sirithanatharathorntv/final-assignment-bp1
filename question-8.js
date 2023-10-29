// Question #8: Fetching User List from Server

// เริ่มเขียนโค้ดตรงนี้
let newUsers = []
//Promise Object ดึงข้อมูลจาก URL 
const getData = () => {
    return fetch("https://jsonplaceholder.typicode.com/users");
};
//Function json เพื่อแปลงข้อมูลจาก Server ให้เป็น Object
const handleResponse = (response) => {
    return response.json();
};
const onSuccess = (data) => {
    //console.log(data);
    //นำข้อมูลส่วน name มาเก็บไว้ใน Array newUsers
    for (let i = 0; i < data.length; i++) {
        newUsers.push(data[i].name)
    }
    console.log(newUsers);
};
getData().then(handleResponse).then(onSuccess);