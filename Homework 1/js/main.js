class TextAreaExtender {
    constructor(minRows, maxRows, id) {
        this.maxRows = maxRows;
        this.minRows = minRows;
        this.id = id;
    }

    extend() {
        textarea.addEventListener("input", () => {            
            if (this.isTextAreaEmpty(this.id)) {
                this.setRows(this.id, this.minRows);
            } else if (this.isTextRowsExceedsGivenRows(this.id, this.minRows)) {
                this.setRows(this.id, this.maxRows);
            } else if (this.isTextRowsExceedsGivenRows(this.id, this.maxRows)) {
                this.setScrollBar(this.id);
            }
        });
    }

    getTextRowsCount(textAreaId) {
        return document.getElementById(textAreaId).value.split("\n").length;
    }

    isTextRowsExceedsGivenRows(textAreaId, givenRows) {
        let textRows = this.getTextRowsCount(textAreaId);
        return textRows > givenRows;
    }

    isTextAreaEmpty(textAreaId) {
        return document.getElementById(textAreaId).value === '';
    }

    setRows(textAreaId, rows) {
        document.getElementById(textAreaId).rows = rows;
    }

    setScrollBar(textAreaId) {
        document.getElementById(textAreaId).style.overflowY = "scroll";
    }
}

const textAreaId = 'textarea';
const textBox = document.getElementById(textAreaId);
let extender = new TextAreaExtender(10, 20, textAreaId);
textBox.addEventListener('input', extender.extend());