$(function () {
    // applying photobox on a `gallery` element which has lots of thumbnails links.
    // Passing options object as well:
    //-----------------------------------------------
    $('.projects__photo').photobox('a',{ time:0 });

    // using a callback and a fancier selector
    //----------------------------------------------
    $('.projects__photo').photobox('li > a.family',{ time:0 }, callback);
    function callback(){
       console.log('image has been loaded');
    }

    // destroy the plugin on a certain gallery:
    //-----------------------------------------------
    // $('#gallery').photobox('destroy');
    //
    // // re-initialize the photbox DOM (does what Document ready does)
    // //-----------------------------------------------
    // $('#gallery').photobox('prepareDOM');
});
