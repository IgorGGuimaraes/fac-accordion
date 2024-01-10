const btnList = document.querySelectorAll('.button');
const srcArray = ['./assets/images/icon-minus.svg', './assets/images/icon-plus.svg'];

const divList = document.querySelectorAll('.answer');
const iconList = document.querySelectorAll('.icon');


for (i = 0; i < btnList.length; i++) {
    const btn = btnList[i];
    const btnClass = btn.classList[1];

    function showHide() {

        Array.from(divList).forEach((e) => {
            if (e.style.display !== 'block' && e.classList[2] === btnClass) {
                e.style.display = 'block';
            } else if (e.classList[2] === btnClass) {
                e.style.display = 'none';
        }
    })
}

    function changeIcon() {

        Array.from(iconList).forEach((e) => {
            if (e.src.match(srcArray[0]) && e.classList[2] === btnClass) {
                e.src = srcArray[1];
            } else if ( e.classList[2] === btnClass) {
                e.src = srcArray[0];
            }
        })
    }

    btn.addEventListener("click", showHide);
    btn.addEventListener("click", changeIcon);
}