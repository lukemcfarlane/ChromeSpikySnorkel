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
