/**
 * @jsx React.DOM
 */
/*jshint quotmark:false */
/*jshint white:false */
/*jshint trailing:false */
/*jshint newcap:false */
/*global React, Backbone */
var app = app || {};

(function () {
	'use strict';

	CoreStyle.g.paperInput.labelColor = '#f4b400';
	CoreStyle.g.paperInput.focusedColor = '#FDE3A7';
	CoreStyle.g.paperInput.invalidColor = '#fff';

	var viewOptions = {
		el: $('body'),
	};

	var infowindow;

	// Initialize the main view
	new PizzaZeroView(viewOptions);


	var gMap = $('google-map');
	// gMap.addEventListener('api-load', function(e) {
	// 	document.querySelector('google-map-search').map = this.map;
	// 	console.log(document.querySelector('google-map-search'));
	// 	document.querySelector('google-map-search').search();
	// });

})();
