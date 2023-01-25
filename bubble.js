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
            bars[j].style.background = '#395B64';
            bars[j + 1].style.background = '#395B64';
        }
        bars[bars.length - 1 - i].style.background = 'green';
    }
    bars[0].style.background = 'green';
}

const bubble = document.querySelector('#bubble');
bubble.addEventListener('click', async function () {
    await bubbleSort();
});