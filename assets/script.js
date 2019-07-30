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

    function convertYear(year){
        let yearArray = year.split("-");
        return(yearArray.join(""));
    }

    const apiKey = "A4S5DC01lXDXTlrU4Kb7hPJR2SnkFgME"

    btnSearch.on("click", (event) => {

        event.preventDefault();

        input = docInput.val();

        //grab startYear and endYear input vals        
        let startYear = docStartYear.val();
        let endYear = docEndYear.val();
        startYear = convertYear(startYear);
        endYear = convertYear(endYear);


        numArticles = docNumArticles.val();

        url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${input}&api-key=${apiKey}&begin_date=${startYear}&end_date=${endYear}`

        $.get(url, function () {

        }).then(function (apiData) {
            let articleArray = apiData.response.docs;
            console.log(articleArray);
            for (let i = 0; i < numArticles; i++) {

                let articleElement = $("<div>");
                let articleTitle = $("<h2>").addClass("title").text(articleArray[i].headline.main);
                let byline = $("<h4>").addClass("byline").text(articleArray[i].byline.original);
                let web_url = $('<a>').addClass("web_url").attr("href", articleArray[i].web_url).text("Go to article");
                let snippet = $("<h5>").addClass("snippet").text(articleArray[i].snippet);



                articleElement.append(articleTitle, byline, snippet, web_url);
                docArticles.append(articleElement);
            };
        });

    })


    //TODO:

    //pull inputs from fields and insert into queryURL

    //Click event handler for search button
    //Click event handler for clear button









});