function stickTheNav() {
  let navBar = document.querySelector(".nav-main");
  if(window.scrollY > 50) {
    navBar.classList.add("js-sticky-nav");
  } else {
    navBar.classList.remove("js-sticky-nav");
  }
}

window.addEventListener("scroll", stickTheNav);




/* project pages script file */
var close = document.getElementsByClassName("close")[0],
    back = document.getElementsByClassName("back")[0],
    number = document.getElementById("nu"),
    nextButton = document.getElementsByClassName("next")[0],
    previous = document.getElementsByClassName("previous")[0],
    currentImage = document.getElementsByClassName("currentImage"),
    currentImageIndex = 0;
var expand = document.getElementsByClassName("expand");

close.addEventListener("click", function () {
    back.classList.add("deactivate");
});

document.querySelector("#total").textContent = currentImage.length;
[].forEach.call(expand, function (c, i) {
    c.addEventListener("click", function () {
        currentImageIndex = i + 1;
        number.innerHTML = currentImageIndex;
        for (var j = 0; j < currentImage.length; j++) {
            currentImage[j].classList.add("deactivate");
        }
        currentImage[i].classList.remove("deactivate");
        back.classList.remove("deactivate");

    });
});

function next() {
    if (currentImageIndex < currentImage.length) {

        currentImage[currentImageIndex - 1].classList.add("deactivate");
        currentImage[currentImageIndex].classList.remove("deactivate");
        currentImageIndex++;
        number.innerHTML = currentImageIndex;
    }
    else{
        currentImage[currentImageIndex - 1].classList.add("deactivate");
        currentImageIndex= 1;
        currentImage[0].classList.remove("deactivate");
        number.innerHTML = currentImageIndex;
    }
}
nextButton.addEventListener("click", function () {
    next();
});


previous.addEventListener("click", function () {
    if (currentImageIndex > 1) {
        currentImage[currentImageIndex - 1].classList.add("deactivate");
        currentImage[currentImageIndex - 2].classList.remove("deactivate");
        currentImageIndex--;
        number.innerHTML = currentImageIndex;
    }  else{
        currentImage[0].classList.add("deactivate");
        currentImageIndex= currentImage.length;
        currentImage[currentImage.length-1].classList.remove("deactivate");
        number.innerHTML = currentImageIndex;
    }
});

[].forEach.call(currentImage, function (img) {
    img.addEventListener("click", function () {
        next();
    });
});
