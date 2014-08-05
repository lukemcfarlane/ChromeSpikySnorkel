console.log('Spiky Snorkel is now running...');

var showMoreEl = $('img[alt="Show More"]');

if(showMoreEl.size() === 1) {
    var showAllURL = showMoreEl
    	.parent()
    	.attr('href') + '9999999';

    var showAllLink = $('<a></a>');

    showAllLink.attr('href', showAllURL);
    showAllLink.text('Show all records');
    $('.fewerMore')
    	.html(showAllLink);
}


$('div.pShowMore a:first-child').each(function() {
    var oldHrefDecoded = decodeURIComponent($(this).attr('href'));
    var matchArr = oldHrefDecoded.match(/(javascript:showMoreList\('\/.{15}', ')(.*)(',.*)/);
    var oldURL = matchArr[2];
    var newURL = oldURL.replace(/rowsperlist=\d+/, 'rowsperlist=1000'); 
    var newURLEncoded = encodeURIComponent(newURL);
    var newHref = matchArr[1] + newURLEncoded + matchArr[3];
    $(this).attr('href', newHref)
        .text('Show all');
});


