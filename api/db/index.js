const mysql = require("mysql2");

const db = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'test',
    password: process.env.DB_PASSWORD || 'test',
    database: process.env.DB_NAME || 'test'
})

db.connect((error) => {
    if (error) {
        console.log(error)
    } else {
        console.log("MySQL connected!")
    }
})

async function getProductPrices() {
    const [results] = await db.promise().query("SELECT * FROM product_price");
    return results;
}

module.exports = {
    getProductPrices
}

