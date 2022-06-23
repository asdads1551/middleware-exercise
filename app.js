const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.set("view engine", "ejs");
// middlewares
app.use(express.static("public"));

app.use("/student",(req,res,next)=>{
  console.log("we reach this middleware.");
  next();
});

const studentmiddleware = (req,res,next)=>{
  console.log("this is student route ");
  next();
};


mongoose
  .connect("mongodb://localhost:27017/test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to mongodb.");
  })
  .catch((e) => {
    console.log(e);
  });

  app.get("/",(req,res)=>{  
    res.send("welcome home page");
  });

  app.get("/student",studentmiddleware,(req,res)=>{  
    res.send("welcome student page");
    }
  );

app.listen(3000, () => {
  console.log("Server running on port 3000.");
});
