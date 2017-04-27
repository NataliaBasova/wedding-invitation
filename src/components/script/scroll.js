/**
 * Created by TinyPrincess on 27.04.17.
 */
import $ from 'jquery';
$(document).ready(function(){
    $('a[href*=\\#]').on('click', function(e){
        const anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 777);
        e.preventDefault();
        return false;
    });
});
