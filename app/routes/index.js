const allRoutes = require('./all_routes');

module.exports = function(app, db){
    allRoutes(app, db);
    
};