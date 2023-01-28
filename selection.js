async function selectionSort() {
    console.log('in sort')

    const bars = document.querySelectorAll('.bar');
    for (let i = 0; i < bars.length; i++) {
        let minVal = i;
        bars[i].style.background = 'cyan';
        for (let j = i + 1; j < bars.length; j++) {
            bars[j].style.background = 'red';
            await wait(delay)
            if (parseInt(bars[j].style.height) < parseInt(bars[minVal].style.height)) {
                if (minVal !== i) {
                    bars[minVal].style.background = '#2C74B3';
                }
                minVal = j;


            }
            else {
                bars[j].style.background = '#2C74B3';
            }

        }
        await wait(delay);
        swap(bars[i], bars[minVal]);
        bars[minVal].style.background = '#395B64';
        bars[i].style.background = '#03C988';
    }
}

const selection = document.querySelector('#selection');
selection.addEventListener('click', async function () {
    console.log('clicked')
    await selectionSort();
});