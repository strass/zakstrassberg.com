$(document).ready(function() {
    console.log("ready!");

    // var maxH3Height;
    // resizeWorkH3();
    // $(window).resize(function() {
    //     resizeWorkH3();
    // });

    // function resizeWorkH3() {
    //     console.log("resized");
    //     var maxH3Height = 0;
    //     $.each($("#work article h3 a"),function() {
    //         if ($(this).height() > maxH3Height) {
    //             maxH3Height = $(this).height();
    //             console.log(maxH3Height);
    //         }
    //         $.each($("#work article h3 a").height(maxH3Height))
    //     });
    // }

    $('#testimonialSlider').slick({
        autoplay: true,
        autoplaySpeed: 20000,
        dots: true,
        pauseOnHover: true,
        speed: 1500,
    });
});
