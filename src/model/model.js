const DBConnect = require("./DBmodel");

class Model {
    constructor() {
        let db = new DBConnect();
        this.conn = db.connect()
    }

    querySQL(sql) {
        return new Promise((resolve, reject) => {
            this.conn.query(sql, (err, results) => {
                if (err) {
                    reject(err);
                }
                resolve(results);
            })
        })
    }
}

module.exports = Model;