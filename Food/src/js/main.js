require('es6-promise').polyfill();
import 'nodelist-foreach-polyfill';

import  tabs from'./modules/tabs';
import  modal from'./modules/modal';
import  timer from'./modules/timer';
import  slider from'./modules/slider';
/* import  cards from'./modules/cards'; */
import  calc from'./modules/calc';
import  form from'./modules/form';
import {openModal} from './modules/modal';

window.addEventListener('DOMContentLoaded', () => {
	const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 2000);    

	tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
	timer('.timer', '2021-12-01');
	slider({
        container: '.offer__slider',
        slide: '.offer__slide',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner'
    });
	/* cards(); */
	calc();
	/* form('form', modalTimerId); */
    modal('[data-modal]', '.modal', modalTimerId);

});