const db = require("../models")

module.exports = {
    //route for getting smoothy of the week
    getROW: function(req,res){
        db.Ratings
          .find({})//based on rating added date
          .then(dbModel=>resJson(dbModel))
          .catch(err=>res.status(422).json(err))

        
    }
}