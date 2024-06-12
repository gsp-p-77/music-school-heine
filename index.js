import env from "dotenv";
import express from "express";

const app = express();

env.config();


const SCHOOL_NAME = process.env.SCHOOL_NAME;
const LOCAL_HOST_PORT = process.env.LOCAL_HOST_PORT;
const PORT = process.env.PORT || LOCAL_HOST_PORT;

app.use(express.static("public"));
app.get("/", (req, res) => {  
  res.render("index.ejs", { musicSchoolName: SCHOOL_NAME});
});

app.get("/about", (req, res) => {
  res.render("about.ejs");
});

app.get("/contact", (req, res) => {
  res.render("contact.ejs");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
