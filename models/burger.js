var orm = require("../config/orm");

var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
          cb(res);
        });
    },
    // The variables cols and vals are arrays.
    create: function (col1, col2, newBurgerName, cb) {
        // EXAMPLE QUERY STRING
        // "INSERT INTO burgers(burger_name,devoured) VALUES (?,?)"
        orm.create("burgers", col1, col2, newBurgerName, function (res) {
            cb(res);
        });
    },
    // update for changing the burger status
    update: function (col, val, id, cb) {
        // EXAMPLE QUERY STRING
        // "UPDATE burgers SET devoured= true WHERE ?;"
        orm.update("burgers", col, val, id, function (res) {
            cb(res);
        });
    }
};
  
  // Export the database functions for the controller (burgersController.js).
  module.exports = burger;
