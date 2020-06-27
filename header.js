/**JAVASCRIPT FUNCTIONS TO MAKE PAGE MORE USER FRIENDLY AND RESPONSIVE */

/** SCROLL DOWN AND MAKE NAVBAR DARK */
$(function() {
    $(document).scroll(function(){
      var $nav = $("#mainNavbar");
      $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });
  });






/**TO HIDE THE DROPDOWN NAV WHEN CLICKED SOMEWHERE ELSE ON THE PAGE */
$(function(){

    $("#navbarToggle").blur(function (event){
        var screenWidth = window.innerWidth;
        if (screenWidth < 768) {
            $("#navLinks").collapse('hide');
        }
    });
});