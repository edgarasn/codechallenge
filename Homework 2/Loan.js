var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Loan = (function () {
    function Loan(amount, year, interestRates, maxYear) {
        this.amount = amount;
        this.year = year;
        this.maxYear = maxYear;
        this.interestRates = interestRates;
    }
    Loan.prototype.canLend = function () {
        return this.year <= this.maxYear;
    };
    return Loan;
})();

var HousingLoan = (function (_super) {
    __extends(HousingLoan, _super);
    function HousingLoan(price, year) {
        _super.call(this, price, year, 2, 3);
    }
    HousingLoan.prototype.canLend = function () {
        _super.prototype.canLend.call(this);

        return true;
    };
    return HousingLoan;
})(Loan);

var InstantLoan = (function (_super) {
    __extends(InstantLoan, _super);
    function InstantLoan(amount, year) {
        _super.call(this, amount, year, 20, 2);
        this.maxAmount = 5000;
    }
    InstantLoan.prototype.canLend = function () {
        _super.prototype.canLend.call(this);
        return true;
    };
    return InstantLoan;
})(Loan);

var ConsumerCredit = (function (_super) {
    __extends(ConsumerCredit, _super);
    function ConsumerCredit(price, year, interestRates) {
        _super.call(this, price, year, interestRates, 5);
        this.maxAmount = 10000;
    }
    ConsumerCredit.prototype.canLend = function () {
        _super.prototype.canLend.call(this);

        return true;
    };
    return ConsumerCredit;
})(Loan);
debugger;

var cc = new ConsumerCredit(100, 5, 10);
console.log(cc.canLend());
