
//Navbar toggle icon
function navbar_toggler() {
    $('.navbar-toggler[data-toggle=collapse]').click(function () {
        if ($(".navbar-toggler[data-bs-toggle=collapse] i").hasClass('fa-bars')) {
        } else {
            $(".navbar-toggler[data-bs-toggle=collapse] i").removeClass("fa-times");
        }
    });
  }
  navbar_toggler();
  
// Navbar clone in mobile device
function navClone() {
    $('.js-clone-nav').each(function () {
        var $this = $(this);
        $this.clone().attr('class', 'navbar-nav ml-auto').appendTo('.d2c_mobile_view_body');
    });

    $('.d2c_mobile_view .nav-link').click(function () {
        $(".nav-link").removeClass("active");
        $('.d2c_mobile_view').removeClass('show');
        $(this).toggleClass('active');
    });
    }
    navClone();

// Partner Slider
$('.d2c_partner_slider').slick({
centerMode: true,
centerPadding: '0px',
dots: false,
arrows: false,
infinite: true,
autoplay:true,
speed: 2000,
slidesToShow: 6,
slidesToScroll: 1,
responsive: [
    {
    breakpoint: 1500,
    settings: {
        slidesToShow: 5,
    }
    },
    {
    breakpoint: 992,
    settings: {
        slidesToShow: 3,
    }
    },
    {
    breakpoint: 480,
    settings: {
        slidesToShow: 2,
    }
    }
]
});

// Testimonial Slider
$('.d2c_testimonial_slider').slick({
    centerMode: true,
    centerPadding: '0px',
    dots: false,
    arrows: true,
    infinite: true,
    autoplay:true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="d2c_carousel_left_btn" aria-label="carousel-control"><i class="fas fa-arrow-left"></i></button>',
    nextArrow: '<button type="button" class="d2c_carousel_right_btn" aria-label="carousel-control"><i class="fas fa-arrow-right"></i></button>',
    responsive: [
        {
        breakpoint: 1400,
        settings: {
            slidesToShow: 1,
        }
        },
        {
        breakpoint: 1200,
        settings: {
            slidesToShow: 1,
        }
        },
        {
        breakpoint: 992,
        settings: {
            slidesToShow: 1,
        }
        },
        {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
        }
        }
    ]
});

// Form Validation Js
(function () {
    'use strict'
  
    var forms = document.querySelectorAll('.needs-validation')
  
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
    })
})();

// WOW JS
    new WOW().init();

// Preloader JS
window.addEventListener('load', function() {
    var preloader = document.querySelector('.preloader');
    preloader.classList.add('hide');
});

// ScrollBtn JS
window.onscroll = function() { scrollFunction() };

    function scrollFunction() {
    var scrollBtn = document.getElementById("scrollBtn");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollBtn.classList.add("show");
    } else {
        scrollBtn.classList.remove("show");
    }
}

// Counter
$(document).ready(function() {

    var counters = $(".count");
    var countersQuantity = counters.length;
    var counter = [];
  
    for (i = 0; i < countersQuantity; i++) {
      counter[i] = parseInt(counters[i].innerHTML);
    }
  
    var count = function(start, value, id) {
      var localStart = start;
      setInterval(function() {
        if (localStart < value) {
          localStart++;
          counters[id].innerHTML = localStart;
        }
      }, 40);
    }
  
    for (j = 0; j < countersQuantity; j++) {
      count(0, counter[j], j);
    }
  });

// Matrix Rain Effect for Footer
document.addEventListener('DOMContentLoaded', function() {
    const matrixRain = document.getElementById('matrix-rain');
    if (!matrixRain) return;
    
    const width = matrixRain.offsetWidth;
    const height = matrixRain.offsetHeight;
    const drops = 50; // Number of drops
    
    for (let i = 0; i < drops; i++) {
        createDrop(matrixRain, width, height);
    }
    
    // Create new drops periodically
    setInterval(() => {
        if (matrixRain.childElementCount < 100) { // Limit the number of drops
            createDrop(matrixRain, width, height);
        }
    }, 300);
});

function createDrop(container, width, height) {
    const drop = document.createElement('div');
    drop.className = 'matrix-drop';
    
    // Random position
    const x = Math.floor(Math.random() * width);
    drop.style.left = x + 'px';
    
    // Random speed (3-8 seconds)
    const duration = 3 + Math.random() * 5;
    drop.style.animationDuration = duration + 's';
    
    // Random delay
    const delay = Math.random() * 5;
    drop.style.animationDelay = delay + 's';
    
    container.appendChild(drop);
    
    // Remove the drop after animation completes
    setTimeout(() => {
        if (drop.parentNode === container) {
            container.removeChild(drop);
        }
    }, (duration + delay) * 1000);
}

// Theme Switcher
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle.querySelector('i');
    const currentTheme = localStorage.getItem('theme') || 'dark';

    // Set initial theme
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeIcon(currentTheme);

    // Toggle theme on button click
    themeToggle.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });

    function updateThemeIcon(theme) {
        if (theme === 'dark') {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        } else {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        }
    }
});


