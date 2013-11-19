/*
 * jquery.encode.js - jQuery plugin for encode/decode html entities
 * Author Oleg Taranov aka Kujbor
 * Copyright (C) 2013: CubeComp Development
 */
define("jquery.encode", ["jquery"], function($) {

    "use strict";

    $.htmlEncode = function(data) {
        return $("<div />").text(data).html().replace(/"/g, "&quot;");
    };

    $.htmlDecode = function(data) {
        return $("<div />").html(data.replace(/&quot;/g, '"')).text();
    };

});
