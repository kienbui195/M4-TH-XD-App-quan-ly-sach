const Model = require('./model')

class ListBooks extends Model {
    async getBooks() {
        let sql = `SELECT * FROM books`
        return await this.querySQL(sql);
    }

    async addBook(name, price, quantity, author) {
        let sql = `INSERT INTO books (name, price, quantity, author) VALUES ('${name}', ${price}, ${quantity}, '${author}') `
        await this.querySQL(sql);
    }

    async deleteBook(name) {
        let sql = `DELETE FROM books WHERE name = '${name}'`
        await this.querySQL(sql);
    }
}

module.exports = ListBooks;