console.log("executing script");
$(document).ready(function() {
  $("#tweet").attr("data-text", "using jQuery");
  $.getJSON("https://api.forecast.io/forecast/5eadb50d1f78c301cf8831741c252d78/43.587557,-110.827645?callback=?", function() {console.log("bam")});
 $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&callback=?",function() {
      console.log("success");
    });  
  
  
  
  
  
  
});