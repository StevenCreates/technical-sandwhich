var orm = require("../config/orm");

var burger = 
{
    selectAll: function(cb)
    {
        orm.selectAll("burgers", function(res)
        {
            cb(res);
        });  
    },

    insertOne: function(burgerName, cb)
    {
        orm.insertOne("burgers", "burger_name", "devoured", burgerName, false, function(res)
        {
            cb(res);
        });
    },

    updateBurger: function(burgerToChange, burgerName, cb)
    {
        orm.updateOne("burgers", "burger_name", burgerToChange, "burger_name", burgerName, function(res)
        {
            cb(res);
        });
    },

    updateDevoured: function(isDevoured, idNum, cb)
    {
        orm.updateOne("burgers", "devoured", isDevoured, "id", idNum, function(res)
        {
            cb(res);
        });
    },

    deleteOne: function(idNum, cb)
    {
        orm.deleteOne("burgers", "id", idNum, function(res)
        {
            cb(res);
        });
    }

}

module.exports = burger;