var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BaseLoan = /** @class */ (function () {
    function BaseLoan(amount, year, interestRates, maxYear, maxAmount) {
        this._amount = amount;
        this._year = year;
        this._interestRates = interestRates;
        this._maxYear = maxYear;
        this._maxAmount = maxAmount;
    }
    BaseLoan.prototype.isYearRangeValid = function () {
        return this._year <= this._maxYear;
    };
    BaseLoan.prototype.isAmountRangeValid = function () {
        return this._amount <= this._maxAmount;
    };
    return BaseLoan;
}());
var Mortage = /** @class */ (function (_super) {
    __extends(Mortage, _super);
    function Mortage(amount, year, salary, kids) {
        var _this = _super.call(this, amount, year, 2, 30, 0) || this;
        _this._minAmountPerMonth = 500;
        _this._salary = salary;
        _this._kids = kids;
        return _this;
    }
    Mortage.prototype.isSalaryEnoughtForLiving = function () {
        return this._salary / this._kids > this._minAmountPerMonth;
    };
    Mortage.prototype.calculateMaxAmount = function () {
        this._maxAmount = 200000; //TODO impelement
    };
    Mortage.prototype.canIssue = function () {
        this.calculateMaxAmount();
        return this.isYearRangeValid() &&
            this.isAmountRangeValid() &&
            this.isSalaryEnoughtForLiving();
    };
    Mortage.prototype.getMonthRates = function () {
        if (this.canIssue()) {
            return [100, 300, 400];
        }
        return [];
    };
    return Mortage;
}(BaseLoan));
var ConsumerCredit = /** @class */ (function (_super) {
    __extends(ConsumerCredit, _super);
    function ConsumerCredit(price, year, interestRates) {
        return _super.call(this, price, year, interestRates, 5, 10000) || this;
    }
    ConsumerCredit.prototype.canIssue = function () {
        return this.isYearRangeValid() && this.isAmountRangeValid();
    };
    ConsumerCredit.prototype.getMonthRates = function () {
        if (this.canIssue()) {
            return [];
        }
        return [];
    };
    return ConsumerCredit;
}(BaseLoan));
var InstantLoan = /** @class */ (function (_super) {
    __extends(InstantLoan, _super);
    function InstantLoan(price, year) {
        return _super.call(this, price, year, 20, 2, 5000) || this;
    }
    InstantLoan.prototype.canIssue = function () {
        return this.isYearRangeValid() && this.isAmountRangeValid();
    };
    InstantLoan.prototype.getMonthRates = function () {
        if (this.canIssue()) {
            return [];
        }
        return [];
    };
    return InstantLoan;
}(BaseLoan));
var houseLoan = new Mortage(100000, 20, 3000, 5);
console.log(houseLoan.canIssue());
console.log(houseLoan.getMonthRates());
var credit = new ConsumerCredit(4000, 1, 40);
console.log(credit.canIssue());
var instantLoan = new InstantLoan(3000, 1);
console.log(instantLoan.canIssue());
