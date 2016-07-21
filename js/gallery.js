function  byID (idStr) {
  return document.getElementById(idStr);
}

var galAnchor = byID("gallery_anchor");
var btnPrev = byID ("pic_nav_prev");
var btnNext = byID ("pic_nav_next");
var spanIndex = byID ("pic_index");
var imgCur = byID ("gallery_current_img");
var maxIndex = 3;
var minIndex = 0;
var inputIndex = byID ("co_comicIndex");


function getCurIndex() {
  return parseInt(spanIndex.textContent);
}

function setCurIndex(newIndex) {
  spanIndex.textContent = newIndex;
  inputIndex.value = newIndex;
  return;
}

function deltaCurIndex(deltaValue) {
  var old_index = getCurIndex();
  var new_index = (old_index + deltaValue + maxIndex) % maxIndex;
  setCurIndex(new_index);
  setHash(new_index);
  return new_index;
}

function onClickNext(evt) {
  var new_index = deltaCurIndex(1);
  updateGalImg();
  evt.preventDefault();
  return;
}

function onClickPrev(evt) {
  var new_index = deltaCurIndex(-1);
  updateGalImg();
  evt.preventDefault();
  return;
}

function imgSrcFrmt(imgIndex) {
  return "images/img_" + imgIndex + ".png";
}

function setImgSrc(imgSrcStr) {
  imgCur.src = imgSrcStr;
  return;
}

function updateGalImg() {
  var new_img_index = getCurIndex();
  var new_img_src = imgSrcFrmt(new_img_index);
  setImgSrc(new_img_src);
  return;
}

function setHash(newHash) {
  window.location.hash = "#" + newHash;
}

function getHash(){
  var old_hash = window.location.hash;
  return old_hash.substr(1);
}

function parseHash(){
  var temp_hash = getHash();
  if (temp_hash.length == 0) {
    setHash(0);
    setCurIndex(0);
  }
  else {
    setCurIndex(temp_hash);
  }
}

parseHash();
updateGalImg();

window.onhashchange = function (evt) {
  console.log(getHash());
  parseHash();
  updateGalImg();
}



btnNext.onclick = onClickNext;
btnPrev.onclick = onClickPrev;


