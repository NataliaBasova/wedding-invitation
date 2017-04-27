/**
 * Created by TinyPrincess on 27.04.17.
 */
import $ from 'jquery';

$(document).ready(function() {
    $(window).resize(function() {

        if($(window).width() < 701) {
            $('header').addClass("closed");
            $('header').click(function() {
                $(this).toggleClass("open closed");
            });
        }

    })
        .resize();
});
