
$(document).ready(function(){
    setTimeout(function(){
        $('.preloader').fadeOut();
    },1500);


        var btn = $('.to_top');
        btn.hide(); 
        $(window).scroll(function() {
            if ($(window).scrollTop() > 300) {
                btn.fadeIn();
            } else {
                btn.fadeOut();
            }
        });

        btn.on('click', function(e) {
        e.preventDefault();
            $('html, body').animate({scrollTop:0}, '300');
        });

        
        AOS.init();

    $('#slider').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots:false,
        items:1,
    })


    $(window).scroll(function(){
        var sticky = $('.sticky'),
            scroll = $(window).scrollTop();
    
        if (scroll >= 50) sticky.addClass('fixed');
        else sticky.removeClass('fixed');
    });

     // init Isotope
     var $grid = $('.grid').isotope({
        // options
        });
        // filter items on button click
        $('.filter-button-group').on( 'click', 'li', function() {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });
        });
                
        $('.filter-button-group > li').click(function(){
            $('.filter-button-group li').removeClass('active');
            $(this).addClass('active');
        });

        // init Isotope
        var $grid = $('.grid').isotope({
        // options
        });
        // filter items on button click
        $('.choose-button-group').on( 'click', 'li', function() {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });
        });
        // $('.choose-button-group > li').click(function(){
        //     $('.choose-button-group li').removeClass('active');
        //     $(this).addClass('active');
        // });

        var counted = 0;
$(window).scroll(function() {

  var oTop = $('#counter').offset().top - window.innerHeight;
  if (counted == 0 && $(window).scrollTop() > oTop) {
    $('.count').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },
        {
          duration: 3000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
          }

        });
    });
    counted = 1;
  }

});

var acc = document.getElementsByClassName("course-accordion");
	var i;

	for (i = 0; i < acc.length; i++) {
	  acc[i].onclick = function() {
		var panel = this.nextElementSibling;
		var coursePanel = document.getElementsByClassName("course-panel");
		var courseAccordion = document.getElementsByClassName("course-accordion");
		var courseAccordionActive = document.getElementsByClassName("course-accordion active");

		if (panel.style.maxHeight){
			panel.style.maxHeight = null;
			this.classList.remove("active");
		} else 
        { 
			for (var ii = 0; ii < courseAccordionActive.length; ii++) {
				courseAccordionActive[ii].classList.remove("active");
			}
			for (var iii = 0; iii < coursePanel.length; iii++) {
			  this.classList.remove("active");
			  coursePanel[iii].style.maxHeight = null;
			}
		  panel.style.maxHeight = panel.scrollHeight + "px";
		  this.classList.add("active");
		} 
	  }
	}
                
$('#home_testi').owlCarousel({
    loop:true,
    margin:5,
    dots:false,
    navText:['<i class="fa-solid fa-arrow-left-long"></i>','<i class="fa-solid fa-arrow-right-long"></i>'],
    nav:true,
    responsive:{
        0:{
            items:1
        },
        991:{
            items:2
        }
    }
})

$('#main_brand').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
})
$('#latest_blog').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  dots:false,
  navText:['<i class="fa-solid fa-arrow-left-long"></i>','<i class="fa-solid fa-arrow-right-long"></i>'],
  infinite: true,
  autoplay: true,
  default: true,
  autoplaySpeed: 3000,
  speed: 1000,					
  slidesToShow: 3,
  responsive:{
      0:{
          items:1
      },
      768:{
          items:2
      },
      991:{
          items:3
      }
  }
})

document.querySelectorAll(".accordion-item").forEach((item) => {
    item.querySelector(".accordion-item-header").addEventListener("click", () => {
      item.classList.toggle("open");
    });
});

  $('.frm').submit(function(){

    var frm=$('#frm').val();

    if(frm == ""){
      $('#form-error').text('*Please fillup the form and try again...!');
      return false;
  }

  });


});
