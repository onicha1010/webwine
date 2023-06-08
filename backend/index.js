const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const nodemailer = require('nodemailer');
// const { default: Request } = require("../frontend/src/page/Request");

const app = express();
app.use(cors());
app.use(express.json({ limit: "10mb" }));

const PORT = process.env.PORT || 8080;

// console.log(process.env.MONGODB_URL)
mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGODB_URL).then(() => console.log("Connect to Databse")).catch((err) => console.log(err));

const userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: {
        type: String,
        unique: true,
    },
    password: String,
    confirmPassword: String,
    image: String,
});

const userModel = mongoose.model("user", userSchema);

app.get("/", (req, res) => {
  res.send("Server is running");
});


app.post("/signup", async (req, res) => {
    console.log(req.body);
    const { email } = req.body;

    try {
        const data = await userModel.findOne({ email: email });
        if (data) {
            res.send({ message: "Email id is already registered", alert: false });
        } else {
            const newUser = new userModel(req.body);
            const savedUser = await newUser.save();
            res.send({ message: "Successfully signed up", alert: true });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Internal server error", alert: false });
    }
});

app.post("/login", async (req, res) => {
    console.log(req.body);
    const { email } = req.body;

    try {
        const result = await userModel.findOne({ email: email });
        if (result) {
            const dataSend = {
                _id: result._id,
                firstName: result.firstName,
                lastName: result.lastName,
                email: result.email,
                image: result.image,
            };
            console.log(dataSend);
            res.send({ message: "Login is successful", alert: true, data: dataSend });
        } else {
            res.send({ message: "Email is not available, please sign up", alert: false });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Internal server error", alert: false });
    }
});

const schemaProduct = mongoose.Schema({
    name: String,
    category:String,
    image: String,
    price: String,
    description: String,
});
const productModel = mongoose.model("product",schemaProduct)

app.post("/uploadProduct",async(req,res)=>{
    // console.log(req.body)
    const data = await productModel(req.body)
    const datasave = await data.save()
    res.send({message : "Upload successfully"})
})

app.get("/product",async(req,res)=>{
    const data = await productModel.find({})
    res.send(JSON.stringify(data))
})

// app.post("/request", (req,res) => {
//     const transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//             user: 'teenoum1019@gmail.com',
//             pass: ''
//         }
//     })
//     const option = {
//         from: 'teenoum1019@gmail.com',
//         to: 'teenoum1010@gmail.com',
//         subject: 'Requst wine',
//         // <Request/>
//         // ข้อมูลที่จะส่ง
//     }

//     transporter.sendMail(option, (err, info) => {
//         if(err){
//             console.log('err', err);
//             return res.status(400).json({
//                 RespCode: 400,
//                 ResMessage: 'bad',
//                 RespError: err
//             })
//         }else{
//             console.log('Send:' + info.response);
//             return res.status(200).json({
//                 RespCode: 200,
//                 ResMessage: 'good'
//             })
//         }
//     })
// })

app.listen(PORT, () => console.log("server is running at port : " + PORT));