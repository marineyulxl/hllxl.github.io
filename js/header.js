// 处理音乐
(function () {
  var bgmWind = document.querySelector('#bgm-wind');
  var bgmMusic = document.querySelector('#bgm-music');
  var video = document.querySelector('.banner-video');
  var musicIcon = document.querySelector('.header-music');
  var isPlaying = true;

  async function play() {
    try {
      bgmWind.currentTime = 0;
      bgmMusic.currentTime = 0;
      await Promise.all([bgmWind.play(), bgmMusic.play()]);
      musicIcon.classList.remove('closed');
      isPlaying = true;
      video.play();
    } catch {
      stop();
    }
  }

  function stop() {
    bgmWind.pause();
    bgmMusic.pause();
    musicIcon.classList.add('closed');
    isPlaying = false;
  }

  play();

  musicIcon.onclick = function () {
    isPlaying ? stop() : play();
  };
})();

// 处理导航移动条
(function () {
  var headerNav = document.querySelector('.header-menu');
  var bar = document.querySelector('.header-bar');
  var active = document.querySelector('.header-menu .active');
  function setActive() {
    bar.style.transform = `translateX(${active.offsetLeft + 30}px)`;
  }

  headerNav.onmouseover = function (e) {
    if (e.target.tagName === 'A') {
      bar.style.transform = `translateX(${e.target.offsetLeft + 30}px)`;
    }
  };

  headerNav.onmouseleave = setActive;

  setActive();
})();

// 处理滚动条
(function () {
  var header = document.querySelector('.header');
  window.addEventListener('scroll', function () {
    if (this.document.documentElement.scrollTop > 0) {
      header.style.background = `rgba(17, 17, 17, 0.85)`;
    } else {
      header.style.background = `rgba(17, 17, 17, 0.75)`;
    }
  });
})();
console.log(1111);