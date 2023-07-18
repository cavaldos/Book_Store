
const SiteController = require("../controllers/siteController");

function route(app){
    app.get("/", SiteController.index);
}
module.exports = route;