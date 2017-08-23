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
        var a = new Date();
        var hours = a.getHours();
        var mins = a.getMinutes();
        if(!(hours === 13 && mins > 35)){
            localStorage.done = true;
        }
        if(window.location.href === 'https://bitgopro.biz/index.php?a=withdraw'){
            if(localStorage.daily_withdrawal > 0 && hours === 13 && mins >35){
                var account_balance = document.querySelector('body > div > section.main.main-cabinet > div > div > form > table:nth-child(6) > tbody > tr:nth-child(1) > td:nth-child(2) > b').innerHTML;
                account_balance = parseFloat(account_balance);
                var limit = localStorage.daily_withdrawal.toString().substr(0,4);
                var Nlimit = parseFloat(limit);
                if(Nlimit < account_balance){
                    document.querySelector('body > div > section.main.main-cabinet > div > div > form > table:nth-child(8) > tbody > tr:nth-child(5) > td:nth-child(1) > input[type="radio"]').click();
                    document.querySelector('body > div > section.main.main-cabinet > div > div > form > table:nth-child(9) > tbody > tr:nth-child(2) > td:nth-child(2) > input').value = limit;
                    document.querySelector('body > div > section.main.main-cabinet > div > div > form > table:nth-child(9) > tbody > tr:nth-child(4) > td:nth-child(2) > input').click();
                    localStorage.done = 'done';
                    window.location.href = 'https://bitgopro.biz/index.php?a=deposit';
                    return;
                }
                else {
                    window.location.reload();
                    return;
                }
            }
        }
        if(localStorage.done !== 'done' && window.location.href === 'https://bitgopro.biz/index.php?a=account'){
            var current_investment = document.querySelector('body > div > section.main.main-cabinet > div > div > div:nth-child(3) > table > tbody > tr:nth-child(6) > td:nth-child(2) > b').innerHTML;
            current_investment = parseFloat(current_investment);
            localStorage.daily_withdrawal = current_investment*0.1;
            window.location.href = 'https://bitgopro.biz/index.php?a=withdraw';
            return;
        }
        if( ( localStorage.done !== 'done' && (hours === 13 && mins > 35)) && document.querySelector('body > div > section.header > div.header-middle > div.container > div > div:nth-child(2) > div:nth-child(4) > a.btn.btn-1').innerHTML.split('Login').length === 1){
            localStorage.done = false;
            window.location.href = 'https://bitgopro.biz/index.php?a=account';
            return;
        }
        
        var loggedIn = document.querySelector('body > div > section.header > div.header-middle > div.container > div > div:nth-child(2) > div:nth-child(4) > a.btn.btn-1').innerHTML.split('Login').length === 2;
        if(loggedIn && window.location.href !== 'https://bitgopro.biz/index.php?a=login'){
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
