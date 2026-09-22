// portfolio | index.js
gsap.registerPlugin(ScrollTrigger);

gsap.from("#about_me .profile > *", {
    scrollTrigger: {
        trigger: "#about_me",
        start: "top 60%",
    },
    y: -50,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
});

gsap.from("#about_me .edu_skill > div", {
    scrollTrigger: {
        trigger: "#about_me .edu_skill",
        start: "top 65%",
    },
    y: -50,
    opacity: 0,
    duration: 1,
    stagger: 0.3,
});

gsap.from("#about_me .skill li", {
    scrollTrigger: {
        trigger: "#about_me .skill",
        start: "top 70%",
    },
    x: -30,
    opacity: 0,
    duration: 1,
    stagger: 0.1,
});

gsap.to("#about_me .scroll img", {
    y: -20,
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
        duration: 0.8, 
        stagger: 0.15, 
        scrollTrigger: { 
            trigger: "#project1", 
            start: "top 85%" 
        } 
    }
);

// ================= 프로젝트 2
gsap.fromTo("#project2 .project_detail > *", 
    { x: -30, opacity: 0 }, 
    { 
        x: 0, 
        opacity: 1, 
        duration: 0.8, 
        stagger: 0.15, 
        scrollTrigger: { 
            trigger: "#project2", 
            start: "top 85%" 
        } 
    }
);

// ================= 프로젝트 3
gsap.fromTo("#project3 .project_detail > *", 
    { x: -30, opacity: 0 }, 
    { 
        x: 0, 
        opacity: 1, 
        duration: 0.8, 
        stagger: 0.15, 
        scrollTrigger: { 
            trigger: "#project3", 
            start: "top 85%" 
        } 
    }
);