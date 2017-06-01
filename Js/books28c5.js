$(document).ready(function(){
    var container      = $('#books');
    var morePopularCat = $('.more-popular-categories', container);
    
    morePopularCat.on('click', function(e){
        e.preventDefault();
        $('#categories').toggleClass('open');
    });
    
});