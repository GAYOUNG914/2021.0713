$(function () {
  //dropdown navigation bar
  $(".nav > li").hover(
    function () {
      $(this).find("a").addClass("on");
      $(this).find(".sub_gnb").addClass("on");
      $(".header_bg").addClass("on");
      // $(".header_bg").hover(
      //   function () {},
      //   function () {
      //     $(".header_bg").removeClass("on");
      //   }
      // );
      // $(this)
      //   .find(".sub_gnb")
      //   .hover(
      //     function () {},
      //     function () {
      //       $(this).find(".sub_gnb").removeClass("on");
      //     }
      //   );
    },
    function () {
      $(this).find("a").removeClass("on");
      $(this).find(".sub_gnb").removeClass("on");
      $(".header_bg").removeClass("on");
    }
  );

  //unactive a tag
  $('a[href="#"]').click(function (e) {
    e.preventDefault();
  });

  //back to top
  $(".back_to_top").click(function () {
    let thisElem = $(this.hash);
    let offsetElem = thisElem.offset();
    $("html,body").stop();
    $("html,body").animate({ scrollTop: offsetElem.top }, 700);
  });

  //footer icon
  $(".cooperation").click(function () {
    if ($(".cooperation_list").height() == 0) {
      $(".cooperation_list").addClass("on");
      $(this).addClass("on");
    } else {
      $(".cooperation_list").removeClass("on");
      $(this).removeClass("on");
    }
  });
});
