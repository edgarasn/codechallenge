class TextAreaSettings {
    constructor(minRows, maxRows, id) {
        this.minRows = minRows;
        this.maxRows = maxRows;
        this.id = id;        
    }  
}

let defaultSettings = new TextAreaSettings(10,20,"content");

function handleChange() {    
    
    updateTextArea(defaultSettings);
}

function updateTextArea(defaultSettings){
    let textRows = getTextRowsCount(defaultSettings.id);    
    
    if(isTextAreaEmpty(defaultSettings.id))
    {        
        setRows(defaultSettings.id,defaultSettings.minRows);        
    }else if(isTextRowsExceedsGivenRows(textRows,defaultSettings.minRows))
    {
        setRows(defaultSettings.id,defaultSettings.maxRows);        
    }else if(isTextRowsExceedsGivenRows(textRows,defaultSettings.maxRows))
    {
        setScrollBar(defaultSettings.id);
    }
}

function isTextRowsExceedsGivenRows(textRows, givenRows){
 return textRows > givenRows
}

function isTextAreaEmpty(textAreaId){
    return document.getElementById(textAreaId).value == ''
}
function getTextRowsCount(textAreaId){
    return document.getElementById(textAreaId).value.split("\n").length;
}

function setRows(textAreaId, rows){
    document.getElementById(textAreaId).rows = rows;
}

function setScrollBar(textAreaId){
    document.getElementById(textAreaId).style.overflowY = "scroll";
}