let filler = document.querySelectorAll(".bar .filler")
let pbar = document.querySelectorAll(".full_gauge .pbar");
const speed = 50;


const fullAnimation = () => {

    filler.forEach(fill => {
        fill.style.cssText = `width: inherit; background: ${fill.getAttribute('data-bg')}`
    });

    pbar.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute("data-target");
            const count = +counter.innerText;

            const inc = target / speed;

            if (count < target) {
                counter.innerText = Math.floor(count + inc);
                setTimeout(updateCount, 100)

            } else {
                count.innerText = target;
            }
        }

        updateCount()
    })
}
    

    
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          fullAnimation()
        }
      })
    })

    pbar.forEach(el => {
        observer.observe(el)
    })
    