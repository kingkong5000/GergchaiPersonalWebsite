$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }if (this.scrollY > 20) {
            $('.img').addClass("sticky");
        } else {
            $('.img').removeClass("sticky");
        }
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
      
    });
      //slide-up script
      $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
    })

    //typing animation script
     // typing text animation script
     var typed = new Typed(".typing", {
        strings: [" a former Graphic Design", "interested in QA work"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: [" a former Graphic Design", "interested in QA work"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    
})

