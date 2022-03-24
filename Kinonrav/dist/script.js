/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/******/
(function (modules) {
  // webpackBootstrap

  /******/
  // The module cache

  /******/
  var installedModules = {};
  /******/

  /******/
  // The require function

  /******/

  function __nested_webpack_require_192__(moduleId) {
    /******/

    /******/
    // Check if module is in cache

    /******/
    if (installedModules[moduleId]) {
      /******/
      return installedModules[moduleId].exports;
      /******/
    }
    /******/
    // Create a new module (and put it into the cache)

    /******/


    var module = installedModules[moduleId] = {
      /******/
      i: moduleId,

      /******/
      l: false,

      /******/
      exports: {}
      /******/

    };
    /******/

    /******/
    // Execute the module function

    /******/

    modules[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_192__);
    /******/

    /******/
    // Flag the module as loaded

    /******/

    module.l = true;
    /******/

    /******/
    // Return the exports of the module

    /******/

    return module.exports;
    /******/
  }
  /******/

  /******/

  /******/
  // expose the modules object (__webpack_modules__)

  /******/


  __nested_webpack_require_192__.m = modules;
  /******/

  /******/
  // expose the module cache

  /******/

  __nested_webpack_require_192__.c = installedModules;
  /******/

  /******/
  // define getter function for harmony exports

  /******/

  __nested_webpack_require_192__.d = function (exports, name, getter) {
    /******/
    if (!__nested_webpack_require_192__.o(exports, name)) {
      /******/
      Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter
      });
      /******/
    }
    /******/

  };
  /******/

  /******/
  // define __esModule on exports

  /******/


  __nested_webpack_require_192__.r = function (exports) {
    /******/
    if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /******/
      Object.defineProperty(exports, Symbol.toStringTag, {
        value: 'Module'
      });
      /******/
    }
    /******/


    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    /******/
  };
  /******/

  /******/
  // create a fake namespace object

  /******/
  // mode & 1: value is a module id, require it

  /******/
  // mode & 2: merge all properties of value into the ns

  /******/
  // mode & 4: return value when already ns object

  /******/
  // mode & 8|1: behave like require

  /******/


  __nested_webpack_require_192__.t = function (value, mode) {
    /******/
    if (mode & 1) value = __nested_webpack_require_192__(value);
    /******/

    if (mode & 8) return value;
    /******/

    if (mode & 4 && typeof value === 'object' && value && value.__esModule) return value;
    /******/

    var ns = Object.create(null);
    /******/

    __nested_webpack_require_192__.r(ns);
    /******/


    Object.defineProperty(ns, 'default', {
      enumerable: true,
      value: value
    });
    /******/

    if (mode & 2 && typeof value != 'string') for (var key in value) __nested_webpack_require_192__.d(ns, key, function (key) {
      return value[key];
    }.bind(null, key));
    /******/

    return ns;
    /******/
  };
  /******/

  /******/
  // getDefaultExport function for compatibility with non-harmony modules

  /******/


  __nested_webpack_require_192__.n = function (module) {
    /******/
    var getter = module && module.__esModule ?
    /******/
    function getDefault() {
      return module['default'];
    } :
    /******/
    function getModuleExports() {
      return module;
    };
    /******/

    __nested_webpack_require_192__.d(getter, 'a', getter);
    /******/


    return getter;
    /******/
  };
  /******/

  /******/
  // Object.prototype.hasOwnProperty.call

  /******/


  __nested_webpack_require_192__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /******/

  /******/
  // __webpack_public_path__

  /******/


  __nested_webpack_require_192__.p = "";
  /******/

  /******/

  /******/
  // Load entry module and return exports

  /******/

  return __nested_webpack_require_192__(__nested_webpack_require_192__.s = "./src/js/script.js");
  /******/
})({
  /***/
  "./src/js/script.js": function (module, exports) {
    /* Scroll slow */
    let links = document.querySelectorAll('a[href^="#"]'),
        // все ссылки, с атрибутом href, начинающимся с "#"
    header = document.querySelector('header'),
        //элемент header, который может быть спозиционирован абслютно или фиксированно
    topOffset = 50; // отступа сверху нет

    let upPageBtn = document.querySelector('.up-arrow');
    links.forEach(item => {
      item.addEventListener('click', function (e) {
        e.preventDefault();
        let href = this.getAttribute('href').slice(1);
        const targetElem = document.getElementById(href);
        const elemPosition = targetElem.getBoundingClientRect().top;
        const offsetPosition = elemPosition - topOffset;
        window.scrollBy({
          top: offsetPosition,
          behavior: 'smooth'
        });
      });
    });
    upPageBtn.style.opacity = '0';

    function magic() {
      if (window.pageYOffset < 1200) {
        upPageBtn.style.opacity = '0';
      } else {
        upPageBtn.style.opacity = '1';
      }
    } //


    upPageBtn.onclick = function () {
      window.scrollBy({
        behavior: 'smooth'
      });
    };

    window.addEventListener('scroll', () => {
      magic();
    });
    /* Website */

    let websiteBgBtn = document.querySelectorAll('.website__change-btn'),
        website = document.querySelector('.website');
    websiteBgBtn.forEach(item => {
      item.addEventListener('click', e => {
        let currentWebBtn = item;
        let currentDataWebBtn = currentWebBtn.getAttribute('data-websiteBg');

        function bgStyles() {
          website.style.backgroundPosition = 'top, center';
          website.style.backgroundAttachment = 'fixed';

          if (screen.width < 767) {
            website.style.backgroundSize = 'cover';
          } else {
            website.style.backgroundSize = '100%, auto';
          }
        }

        if (currentDataWebBtn == 1) {
          website.style.backgroundImage = 'url(./assets/img/website_bg_1.jpg)';
          bgStyles();
        } else if (currentDataWebBtn == 2) {
          website.style.backgroundImage = 'url(./assets/img/website_bg_2.jpg)';
          bgStyles();
        } else if (currentDataWebBtn == 3) {
          website.style.backgroundImage = 'url(./assets/img/website_bg_3.jpg)';
          bgStyles();
        } else if (currentDataWebBtn == 4) {
          website.style.backgroundImage = 'url(./assets/img/website_bg_4.jpg)';
          bgStyles();
        }

        if (!currentWebBtn.classList.contains('website__change-btn_active')) {
          websiteBgBtn.forEach(item => {
            item.classList.remove('website__change-btn_active');
          });
        }

        currentWebBtn.classList.add('website__change-btn_active');
      });
    });
    websiteBgBtn[0].click();
    /* Website search */

    let searchBtn = document.querySelector('.website__search'),
        closeSearch = document.querySelector('.website__search-close'),
        btnFind = document.querySelector('.search__btn_wrapper'),
        searchInput = document.querySelector('.website__search-string');
    searchBtn.addEventListener('click', () => {
      searchInput.classList.remove('fade5', 'hide');
      searchInput.classList.add('fade4', 'website__search-string_active');
      searchInput.style.display = "block";
      searchBtn.classList.add('hide');
      btnFind.classList.remove('fade5', 'hide');
      btnFind.classList.add('fade4', 'search__btn_wrapper_active');
      btnFind.style.display = "block";
      closeSearch.classList.add('show');
      closeSearch.classList.remove('hide');
    });
    closeSearch.addEventListener('click', () => {
      searchInput.classList.remove('website__search-string_active', 'fade4');
      searchInput.classList.add('fade5');
      searchBtn.classList.add('show');
      searchBtn.classList.remove('hide');
      btnFind.classList.remove('fade4', 'search__btn_wrapper_active');
      btnFind.classList.add('fade5');
      closeSearch.classList.add('hide');
      closeSearch.classList.remove('show');

      function displayNone() {
        searchInput.style.display = "none";
        btnFind.style.display = "none";
      }

      setTimeout(displayNone, 1000);
    });
    /* Website cards */

    class otherFilms {
      constructor(src, alt, subtitle, year, parent) {
        this.src = src;
        this.alt = alt;
        this.subtitle = subtitle;
        this.year = year;
        this.parent = document.querySelector(parent);
      }

      render() {
        const skeletonCard = document.createElement('div');
        skeletonCard.classList.add('slide-before');
        skeletonCard.innerHTML = `
          <div class="website__otherFilms-item">
            <img src=${this.src} alt=${this.alt} class="website__otherFilms-poster">
            <div class="website__otherFilms-subtitle">${this.subtitle}</div>
            <div class="website__otherFilms-year">${this.year}</div>
          </div>
        `;
        this.parent.append(skeletonCard);
      }

    }

    new otherFilms('./assets/img/otherFilms/big_money.jpg', 'big money', 'Большой куш', '(2001)', '.slider-track').render();
    new otherFilms('./assets/img/otherFilms/cards_money_two_guns.jpg', 'cards, money, two guns', 'Карты, деньги, два ствола', '(1998)', '.slider-track').render();
    new otherFilms('./assets/img/otherFilms/holms_1.jpg', 'holms 1', 'Шерлок Холмс', '(2009)', '.slider-track').render();
    new otherFilms('./assets/img/otherFilms/holms_2.jpg', 'holms 2', 'Шерлок Холмс: Игра теней', '(2011)', '.slider-track').render();
    new otherFilms('./assets/img/otherFilms/rok.jpg', 'rok-n-rol', 'Рок-н-рольщик', '(2009)', '.slider-track').render();

    if (screen.width <= 530) {
      const slider = document.querySelector('.website__otherFilms-content'),
            sliderList = document.querySelector('.slider-list-before'),
            sliderTrack = document.querySelector('.slider-track'),
            slides = document.querySelectorAll('.slide-before'),
            arrows = document.querySelector('.slider-arrows');
      slider.classList.toggle('website__otherFilms-content');
      slider.classList.toggle('slider');
      sliderList.classList.toggle('slider-list-before');
      sliderList.classList.toggle('slider-list');
      slides.forEach(item => {
        item.classList.toggle('slide-before');
      });
      slides.forEach(item => {
        item.classList.toggle('slide');
      });
      arrows.style.display = 'block';

      let prev = arrows.children[0],
          next = arrows.children[1],
          slideWidth = slides[0].offsetWidth,
          slideIndex = 0,
          posInit = 0,
          posX1 = 0,
          posX2 = 0,
          posY1 = 0,
          posY2 = 0,
          posFinal = 0,
          isSwipe = false,
          isScroll = false,
          allowSwipe = true,
          transition = true,
          nextTrf = 0,
          prevTrf = 0,
          lastTrf = --slides.length * slideWidth,
          posThreshold = slides[0].offsetWidth * 0.35,
          trfRegExp = /([-0-9.]+(?=px))/,
          swipeStartTime,
          swipeEndTime,
          getEvent = function () {
        return event.type.search('touch') !== -1 ? event.touches[0] : event;
      },
          slide = function () {
        if (transition) {
          sliderTrack.style.transition = 'transform .5s';
        }

        sliderTrack.style.transform = `translate3d(-${slideIndex * slideWidth}px, 0px, 0px)`;
        prev.classList.toggle('disabled', slideIndex === 0);
        next.classList.toggle('disabled', slideIndex === --slides.length);
      },
          swipeStart = function () {
        let evt = getEvent();

        if (allowSwipe) {
          swipeStartTime = Date.now();
          transition = true;
          nextTrf = (slideIndex + 1) * -slideWidth;
          prevTrf = (slideIndex - 1) * -slideWidth;
          posInit = posX1 = evt.clientX;
          posY1 = evt.clientY;
          sliderTrack.style.transition = '';
          document.addEventListener('touchmove', swipeAction);
          document.addEventListener('mousemove', swipeAction);
          document.addEventListener('touchend', swipeEnd);
          document.addEventListener('mouseup', swipeEnd);
          sliderList.classList.remove('grab');
          sliderList.classList.add('grabbing');
        }
      },
          swipeAction = function () {
        let evt = getEvent(),
            style = sliderTrack.style.transform,
            transform = +style.match(trfRegExp)[0];
        posX2 = posX1 - evt.clientX;
        posX1 = evt.clientX;
        posY2 = posY1 - evt.clientY;
        posY1 = evt.clientY;

        if (!isSwipe && !isScroll) {
          let posY = Math.abs(posY2);

          if (posY > 7 || posX2 === 0) {
            isScroll = true;
            allowSwipe = false;
          } else if (posY < 7) {
            isSwipe = true;
          }
        }

        if (isSwipe) {
          if (slideIndex === 0) {
            if (posInit < posX1) {
              setTransform(transform, 0);
              return;
            } else {
              allowSwipe = true;
            }
          } // запрет ухода вправо на последнем слайде


          if (slideIndex === --slides.length) {
            if (posInit > posX1) {
              setTransform(transform, lastTrf);
              return;
            } else {
              allowSwipe = true;
            }
          }

          if (posInit > posX1 && transform < nextTrf || posInit < posX1 && transform > prevTrf) {
            reachEdge();
            return;
          }

          sliderTrack.style.transform = `translate3d(${transform - posX2}px, 0px, 0px)`;
        }
      },
          swipeEnd = function () {
        posFinal = posInit - posX1;
        isScroll = false;
        isSwipe = false;
        document.removeEventListener('touchmove', swipeAction);
        document.removeEventListener('mousemove', swipeAction);
        document.removeEventListener('touchend', swipeEnd);
        document.removeEventListener('mouseup', swipeEnd);
        sliderList.classList.add('grab');
        sliderList.classList.remove('grabbing');

        if (allowSwipe) {
          swipeEndTime = Date.now();

          if (Math.abs(posFinal) > posThreshold || swipeEndTime - swipeStartTime < 300) {
            if (posInit < posX1) {
              slideIndex--;
            } else if (posInit > posX1) {
              slideIndex++;
            }
          }

          if (posInit !== posX1) {
            allowSwipe = false;
            slide();
          } else {
            allowSwipe = true;
          }
        } else {
          allowSwipe = true;
        }
      },
          setTransform = function (transform, comapreTransform) {
        if (transform >= comapreTransform) {
          if (transform > comapreTransform) {
            sliderTrack.style.transform = `translate3d(${comapreTransform}px, 0px, 0px)`;
          }
        }

        allowSwipe = false;
      },
          reachEdge = function () {
        transition = false;
        swipeEnd();
        allowSwipe = true;
      };

      sliderTrack.style.transform = 'translate3d(0px, 0px, 0px)';
      sliderList.classList.add('grab');
      sliderTrack.addEventListener('transitionend', () => allowSwipe = true);
      slider.addEventListener('touchstart', swipeStart);
      slider.addEventListener('mousedown', swipeStart);
      arrows.addEventListener('click', function () {
        let target = event.target;

        if (target.classList.contains('next')) {
          slideIndex++;
        } else if (target.classList.contains('prev')) {
          slideIndex--;
        } else {
          return;
        }

        slide();
      });
    }
    /* function cardsSlider () {
      const slider = document.createElement('div');
    
      slider.insertAdjacentHTML("afterBegin", cards[0]);
      slider.innerHTML = `
          <div class="slider">
              <div class="slider-list">
                  <div class="slider-track">
                      <div class="slide">${cards[0]}</div>
                      <div class="slide">${cards[1]}</div>
                      <div class="slide">${cards[2]}</div>
                      <div class="slide">${cards[3]}</div>
                      <div class="slide">${cards[4]}</div>
                  </div>
              </div>
              <div class="slider-arrows">
                  <button type="button" class="prev">&larr;</button>
                  <button type="button" class="next">&rarr;</button>
              </div>
          </div>
      `;
    
      cardsArea.append(slider);
      console.log(slider);
    }
    
    cardsSlider(); */

    /* Website menu */


    let genresBtn = document.querySelector('.website__nav-link'),
        menuParent = document.querySelector('.website__nav'),
        genresSubmenu = document.querySelector('.website__genres'),
        genresSubmenuLink = document.querySelectorAll('.website__genres-link');

    function submenu() {
      genresBtn.addEventListener("mouseover", showSub, false);
      genresBtn.addEventListener("mouseout", hideSub, false);
      genresSubmenu.addEventListener("mouseover", showSub, false);
      genresSubmenu.addEventListener("mouseout", hideSub, false);

      function showSub() {
        genresSubmenu.style.height = "auto";
        genresSubmenu.style.overflow = "visible";
        genresSubmenu.style.opacity = "1";
      }

      function hideSub() {
        genresSubmenu.style.height = "0px";
        genresSubmenu.style.overflow = "hidden";
        genresSubmenu.style.opacity = "0";
      }
    }

    submenu();
    /* console.log(screen.width); */

    const triggerMenu = document.querySelector('.website__menu-992px'),
          menuWrapper = document.querySelector('.nav-wrapper-menu'),
          navLink = document.querySelectorAll('.website__nav-link'),
          genres = document.querySelector('.website__genres'),
          genresLink = document.querySelectorAll('.website__genres-link'),
          wrapper = document.querySelector('.website__container-header'),
          navBlock = document.querySelector('.website__nav-block'),
          changeBg = document.querySelector('.website__change-bg');

    if (screen.width < 992) {
      triggerMenu.style.display = 'block';
      menuWrapper.classList.add('nav-wrapper-menu-992px');
      navLink.forEach(item => {
        item.classList.add('website__nav-link-992px');
      });
      genres.classList.add('website__genres-992px');
      genresLink.forEach(item => {
        item.classList.add('website__genres-link-992px');
      });
      triggerMenu.addEventListener('click', e => {
        if (menuWrapper.style.display == 'flex') {
          menuWrapper.style.display = 'none';
        } else {
          menuWrapper.style.display = 'flex';
        }

        wrapper.addEventListener('click', e => {
          if (e.target == wrapper) {
            menuWrapper.style.display = 'none';
          }
        });
        navBlock.addEventListener('click', e => {
          if (e.target == navBlock) {
            menuWrapper.style.display = 'none';
          }
        });
        changeBg.addEventListener('click', e => {
          if (e.target == changeBg) {
            menuWrapper.style.display = 'none';
          }
        });
      });
    }
    /* Website likes */


    let like = document.querySelector('.likes__btnG'),
        dislike = document.querySelector('.likes__btnR'),
        likeNomber = document.querySelector('.likes__btnG-counter'),
        dislikeNomber = document.querySelector('.likes__btnR-counter');

    function likeClick() {
      like.addEventListener('click', () => {
        like.classList.toggle('likes__btnG_active');

        if (like.classList.contains('likes__btnG_active')) {
          likeNomber.textContent++;
        } else {
          likeNomber.textContent--;
        }

        if (dislike.classList.contains('likes__btnR_active')) {
          dislike.classList.toggle('likes__btnR_active');
          dislikeNomber.textContent--;
        }
      });
    }

    ;
    likeClick();

    function dislikeClick() {
      dislike.addEventListener('click', () => {
        dislike.classList.toggle('likes__btnR_active');

        if (dislike.classList.contains('likes__btnR_active')) {
          dislikeNomber.textContent++;
        } else {
          dislikeNomber.textContent--;
        }

        if (like.classList.contains('likes__btnG_active')) {
          like.classList.toggle('likes__btnG_active');
          likeNomber.textContent--;
        }
      });
    }

    dislikeClick();
    /* Website comments */

    let comments = document.querySelector('.website__closeOpenComments'),
        commentsOpenBtn = document.querySelector('.website__comments-open');
    let commentsForm = document.querySelector('.website__comments-write'),
        commentText = document.querySelector('.website__comments-textarea'),
        commentName = document.querySelector('.website__comments-name'),
        commentEmail = document.querySelector('.website__comments-email'),
        commentPush = document.querySelector('.website__comments-push'),
        commentWrapper = document.querySelector('.website__comment'),
        comment = document.querySelector('.website__comment-area'),
        commentUserPhoto = document.querySelector('.website__comment-photo'),
        commentUserName = document.querySelector('.website__comment-name'),
        commentUserDate = document.querySelector('.website__comment-date'),
        commentUserText = document.querySelector('.website__comment-text');
    commentsOpenBtn.addEventListener("click", function () {
      let panel = this.nextElementSibling;

      if (panel.style.maxHeight) {
        comments.classList.remove('showComments');
        comments.classList.add('hideComments');
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
        comments.classList.add('showComments');
        comments.classList.remove('hideComments');
      }
    });
    commentPush.addEventListener('click', e => {
      e.preventDefault();
      let newComment = comment.cloneNode(true);

      if (!commentName.value || !commentText.value) {
        newComment.style.display = 'none';
      } else {
        commentUserPhoto.textContent = commentName.value.substr(0, 1).toUpperCase();
        commentUserName.textContent = commentName.value;
        commentUserDate.textContent = new Date().toLocaleString();
        commentUserText.textContent = commentText.value;
        /* console.log(commentUserName);
        console.log(commentUserText); */

        commentWrapper.append(newComment);
        commentText.value = '';
        commentName.value = '';
        commentEmail.value = '';
      }
    });
    /***/
  }
  /******/

});
/******/ })()
;
//# sourceMappingURL=script.js.map