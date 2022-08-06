//Get the button
var topBtn = document.getElementById("topBtn");

// (A) SMOOTH SCROLL TO TOP
function totop () {
  window.scroll({
    top: 0, left: 0, behavior: "smooth"
  });
}

// (B) SHOW/HIDE BUTTON
function togtop () {
  if (window.scrollY >= 100) {
    document.getElementById("topBtn").classList.add("show");
  } else {
    document.getElementById("topBtn").classList.remove("show");
  }
}
window.addEventListener("scroll", togtop);
window.addEventListener("resize", togtop);

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function showPreview(event){
  if(event.target.files.length > 0){
    var src = URL.createObjectURL(event.target.files[0]);
    var preview = document.getElementById("file-ip-1-preview");
    preview.src = src;
    preview.style.display = "block";
  }
}