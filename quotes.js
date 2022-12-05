const quotes = [
    {   quote: "하루에 3시간을 걸으면 7년 후에 지구를 한바퀴 돌 수 있다.",
        autor: "사무엘 존슨"},
    {   quote: "언제나 현재에 집중할수 있다면 행복할것이다.",
        autor: "파울로 코엘료"},
    {   quote: "진정으로 웃으려면 고통을 참아야하며 , 나아가 고통을 즐길 줄 알아야 해.",
        autor: "찰리 채플린"},
    {   quote: "직업에서 행복을 찾아라. 아니면 행복이 무엇인지 절대 모를 것이다",
        autor: "엘버트 허버드"},
    {   quote: "단순하게 살아라. 현대인은 쓸데없는 절차와 일 때문에 얼마나 복잡한 삶을 살아가는가?",
        autor: "이드리스 샤흐"},
    {   quote: "먼저 자신을 비웃어라. 다른 사람이 당신을 비웃기 전에.",
        autor: "엘사 맥스웰"},
    {   quote: "절대 어제를 후회하지 마라 . 인생은 오늘의 나 안에 있고 내일은 스스로 만드는 것이다",
        autor: "L.론허바드"},
    {   quote: "어리석은 자는 멀리서 행복을 찾고, 현명한 자는 자신의 발치에서 행복을 키워간다.",
        autor: "제임스 오펜하임"},
    {   quote: "너무 소심하고 까다롭게 자신의 행동을 고민하지 말라 . 모든 인생은 실험이다 . 더많이 실험할수록 더나아진다.",
        autor: "랄프 왈도 에머슨"},
    {   quote: "행복은 습관이다,그것을 몸에 지니라.",
        autor: "허버드"}
]

const quote = document.querySelector("#quote span:first-child");
const autor = document.querySelector("#quote span:last-child")

//Math.random() - 0이상 1미만 랜덤 숫자 만들기
//Math.round() - 소수점 자리 내림처리
//Math.ceil() - 소수점 자리 올림처리
//Math.floor() - 소수점 버리기

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]; 

quote.innerText = todaysQuote.quote;
autor.innerText = `- ${todaysQuote.autor}`;