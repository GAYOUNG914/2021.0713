$(function () {
  //dropdown navigation bar
  // $("#nav .nav li").hover(
  //   function () {
  //     $(".nav_wrap").addClass("on");
  //     $(".sub_gnb").slideDown();
  //     $(".sub_gnb").hover(
  //       function () {},
  //       function () {
  //         $(".sub_gnb").slideUp();
  //       }
  //     );
  //   },
  //   function () {
  //     $(".nav_wrap").removeClass("on");
  //   }
  // );

  //unactive a tag
  $('a[href="#"]').click(function (e) {
    e.preventDefault();
  });

  //back to top
  $(".back_to_top a").click(function () {
    let thisElem = $(this.hash);
    let offsetElem = thisElem.offset();
    $("html,body").stop();
    $("html,body").animate({ scrollTop: offsetElem.top }, 1000);
  });
});
