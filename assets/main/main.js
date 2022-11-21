const display = document.querySelector('.zeit');
const btn = document.querySelector('#btn');

let percentage = 100;

btn.addEventListener('click', () => {
    const decrease = () => {
        if (percentage < 0) {
            clearInterval(timer);
        } else {
            display.innerHTML = `${percentage}%`;
            percentage -= 1;
        }
    };
    const timer = setInterval(decrease, 100);
});
