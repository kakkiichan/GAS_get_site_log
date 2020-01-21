var shid="スプレッドシートIDを記入してください";

function doGet() {
    
  var t=HtmlService.createTemplateFromFile("index");
  
  return t.evaluate();
  
}

function setlog(browser,os,height,width){

var time=new Date();  

var user=Session.getActiveUser();

var sh=SpreadsheetApp.openById(shid).getSheetByName("ログ");
  
sh.appendRow([time,user,browser,os,height,width]);

}
