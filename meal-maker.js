const menu = {
    _courses: {
        _appetizers: [],
        _mains: [],
        _desserts: [],
    
        get appetizers() {
            return this._appetizers;
        },
        get mains() {
            return this._mains;
        },
        get desserts() {
            return this._desserts;
        },
        set appetizers(appetizer) {
            this._appetizers = appetizer;
        },
        set mains(main) {
            this._mains = main;
        },
        set desserts(dessert) {
            this._desserts = dessert;
        },
    },
        
        get courses() {
        return {
            appetizers: this._courses.appetizers,
            mains: this._courses.mains,
            desserts: this._courses.desserts,
    };
},

    addDishToCourse(courseMenu, dishName, dishPrice) {
        const dish = {
            name: dishName,
            price: dishPrice,
        }
        this._courses[courseMenu].push(dish);
    },

    getRandomDishFromCourse(courseName) {
        const dishes = this._courses[courseName]
        const randomIndex = Math.floor( Math.random( ) * dishes.length);
        return dishes[randomIndex]
    },

    generateRandomMeal() {
        const appetizer = this.getRandomDishFromCourse('appetizers');
        const main = this.getRandomDishFromCourse('mains');
        const dessert = this.getRandomDishFromCourse('desserts');
        const totalPrice = appetizer.price + main.price + dessert.price
        return `Your meal is ${appetizer.name}, ${main.name} and ${dessert.name}. The price is $${totalPrice.toFixed(2)}.`;

    },
    
};
    menu.addDishToCourse('appetizers', 'Greek Salad', 4.20);
    menu.addDishToCourse('appetizers', 'Bruschetta', 4.20);
    menu.addDishToCourse('appetizers', 'Bread', 3.20);

    menu.addDishToCourse('mains', 'Pasta', 9.25);
    menu.addDishToCourse('mains', 'Steak', 16.50);
    menu.addDishToCourse('mains', 'Fish', 11.50);

    menu.addDishToCourse('desserts', 'Cheesecake', 4.50);
    menu.addDishToCourse('desserts', 'Apple Pie', 4.50);
    menu.addDishToCourse('desserts', 'IceCream', 2.50);



let meal = menu.generateRandomMeal();

console.log(meal);
