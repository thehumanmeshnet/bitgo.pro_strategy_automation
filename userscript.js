// use this in greasemonkey on chrome

// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        *.bitgopro.biz/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    setTimeout(function(){
        if(document.querySelector('body > div > section.header > div.header-middle > div.container > div > div:nth-child(2) > div:nth-child(4) > a.btn.btn-1').innerHTML.split('Login').length === 2 && window.location.href !== 'https://bitgopro.biz/index.php?a=login'){
            window.location.href = 'https://bitgopro.biz/index.php?a=login';
            return;
        }

        if(window.location.href === 'https://bitgopro.biz/index.php?a=deposit' && document.querySelectorAll('table').length === 6){
            var num = document.querySelector('body > div > section.main.main-cabinet > div > div > form > table.blank > tbody > tr:nth-child(1) > td:nth-child(2)').innerHTML.split('$')[1];
            if(parseFloat(num) > 1){
                document.querySelector('body > div > section.main.main-cabinet > div > div > form > table.blank > tbody > tr:nth-child(3) > td:nth-child(2) > input').value = num;
                document.querySelector('body > div > section.main.main-cabinet > div > div > form > table.blank > tbody > tr:nth-child(5) > td > table > tbody > tr:nth-child(1) > td:nth-child(1) > input[type="radio"]').click();
                document.querySelector('body > div > section.main.main-cabinet > div > div > form > table.blank > tbody > tr:nth-child(6) > td > input').click();
            }
            else {
                setTimeout(function(){
                    window.location.href = 'https://bitgopro.biz/index.php?a=deposit';
                },180000);
            }

        }
        else if(window.location.href === 'https://bitgopro.biz/index.php?a=login') {
            document.querySelector('body > div > section.main-pages > div > div > div:nth-child(5) > div > div > form > div:nth-child(4) > label > input').value = 'rohankhanna';
            document.querySelector('body > div > section.main-pages > div > div > div:nth-child(5) > div > div > form > div:nth-child(5) > label > input').value = 'deltainfinis123';
            document.querySelector('body > div > section.main-pages > div > div > div:nth-child(5) > div > div > form > center > div > input').click();
        }
        else if(window.location.href === 'https://bitgopro.biz/index.php?a=deposit' && document.querySelectorAll('table').length === 1) {
                document.querySelector('body > div > section.main.main-cabinet > div > div > form > input:nth-child(8)').click();
        }
        else {
            window.location.href = 'https://bitgopro.biz/index.php?a=deposit';
        }

    },10000);
    // Your code here...
})();
