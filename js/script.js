import Market from './market.js';
import Department from './department.js';
import Product from './product.js';
import $ from "jquery";

let marketJson;

$.ajax({

	type: 'GET',
	url: '../data/market.json',
	success: (data) => marketJson = data,
	error: (err) => marketJson = {}

});

let market = new Market("Chop");
console.log($('#market').text());
$('#market').text(market.name);


