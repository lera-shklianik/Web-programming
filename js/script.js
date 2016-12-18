import Market from './market.js';
import Department from './department.js';
import Product from './product.js';
import $ from "jquery";

let market = new Market("Chop");
$('#market').text(market.name);
