let time = 10;
let counter = document.getElementById("count");

let countdown = setInterval(function() {
    if (time <= 0) {
        clearInterval(countdown);
        document.body.innerHTML = "<h1 style='color:lime;'>😂 Got You! Just a Prank!</h1>";
    } else {
        time--;
        counter.innerHTML = time;
    }
}, 1000);
