async function bubbleSort() {
    const bars = document.querySelectorAll('.bar');
    for (let i = 0; i < bars.length - 1; i++) {
        for (let j = 0; j < bars.length - i - 1; j++) {
            bars[j].style.background = 'cyan';
            bars[j + 1].style.background = 'cyan';
            if (parseInt(bars[j].style.height) > parseInt(bars[j + 1].style.height)) {
                await wait(delay);
                swap(bars[j], bars[j + 1]);
            }
            bars[j].style.background = '#2C74B3';
            bars[j + 1].style.background = '#2C74B3';
        }
        bars[bars.length - 1 - i].style.background = '#03C988';
    }
    bars[0].style.background = '#03C988';
}

const bubble = document.querySelector('#bubble');
bubble.addEventListener('click', async function () {
    await bubbleSort();
});