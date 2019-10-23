var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

function pictureChangeBlack() {
  document.getElementById('img1').src = "./images/img1.png";
  document.getElementById('img12').src = "./images/img1.png";
  document.getElementById("colorchange").innerHTML = 'CRNA';
  document.getElementById("colorchange2").innerHTML = 'CRNA';
  document.getElementById("p2").style.margin = "17px 0 0 3px";
  document.getElementById("p22").style.margin = "15px 0 20px 28px";
}

function pictureChangeWhite() {
  document.getElementById('img1').src = "./images/img3.png";
  document.getElementById('img12').src = "./images/img3.png";
  document.getElementById("colorchange").innerHTML = 'BELA';
  document.getElementById("colorchange2").innerHTML = 'BELA';
  document.getElementById("p2").style.margin = "17px 0 0 103px";
  document.getElementById("p22").style.margin = "15px 0 20px 130px";
}

function pictureChangeBrown() {
  document.getElementById('img1').src = "./images/img5.png";
  document.getElementById('img12').src = "./images/img5.png";
  document.getElementById("colorchange").innerHTML = 'BRAON';
  document.getElementById("colorchange2").innerHTML = 'BRAON';
  document.getElementById("p2").style.margin = "17px 0 0 203px";
  document.getElementById("p22").style.margin = "15px 0 20px 230px";
}