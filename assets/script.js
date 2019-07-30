$(document).ready(function(){
    const docArticles = $("#articles");
    const docInput = $("#searchTerm");
    const docStartYear = $("#startYear");
    const docEndYear = $("#endYear");
    const btnSearch = $("#search");
    const btnClear  =   $("#clear");
    
    let input = "";


    const apiKey= "A4S5DC01lXDXTlrU4Kb7hPJR2SnkFgME"

    btnSearch.on("click", (event) => {
        event.preventDefault();
        input = docInput.val();
        console.log(input);
    })

    let url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=${apiKey}`
    $.get(url, function(){
        
    }).then(function(apiData){
        // console.log(apiData.response.docs);
        // buildQuery(response);
    });

    //TODO:

    //pull inputs from fields and insert into queryURL

    //Click event handler for search button
    //Click event handler for clear button









});