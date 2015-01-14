/**
 * Franchises
 *
 * @module      	:: Banco
 * @description 	:: Arquitetura do banco de franquias
 * @author        	:: Matheus Oliveira
 *
 **/

var mongoose = require('mongoose');

var Franchise =  mongoose.Schema({
	address: {
		type: String,
		require: true
	},
	town: {
		type: String,
		require: true
	},
	franchisee: {
		type: String,
		require: true
	},
	manager: {
		type: String,
		require: true
	},
	startHours: { 
		type: String,
		require: true
	},
	endHours: { 
		type: String,
		require: true
	},
	services: {
		type: Array
	},
	created: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('franchise', Franchise );