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

