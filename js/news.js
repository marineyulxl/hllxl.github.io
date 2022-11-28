(function () {
  var curIndex = 0;
  var indicators = document.querySelector('.news-banner-indicators');
  var banner = document.querySelector('.news-banner-links');
  function setActive() {
    banner.style.transform = `translateX(-${curIndex}00%)`;
    var active = document.querySelector('.news-banner-indicators .active');
    if (active) {
      active.classList.remove('active');
    }
    indicators.children[curIndex].classList.add('active');
  }

  setActive();

  for (let i = 0; i < indicators.children.length; i++) {
    indicators.children[i].onclick = function () {
      curIndex = i;
      setActive();
    };
  }
})();

(async function () {
  var newsData = await fetch('./js/news-data.json').then((resp) => resp.json());
  var newsNav = document.querySelector('.news-nav');
  var newsList = $('.news-list');
  function fillData(index) {
    var active = newsNav.querySelector('.active');
    if (active) {
      active.classList.remove('active');
    }
    newsNav.children[index].classList.add('active');
    var datas = newsData[index];
    var html = '';
    for (var item of datas) {
      html += `<a href="${item.link}">
      <div class="news-title">${item.title}</div>
      <div class="news-date">${item.date}</div>
    </a>
      `;
    }
    newsList.innerHTML = html;
  }

  fillData(0);

  for (let i = 0; i < newsNav.children.length; i++) {
    newsNav.children[i].onclick = function () {
      fillData(i);
    };
  }
})();
