/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");


$("button").click(function() {
    $('html,body').animate({
        scrollTop: $(".second").offset().top},
        'slow');
});