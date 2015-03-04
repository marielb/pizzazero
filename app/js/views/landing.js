var PizzaZeroView = Backbone.View.extend({

	template: null,

	events: {
		'change #hunger': 'changeNumSlices'
	},

	data: {
		numSlices: 6,
		hungerText: 'pizza slices'
	},

	initialize: function() {
		_.bindAll(this, 'render', 'changeNumSlices');

		var source = $('#pizzazero').html();
		this.template = Handlebars.compile(source);

		this.render();
		
		this.delegateEvents(this.events);
		var hunger = document.querySelector('#hunger');
	},
 
	render: function() {
		this.$el.html(this.template(this.data));
	},

	changeNumSlices: function() {
		var hunger = document.querySelector('#hunger');
      	this.data.numSlices = hunger.value;

		if (this.data.numSlices === 1) {
			this.data.hungerText = 'pizza slice';
		} else {
			this.data.hungerText = 'pizza slices';
		}

		this.render();
	}

});