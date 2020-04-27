module.exports = {
  "type": "postgres",
  "host": process.env.POSTGRES_HOST,
  "port": process.env.POSTGRES_PORT,
  "username": process.env.POSTGRES_USERNAME,
  "password": process.env.POSTGRES_PASSWORD,
  "database": "postgres",
  "entities": ["dist/**/*.entity.js"],
  "synchronize": true,
}
