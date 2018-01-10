var ObjectID = require('mongodb').ObjectID;


module.exports = function(app, db){
        
    app.get('/table-data', (req, res) => { 
        db.collection('table').find().limit(100).toArray(function(err, result){
           if(err){
               res.send({ 'error': 'An error has occured'});
           }else{
               res.send(result);
           }
        });             
    });
    
    
    
    /*
    
    app.get('/name/:nameText', function (req, res) {
        const name = req.params.nameText.charAt(0).toUpperCase() + req.params.nameText.slice(1);
        db.collection('names').findOne({n: name, g: "F"}, (err, item) => {
           if(err){
               res.send({ 'error': 'An error has occured'});
           }else{
               res.send(item);
           }
        }); 
    }); 
    
    */
    

}