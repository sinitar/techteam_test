
    
jQuery(document).ready(function ($) {

    $(".drop-email li a").click(function (e) {
        e.preventDefault();
        var selectedItem = $(this).text();
        $(this).parents('.dropdown').find('.dropdown-toggle').html(selectedItem + ' <span class="caret"></span>');
        $('span[id^="ok-icon"]').remove();

        $(this).html(selectedItem + '<span id="ok-icon" class="ok-icon-gray"></span>');
        $(this).addClass("dropdown-header");
        $('.dropdown').removeClass('open');
    });

    // Clear Cache of localStorage, fix for Less.js | @TBD: REMOVE
    localStorage.clear()

});