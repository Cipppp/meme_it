const router = require('express').Router();
const { User } = require('../models/user');
const bcrypt = require('bcrypt');
const Joi = require('joi');

router.post('/', async (req, res) => {
    try {
        const { error } = validate(req.body);

        // ? If error, return error
        if (error)
            return res.status(400).send({ message: error.details[0].message });

        // ? Search for user with given email
        const user = await User.findOne({ username: req.body.username });
        // TODO: Delete this line
        console.log(user);


        // ? If user not found, return error
        if (!user) {
            console.log('User not found');
            return res
                .status(401)
                .send({ message: 'Invalid Email or Password' });
        }   


        // ? Compare password with hashed password in database 
        const validPassword = await bcrypt.compare(
            req.body.password,
            user.password
        );

        // ? If password is invalid, return error
        if (!validPassword) {
            const hashPassword = await bcrypt.hash(req.body.password, salt);
            console.log('Invalid Password', hashPassword);
            return res
                .status(401)
                .send({ message: 'Invalid Email or Password' });
        }

        // ? Generate token and return to user
        const token = user.generateAuthToken();
        res.status(200).send({
            data: token,
            message: 'logged in successfully',
        });

    } catch (error) {
        res.status(500).send({ message: 'Internal Server Error' });
    }
});

const validate = (data) => {
    // ? Validate user input with Joi schema 
    const schema = Joi.object({
        username: Joi.string().required().label('Username'),
        password: Joi.string().required().label('Password'),
    });
    return schema.validate(data);
};

module.exports = router;
