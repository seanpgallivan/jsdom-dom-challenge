let counterInt

function countdown() {
    counterInt = window.setInterval(function(){
        counterIter("plus");
    }, 1000);
}

function counterIter(dir) {
    let countDiv = document.getElementById('counter');
    let count = parseInt(countDiv.innerText);
    if (dir == "plus") {
        count++;
    } else if (dir == "minus") {
        count--;
    };
    countDiv.innerText = count.toString();
}

function counterLike() {
    let count = parseInt(document.getElementById('counter').innerText);
    let likes = document.querySelectorAll('li');
    let success = false;
    likes.forEach(function(item) {
        let likeSplit = item.innerText.split(' ');
        let likeCount = parseInt(likeSplit[0]);
        if (likeCount == count) {
            let likeNum = parseInt(likeSplit[4]) + 1;
            item.innerText = `${count} has been liked ${likeNum} times`;
            success = true;
        };
    });
    if (success == false) {
        let newLike = document.createElement('li');
        newLike.innerText = `${count} has been liked 1 time`;
        document.querySelector('.likes').appendChild(newLike);
    }
}

document.getElementById("plus").addEventListener("click", function() {
    counterIter("plus");
});

document.getElementById("minus").addEventListener("click", function() {
    counterIter("minus");
});

document.getElementById("heart").addEventListener("click", function() {
    counterLike();
});

document.getElementById('pause').addEventListener('click', function() {
    let pauseButton = document.getElementById('pause');
    let buttons = document.querySelectorAll('button');
    if (pauseButton.innerText == "pause") {
        buttons.forEach(function(button) {
            button.disabled = true;
        })
        document.getElementById('pause').disabled = false;
        window.clearInterval(counterInt);
        pauseButton.innerText = "resume";
    } else {
        buttons.forEach(function(button) {
            button.disabled = false;
        });
        countdown();
        pauseButton.innerText = "pause";
    }
});

document.getElementById('submit').addEventListener('click', function () {
    event.preventDefault();
    let commentInput = document.getElementById('comment-input');
    let msg = commentInput.value;
    if (msg.length > 0) {
        let list = document.getElementById('list');
        let newPara = document.createElement('p');
        newPara.innerText = msg;
        list.appendChild(newPara);
        commentInput.value = "";
    }
});

document.addEventListener('DOMContentLoaded', function () {
    countdown();
});