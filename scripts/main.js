'use strict';
var $ =require('jquery');
// var Moment = require('moment/moment.js');
var _ = require ('backbone/node_modules/underscore');
var ToDoModel = require('./models/ToDoModel.js');
var ToDoCollection = require('./collections/ToDoCollection.js');
var ToDoView= require('./view/ToDoView.js');

$(document).ready(function(){

	var $form= $('#Form');
	var $task= $('#task');
	var $todoList= $('#todoList');
	// var todoTemplate = _.template($('#ToDo-row').html());
	

	var ToDos=new ToDoCollection();

	$form.on('submit', function(e){
		e.preventDefault();
		console.log('submit triggered');
		ToDos.add({
			item: $task.val(),
			time: new Date()
		});
		$task.val('');
		
	});

	ToDos.on('add', function(newToDoItem){
		console.log($task.val());
		newToDoItem.save();
		var todo1= new ToDoView({model: newToDoItem});
		$todoList.append(todo1.$el);
	})

	ToDos.fetch();




})