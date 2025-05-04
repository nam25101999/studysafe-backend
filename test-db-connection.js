require('dotenv').config();  // Để sử dụng các biến môi trường từ tệp .env

const { Client } = require('pg');  // Đảm bảo rằng bạn đã cài đặt thư viện 'pg'

const connectionString = process.env.DATABASE_URL || 'postgresql://studysafe_user:FVCaXG07KF2twrNb0DMXGDKlwHh9cJjp@dpg-d0bsbd3uibrs73dkm1r0-a.oregon-postgres.render.com/studysafe_db';

// Tạo client kết nối đến PostgreSQL
const client = new Client({
  connectionString,
});

async function testConnection() {
  try {
    // Kết nối đến cơ sở dữ liệu
    await client.connect();
    console.log('Kết nối thành công đến PostgreSQL!');

    // Thực hiện truy vấn đơn giản để kiểm tra
    const res = await client.query('SELECT NOW()');
    console.log('Thời gian hiện tại từ DB:', res.rows[0]);

    // Đóng kết nối sau khi truy vấn xong
    await client.end();
    console.log('Kết nối đã đóng.');
  } catch (err) {
    console.error('Lỗi kết nối:', err.stack);
  }
}

testConnection();
