// // var menuIcon = document.getElementById('menu-icon');
// // var isDisplaying = false;
// // var popMenu = document.getElementById('navbar')
// // menuIcon.onclick= function(){
    
// //     popMenu.style.zIndex = "1000";
// //     if(!isDisplaying){
// //         popMenu.style.display = "block";
// //         menuIcon.classList.replace("fa-bars","fa-x");
// //         isDisplaying = true;
// //         // var navMenu = document.querySelectorAll('#navbar a');
// //         // navMenu.forEach(function(link) {
// //         //     link.addEventListener('click', function() {
// //         //         console.log("hello");
// //         // });
// //         // isDisplaying = false
// //         // });
// //     }else{
// //         popMenu.style.display = "none"
// //         menuIcon.classList.replace("fa-x", "fa-bars");
// //         isDisplaying = false;
    
// //     }
    
// // }

// var menuIcon = document.getElementById('menu-icon');
// var isDisplaying = false;
// var popMenu = document.getElementById('navbar');
// var links = document.querySelectorAll('#navbar a');
// var load = false
// // var scroll = false

// menuIcon.onclick = function () {
//     popMenu.style.zIndex = "1000";
//     if (!isDisplaying) {
//         popMenu.style.display = "block";
//         menuIcon.classList.replace("fa-bars", "fa-x");
//         isDisplaying = true;
//     } else {
//         popMenu.style.display = "none";
//         menuIcon.classList.replace("fa-x", "fa-bars");
//         isDisplaying = false;
//     }
// };

// //code to get the preloader
// var preloader = document.getElementById('preloader')
// function myFunction(){
//     preloader.style.display = 'none';
//     load = true
//     console.log(load,'load')

// }

// // Close the navbar when a link is pressed
// links.forEach(function (link) {
//     link.addEventListener('click', function () {
//         // Check if the window width is less than or equal to 768 pixels (adjust as needed)
//         if (window.innerWidth <= 840) {
//             popMenu.style.display = 'none';
//             menuIcon.classList.replace("fa-x", "fa-bars");
//             isDisplaying = false;
//         }
//     });
// });

// // Optional: Close the navbar when the window is resized beyond a certain width
// window.addEventListener('resize', function () {
//     if (window.innerWidth > 768) {
//         popMenu.style.display = 'block';
//     }
// });




// // Add this JavaScript code
// // document.addEventListener('DOMContentLoaded', function () {
// //     const accordions = document.querySelectorAll('.accordion-item');

// //     accordions.forEach(function (accordion) {
// //         accordion.addEventListener('click', function () {
// //             const content = this.nextElementSibling;

// //             if (content.style.maxHeight) {
// //                 // Close the accordion
// //                 content.style.maxHeight = null;
// //                 content.style.opacity = 0;
// //             } else {
// //                 // Open the accordion
// //                 content.style.maxHeight = content.scrollHeight + 'px';
// //                 content.style.opacity = 1;
// //             }
// //         });
// //     });
// // });
// document.addEventListener('DOMContentLoaded', function () {
//     const items = document.querySelectorAll('.item');

//     items.forEach(function (item) {
//         const title = item.querySelector('.title');
//         title.addEventListener('click', function () {
//             // Close all accordions
//             items.forEach(function (otherItem) {
//                 if (otherItem !== item) {
//                     otherItem.querySelector('.title').classList.remove('open');
//                     otherItem.querySelector('.content').classList.remove('open');
//                 }
//             });

//             // Toggle the clicked accordion
//             const content = item.querySelector('.content');
//             title.classList.toggle('open');
//             content.classList.toggle('open');
//         });
//     });
// });



// //for carousel
// // JavaScript to handle automatic movement of the carousel

// //for navabar



// //js for scroll reveal
// const sr = ScrollReveal({
//     origin:'top',
//     distance:'85px',
//     duration:2500,
//     reset : true
// })

// const srinverse = ScrollReveal({
//     origin:'bottom',
//     distance:'85px',
//     duration:2500,
//     reset : false
// })

// const srleft = ScrollReveal({
//     origin:'left',
//     distance : '85px',
//     duration: 2000,
//     reset:false
// })


// // const srright = ScrollReveal({
// //     origin:'right',
// //     distance : '85px',
// //     duration: 2000,
// //     reset:true
// // })

// //delicacy-text

// sr.reveal ('.delicacy-text',{delay:300});

