const express = require("express");
const app = express();
const database = require("./config/database");
const userRoutes = require("./routes/user");
const dotenv = require("dotenv");
const PORT = process.env.PORT || 4000;
const cookieParser = require("cookie-parser");
dotenv.config();

app.use(express.json());
app.use(cookieParser());


database.connect();

// Setting up routes
app.use("/api/v1/auth", userRoutes);


app.get("/", (req, res) => {
	return res.json({
		success: true,
		message: "Your server is up and running ...",
	});
});



app.listen(PORT, () => {
	console.log(`App is listening at ${PORT}`);
});