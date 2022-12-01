const router = require('express').Router();
const { User } = require('../models/user');
const bcrypt = require('bcrypt');
const Joi = require('joi');

router.post('/', async (req, res) => {
    try {
        const { error } = validate(req.body);
        if (error)
            return res.status(400).send({ message: error.details[0].message });

        const user = await User.findOne({ username: req.body.username });
        console.log(user);
        if (!user) {
            console.log('User not found');
            return res
                .status(401)
                .send({ message: 'Invalid Email or Password' });
        }

        const validPassword = await bcrypt.compare(
            req.body.password,
            user.password
        );
        if (!validPassword) {
            const hashPassword = await bcrypt.hash(req.body.password, salt);
            console.log('Invalid Password', hashPassword);
            return res
                .status(401)
                .send({ message: 'Invalid Email or Password' });
        }

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
    const schema = Joi.object({
        username: Joi.string().required().label('Username'),
        password: Joi.string().required().label('Password'),
    });
    return schema.validate(data);
};

module.exports = router;
