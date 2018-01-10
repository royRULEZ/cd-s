var ObjectID = require('mongodb').ObjectID;
const rarityDict = ["BLANK", "POPULAR", "UNIQUE", "UNCOMMON", "RARE", "OBSCURE", "UNHEARD-OF"];
const conversion = [[0,0],[0,0.1],[0.1,0.2],[0.2,0.4991],[0.499067014981074,0.623340619502053],[0.623393932931706,0.759129924828064],[0.759183238257717,1]];



module.exports = function(app, db){
    
    
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


    

    

};