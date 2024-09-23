const shortid = require("shortid");
const URL = require('../models/url'); //database import

async function handleGenerateNewShortURL(req, res){
    const body = req.body;
    if(!body.url) return res.status(400).json({error: 'url is required'});
    const shortID = shortid(); //generate id

    //to create new URL in the database
    await URL.create({
        shortId: shortID,
        redirectURL: body.url,
        vistHistory: [],
    });

    return res.json({id: shortID});
}

module.exports = {
    handleGenerateNewShortURL,
};