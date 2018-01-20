var ObjectID        = require('mongodb').ObjectID;
const googleTrends  = require('google-trends-api');

module.exports = function(app, db){
        
    app.get('/table-data', (req, res) => { 
        db.collection('main').find().limit(100).toArray(function(err, result){
           if(err){
               res.send({ 'error': 'An error has occured'});
           }else{
               res.send(result);
           }
        });             
    });
    
    app.get('/watch-list', (req, res) => { 
        db.collection('main').find().sort( { day: -1 } ).limit(5).toArray(function(err, result){
           if(err){
               res.send({ 'error': 'An error has occured'});
           }else{
               res.send(result);
           }
        });             
    });

    app.get('/google-trends/:term', (req, result) => { 
        const term_ = req.params.term;
        googleTrends.interestByRegion({keyword: term_, resolution: "CITY"})
        .then((res) => {
            result.send(res);
        })
        .catch((err) => {
            result.send({ 'error': 'An error has occured'});
        })             
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