//배경화면을 바꿔보자!
const images = [
    "0.jpeg",
    "1.jpeg",
    "2.jpeg",
    "3.jpeg"
]

function paintImage(imgNumber) {
    const image = new Image();
    image.src = `images/${imgNumber + 1}.jpg`; // 가져올 image경로 지정
    image.classList.add("bgImage"); // image에 bgImage 클래스 추가 
    body.appendChild(image); // body의 자식에 image추가
}

const chosenImage = images[Math.floor(Math.random() * images.length)];
const image = new Image();
image.src = `img/${chosenImage}`;
image.classList.add("bgImage");

// const bgImage = document.createElement("style");
// const body = `body { background-image : url("img/${chosenImage}") }`;
//bgImage.appendChild(body);
document.body.appendChild(image);
