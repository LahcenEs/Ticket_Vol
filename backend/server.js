import express from "express";
import bodyParse from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv';
dotenv.config();
const app = express()
app.use(cors());
app.use(express.json());
app.use(bodyParse.urlencoded({extended:true}));
app.use('/',router)
import sequelize from "./database.js";
import router from "./routers.js";


// la création the table 
// import Client from './models/client.js'
// import Message from './models/message.js'
// sequelize.sync({force:true}).then(()=> console.log('abcd'))



// const db = mysql.createConnection({
//     host: process.env.DB_HOST,
//     user:process.env.DB_USER,
//     password:process.env.DB_PASSWORD,
//     database:process.env.DB_NAME

// })
app.get('/api/airport/list', (req,res)=>{
    res.json([
        {id:1, name:'CDG'},
        {id:2, name:'ORY'},
        {id:3, name:'BVA'},
      ])
//   const sql = `select * from airports `;
//   db.query(sql, (error, results) => {
//     if (error) ;
//     res.send(results);
//   });
})


app.listen(8000, () => {
  console.log('Connected to backend');
});

 

// document.addEventListener("DOMContentLoaded", function() {
// const bookingForm = document.getElementById("bookingForm");
// if (bookingForm) {
// bookingForm.addEventListener("submit", async function (event) {
// event.preventDefault();

// const name = document.getElementById("name").value;
// const email = document.getElementById("email").value;

// try {
// const response = await fetch("/api/booking", {
// method: "POST",
// headers: {
// "Content-Type": "application/json",
// },
// body: JSON.stringify({
// name,
// email,
// }),
// });
// const responseData = await response.json();
// console.log(responseData);
// } catch (error) {
// console.error(error);
// }
// });
// } else {
// console.error("Form element not found.");
// }
// });