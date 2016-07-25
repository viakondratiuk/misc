// ==UserScript==
// @name         leetcode_hide_locked
// @namespace    https://leetcode.com/
// @version      0.1
// @description  Hide leet code locked problems for list of the problems
// @author       viakondratiuk
// @match        https://leetcode.com/problemset/algorithms/
// @grant        none
// ==/UserScript==

(function($) {
    'use strict';

    $("#problemList tr td:nth-child(3)").each(function() {
        if ($(this).find("i").length) {
            $(this).parent().hide();
        }
    });
})(jQuery);
