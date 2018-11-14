// interface LoanValue {
//     amount: number;
//     year: number;
//     interestRates: number;
//     maxYear: number;
//     maxAmount: number;
//     salary?: number;
//     kids?: number;
// }

// class Loan {
//     year: number;
//     maxYear: number;

//     constructor(loanObject: LoanValue) {
//         this.year = loanObject.year;
//         this.maxYear = loanObject.maxYear;
//     }

//     canLend(): boolean {
//         return this.year <= this.maxYear;
//     }
// }

// class InstantLoan extends Loan {
//     maxAmount: number = 5000;

//     constructor(loanObject: LoanValue) { super(loanObject); }

//     canLend() {
//         super.canLend();
//         return true;
//     }
// }

// class HousingLoan extends Loan {
//     salary: number;
//     kids: number;

//     constructor(price: number, year: number) {
//         super(price, year, 2, 3);
//     }

//     canLend() {
//         super.canLend();

//         return true;
//     }
// }


// class ConsumerCredit extends Loan {
//     maxAmount: number = 10000;

//     constructor(price: number, year: number, interestRates: number) { super(price, year, interestRates, 5); }

//     canLend() {
//         super.canLend();

//         return true;
//     }
// }