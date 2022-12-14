const router = require("express").Router();
const { User, validate } = require("../models/user");
const bcrypt = require("bcrypt");


router.post("/", async (req, res) => {
	try {
		const { error } = validate(req.body);
		if (error)
			return res.status(400).send({ message: error.details[0].message });

		// Display the error
		console.log(error);
		

		// ? Search for user with given email
		const user = await User.findOne({ email: req.body.email });

		// ? If user exist, return error
		if (user)
			{
				console.log("User with given email already Exist!");
				return res
				.status(409)
				.send({ message: "User with given email already Exist!" });}

		// ? Hash password
		const salt = await bcrypt.genSalt(Number(process.env.SALT));
		const hashPassword = await bcrypt.hash(req.body.password, salt);

		// ? Create new user and save to database with hashed password
		await new User({ ...req.body, password: hashPassword }).save();
		res.status(201).send({ message: "User created successfully" });
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
});

module.exports = router;
