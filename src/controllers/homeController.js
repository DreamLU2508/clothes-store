class homController {
    getHomePage(req, res) {
        return res.render('homePage.ejs');
    }
}

module.exports = new homController();