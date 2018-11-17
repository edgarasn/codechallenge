abstract class BaseLoan {
    protected _amount: number;
    protected _maxAmount: number;
    protected _year: number;
    protected _maxYear: number;
    protected _interestRates: number;

    constructor(amount: number, year: number, interestRates: number, maxYear: number,  maxAmount: number) {
        this._amount = amount;
        this._year = year;
        this._interestRates = interestRates;
        this._maxYear = maxYear;
        this._maxAmount = maxAmount;
    }

    public calculateMonthRates(): number[]{
        if(this.canIssue()){
            let monthRate = this._amount / (this._year * 12);
            let monthRateWithInterest = monthRate + ((monthRate/100)*this._interestRates);
            return [monthRateWithInterest];
        }
        return [];
    }

    abstract canIssue(): boolean;

    protected isYearRangeValid(): boolean {
        return this._year <= this._maxYear;
    }

    protected isAmountRangeValid(): boolean {
        return this._amount <= this._maxAmount;
    }
}

class Mortage extends BaseLoan {
    private readonly _minAmountPerMonth = 500;
    protected _salary: number;
    protected _kids: number;

    constructor(amount: number, year: number, salary: number, kids: number) {
        super(amount, year, 2, 30,0);
        this._salary = salary;
        this._kids = kids;
    }

    private isSalaryEnoughtForLiving(): boolean {
        return this._salary / this._kids > this._minAmountPerMonth;
    }

    private calculateMaxAmount(): void{
        this._maxAmount =  200000 //TODO impelement
    }

    canIssue(): boolean {
        this.calculateMaxAmount();

        return this.isYearRangeValid() && 
        this.isAmountRangeValid() && 
        this.isSalaryEnoughtForLiving();
    }

    getMonthRates():number[]{
        if(this.canIssue()){
            return [100,300,400]
        }
        return [];
    }
}

class ConsumerCredit extends BaseLoan {
    constructor(price: number, year: number, interestRates: number) {
        super(price, year, interestRates, 5, 10000);
    }

    canIssue(): boolean {
        return this.isYearRangeValid() && this.isAmountRangeValid();
    }
}

class InstantLoan extends BaseLoan {
    constructor(price: number, year: number) {
        super(price, year, 20, 2, 5000);
    }

    canIssue(): boolean {
        return this.isYearRangeValid() && this.isAmountRangeValid();
    }
}

var houseLoan = new Mortage(100000, 20, 3000, 5);
console.log(houseLoan.canIssue());
// console.log(houseLoan.calculateMonthRates());

var credit = new ConsumerCredit(4000, 1, 40);
console.log(credit.canIssue());
// console.log(credit.calculateMonthRates());

var instantLoan = new InstantLoan(3000, 1);
console.log(instantLoan.canIssue());
console.log(instantLoan.calculateMonthRates());