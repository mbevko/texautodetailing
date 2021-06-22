let filler = document.querySelectorAll(".bar .filler")
let pbar = document.querySelectorAll(".full_gauge .pbar");
const speed = 50;




window.addEventListener('scroll', () => {
    if (scrollY > 935 && screen.width > 800) {
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
                    setTimeout(updateCount, 60)

                } else {
                    count.innerText = target;
                }
            }

            updateCount()
        })

    } else if(scrollY > 540 && screen.width < 800){
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
                    setTimeout(updateCount, 60)

                } else {
                    count.innerText = target;
                }
            }

            updateCount()
        })
    }
});