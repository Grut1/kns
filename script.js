/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/checkTextInputs.js":
/*!*******************************************!*\
  !*** ./src/js/modules/checkTextInputs.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const checkTextInputs = () => {
  const inputName = document.querySelectorAll('[type="name"]'),
        inputEmail = document.querySelectorAll('[type="email"]');
  inputName.forEach(input => {
    input.addEventListener('keypress', function (e) {
      if (e.key.match(/[^а-яё a-z]/ig)) {
        e.preventDefault();
      }
    });
  });
  inputEmail.forEach(input => {
    input.addEventListener('keypress', function (e) {
      if (e.key.match(/[^a-z 0-9 @]/ig)) {
        e.preventDefault();
      }
    });
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkTextInputs);

/***/ }),

/***/ "./src/js/modules/form.js":
/*!********************************!*\
  !*** ./src/js/modules/form.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const form = () => {
  const formBlock = document.querySelector("form"),
        inputs = document.querySelectorAll("input");
  const messages = {
    loading: 'Загрузка...',
    success: 'Спасибо! Скоро я с вами свяжусь',
    failure: 'Что-то пошло не так...'
  };

  const postData = async (url, data) => {
    document.querySelector('.spiner').textContent = messages.loading;
    let res = await fetch(url, {
      method: "POST",
      body: data
    });
    return await res.text();
  };

  const clearInputs = () => {
    inputs.forEach(item => {
      item.value = '';
    });
  };

  formBlock.addEventListener('submit', e => {
    e.preventDefault();
    let statusMessage = document.createElement('div');
    statusMessage.classList.add('spiner');
    formBlock.appendChild(statusMessage);
    const formData = new FormData(formBlock);
    postData('assets/server.php', formData).then(res => {
      console.log(res);
      statusMessage.textContent = messages.success;
    }).catch(() => statusMessage.textContent = messages.failure).finally(() => {
      clearInputs();
      setTimeout(() => {
        statusMessage.remove();
      }, 5000);
    });
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (form);

/***/ }),

/***/ "./src/js/modules/menu.js":
/*!********************************!*\
  !*** ./src/js/modules/menu.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const menu = () => {
  const burger = document.querySelector('.intro__burger'),
        burgerDiv = document.querySelectorAll('.intro__burger div'),
        close = document.querySelector('.intro__menu_close'),
        menu = document.querySelector('.intro__menu'),
        overlay = document.querySelector('.intro__menu_overlay'),
        nav = document.querySelector('nav'),
        introSocial = document.querySelector('.intro__social'),
        scroll = calcScroll();
  burger.addEventListener('click', () => {
    menu.classList.toggle('intro__menu_active');
    burger.style.display = 'none';
    document.body.style.overflow = 'hidden';

    if (screen.width >= 992) {
      document.body.style.marginRight = `${scroll}px`;
    }
  });
  burger.addEventListener('mouseenter', () => {
    burgerDiv.forEach(item => {
      item.style.backgroundColor = "#d19e1d";
    });
  });
  burger.addEventListener('mouseleave', () => {
    burgerDiv.forEach(item => {
      item.style.backgroundColor = "#000";
    });
  });
  close.addEventListener('click', () => {
    showContent();
  });
  nav.addEventListener('click', () => {
    showContent();
  });
  overlay.addEventListener('click', e => {
    if (e.target === overlay) {
      showContent();
    }
  });

  function calcScroll() {
    let div = document.createElement('div');
    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflow = 'scroll';
    div.style.visibility = 'hidden';
    document.body.appendChild(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();
    return scrollWidth;
  }

  function showContent() {
    menu.classList.toggle('intro__menu_active');
    burger.style.display = 'flex';
    document.body.style.overflow = '';
    document.body.style.marginRight = `0px`;
  }

  const bottomOffsetFirst = 120;
  const bottomOffsetSecond = 60;
  const introSocialLink = document.querySelectorAll('.intro__social a');
  document.addEventListener('scroll', () => {
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - bottomOffsetFirst) {
      introSocial.classList.remove('animate__animated');
    } else if (window.pageYOffset + document.documentElement.clientHeight < document.documentElement.scrollHeight - bottomOffsetFirst) {
      introSocial.classList.add('animate__animated');
    }
  });
  document.addEventListener('scroll', () => {
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - bottomOffsetSecond) {
      introSocialLink.forEach(item => {
        item.style.cursor = "default";
      });
      introSocial.style.opacity = "0";
    } else if (window.pageYOffset + document.documentElement.clientHeight < document.documentElement.scrollHeight - bottomOffsetSecond) {
      introSocialLink.forEach(item => {
        item.style.cursor = "pointer";
      });
      introSocial.style.opacity = "1";
    }
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);

/***/ }),

/***/ "./src/js/modules/projects.js":
/*!************************************!*\
  !*** ./src/js/modules/projects.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const projects = () => {
  const projects = document.querySelectorAll(".projects__item"),
        images = document.querySelectorAll(".projects__item img"),
        hovers = document.querySelectorAll(".projects__item_hover");
  projects.forEach((project, i) => {
    project.addEventListener('mouseenter', () => {
      hovers[i].style.opacity = '1';
      images[i].style.filter = 'blur(4px)';
    });
  });
  projects.forEach((project, i) => {
    project.addEventListener('mouseleave', () => {
      hovers[i].style.opacity = '0';
      images[i].style.filter = 'blur(0px)';
    });
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projects);

/***/ }),

