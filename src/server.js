require("express-async-errors");
const express = require("express");
const routes = require("./routes");
const AppError = require("./utils/AppError.js");


const app = express();
app.use(express.json());

app.use(routes);

app.use((error, request, response, next) => {
  if(error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: "error",
      message: error.message
    })
  }

  return response.status(500).json({
    status: "error",
    message: "Internal Server Error"
  })
})


const port = process.env.PORT || 3333;
app.listen(port, () => {
  console.log(`🚀 Server is running on port: ${port}`);
})