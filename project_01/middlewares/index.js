const fs = require("fs")
function logReqRes(filename) {
    //yaha par hm closures ka use kar rhe hai
    return (req, res, next) => {
        fs.appendFile(
           filename,
            `\n${Date.now()}: ${req.method}: ${req.path}`,
            (err, data) => {
                next();
            }
        );
    };
};


module.exports = {
    logReqRes,
}