// srleft.reveal('.top-image',{delay:250})
// srinverse.reveal('.item',{delay:350})
// sr.reveal('.right-side',{delay:350})
// srleft.reveal('.headers',{delay:350})
// // sr.reveal('.logo',{delay:200})
// // sr.reveal('.navbar')
// // sr.reveal('.social') 
// srleft.reveal('.section-part')
// srleft.reveal('.section-part2')
// srinverse.reveal('.testimonail-head')





// var slideUp = {
//     distance: '100%',
//     origin: 'bottom',
//     opacity: null
// };


// ScrollReveal().reveal('.signature', slideUp);


// console.log(load,'load')
// if (load == false){
//     console.log('load',load,'in gerrrrr')
//     sr.reveal('.button-nav',{delay:300})
//     ScrollReveal().reveal('.containera-images', slideUp);
// }

// //delay for each image logo
// const sr2 = ScrollReveal();

//     // Define the reveal configuration for each image
//     sr2.reveal('.image-grid img:nth-child(1)', {
//         delay: 200, // Set the delay for the first image in milliseconds
//         duration: 800 // Set the duration of the animation in milliseconds
//     });

//     sr2.reveal('.image-grid img:nth-child(2)', {
//         delay: 400, // Set the delay for the second image in milliseconds
//         duration: 800 // Set the duration of the animation in milliseconds
//     });

//     sr2.reveal('.image-grid img:nth-child(3)', {
//         delay: 600, // Set the delay for the third image in milliseconds
//         duration: 800 // Set the duration of the animation in milliseconds
//     });

//     sr2.reveal('.image-grid img:nth-child(4)', {
//         delay: 800, // Set the delay for the fourth image in milliseconds
//         duration: 800 // Set the duration of the animation in milliseconds
//     });


// //scroll reveal for gallery
// const srgallery = ScrollReveal();

//     // Define the reveal configuration for each image
//     srgallery.reveal('.image-container img', {
//         origin: 'bottom', // Set the origin of the reveal animation
//         distance: '20px', // Set the distance of the reveal animation
//         duration: 800, // Set the duration of the animation in milliseconds
//         delay: 200, // Set the delay for the animation in milliseconds
//         easing: 'ease-in-out', // Set the easing function for the animation
//         scale: 0.1, // Set the initial scale to 0.1
//         opacity: 0, // Set the initial opacity to 0
//         beforeReveal: (domEl) => {
//             // Set a callback function to gradually increase scale and opacity before reveal
//             domEl.style.transition = 'transform 800ms, opacity 800ms';
//             domEl.style.transform = 'scale(1)';
//             domEl.style.opacity = 1;
//         }
//     });

// //scroll reveal for footer
// const srFooter = ScrollReveal({
//     origin: 'bottom', // Set the origin of the reveal animation to bottom
//     distance: '100px', // Set a larger distance to ensure complete emergence
//     duration: 800, // Set the duration of the animation in milliseconds
//     easing: 'ease-in-out' // Set the easing function for the animation
// });

// // Apply the reveal animation to the footer image
// srFooter.reveal('.footer img', {
//     beforeReveal: (domEl) => {
//         domEl.style.transition = 'transform 800ms';
//         domEl.style.transform = 'translateY(0)';
//     }
// });


// //back to top button
// document.addEventListener("DOMContentLoaded", function() {
//     var backToTopButton = document.getElementById("backToTopBtn");

//     window.addEventListener("scroll", function() {
//         if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//             backToTopButton.style.display = "block";
//             backToTopButton.style.opacity = 1;
//         } else {
//             backToTopButton.style.opacity = 0;
//         }
//     });

//     backToTopButton.addEventListener("click", function() {
//         document.body.scrollTop = 0; // For Safari
//         document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
//     });
// });

// // document.addEventListener("DOMContentLoaded", function() {
// //     const imageGrid = document.querySelector('.partner-something .partners-grid');
    
// //     // Clone the first two images and append them to the end to create a loop effect
// //     const clone1 = imageGrid.children[0].cloneNode(true);
// //     const clone2 = imageGrid.children[1].cloneNode(true);
// //     imageGrid.appendChild(clone1);
// //     imageGrid.appendChild(clone2);
    
// //     // Function to scroll images to the left
// //     function scrollLeft() {
// //         const scrollAmount = 200; // Adjust as needed
// //         imageGrid.style.transform = `translateX(-${scrollAmount}px)`;
// //         setTimeout(function() {
// //             imageGrid.appendChild(imageGrid.firstElementChild);
// //             imageGrid.style.transition = 'none';
// //             imageGrid.style.transform = 'translateX(0)';
// //             setTimeout(function() {
// //                 imageGrid.style.transition = 'transform 0.5s ease-in-out';
// //             });
// //         }, 500); // The time it takes for the transition to complete
// //     }

