import db from "../models/index";

class homController {
    async getHomePage(req, res) {
        try {
            let data = await db.User.findAll();
            return res.render('homePage.ejs', {
                data: data
            });
        } catch (err) {
            console.log(err);
        }

    }
}

module.exports = new homController();