$(document).ready(function() {

  $(".item").hover(function(){
    $(this).css("background-color","#E0552F;");
  }, function(){
    $(this).css("background-color","#8F8D87");
  });

  window.onscroll = function(){
    scrollFunction();
  };

  function scrollFunction() {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
      document.getElementById("navbar").className = "smallnav";
      document.getElementsByClassName("item").className = "smallitem";
      $(".item").hover(function(){
        $(this).css("height","40px");
      }, function(){
        $(this).css("height","40px");
      });

    } else {
      document.getElementById("navbar").className = "bignav";
      document.getElementsByClassName("item").className = "bigitem";
      $(".item").hover(function(){
        $(this).css("height","90px");
      }, function(){
        $(this).css("height","90px");
      });
    }
  }


  var mymap = L.map('mapid').setView([37.78, -122.46], 13);
  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mymap);
  var marker = L.marker([37.78, -122.46]).addTo(mymap);
  marker.bindPopup('Mr. Penumbra\'s 24-Hour Bookstore').openPopup();

//  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
//    maxZoom: 18,
//}).addTo(map);

  console.log('If you\'re seeing this, say hi! https://github.com/christinahouck');
});

// pk.eyJ1IjoiY2hyaXN0aW5hbWFydGluZXoiLCJhIjoiY2pxNXp2ZGNvMDhrNDQ5bGhlMnVtMXgxNSJ9.0Pr9hMVJfLv67rVM-pl9Ug
