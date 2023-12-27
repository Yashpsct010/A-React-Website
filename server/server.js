const express = require("express");
const cors = require("cors");
const router = require("./router/auth-router");
const connectDb = require("./utils/db");
const errorMiddleware = require("./middleware/error-middleware");
const contactRoute = require("./router/contact-route");
// require("dotenv").config()
const app = express();
const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use("/api/auth", router);
app.use("/api/form", contactRoute);
app.use(errorMiddleware);
const PORT = 5000;
connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
  });
});
