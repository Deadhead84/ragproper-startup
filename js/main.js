// Thanks to Maaaaark - https://github.com/maaaaark/bcSwipe/blob/master/jquery.bcSwipe.min.js
!function(t){t.fn.bcSwipe=function(e){var n={threshold:50};return e&&t.extend(n,e),this.each(function(){function e(t){1==t.touches.length&&(u=t.touches[0].pageX,c=!0,this.addEventListener("touchmove",o,!1))}function o(e){if(c){var o=e.touches[0].pageX,i=u-o;Math.abs(i)>=n.threshold&&(h(),t(this).carousel(i>0?"next":"prev"))}}function h(){this.removeEventListener("touchmove",o),u=null,c=!1}var u,c=!1;"ontouchstart"in document.documentElement&&this.addEventListener("touchstart",e,!1)}),this}}(jQuery);

// Swipe functions for Bootstrap Carousel


//Navigation scroll transition


// Descrtions fade in while scrolling effect
  // $(window).scroll(function(){
  //     if($(document).scrollTop() > 900) {
  //       // console.log('working')
  //
  //         $('.testing').addClass('desc-scrolled');
  //
  //       }
  //   })

//     function isOnScreen(elem) {
// 	// if the element doesn't exist, abort
// 	if( elem.length == 0 ) {
// 		return;
// 	}
// 	var $window = jQuery(window)
// 	var viewport_top = $window.scrollTop()
// 	var viewport_height = $window.height()
// 	var viewport_bottom = viewport_top + viewport_height
// 	var $elem = jQuery(elem)
// 	var top = $elem.offset().top
// 	var height = $elem.height()
// 	var bottom = top + height
//
// 	return (top >= viewport_top && top < viewport_bottom) ||
// 	(bottom > viewport_top && bottom <= viewport_bottom) ||
// 	(height > viewport_height && top <= viewport_top && bottom >= viewport_bottom)
// }

jQuery( document ).ready( function() {
  $('.carousel').bcSwipe({ threshold: 50 });

  $(window).scroll(function(){
      if($(document).scrollTop() > 1) {
        // console.log('working')
          $('.navigation').addClass('navigation-scrolled');
          $('.social-media').addClass('is-scrolled');
        } else {
          $('.navigation').removeClass('navigation-scrolled');
          $('.social-media').removeClass('is-scrolled');
        }
    })


  $("#myModal").on('hidden.bs.modal', function (e) {
        $("#myModal iframe").attr("src", $("#myModal iframe").attr("src"));
    });
    // $('.cart-button').click(function(){
    //   // console.log('working!')
    //   require(["mojo/signup-forms/Loader"], function(L) { L.start({"baseUrl":"mc.us18.list-manage.com","uuid":"8bd4038863f6b5d6adf96a875","lid":"8b91f1c3ff"}) })
    //   document.cookie = "MCPopupClosed=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    //   document.cookie = "MCPopupSubscribed=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    //
    // })

        // $('.thumbnail').click(function() {
        // $('#large-image').attr('src',$(this).attr('src').replace('thumb','large'));
        // $('#description').html($(this).attr('alt'));
        // });


});





 // function showMailChimpModal() {
 //    console.log('working!')
 //    require(["mojo/signup-forms/Loader"], function(L) { L.start({"baseUrl":"mc.us18.list-manage.com","uuid":"8bd4038863f6b5d6adf96a875","lid":"8b91f1c3ff"}) })
 //    document.cookie = "MCEvilPopupClosed=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
 //  }
 //
 //  document.getElementsByClassName('fa-shopping-cart').onClick = showMailChimpModal();
