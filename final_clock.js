const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    const days = String(date.getDate()).padStart(2,"0");
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${days}Days ${hours}:${minutes}:${seconds}`;
}
getClock();  // 1초후에 setInterval하니까 처음에 시간을 보여주기 위해 함수 호출.
setInterval(getClock,1000);