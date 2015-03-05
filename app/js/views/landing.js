var PizzaZeroView = Backbone.View.extend({

	map: null,
	template: null,

	events: {
		'change #hunger': 'changeNumSlices',
		'click #js-zero-in': 'clickZeroIn'
	},

	data: {
		numSlices: 6,
		hungerText: 'pizza slices',
		sectionClass: 'userInput',
		logoClass: 'large-3'
	},

	initialize: function(options) {
		this.options = options;
		_.bindAll(this, 'render', 'changeNumSlices', 'clickZeroIn');



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
	},

	clickZeroIn: function() {
		this.data.logoClass = 'large-3 large-10';
		this.data.sectionClass = 'userInput userInputLeft';

		$('.logo ').addClass('large-10');
		$('.userInput').addClass('userInputLeft');
	}

});



