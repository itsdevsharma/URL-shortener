import express from "express"
import shortid from "shortid"
import Url from "../models/url.model.js"

const router = express.Router();

// create short url

router.post("/shorten", async( req, res) => {
    const { longUrl } = req.body;

    const urlCode = shortid.generate();
    const shortUrl = `${process.env.BASE_URL}/${urlCode}`;

    const newUrl = await Url.create({
        longUrl,
        shortUrl,
        urlCode
    })
    res.json(newUrl);
});

// redirect to original url

router.get("/:code", async (req, res) => {
    try {
       const url = await Url.findOne({ urlCode: req.params.code });
       if (!url) {
       return res.status(404).json({ message: "URL not found" });
       }

        return res.redirect(url.longUrl);

    } catch ( url ) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
    }
})

export default router;