$(document).ready(function () {
    main();
})

function main() {
    
}


var getData = function(tag) {

    //
    var url = "";
    var request = {
        site: 'stackoverflow'};

    var result = $.ajax({
        url: url,
        data: request,
        dataType: "jsonp",
        type: "GET",
    })
    .done(function(result){
        var searchResults = showSearchResults(tag, result.items.length);

        $('.search-results').html(searchResults);

        $.each(result.items, function(i, item) {
            var answerer = showAnswerer(item);
            $('.results').append(answerer);
        });
    })
    .fail(function(jqXHR, error, errorThrown){
        var errorElem = showError(error);
        $('.search-results').append(errorElem);
    });
};