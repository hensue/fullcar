const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const multer = require('multer');

const keys = require("./config/keys");

const cors = require("cors");

app.use(cors());

mongoose.Promise = global.Promise;

mongoose.connect(
  "mongodb://localhost:27017",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    console.log("Connected to MongoDB!!!");
  }
);

const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({storage});

app.use('/api/upload', upload.array('files'), (req, res)=>{

})

app.use('/api/download/:filename', (req, res) => {
  const filename = req.params.filename;
  const filePath = path.join(__dirname, 'uploads', filename); 

  res.download(filePath, (err) => {
    if (err) {
      res.status(500).send('Error downloading file');
    }
  });
});


app.use(bodyParser.json());

app.use("/api/cars/", require("./routes/carsRoute"));
app.use("/api/users/", require("./routes/usersRoute"));
app.use("/api/bookings/", require("./routes/bookingsRoute"));

app.use(express.static("public"))

// app.use(express.static("client/build"));

// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
// });



// app.get("/", function (req, res) {
//   res.sendFile(path.join(__dirname, "..", "build"));
// });

// app.get("*", function (req, res) {
//   res.sendFile(path.join(__dirname, "..", "build/index.html"));
// });
// if (process.env.NODE_ENV === "production") {
// app.use(express.static("client/build"));

// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
// });
// }

const PORT = process.env.PORT || 5000;
console.log("port:", PORT)
app.listen(PORT, () => console.log(`node js server started in ${PORT}`));

