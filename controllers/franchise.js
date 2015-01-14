var path = require( 'path' );
var Franchises = require(path.resolve(('models/franchise')));
exports.findAllFranchises = function(req, res){
 		console.log('GET - /franchises');
 		Franchises.find().exec(function(err, franchises){
 			if(!err){
 				res.render('francise', {franquias: franchises});
 			} else {
 				res.statusCode == 500;
 				console.log('Erro interno(%d): %s', res.statusCode, err.message);
 				res.send('Erro!')
 			}
 		})
};
exports.edit = function(req, res){
	res.render('edit', {id: req.params.id});
	// Franchises.findById(req.params.id).exec(function(err, franchises){
 //    	if(err){
 //    		console.log(err);
 //    	}
 //    });
}

exports.findById = function(req, res){
 		console.log('GET - /franchises/' + req.params.id);
 		Franchises.findById(req.params.id, function(err, franchises){

 			if(!franchises) {
		        res.statusCode = 404;
		        return res.send({ error: 'Não Encontrado' });
		     }


 			if(!err) {
		        res.send({ status: 'OK', franchise:franchises });
		    } else {
 				res.statusCode == 500;
 				console.log('Erro interno(%d): %s', res.statusCode, err.message);
 				res.send('Erro!')
 			}
 		})
};
exports.create = function(req,res){
	res.render('create');
}
exports.addFranchise = function(req, res){

 		var franchise = new Franchises({

	      address:    			req.body.address,
	      town:    				req.body.town,
	      franchisee:    		req.body.franchisee,
	      manager:    			req.body.manager,
	      startHours:    		req.body.startHours,
	      endHours:    			req.body.endHours,
	      services:    			req.body.services

	    });

	    franchise.save(function(err){
	    	if(err) {
		        console.log('Error while saving franchise: ' + err);
		        res.send({ error:err });

		    } else {
		        console.log("Franchise created");
		        res.send({ status: 'OK', franchise:franchise });
	      	}
	  	});

 	};

 	// PUT - ATUALIZAR

 exports.updateFranchise = function(req, res){
 		console.log('GET - /franchises/' + req.params.id);
 		Franchises.findById(req.params.id, function(err, franchises){
 			
 			if(!tshirt) {
		        res.statusCode = 404;
		        return res.send({ error: 'Não Encontrado' });
		    }
 		

		if (req.body.address != null) 		franchises.address = 		req.body.address;
		if (req.body.town != null) 			franchises.town = 			req.body.town;
		if (req.body.franchisee != null) 	franchises.franchisee = 	req.body.franchisee;
		if (req.body.manager != null) 		franchises.manager = 		req.body.manager;
		if (req.body.startHours != null) 	franchises.startHours = 	req.body.startHours;
		if (req.body.endHours != null) 		franchises.endHours = 		req.body.endHours;
		if (req.body.services != null) 		franchises.model = 			req.body.services;


		Franchises.save(function(err) {

	        if(!err) {
	          console.log('Atualizado');
	          res.send({ status: 'OK', franchise:franchise });
	        } 

	        else {

	          if(err.name == 'ValidationError') {
	            res.statusCode = 400;
	            res.send({ error: 'Validation error' });
	          } else {
	            res.statusCode = 500;
	            res.send({ error: 'Server error' });
	          }
	          console.log('Internal error(%d): %s',res.statusCode,err.message);

	        }

		        res.send(franchise);
		 	});

	    });

	}


	// DELETE - DELTAR

	exports.deleteFranchise = function(req, res) {

    console.log("DELETE - /tshirt/:id");
      	Franchises.findById(req.params.id, function(err, franchise) {
			if(!franchise) {
				res.statusCode = 404;
				res.send({ error: 'Not found' });
			}

	    franchise.remove(function(err) {
	        if(!err) {
	          	console.log('Removed tshirt');
	          	res.send({ status: 'OK' });
	        } else {
	          res.statusCode = 500;
	          	console.log('Internal error(%d): %s',res.statusCode,err.message);
	          	res.send({ error: 'Server error' });
	        }
	  	})
    });
  }