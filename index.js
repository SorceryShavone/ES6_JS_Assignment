class Employee {
    constructor(name) {
        this.person = name;
        this.employeeId = this.employeeId;
        this.generalPermissions = this.generalPermissions;
        this.storeNumber = this.storeNumber;        
    }
    present () {
        return this.name + 'Id number is' + this.employeeId + '.'
    }
}

class Manager extends Employee {
    constructor(name, manageList, changePermissions) {
    super(name);
    this.manageList = manageList;
    this.changePermissions = changePermissions;
    }

    show() {
        return this.present() + 'This person manages' + this.manageList
    }
}


/* Question #3 */

const [fin, est, sw, den, nor] = countries;

/* Question #4 */

const rectangle = {
    width: 20,
    height: 10,
    area: 200,
    perimeter: 60,
    }

const [width, height, area, perimeter] = rectangle;
console.log("width:", width);
console.log("height:", height);
console.log("area:", area);
console.log("perimeter:", perimeter);




