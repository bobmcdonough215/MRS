$(function () {
    $('.hamburger-menu').on('click', function () {
        $('.toggle').toggleClass('open');
        $('.nav-list').toggleClass('open');
    });
 
    AOS.init({
        easing: 'ease',
        duration: 1000,
    });
 });

 // Initialize and add the map
function initMap() {
    // The location of Uluru
    var MRS = {lat: 39.938911, lng: -75.176024};
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 15, center: MRS});
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: MRS, map: map});
  }

// MDB Lightbox Init
// $(function () {
//     $("#mdb-lightbox-ui").load("mdb-addons/mdb-lightbox-ui.html");
//     });

$(document).on("click", '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
  });

  baguetteBox.run('.tz-gallery');
