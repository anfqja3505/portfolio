// portfolio | index.js


//스크롤 트리거
gsap.registerPlugin(ScrollTrigger);

gsap.from("#about_me .profile > *", {
    scrollTrigger: {
        trigger: "#about_me",
        start: "top 60%",
    },
    y: -70,
    opacity: 0,
    duration: 1,
    stagger: 0.3,
});

gsap.from("#about_me .edu_skill > div", {
    scrollTrigger: {
        trigger: "#about_me .edu_skill",
        start: "top 65%",
    },
    y: -70,
    opacity: 0,
    duration: 1,
    stagger: 0.4,
});

gsap.from("#about_me .skill li", {
    scrollTrigger: {
        trigger: "#about_me .skill",
        start: "top 90%",
    },
    x: -50,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
});

gsap.to("#about_me .scroll img", {
    y: -50,
    repeat: -1,
    duration: 1 ,
});

// ============================================== 프로젝트
// ================= 프로젝트 1
gsap.fromTo("#project1 .project_detail > *", 
    { x: -30, opacity: 0 }, 
    { 
        x: 0, 
        opacity: 1, 
        duration: 1.2, 
        stagger: 0.2, 
        toggleActions: "restart none none restart",
        scrollTrigger: { 
            trigger: "#project1", 
            start: "top 40%" 
        } 
    }
);
gsap.fromTo("#project1 .project_img > *", 
    { y: -100, opacity: 0 }, 
    { 
        y: 0, 
        opacity: 1, 
        duration: 0.8, 
        stagger: 0.2, 
        toggleActions: "restart none none restart",
        scrollTrigger: { 
            trigger: "#project1", 
            start: "top 40%" 
        } 
    }
);

// ================= 프로젝트 2
gsap.fromTo("#project2 .project_detail > *", 
    { x: -30, opacity: 0 }, 
    { 
        x: 0, 
        opacity: 1, 
        duration: 1.2, 
        stagger: 0.2, 
        scrollTrigger: { 
            trigger: "#project2", 
            start: "top 40%" 
        } 
    }
);
gsap.fromTo("#project2 .project_img > *", 
    { y: -100, opacity: 0 }, 
    { 
        y: 0, 
        opacity: 1, 
        duration: 0.8, 
        stagger: 0.2, 
        scrollTrigger: { 
            trigger: "#project2", 
            start: "top 40%" 
        } 
    }
);

// ================= 프로젝트 3
gsap.fromTo("#project3 .project_detail > *", 
    { x: -30, opacity: 0 }, 
    { 
        x: 0, 
        opacity: 1, 
        duration: 1.2, 
        stagger: 0.2, 
        scrollTrigger: { 
            trigger: "#project3", 
            start: "top 40%" 
        } 
    }
);
gsap.fromTo("#project3 .project_img > *", 
    { y: -100, opacity: 0 }, 
    { 
        y: 0, 
        opacity: 1, 
        duration: 0.8, 
        stagger: 0.2, 
        scrollTrigger: { 
            trigger: "#project3", 
            start: "top 40%" 
        } 
    }
);

//그래픽 
const graphicSwiper = new Swiper('.graphic_poster', {
    slidesPerView: 4, 
    spaceBetween: 20,         
    loop: true,
    speed: 4000,
    centeredSlides: true,
    autoplay: {
        delay: 0,
        disableOnInteraction: false, 
    },
});

const slides = document.querySelectorAll('.graphic_poster .swiper-slide');
const imageFull = document.querySelector('.image_full');
const imgFullContent = document.querySelector('.img_full_content');
const fullCloseBtn = document.querySelector('.full_close_btn');

slides.forEach(slide => {
    slide.addEventListener('click', function() {
        const fullSrc = this.getAttribute('data-full');
        if (fullSrc) {
            imgFullContent.setAttribute('src', fullSrc);
            imageFull.classList.add('active');
        }
    });
});

fullCloseBtn.addEventListener('click', function() {
    imageFull.classList.remove('active');
});

imageFull.addEventListener('click', function(e) {
    if (e.target === imageFull) {
        imageFull.classList.remove('active');
    }
});



gsap.fromTo(".graphic_wrap > h2", 
    { y: -100, opacity: 0 }, 
    { 
        y: 0, 
        opacity: 1, 
        duration: 0.8, 
        scrollTrigger: { 
            trigger: ".graphic", 
            start: "top 40%" 
        } 
    }
);
gsap.fromTo(".graphic_wrap > p", 
    { y: -100, opacity: 0 }, 
    { 
        y: 0, 
        opacity: 1, 
        duration: 0.8,
        delay:0.2, 
        scrollTrigger: { 
            trigger: ".graphic", 
            start: "top 40%" 
        } 
    }
);