async function insertionSort() {
    const bars = document.querySelectorAll('.bar');

    bars[0].style.background = 'green';
    for (let i = 1; i < bars.length; i++) {
        console.log('in loop');
        let j = i - 1;
        let key = bars[i].style.height;
        bars[i].style.background = 'cyan';
        await wait(delay);
        while (j >= 0 && parseInt(bars[j].style.height) > parseInt(key)) {
            bars[j].style.background = 'cyan';
            bars[j + 1].style.height = bars[j].style.height;
            j = j - 1;
            await wait(delay);
            for (let k = i; k >= 0; k--) {
                bars[k].style.background = 'green';
            }
        }
        bars[j + 1].style.height = key;

        bars[i].style.background = 'green';
    }
}

const insertion = document.querySelector('#insertion');
insertion.addEventListener('click', async () => {
    await insertionSort();
})