$(document).ready(function () {
    main();
})

function main() {
    getBibles();
    getPassage('Romans1-6');
//    getParsedPassage('John3:16');
}

var getParsedPassage = function(passage) {
    var url = "https://api.biblia.com/v1/bible/parse.js"
    var request = {
        passage: passage,
        key: 'da857b461ba05deb82f4430dcf8d71cc'
    }
    
    var result = $.ajax({
        url: url,
        data: request,
        dataType: "json",
        type: "GET",
    })
    .done(function(result) {
//        $('.results').append(result);
        DEBUG(result);
    })
    .fail(function(jqXHR, error, errorThrown){
        DEBUG(error);
    });
}

var getPassage = function(passage) {
    var url = "http://api.biblia.com/v1/bible/content/kjv.html";
    var request = {        
        passage: passage,
        style: 'orationBibleParagraphs',
        key: 'da857b461ba05deb82f4430dcf8d71cc'
    };
    
    var result = $.ajax({
        url: url,
        data: request,
        dataType: "HTML",
        type: "GET",
    })
    .done(function(result) {
        $('.results').append(result);
        DEBUG(result);
    })
    .fail(function(jqXHR, error, errorThrown){
        DEBUG(error);
    });
}

var getBibles = function() {
    
    var url = "http://api.biblia.com/v1/bible/find";
    var request = {
        key: 'da857b461ba05deb82f4430dcf8d71cc'};

    var result = $.ajax({
        url: url,
        data: request,
        dataType: "jsonp",
        type: "GET",
    })
    .done(function(result) {
        $.each(result.bibles, function(i, bible) {
            // Get bible and abreviatedTitle as DOM element and add to results DIV
            var bibleData = getBibleData(bible);
            $('.results').append(bibleData);
        })
    })
    .fail(function(jqXHR, error, errorThrown){
        DEBUG(error);
    });
};

var getBibleData = function(bible) {
    var result = '<p>' + bible.title +' (' + bible.abbreviatedTitle + '): ' + bible.bible + '</p>'
    return result;
}

          
          
          

// API Key: da857b461ba05deb82f4430dcf8d71cc

var DEBUG = function(data) {
    console.log(data);
}