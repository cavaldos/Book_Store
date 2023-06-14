const express = require("express");
const dbConnect = require("./config/dbConnect");
const app = express();
const PORT =  4000 || 5000;
dbConnect();
app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});

