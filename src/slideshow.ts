let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n: any) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n: any) {
  showSlides(slideIndex = n);
}

function showSlides(n: any) {
  let i;
  let slides = document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement>;

  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";

  window.addEventListener('load', () => {
    window.onkeydown = function (event) {
      if (event.key === 'ArrowRight')
        plusSlides(1);
      else if (event.key === 'ArrowLeft')
        plusSlides(-1);
    };
  });
} 
