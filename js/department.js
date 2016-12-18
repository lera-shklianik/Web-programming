export default class Department {
	
	constructor(name) {

		this.name = name;
		this.produts = [];
		this.size = 0;

	}

	add(product) {

		this.produts.push(product);
		this.size++;

	}

	getProduct(index) {

		return this.products[index];

	}

}