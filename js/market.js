export default class Market {
	
	constructor(name) {

		this.name = name;
		this.departments = [];

	}

	addDepartmet(department) {

		this.departments.push(department);

	}

	getDepartment(index) {

		return this.departments[inndex];

	}

}