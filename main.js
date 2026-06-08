const btnVoir1 = document.getElementById("voirImagesBtn1");
const btnDescription1 = document.getElementById("voirDescriptionBtn1");

const btnVoir2 = document.getElementById("voirImagesBtn2");
const btnDescription2 = document.getElementById("voirDescriptionBtn2");

const carteProjet1 = document.getElementById("carteProjet1");
const imagesProjet1 = document.getElementById("imagesProjet1");

const carteProjet2 = document.getElementById("carteProjet2");
const imagesProjet2 = document.getElementById("imagesProjet2");

btnVoir1.addEventListener("click", () => {
  carteProjet1.style.display = "none";
  imagesProjet1.style.display = "block";
  btnDescription1.style.display = "inline-block";
  
});

btnVoir2.addEventListener("click", () => {
  carteProjet2.style.display = "none";
  imagesProjet2.style.display = "block";
  btnDescription2.style.display = "inline-block";
});

btnDescription1.addEventListener("click", () => {
  imagesProjet1.style.display = "none";
  carteProjet1.style.display = "block";
});

btnDescription2.addEventListener("click", () => {
  imagesProjet2.style.display = "none";
  carteProjet2.style.display = "block";
});
