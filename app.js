/**
 * TODO 1: SETUP SERVER USING EXPRESS.JS.
 * UBAH SERVER DI BAWAH MENGGUNAKAN EXPRESS.JS.
 * SERVER INI DIBUAT MENGGUNAKAN NODE.JS NATIVE.
 */

const express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");

const app = express();
app.use(express.json());

const router = require("./routes/api");
app.use(router);

app.listen(3000);



