function  byID (idStr) {
  return document.getElementById(idStr);
}

var galAnchor = byID("gallery_anchor");
var btnPrev = byID ("pic_nav_prev");
var btnNext = byID ("pic_nav_next");
var spanIndex = byID ("pic_index");
var btnPrev2 = byID ("pic_nav_prev2");
var btnNext2 = byID ("pic_nav_next2");
var spanIndex2 = byID ("pic_index2");
var imgCur = byID ("gallery_current_img");
var iframeCur = byID ("gallery_iframe");
var maxIndex = 3;
var minIndex = 0;
var inputIndex = byID ("co_comicIndex");


function getCurIndex() {
  return parseInt(spanIndex.textContent);
}

function setCurIndex(newIndex) {
  spanIndex.textContent = newIndex;
  spanIndex2.textContent = newIndex;
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
  updateGalCap();
  evt.preventDefault();
  return;
}

function onClickPrev(evt) {
  var new_index = deltaCurIndex(-1);
  updateGalImg();
  updateGalCap();
  evt.preventDefault();
  return;
}

function imgSrcFrmt(imgIndex) {
  return "images/img_" + imgIndex + ".png";
}

function iframeSrcFrmt(iframeIndex) {
  return "captions/cap_" + iframeIndex + ".html";
}

function setImgSrc(imgSrcStr) {
  imgCur.src = imgSrcStr;
  return;
}

function setIframeSrc(iframeSrcStr) {
  iframeCur.src = iframeSrcStr;
  return;
}

function updateGalImg() {
  var new_img_index = getCurIndex();
  var new_img_src = imgSrcFrmt(new_img_index);
  setImgSrc(new_img_src);
  return;
}

function updateGalCap() {
  var new_cap_index = getCurIndex();
  var new_cap_src = iframeSrcFrmt(new_cap_index);
  setIframeSrc(new_cap_src);
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
updateGalCap();

window.onhashchange = function (evt) {
  console.log(getHash());
  parseHash();
  updateGalImg();
  updateGalCap();
}



btnNext.onclick = onClickNext;
btnPrev.onclick = onClickPrev;
btnNext2.onclick = onClickNext;
btnPrev2.onclick = onClickPrev;

btnNext.addEventListener("touchstart", function (evt){}, false);
btnNext2.addEventListener("touchstart", function (evt){}, false);
btnPrev.addEventListener("touchstart", function (evt){}, false);
btnPrev2.addEventListener("touchstart", function (evt){}, false);


