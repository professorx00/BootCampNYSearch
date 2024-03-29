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
        docArticles.empty();

        event.preventDefault();

        input = docInput.val();

        //grab startYear and endYear input vals        
        let startYear = docStartYear.val();
        let endYear = docEndYear.val();
        startYear = convertYear(startYear);
        endYear = convertYear(endYear);


        numArticles = docNumArticles.val();
        if(startYear!="" && endYear!=""){
            url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${input}&api-key=${apiKey}&begin_date=${startYear}&end_date=${endYear}`
        }
        else{
            url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${input}&api-key=${apiKey}`
        }
        
        $.get(url, function () {

        }).then(function (apiData) {
            UpdatePage(apiData, numArticles, docArticles);
        });

    })
    btnClear.on("click",()=>{
        docInput.attr("value","");
        docArticles.empty();


    })

    //TODO:

    //pull inputs from fields and insert into queryURL

    //Click event handler for search button
    //Click event handler for clear button









});

function UpdatePage(apiData, numArticles, docArticles) {
    let articleArray = apiData.response.docs;
    for (let i = 0; i < numArticles; i++) {
        let articleElement = $("<div>").addClass("article col-md-11");
        let titleBlock = $("<div>").addClass("col-md-12 text-center titleBlock")
        let articleTitle = $("<h3>").addClass("title").text(`${i+1}: ${articleArray[i].headline.main}`);
        let byline = $("<h6>").addClass("byline").text(articleArray[i].byline.original);
        let snippet = $("<h5>").addClass("snippet").text(articleArray[i].snippet);
        let linkBlock = $("<div>").addClass("link col-md-12 text-right");
        let web_url = $('<a>').addClass("web_url btn btn-primary").attr("href", articleArray[i].web_url).text("Go to article");
        linkBlock.append(web_url);
        titleBlock.append(articleTitle)
        articleElement.append(titleBlock, byline, snippet, linkBlock);
        docArticles.append(articleElement);
    }
    ;
}
