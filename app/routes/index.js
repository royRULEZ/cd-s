const nameRoutes = require('./name_routes');

module.exports = function(app, db){
    nameRoutes(app, db);
    
};