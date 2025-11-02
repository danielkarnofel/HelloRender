import express from 'express';
import mysql from 'mysql2/promise';

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

//for Express to get values using POST method
app.use(express.urlencoded({extended:true}));

//setting up database connection pool
// const pool = mysql.createPool({
//     host: "your_hostname",
//     user: "your_username",
//     password: "your_password",
//     database: "your_database",
//     connectionLimit: 10,
//     waitForConnections: true
// });

//routes
app.get('/', (req, res) => {
   res.send('Hello Express app!')
});

// app.get("/dbTest", async(req, res) => {
//    try {
//         const [rows] = await pool.query("SELECT CURDATE()");
//         res.send(rows);
//     } catch (err) {
//         console.error("Database error:", err);
//         res.status(500).send("Database error");
//     }
// });//dbTest

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});