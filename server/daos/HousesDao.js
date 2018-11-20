var db = require('../db/db.js');
var dbUtil = require('../utils/DbUtil.js');

module.exports = {
    getAllHouses: function(response) {
        var query =
            "SELECT T1.* " +        //what is T1?
                "FROM houses AS T1 " +
                "ORDER BY T1.houseId DESC;";

        db.query(query, function (err, result) {
            dbUtil.handleQueryResult(err, result, response);
        });
    },

    getHouseById: function(houseId, response) {
        var query =
            "SELECT T1.* " +
                "FROM houses AS T1 " +
                "WHERE T1.houseId = ?;";

        db.query(query, houseId, function (err, result) {
            dbUtil.handleQueryResult(err, result[0], response);
        });
    },

    insertHouse: function(house, response) {
        var query =
            "INSERT INTO houses (houseId, name, userCount) " +
                "VALUES (?, ?, ?);";

        var params = [
            house.houseId,
            house.name,
            house.userCount
        ];

        db.query(query, params, function (err, result) {
            dbUtil.handleQueryResult(err, result, response);
        });
    },

    updateHouseUserCount: function(houseId, response) {
        var query =
            "SELECT COUNT(T1.userId) " +
                "AS userCount " +
                "FROM users AS T1 " +
                "WHERE houseId = ?;";

        db.query(query, houseId, function (err, result) {
            dbUtil.handleQueryResult(err, result, function(countResult) {
                var userCount = countResult[0].userCount;

                query =
                    "UPDATE houses " +
                        "SET userCount = ? " +
                        "WHERE houseId = ?;";

                var params = [
                    userCount,
                    houseId
                ];

                db.query(query, params, function (err, result) {
                    dbUtil.handleQueryResult(err, userCount, response);
                });
            });
        });
    },

    updateHouse: function(house, response) {
        var query =
            "UPDATE houses " +
                "SET houseId = ?, name = ?, userCount = ? " +
                "WHERE houseId = ?;";

        var params = [
            house.houseId,
            house.name,
            house.userCount,
            house.houseId
        ];

        db.query(query, params, function (err, result) {
            dbUtil.handleQueryResult(err, result, response);
        });
    },

    deleteHouse: function(house, response) {
        var query =
            "DELETE FROM houses " +
                "WHERE houseId = ?;";

        db.query(query, house.houseId, function (err, result) {
            dbUtil.handleQueryResult(err, result, response);
        });
    }
};