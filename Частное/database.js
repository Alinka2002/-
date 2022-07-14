const pathDB = "./private/database.db";
const db = require('better-sqlite3')(pathDB);

class DataProcessing {
    getFeeds() {
        let query = `
            SELECT userName, userFeed, tentacles
            FROM feeds
            ORDER BY tentacles DESC`;
        let rows = db.prepare(query).all();
        return rows;
    }
    insertFeed(name, feed, tentacles) {
        let values = { name: name, feed: feed, tentacles:tentacles };
        let query = `
            INSERT INTO feeds (userName,userFeed,tentacles)
            VALUES (@name, @feed, @tentacles)`;
        db.prepare(query).run(values);
    }
}

module.exports = new DataProcessing();
