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

    // Initialize the main view
    new PizzaZeroView({
    	el: $('#coverCanvas')
    });

	CoreStyle.g.paperInput.labelColor = '#f4b400';
	CoreStyle.g.paperInput.focusedColor = '#FDE3A7';
	CoreStyle.g.paperInput.invalidColor = '#fff';


})();
