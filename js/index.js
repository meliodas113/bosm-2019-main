const dDay = new Date("September 12, 2019 23:59:59").getTime();
document.getElementsByClassName("navbar")[0].lastElementChild.addEventListener("click", () => {
    window.location.href = "./regsiter.html";
})

function setTime() {
    const timeNow = new Date().getTime();

    let days = Math.floor((dDay - timeNow) / (1000 * 60 * 60 *24));

    let hrs = Math.floor((dDay - timeNow) / (1000 * 60 * 60)) - days*24;
    hrs = hrs < 10 ? `0${hrs}` : hrs;

    let min = Math.floor((dDay - timeNow) / (1000 * 60)) - days*24*60 - hrs*60;
    min = min < 10 ? `0${min}` : min;

    document.getElementById("days").innerHTML = days;
    document.getElementById("hrs").innerHTML = hrs;
    document.getElementById("min").innerHTML = min;
}

function setPlayer(num) {
    // const players = ["../img/cricket.png", "../img/Football.png", "../img/Soccer.png"];
    // const player = document.getElementsByClassName("player_image")[0];
    // player.src = players[num];
    const text = ["GRIT", "GUTS", "GLORY"];

    const tag = document.getElementsByClassName("grit")[0];
    tag.innerHTML = text[num];
}

window.onload = function() {
    setTime();
    let loader = document.getElementsByClassName("loader")[0];
    let loaderWraper = document.getElementsByClassName("loader_wraper")[0];
    let contentWraper = document.getElementsByClassName("content-wrapper")[0];
    contentWraper.style.transition = "opacity ease-out 0.5s"; // fade-in effect for content on loading

    setTimeout(() => {
        loader.style.display = "none";
        contentWraper.style.opacity = 1;
        document.getElementsByTagName('body')[0].style.height = 'initial';
        document.getElementsByTagName('body')[0].style.overflowY = 'scroll';

        // trigger landing page animations only when page is loaded. Forgive the selectors.
        setTimeout(() => {
            document.getElementsByClassName("landing-clip")[0].style.animation = "grow-clip 1s cubic-bezier(0.075, 0.82, 0.165, 1) forwards"
            document.getElementsByClassName("line-1")[0].style.animation = "grow-1 0.7s cubic-bezier(0.075, 0.82, 0.165, 1) 0.6s forwards";
            document.getElementsByClassName("line-2")[0].style.animation = "grow-2 0.7s cubic-bezier(0.075, 0.82, 0.165, 1) 0.7s forwards";
            document.getElementsByClassName("line-3")[0].style.animation = "grow-1 0.7s cubic-bezier(0.075, 0.82, 0.165, 1) 0.6s forwards";
            document.getElementsByClassName("line-4")[0].style.animation = "grow-2 0.7s cubic-bezier(0.075, 0.82, 0.165, 1) 0.7s forwards";
            document.getElementsByClassName("line-5")[0].style.animation = "grow-2 0.7s cubic-bezier(0.075, 0.82, 0.165, 1) 0.7s forwards";
            document.getElementsByClassName("line-6")[0].style.animation = "grow-2 0.7s cubic-bezier(0.075, 0.82, 0.165, 1) 0.7s forwards";
            document.getElementsByClassName("bosm-header")[0].style.animation = "appear-bosm 1s cubic-bezier(0.075, 0.82, 0.165, 1) forwards";

            document.getElementsByClassName("grit")[0].style.animationName = "anim-1";
            document.getElementsByClassName("guts")[0].style.animationName = "anim-2";
            document.getElementsByClassName("glory")[0].style.animationName = "anim-3";

            document.getElementsByClassName("cricket")[0].style.animation = "fade-in 0.5s linear 0.7s forwards";
            document.getElementsByClassName("slogan-1")[0].style.animation = "appear-grit 1s cubic-bezier(0.075, 0.82, 0.165, 1) 0.3s forwards";
            document.getElementsByClassName("slogan-2")[0].style.animation = "appear-grit 1s cubic-bezier(0.075, 0.82, 0.165, 1) 0.4s forwards";
        }, 500)
    // ----------------------------------------------------------------------------
    }, 4500);

    setInterval(() => setTime(), 60000);
    
    let count = 0;

    setInterval(() => {
        setPlayer(count);
        count++;
        if (count > 2) count = 0
    }, 12000)
};

window.onbeforeunload = () => {
    window.scrollTo(0, 0);
}