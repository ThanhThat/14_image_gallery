const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

let currentIndex = 0;

const imgList = $$(".img-item");

console.log(imgList);

imgList.forEach((img, index) => {
  img.addEventListener("click", () => {
    setCurrentIndex(index);
  });
});

$(".prev").addEventListener("click", clickPrevHandle);

$(".next").addEventListener("click", clickNextHandle);

$(".close").addEventListener("click", clickBtnCloseHandle);

function setCurrentIndex(index) {
  currentIndex = index;
  showImg();
}

function showImg() {
  $(".img-display").animate(
    {
      opacity: [0, 1],
      transform: "translateY(0)",
      // visibility: "visible",
    },
    {
      duration: 750,
      fill: "forwards",
    }
  );
  $(".img-wrapper > img").src = imgList[currentIndex].querySelector("img").src;
}

function clickPrevHandle() {
  currentIndex === 0 ? (currentIndex = imgList.length - 1) : --currentIndex;
  showImg();
}

function clickNextHandle() {
  currentIndex === imgList.length - 1 ? (currentIndex = 0) : ++currentIndex;
  showImg();
}

function clickBtnCloseHandle() {
  $(".img-display").animate(
    {
      transform: "translateY(-200%)",
      opacity: [1, 0],
    },
    {
      duration: 400,
      fill: "forwards",
    }
  );
}
