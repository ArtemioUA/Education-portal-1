var mysql = require('mysql');

function getMySqlConnection() {
    return mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "education_portal"
    });
}

//Events

module.exports.getEvents = function(callback) {

    var con = getMySqlConnection();

    con.connect();

    con.query('SHOW EVENTS FROM education_portal', function (err, result) {
        if (err) throw err;

        if (result.length > 0)
            callback(result);
        else
            callback(null);
    })

    con.end();

}


//Places

module.exports.getPlaces = function (callback) {
    
    var con = getMySqlConnection();
    var sql = 'SELECT * FROM Places';

    con.connect();

    con.query(sql, function (err, result) {
        if (err) throw err;

        if (result.length > 0)
            callback(result);
        else
            callback(null);
    });

    con.end();
}

module.exports.getPlaceById = function (id, callback) {

    var con = getMySqlConnection();

    con.connect();
    
    var sql = 'SELECT * FROM Places WHERE id = ?';
    con.query(sql, [id], function (err, result) {
        if (err) throw err;

        if (result.length > 0)
            callback(result[0]);
        else
            callback(null);
    });

    con.end();
}


//Fouders

module.exports.getFounders = function (callback) {
    
    var con = getMySqlConnection();
    var sql = 'SELECT * FROM Founders';

    con.connect();

    con.query(sql, function (err, result) {
        if (err) throw err;

        if (result.length > 0)
            callback(result);
        else
            callback(null);
    });

    con.end();
}

module.exports.getFounderById = function (id, callback) {

    var con = getMySqlConnection();

    con.connect();
    
    var sql = 'SELECT * FROM Founders WHERE id = ?';
    con.query(sql, [id], function (err, result) {
        if (err) throw err;

        if (result.length > 0)
            callback(result[0]);
        else
            callback(null);
    });

    con.end();
}