/***/ "./src/js/modules/scales.js":
/*!**********************************!*\
  !*** ./src/js/modules/scales.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const scales = () => {
  const trigger = document.querySelector(".o-scale"),
        percentAll = document.querySelectorAll(".scales__block_percent"),
        orangeAll = document.querySelectorAll("[data-scale]");
  const windowBlock = document.querySelector('.scales__window');
  /* console.log(windowBlock.getBoundingClientRect()); */

  /* console.log(windowBlock.getBoundingClientRect().bottom); */

  /* console.log(document.documentElement.scrollTop); */

  if (windowBlock.getBoundingClientRect().top <= 300 && windowBlock.getBoundingClientRect().bottom >= 400 && trigger.style.width == 0) {
    const scaleWidthArr = ["90%", "60%", "75%", "80%", "85%", "90%", "100%"],
          scalePercentArr = [90, 60, 75, 80, 85, 90, 100];
    orangeAll.forEach((item, i) => {
      item.style.width = scaleWidthArr[i];
      item.classList.toggle('o-scale-active');
    });
    percentAll.forEach((item, i) => {
      function outNum(num) {
        const step = 1;
        let n = 0;
        let interval = setInterval(() => {
          n = n + step;

          if (n == num) {
            clearInterval(interval);
          }

          item.innerHTML = n + '%';
        }, 30);
      }

      ;
      outNum(scalePercentArr[i]);
    });
  }
};

window.addEventListener('scroll', () => {
  scales();
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scales);
/* window.pageYOffset > 1850 && window.pageYOffset < 2000 */

/*  */

/* const orange = document.querySelector('.o-scale'),
          percent = document.querySelector('.scales__block_percent');

    if (window.pageYOffset > 1850 && window.pageYOffset < 1900) {
        function outNum(num) {
        const time = 2000;
        const step = 1;  
        let n = 0;
        let t = Math.round(time/(num/step));
        let interval = setInterval(() => {
            n = n + step;
            if(n == num) {
                clearInterval(interval);
            }
        percent.innerHTML = n + '%';
        orange.style.width = `${n}%`;   
        }, 30);

        orange.classList.toggle('o-scale');
        orange.classList.toggle('o-scale-active');
        };

        outNum(90); 
    }  
    
    
    window.pageYOffset > 1850 && window.pageYOffset < 2000 && trigger.style.width == 0
    
    
    */

/***/ }),

/***/ "./src/js/modules/scrolls.js":
/*!***********************************!*\
  !*** ./src/js/modules/scrolls.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const scrolls = () => {
  const links = document.querySelectorAll('a[href^="#"]'),
        topOffset = 0,
        upPageBtn = document.querySelector('.up__icon');
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
  }

  upPageBtn.onclick = function () {
    window.scrollBy({
      behavior: 'smooth'
    });
  };

  window.addEventListener('scroll', () => {
    magic();
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scrolls);

/***/ }),

/***/ "./src/js/modules/skills.js":
/*!**********************************!*\
  !*** ./src/js/modules/skills.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const skills = () => {
  const skillsBlockAll = document.querySelectorAll(".skills__block_item");
  skillsBlockAll.forEach(item => {
    item.addEventListener('mouseenter', () => {
      item.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
      item.style.color = '#fff';
    });
    item.addEventListener('mouseleave', () => {
      item.style.backgroundColor = 'transparent';
      item.style.color = '#000';
    });
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (skills);

/***/ }),

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const slider = slides => {
  let slideIndex = 1,
      paused = false;
  const items = document.querySelectorAll(slides),
        img = document.querySelector('.about__img_block');

  function showSlides(n) {
    if (n > items.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = items.length;
    }

    items.forEach(item => {
      item.classList.add("animate__animated");
      item.style.display = "none";
    });
    items[slideIndex - 1].style.display = 'block';
  }

  showSlides(slideIndex);

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function activateAnimation() {
    paused = setInterval(function () {
      plusSlides(1);
      items[slideIndex - 1].classList.add('animate__fadeIn');
    }, 4000);
  }

  activateAnimation();
  img.addEventListener('mouseenter', () => {
    clearInterval(paused);
  });
  img.addEventListener('mouseleave', () => {
    activateAnimation();
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/menu */ "./src/js/modules/menu.js");
/* harmony import */ var _modules_scales__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/scales */ "./src/js/modules/scales.js");
/* harmony import */ var _modules_scrolls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/scrolls */ "./src/js/modules/scrolls.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/slider */ "./src/js/modules/slider.js");
/* harmony import */ var _modules_skills__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/skills */ "./src/js/modules/skills.js");
/* harmony import */ var _modules_projects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/projects */ "./src/js/modules/projects.js");
/* harmony import */ var _modules_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/form */ "./src/js/modules/form.js");
/* harmony import */ var _modules_checkTextInputs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/checkTextInputs */ "./src/js/modules/checkTextInputs.js");








window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  (0,_modules_menu__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_modules_scrolls__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_modules_slider__WEBPACK_IMPORTED_MODULE_3__["default"])('.about__wrapper_slide');
  (0,_modules_scales__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_modules_skills__WEBPACK_IMPORTED_MODULE_4__["default"])();
  (0,_modules_projects__WEBPACK_IMPORTED_MODULE_5__["default"])();
  (0,_modules_form__WEBPACK_IMPORTED_MODULE_6__["default"])();
  /* checkTextInputs('.contacts__form_name-input', '.contacts__form_email-input'); */

  (0,_modules_checkTextInputs__WEBPACK_IMPORTED_MODULE_7__["default"])();
  new WOW().init();
});
})();

/******/ })()
;
//# sourceMappingURL=script.js.map