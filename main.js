const buttonList = document.querySelectorAll('.button');
const iconList = document.querySelectorAll(".icon");
const div = document.querySelectorAll('.container__answer');
const imgArray = ["assets/images/icon-minus.svg", "assets/images/icon-plus.svg"];

//functions


function changeImgSource () {
    if (idIcon.src.match(imgArray[0])) {
        idIcon.src = imgArray[1];
    } else if (idIcon.src.match(imgArray[1])) {
        idIcon.src = imgArray[0];
    }
}

function showHide () {
    if (idAnswer.style.display === "none") {
        idAnswer.style.display = block;
    } else {
        idAnswer.style.display = none;
    }
}

function all () {
    showHide ();
    changeImgSource ();
}

//i dont know :,()

let count = 0;

while (count < buttonList.length) {
    const button = buttonList[count];
    const classButton = button.classList[1];
    const idIcon = `#icon_${classButton}`;
    const idAnswer =`#answer_${classButton}`;

    button.onclick = function () {
        showHide(idAnswer);
    }

    count++;
}

