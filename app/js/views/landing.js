var PizzaZeroView = Backbone.View.extend({

	map: null,
	template: null,

	events: {
		'change #hunger': 'changeNumSlices',
		'click #js-zero-in': 'clickZeroIn',
		'keyup #address': 'changeAddress'
	},

	data: {
		numSlices: 6,
		address: '',
		hungerText: 'pizza slices',
		sectionClass: 'pizzaMain',
		logoClass: 'large-3',
	},

	initialize: function(options) {
		this.options = options;
		_.bindAll(this, 'render', 'changeNumSlices', 'clickZeroIn', 'changeAddress');



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

	changeAddress: function(e) {
		this.data.address = $(e.target).val();
	},

	clickZeroIn: function() {
		$('.pizzaMain').addClass('pizzaSidebar');
		$('.mapCanvas').addClass('large-9');
	}

});



