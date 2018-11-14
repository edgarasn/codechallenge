"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TextAreaExtender = function () {
    function TextAreaExtender(minRows, maxRows, id) {
        _classCallCheck(this, TextAreaExtender);

        this.maxRows = maxRows;
        this.minRows = minRows;
        this.id = id;
    }

    _createClass(TextAreaExtender, [{
        key: "extend",
        value: function extend() {
            var _this = this;

            textarea.addEventListener("input", function () {
                if (_this.isTextAreaEmpty(_this.id)) {
                    _this.setRows(_this.id, _this.minRows);
                } else if (_this.isTextRowsExceedsGivenRows(_this.id, _this.minRows)) {
                    _this.setRows(_this.id, _this.maxRows);
                } else if (_this.isTextRowsExceedsGivenRows(_this.id, _this.maxRows)) {
                    _this.setScrollBar(_this.id);
                }
            });
        }
    }, {
        key: "getTextRowsCount",
        value: function getTextRowsCount(textAreaId) {
            return document.getElementById(textAreaId).value.split("\n").length;
        }
    }, {
        key: "isTextRowsExceedsGivenRows",
        value: function isTextRowsExceedsGivenRows(textAreaId, givenRows) {
            var textRows = this.getTextRowsCount(textAreaId);
            return textRows > givenRows;
        }
    }, {
        key: "isTextAreaEmpty",
        value: function isTextAreaEmpty(textAreaId) {
            return document.getElementById(textAreaId).value === '';
        }
    }, {
        key: "setRows",
        value: function setRows(textAreaId, rows) {
            document.getElementById(textAreaId).rows = rows;
        }
    }, {
        key: "setScrollBar",
        value: function setScrollBar(textAreaId) {
            document.getElementById(textAreaId).style.overflowY = "scroll";
        }
    }]);

    return TextAreaExtender;
}();

var textAreaId = 'textarea';
var textBox = document.getElementById(textAreaId);
var Extender = new TextAreaExtender(10, 20, textAreaId);
textBox.addEventListener('input', Extender.extend());
