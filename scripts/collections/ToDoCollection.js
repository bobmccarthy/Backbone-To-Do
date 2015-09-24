'use strict';

var Backbone = require('backbone');
var ToDoModel = require('../models/ToDoModel.js');
module.exports=Backbone.Collection.extend({
	model: ToDoModel,
	url: 'http://tiyfe.herokuapp.com/collections/ToDoList-Backbone'
})