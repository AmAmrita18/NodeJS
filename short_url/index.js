const express = require("express");
const {connectToMongoDB} = require("./connect");
const urlRoute = require("./routes/url")
const app = express();
const PORT = 8001;

connectToMongoDB('mongodb://127.0.0.1:27017/short-url')
.then(() => console.log("MongoDb Connected"));

app.set("view engine", "ejs");
app.use(express.json()); //to parse incoming body

app.get("/test", async (req, res) => {
    const allUrls = await URL.find({});
    return res.end(`
        <html>
            <head></head>
            <body>
                <ol>
                    ${allUrls.map(url => `<li>${url.shortId} - ${url.redirectURL} - ${url.visitHistory.length}</li>`).join("")}
                </ol>
            </body>
        </html>
    `);
});

app.get('./:shortI')

app.use('/url', urlRoute);
app.listen(PORT, () => console.log(`Server Running at port ${PORT}`))