const { Client } = require('pg');  // Đảm bảo bạn đã cài đặt thư viện 'pg' trong dự án
const connectionString = process.env.DATABASE_URL || 'postgresql://studysafe_user:FVCaXG07KF2twrNb0DMXGDKlwHh9cJjp@dpg-d0bsbd3uibrs73dkm1r0-a.oregon-postgres.render.com/studysafe_db';

// Tạo client kết nối đến PostgreSQL
const client = new Client({
  connectionString,
});

client.connect()
  .then(() => {
    console.log('Kết nối thành công đến cơ sở dữ liệu PostgreSQL');
  })
  .catch((err) => {
    console.error('Lỗi kết nối:', err.stack);
  });

module.exports = client;
