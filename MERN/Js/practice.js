class Book{
    constructor(title,author,year){
        this.title = title;
        this.author = author;
        this.year = year;

    }

    getAge(){
        let currentYear = new Date().getFullYear();
        return currentYear - this.year

    }
}

class Magazine extends Book{
    constructor(title,author,year,issue){
        super(title,author,year);
        this.issue = issue;
    }
    getMaganizeNo(){
        return this.issue;
    }
}

let magazine = new Magazine("title a",'author a',2000,4);
console.log(magazine.issue)

 