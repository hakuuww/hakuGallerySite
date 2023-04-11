const targets = document.querySelectorAll('.main img')

const lazyLoad = target =>{
    const io = new IntersectionObserver((entries,observer) => {

        entries.forEach(entry => {
            console.log('good');

            if(entry.isIntersecting){
                const img = entry.target;
                const src = img.getAttribute('lazy-load');
                
                if(src != 'skip'){
                    img.setAttribute('src', src);
                    img.classList.add('fade');
                }else{
                    img.classList.add('no_fade');
                }


                observer.disconnect();
            }
        });

    });
    io.observe(target);
};

targets.forEach(lazyLoad);










//Bad way of implement lazy load.
//The eventlistener is always activated when we scroll, which creates too many computations in the background.

/*

const targets = document.querySelectorAll('.main img'); //get all images under the main class in the DOM

window.addEventListener('scroll', (event) => { //event listener to monitor scrolling scrolling
    targets.forEach(img => { //loops through all images in the targets list
        console.log('poop')
        const rect = img.getBoundingClientRect().top; //calculate the position of the image
        if(rect <= window.innerHeight){       //if the position reaches the window, we add the actual src path of the img to the img element, which loads the image. The original element has a custom attribute which holds the src, but since its custom, it does not allow for loading of the image
            const src = img.getAttribute('lazy-load');
            img.setAttribute('src',src);
            //img.classList.add('fade');
        }

    })

})

*/