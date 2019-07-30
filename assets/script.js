$(document).ready(function () {
    const docArticles = $("#articles");
    const docInput = $("#searchTerm");
    const docStartYear = $("#startYear");
    const docEndYear = $("#endYear");
    const btnSearch = $("#search");
    const btnClear = $("#clear");
    const docNumArticles = $("#numArticles");
    
    let numArticles = 5;

    let input = "";
    let url = "";


    const apiKey = "A4S5DC01lXDXTlrU4Kb7hPJR2SnkFgME"

    btnSearch.on("click", (event) => {
        
        event.preventDefault();

        input = docInput.val();

        //grab startYear and endYear input vals        
        let startYear = docStartYear.val();
        let endYear = docEndYear.val();

        numArticles = docNumArticles.val();

        url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${input}&api-key=${apiKey}`

        $.get(url, function () {
    
        }).then(function (apiData) {
            let articleArray = apiData.response.docs;
            console.log(articleArray);
            for( let i = 0; i < numArticles; i++) {

                let articleElement = $("<div>");
                let articleTitle = $("<h2>").addClass("title").text(articleArray[i].headline.main);
                articleElement.append(articleTitle);
                docArticles.append(articleElement);
            };
        });

    })


    //TODO:

    //pull inputs from fields and insert into queryURL

    //Click event handler for search button
    //Click event handler for clear button









});