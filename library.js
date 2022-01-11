class Media {
    constructor(title) {
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];
    };
    get title() {
        return this._title;
    };
    get isCheckedOut() {
        return this._isCheckedOut;
    };
    get ratings() {
        return this._ratings;
    };
    toggleCheckedOutStatus(){
        if(this._isCheckedOut === true){
            return false;
        }else {
            return true
        };
    };
    getAverageRating() {
        let sum = this._ratings.reduce((acc, rating) => acc + rating, 0);
        return Math.floor(sum/this._ratings.length);
    };
    addRating(value) {
        if(value <= 5){
            this._ratings.push(value);
        }else {
            console.log('Rating have to be under 5');
        };
    };
    set isCheckedOut(check) {
        this.isCheckedOut = check;
    };
};

class Book extends Media {
    constructor(author, title, pages) {
        super(title)
        this._author = author;
        this._pages = pages;
    };
    get author() {
        return this._author;
    };
    get pages() {
        return this._pages;
    };
};

class Movie extends Media {
    constructor(director, title, runTime) {
        super(title)
        this._director = director;
        this._runTime = runTime;
    };
    get director() {
        return this._director;
    };
    get runTime() {
        return thie._runTime;
    };
};

const historyOfEverything = new Book ('Bill Bryson', 'A Short History of Nearly Everything', 544);
historyOfEverything.toggleCheckedOutStatus();
console.log(historyOfEverything.isCheckedOut);

historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);

console.log(historyOfEverything.getAverageRating());


const speed = new Movie('Jan de Bont', 'Speed', 116);
speed.toggleCheckedOutStatus();
console.log(speed.isCheckedOut);

speed.addRating(1);
speed.addRating(1);
speed.addRating(5);

console.log(speed.getAverageRating());

