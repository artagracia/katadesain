
$(document).ready(function() {
  // banner slider 
  var owl = $('#BannerSlider').owlCarousel({
    loop: true,
    margin: 0,
    items: 1,
    dots: true,
    autoHeight: true,
    autoplay: true
  });
  // sticky header
  $(window).scroll(function() {
    if ($(this).scrollTop() > 1) {
      $('body').addClass("sticky");
    } else {
      $('body').removeClass("sticky");
    }
  });
  // smooth scroll
  $(".smooth-scroll").click(function() {
    var target = $(this).attr("href"),
      scrollTo = $(target).offset().top,
      headerHeight = $('#Header').outerHeight();
    console.log(headerHeight);
    $('html, body').animate({ scrollTop: scrollTo - headerHeight });
    $('#nav-icon1').trigger("click");
    $("body").removeClass("menu-active");
  });
  //menu icon animation
  $('#nav-icon1').click(function() {
    $(this).toggleClass('open');
    $("body").toggleClass("menu-active");
  });
  //menu link click
  // magnific video popup  
  $('.popup-youtube-wst').magnificPopup({
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
  });
  // contact form script
  $('.form-wrap input, .form-wrap textarea, .email-box input').blur(function() {
    tmpval = $(this).val();
    if (tmpval == '') {
      $(this).addClass('empty');
      $(this).removeClass('not-empty');
    } else {
      $(this).addClass('not-empty');
      $(this).removeClass('empty');
    }
  });
  // Our Work filter
  $('#OurWork .filter-list ul li').click(function() {
    dis = $(this),
      disFilter = dis.data("filter");
    finalFilter = disFilter == "all" ? "*" : "." + disFilter;
    dis.addClass('active').siblings().removeClass('active');
    $("#OurWork .filter-box .each-box").hide().filter(finalFilter).show();
  });
  let firstli=$('#OurWork .filter-list ul li').first();
  console.log(firstli);
  disFilter = firstli.data("filter");
    finalFilter = disFilter == "all" ? "*" : "." + disFilter;
    $("#OurWork .filter-box .each-box").hide().filter(finalFilter).show();


    $('.column').click(function(){
      console.log($(this).data("param"));
      if($(this).data("param") == 'photography'){
        $('#myModal-photo').css('display','block');
      }else{
        $('#myModal').css('display','block');  
        $('#myModal-ilustrasi').css('display','block');
      }
      
      $('.mySlides').css('display','block');
      var img_type = $(this).data("img") ;
      $('.img-mdl').attr('src',img_type);
    });

});

function closeModal() {
  document.getElementById("myModal").style.display = "none";
  document.getElementById("myModal-photo").style.display = "none";
  document.getElementById("myModal-ilustrasi").style.display = "none";
}