// //     // Function to scroll images to the right
// //     function scrollRight() {
// //         const scrollAmount = 250; // Adjust as needed
// //         imageGrid.insertBefore(imageGrid.lastElementChild, imageGrid.firstElementChild);
// //         imageGrid.style.transition = 'none';
// //         imageGrid.style.transform = `translateX(-${scrollAmount}px)`;
// //         setTimeout(function() {
// //             imageGrid.style.transition = 'transform 0.5s ease-in-out';
// //             imageGrid.style.transform = 'translateX(0)';
// //         }, 10); // A very short delay to ensure the transition gets applied
// //     }

// //     // Auto-scrolling function
// //     function autoScroll() {
// //         setInterval(scrollLeft, 3000); // Adjust the interval as needed (3000ms = 3 seconds)
// //     }

// //     // Call autoScroll function to start auto-scrolling
// //     autoScroll();

// //     // Manual scrolling with arrow keys
// //     document.addEventListener('keydown', function(event) {
// //         if (event.key === 'ArrowLeft') {
// //             scrollRight();
// //         } else if (event.key === 'ArrowRight') {
// //             scrollLeft();
// //         }
// //     });
// // });

var preloader = document.getElementById('preloader');
    function myFunction() {
        preloader.style.display = 'none';
        load = true;
        console.log(load, 'load');
        // Run scroll reveal animations after load is complete
        if (load == true) {
            console.log('load', load, 'in gerrrrr');
            gsap.from('.button-nav', { y: 85, opacity: 0, duration: 2.5, delay: 0.3, ease: 'power1.out' });
            gsap.from('.containera-images', { y: '100%', opacity: 0, duration: 2.5, ease: 'power1.out' });
        }
    }

    document.addEventListener("DOMContentLoaded", function () {
        gsap.registerPlugin(ScrollTrigger);
    
        var menuIcon = document.getElementById('menu-icon');
        var isDisplaying = false;
        var popMenu = document.getElementById('navbar');
        var links = document.querySelectorAll('#navbar a');
        var load = false;
    
        // Menu icon click handler
        menuIcon.onclick = function () {
            popMenu.style.zIndex = "1000";
            if (!isDisplaying) {
                popMenu.style.display = "block";
                menuIcon.classList.replace("fa-bars", "fa-x");
                isDisplaying = true;
            } else {
                popMenu.style.display = "none";
                menuIcon.classList.replace("fa-x", "fa-bars");
                isDisplaying = false;
            }
        };
    
        // Code to get the preloader
        var preloader = document.getElementById('preloader');
        function myFunction() {
            preloader.style.display = 'none';
            load = true;
            console.log(load, 'load');
            // Run scroll reveal animations after load is complete
            if (load == true) {
                console.log('load', load, 'in gerrrrr');
                gsap.from('.button-nav', { y: 85, opacity: 0, duration: 2.5, delay: 0.3, ease: 'power1.out' });
                gsap.from('.containera-images', { y: '100%', opacity: 0, duration: 2.5, ease: 'power1.out' });
                gsap.from('.logo', { y: '100%', opacity: 0, duration: 2.5, ease: 'power1.out' });
            
            }
        }
    
        // Close the navbar when a link is pressed
        links.forEach(function (link) {
            link.addEventListener('click', function () {
                // Check if the window width is less than or equal to 840 pixels (adjust as needed)
                if (window.innerWidth <= 840) {
                    popMenu.style.display = 'none';
                    menuIcon.classList.replace("fa-x", "fa-bars");
                    isDisplaying = false;
                }
            });
        });
    
        // Optional: Close the navbar when the window is resized beyond a certain width
        window.addEventListener('resize', function () {
            if (window.innerWidth > 768) {
                popMenu.style.display = 'block';
            }
        });
    
        const items = document.querySelectorAll('.item');
        items.forEach(function (item) {
            const title = item.querySelector('.title');
            title.addEventListener('click', function () {
                // Close all accordions
                items.forEach(function (otherItem) {
                    if (otherItem !== item) {
                        otherItem.querySelector('.title').classList.remove('open');
                        otherItem.querySelector('.content').classList.remove('open');
                    }
                });
    
                // Toggle the clicked accordion
                const content = item.querySelector('.content');
                title.classList.toggle('open');
                content.classList.toggle('open');
            });
        });

        

    


        gsap.fromTo('.image-container img',
            { opacity: 0, scale: 0.8 },
            { opacity: 1, scale: 1, duration: 2, ease: "power2.out",
              scrollTrigger: {
                trigger: '.image-container',
                start: 'top bottom',
                end: 'bottom top',
                
              }
            }
          );

        
        
    
        gsap.from('.delicacy-text', { 
            y: 85, 
            opacity: 0, 
            duration: 2.5, 
            delay: 0.3, 
            scrollTrigger: {
                trigger: '.delicacy-text',
                start: 'top 85%',
                toggleActions: 'play none none reverse',
                
            }
        });
    
        gsap.from('.top-image', { 
            x: -85, 
            opacity: 0, 
            duration: 2, 
            delay: 0.25, 
            scrollTrigger: {
                trigger: '.top-image',
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            }
        });
    
        gsap.from('.item', { 
            y: 85, 
            opacity: 0, 
            duration: 2.5, 
            delay: 0.35, 
            scrollTrigger: {
                trigger: '.item',
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            }
        });
    
        gsap.from('.right-side', { 
            y: 85, 
            opacity: 0, 
            duration: 2.5, 
            delay: 0.35, 
            scrollTrigger: {
                trigger: '.right-side',
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            }
        });
    
        gsap.from('.headers', { 
            x: -85, 
            opacity: 0, 
            duration: 2, 
            delay: 0.35, 
            scrollTrigger: {
                trigger: '.headers',
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            }
        });
    
        gsap.from('.section-part', { 
            x: -85, 
            opacity: 0, 
            duration: 2, 
            scrollTrigger: {
                trigger: '.section-part',
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            }
        });
    
        gsap.from('.section-part2', { 
            x: -85, 
            opacity: 0, 
            duration: 2, 
            scrollTrigger: {
                trigger: '.section-part2',
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            }
        });
    
        gsap.from('.testimonail-head', { 
            y: 85, 
            opacity: 0, 
            duration: 2.5, 
            delay: 0.35, 
            scrollTrigger: {
                trigger: '.testimonail-head',
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            }
        });
    
        gsap.from('.signature', { 
            y: '100%', 
            opacity: 0, 
            duration: 2.5, 
            scrollTrigger: {
                trigger: '.signature',
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            }
        });
    
        // Staggered animations for image-grid images
        const imageGridImages = document.querySelectorAll('.image-grid img');
        if (imageGridImages.length > 0) {
            gsap.from(imageGridImages, {
                x: -100, // Animating from left
                opacity: 0,
                duration: 0.8,
                stagger: 0.2, // Adjust the delay between each animation
                scrollTrigger: {
                    trigger: '.image-grid',
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                }
            });
        }
    
        // Footer animation
        const footerImages = document.querySelectorAll('.footer img');
        if (footerImages.length > 0) {
            gsap.from(footerImages, {
                y: 100,
                opacity: 0,
                duration: 0.8,
                ease: 'ease-in-out',
                scrollTrigger: {
                    trigger: '.footer',
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                },
                onStart: function () {
                    footerImages.forEach(img => {
                        img.style.transition = 'transform 800ms';
                        img.style.transform = 'translateY(0)';
                    });
                }
            });
        } else {
            console.warn('No footer images found for animation.');
        }
    
        // FAQ section animation
        document.addEventListener("DOMContentLoaded", function () {
            gsap.registerPlugin(ScrollTrigger);

            // Ensure all items in the FAQ section are animating correctly
            const faqItems = document.querySelectorAll('.faq .item');

            if (faqItems.length > 0) {
                gsap.from(faqItems, {
                    x: -100, // Animating from left
                    opacity: 0,
                    duration: 1,
                    stagger: 0.2,
                    scrollTrigger: {
                        trigger: '.faq',
                        start: 'top 85%',
                        toggleActions: 'play none none reverse',
                        onEnter: () => console.log('FAQ section entered'), // Debug logging
                        onLeave: () => console.log('FAQ section left'),    // Debug logging
                        onEnterBack: () => console.log('FAQ section re-entered'), // Debug logging
                        onLeaveBack: () => console.log('FAQ section re-left')    // Debug logging
                    }
                });
            } else {
                console.warn('No FAQ items found for animation.');
            }
        });
    });



    