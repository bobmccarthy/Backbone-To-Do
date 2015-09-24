'use strict';

var Backbone = require('backbone');
var _ = require ('backbone/node_modules/underscore');
var ToDoModel = require('../models/ToDoModel.js');
// var Moment = require('moment/moment.js');

module.exports=Backbone.View.extend({
	tagName: 'section',
	initialize: function(){
		
		console.log('I made it to initialize');
		// this.$el.on('check', this.onChangeToDo);

		_.bindAll(
			this,
			'render',
			'onChangeToDo'
			// 'timeStamp'
		);
		// this.model=new ToDoModel();
		this.model.on('change', this.render);
		this.$el.on('click', this.onChangeToDo);
		this.render();
	},
	render: function(){
		console.log('renderssssss');
		var todoText = this.model.get('item');
		var time = this.model.get('time');
		// for(var i=0; i>4; i++){
			console.log(time.type());
		// }

		// var since=moment(time).fromNow();
		this.$el.html('<span class="item">'+todoText+'</span><button id="doneButton">Done!</button><p class="timeStamp">'+time+'</p>');
	},
	onChangeToDo: function(){
		if (this.model.get('complete') !== false){
			this.$el.css('text-decoration', 'line-through');
			this.model.set({complete: true});
		}
		else{
			this.$el.css('text-decoration', 'none');
			this.model.set({complete: false});
		}
		
		
	},
	// timeStamp: function(){

	// 	var since=moment(date).fromNow()

	// }
});