(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

    var options = [
      {selector: '#image-test', offset: 150, callback: function() {
        Materialize.fadeInImage("#image-test");
        console.log('now')
      } }
    ];
    Materialize.scrollFire(options);

  }); // end of document ready
})(jQuery); // end of jQuery name space
