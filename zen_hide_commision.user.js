// ==UserScript==
// @name         zen_hide_commision
// @namespace    https://zenmoney.ru/
// @version      0.1
// @description  remove comission by click from map report
// @author       viakondratiuk
// @match        https://zenmoney.ru/a/*
// @grant        none
// ==/UserScript==
$(function () {
    zm.bind('zenmoney_onload', function() {
        if (zm.loader.url == "reports/treemap")
        {
            $("div.commision").on("click", function() {
                var com = parseInt($("div.commision.block .sum").html().replace(/\s/g, ''));
                var sum = parseInt($("div.calc .sum").html().replace(/\s/g, ''));
                $("div.calc .sum").html(parseInt(sum + com).toLocaleString().replace(',', ' '));
                $("div.commision").hide();
            });
        }
    });
});
