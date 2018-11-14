class Loan {
    amount: number;
    year: number;
    interestRates: number;
    maxYear: number;

    constructor(amount: number, year: number, interestRates: number, maxYear: number) {
        this.amount = amount;
        this.year = year;        
        this.maxYear = maxYear;
        this.interestRates = interestRates;
    }

    canLend() {
        return this.year <= this.maxYear;
    }
}


class HousingLoan extends Loan {
    salary: number;
    kids: number;

    constructor(price: number, year: number) {
        super(price, year, 2, 3);
    }

    canLend() {
        super.canLend();

        return true;
    }
}

class InstantLoan extends Loan {
    maxAmount: number = 5000;

    constructor(amount: number, year: number) { 
        super(amount, year, 20, 2); 
    }

    canLend() {
        super.canLend();
        return true;
    }
}

class ConsumerCredit extends Loan {
    maxAmount: number = 10000;

    constructor(price: number, year: number, interestRates: number) { 
        super(price, year, interestRates, 5); 
    }

    canLend() {
        super.canLend();

        return true;
    }
}


var cc = new ConsumerCredit(100,5,10);
console.log(cc.canLend());