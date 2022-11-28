(function () {
  var posterModal = document.querySelector('.banner-modal');
  var playBtn = document.querySelector('.banner-play .banner-play-btn');
  var video = document.querySelector('.poster-modal video');

  playBtn.onclick = function () {
    posterModal.style.display = 'block';
    video.currentTime = 0;
    video.play();
  };

  posterModal.onclick = function (e) {
    if (e.target.tagName !== 'VIDEO') {
      posterModal.style.display = 'none';
      video.pause();
    }
  };
})();
