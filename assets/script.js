$(document).ready(function(){
    const docArticles = $("#articles");
    const docInput = $("#searchTerm");
    const docStartYear = $("#startYear");
    const docEndYear = $("#endYear");
    const btnSearch = $("#search");
    const btnClear  =   $("#clear");

    const apiKey= "A4S5DC01lXDXTlrU4Kb7hPJR2SnkFgME"

    let url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=${apiKey}`
    $.get(url, function(){
        
    }).then(function(response){
        console.log(response);
    });








});