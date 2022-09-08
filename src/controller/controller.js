const Model = require("../model/listBooksModel");
const ListBooks = require("../model/listBooksModel");

class Controller {
    constructor() {
        this.controller = new ListBooks();
    }

    async index(req, res, next) {
        let data = await this.controller.getBooks()
        res.render('list', {data: data});
    }

    showFormCreate(req, res, next) {
        res.render('create');
    }

    async getData(req, res, next) {
        if (req.body.name && req.body.price && req.body.quantity && req.body.author) {
            await this.controller.addBook(req.body.name, req.body.price, req.body.quantity, req.body.author)
            res.redirect('/');
        } else res.render('notFound');
    }

    async deleteBook(req, res, next) {
        let name = req.query.name;
        await this.controller.deleteBook(name);
        res.redirect('/');
    }
}

module.exports = Controller;