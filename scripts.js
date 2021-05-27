// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init (){
    const takeOffButton = document.getElementById("takeoff");
    takeOffButton.addEventListener("click", confirmTakeOff);
    const landButton = document.getElementById("landing");
    landButton.addEventListener("click", land);
    const abortButton = document.getElementById("missionAbort");
    abortButton.addEventListener("click", abortMission);
    let rocketImg = document.getElementById("rocket");
    rocketImg.style.position = "absolute";
    rocketImg.style.left = "0px";
    rocketImg.style.bottom = "0px";
    let upButton = document.getElementById("up");
    upButton.addEventListener("click", function () {
        let moveUp = parseInt(rocketImg.style.bottom) + "10px";
        rocketImg.style.bottom = moveUp;
        const shuttleHeight = document.getElementById("spaceShuttleHeight");
        shuttleHeight.innerHTML = (Number(shuttleHeight.innerHTML) + 10000).toString();
    });
    let downButton = document.getElementById("down");
    downButton.addEventListener("click", function (){
        let moveDown = parseInt(rocketImg.style.top) - "10px";
        rocketImg.style.top = moveDown;
        const shuttleHeight = document.getElementById("spaceShuttleHeight");
        shuttleHeight.innerHTML = (Number(shuttleHeight.innerHTML) - 10000).toString();
    });
    let rightButton = document.getElementById("right");
    rightButton.addEventListener("click", function() {
        let moveRight = parseInt(rocketImg.style.right) + "10px";
        rocketImg.style.bottom = moveRight;
    });
    let leftButton = document.getElementById("left");
    leftButton.addEventListener("click", function() {
        let moveLeft = parseInt(rocketImg.style.left) - "10px";
        rocketImg.style.bottom = moveLeft;
    });
}
function confirmTakeOff() {
    let response = window.confirm("Confirm that the shuttle is ready for takeoff.");
    const flightStatus = document.getElementById("flightStatus");
    if (response){
        flightStatus.innerHTML = "Shuttle in flight";
        const shuttleBackground = document.getElementById("shuttleBackground");
        shuttleBackground.style.backgroundColor = 'blue';
        const shuttleHeight = document.getElementById("spaceShuttleHeight");
        shuttleHeight.innerHTML = (Number(shuttleHeight.innerHTML) + 10000).toString();
    }
}
function land() {
    let response = window.alert("The shuttle is landing. Landing gear engaged.");
    const flightStatus = document.getElementById("flightStatus");
    flightStatus.innerHTML = "The shuttle has landed.";
    const shuttleBackground = document.getElementById("shuttleBackground");
    shuttleBackground.style.backgroundColor = 'green';
    const shuttleHeight = document.getElementById("spaceShuttleHeight");
    shuttleHeight.innerHTML = (Number(0).toString());
}
function abortMission() {
    let response = window.confirm("Confirm that you want to abort the mission.");
    const flightStatus = document.getElementById("flightStatus");
    if (response){
    flightStatus.innerHTML = "Mission aborted.";
    const shuttleBackground = document.getElementById("shuttleBackground");
    shuttleBackground.style.backgroundColor = 'green';
    const shuttleHeight = document.getElementById("spaceShuttleHeight");
    shuttleHeight.innerHTML = (Number(0).toString());
    }
}




window.addEventListener("load", init);