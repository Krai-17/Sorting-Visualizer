async function quickSort(bars, l, r) {
    if (l < r) {
        let pivotIndex = await partition(bars, l, r);
        await quickSort(bars, l, pivotIndex - 1);
        await quickSort(bars, pivotIndex + 1, r);

    }
    else {
        if (l >= 0 && r >= 0 && l < bars.length && r < bars.length) {
            bars[r].style.background = '#03C988';
            bars[l].style.background = '#03C988';
        }
    }

}


async function partition(bars, l, r) {
    let i = l - 1;
    bars[r].style.background = 'red';
    for (let j = l; j <= r - 1; j++) {
        console.log('In partitionLomuto for j');
        // color current element
        bars[j].style.background = 'yellow';
        // pauseChamp
        await wait(delay);

        if (parseInt(bars[j].style.height) < parseInt(bars[r].style.height)) {
            console.log('In partitionLomuto for j if');
            i++;
            swap(bars[i], bars[j]);
            // color 
            bars[i].style.background = 'orange';
            if (i != j) bars[j].style.background = 'orange';
            // pauseChamp
            await wait(delay);
        }
        else {
            // color if not less than pivot
            bars[j].style.background = 'pink';
        }
    }
    i++;
    // pauseChamp
    await wait(delay);
    swap(bars[i], bars[r]); // pivot height one
    console.log(`i = ${i}`, typeof (i));
    // color
    bars[r].style.background = 'pink';
    bars[i].style.background = '#03C988';

    // pauseChamp
    await wait(delay);

    // color
    for (let k = 0; k < bars.length; k++) {
        if (bars[k].style.background != '#03C988')
            bars[k].style.background = '#2C74B3';
    }

    return i;
}

const quick = document.querySelector('#quick');
quick.addEventListener('click', async () => {
    const bars = document.querySelectorAll('.bar');
    await quickSort(bars, 0, bars.length - 1);

})