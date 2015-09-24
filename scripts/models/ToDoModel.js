'use strict';

var Backbone = require('backbone');
module.exports=Backbone.Model.extend({
	defaults:{
		item: '',
		time: '',
		complete: false
	},
	urlRoot: 'http://tiyfe.herokuapp.com/collections/ToDoList-Backbone'
})