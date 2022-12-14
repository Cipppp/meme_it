// Create routes for memes
// Path: routes/memes.js

// Compare this snippet from routes/users.js:
const router = require("express").Router();
const { Meme, validate } = require("../models/meme");

// router.get("/", async (req, res) => {
//     try {
//         const memes = await Meme.find();
//         res.status(200).send({ data: memes });
//     } catch (error) {
//         res.status(500).send({ message: "Internal Server Error" });
//     }
// });

// // get memes with a specific id
// router.get("/:id", async (req, res) => {
//     try {
//         const meme = await Meme.findById(req.params.id);
//         if (!meme)
//             return res.status(404).send({ message: "Meme not found" });
//         res.status(200).send({ data: meme });
//     } catch (error) {
//         res.status(500).send({ message: "Internal Server Error" });
//     }
// });


router.post("/", async (req, res) => {
    try {
        const { error } = validate(req.body);
        if (error)
            return res.status(400).send({ message: error.details[0].message });

        const meme = await new Meme(req.body).save();
        res.status(201).send({ data: meme });
    } catch (error) {
        res.status(500).send({ message: "Internal Server Error" });
    }
});

// update memes with a specific id
router.put("/:id", async (req, res) => {
    try {
        const { error } = validate(req.body);
        if (error)
            return res.status(400).send({ message: error.details[0].message });

        const meme = await Meme.findByIdAndUpdate(req.params.id, req.body , { new: true });
        
        if (!meme)
            return res.status(404).send({ message: "Meme not found" });

        res.status(200).send({ data: meme });
    } catch (error) {
        res.status(500).send({ message: "Internal Server Error" });
    }
});



module.exports = router;
