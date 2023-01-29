let arr = [];

function createBars(noRows = 30) {
    deleteBars();
    arr = [];
    for (let i = 0; i < noRows; i++) {
        arr.push(Math.floor(Math.random() * 100) + 1);
    }


    console.log('creating bar');
    const visuals = document.querySelector('#visuals');


    for (let i = 0; i < noRows; i++) {
        const d = document.createElement('button');
        d.classList.add('bar');
        let r = 500 * (arr[i] / 100);
        d.style.height = `${r}px`;
        document.querySelector('.visuals').appendChild(d);

    }
}

function deleteBars() {
    console.log('deleting')
    const visuals = document.querySelector('#visuals');
    visuals.innerHTML = '';
}

const noRows = document.querySelector('#noRows');
noRows.addEventListener('change', function () {
    console.log(noRows.value, typeof (noRows.value));
    createBars(parseInt(noRows.value));
});

const speed = document.querySelector('#speed')
speed.addEventListener('input', () => {
    delay = 420 - parseInt(speed.value);
})


const newArray = document.querySelector('#newArray');



newArray.addEventListener('click', () => {
    console.log('in create bar');
    createBars();

});


function swap(el1, el2) {
    let temp = el1.style.height;
    el1.style.height = el2.style.height;
    el2.style.height = temp;

}

let delay = 250;

function wait(milisec) {
    return new Promise(resolve => {
        setTimeout(() => { resolve('') }, milisec);
    })
}









