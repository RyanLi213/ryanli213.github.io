$(document).ready(function() {


    $(window).scroll(function(){
        if($(this).scrollTop()> 100) {
            $('.header-area').addClass('sticky');

        } else{
            $('.header-area').removeClass('sticky');
        }
    });

    $('.header ul li a').click(function(){
        $('header ul li a').removeClass('active');
        $(this).addClass("active");

    })
    
   
    var options = {
        strings: ['Emerging Data Scientist', 'Athlete', 'Student @ McMaster University','Gamer'],
        typeSpeed: 50, loop: true};
    var typed = new Typed('.element', options);
    
    ScrollReveal({
        distance: '100px', 
        duration:2000,
        delay:200

    });
    ScrollReveal().reveal('.header a, .bannar-content, .about-content', {origin: 'left'});
    ScrollReveal().reveal('.header ul, .bannar-img, .about-skills', {origin: 'right'});
    ScrollReveal().reveal('.section-title', {origin: 'top'});
    ScrollReveal().reveal('.project, .contact, .footer-area', {origin: 'bottom'});

    let menu_icon = document.querySelector('.menu-icon i')
    let menu_list = document.querySelector('.header ul')

    menu_icon.onClick = () => {
        menu_icon.classList.toggle('bx-x');
        menu_list.classList.toggle('show');
    }
})
