import express from 'express';
import pg from 'pg';

const app = express();
const port = 3000;
const { Pool } = pg;

// Middleware parsing JSON dan URL-encoded
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// Konfigurasi Database PostgreSQL
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'mahasiswa',
  password: '12345678', // Sesuai dengan password database masing-masing
  port: 5432,
});

