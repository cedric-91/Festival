"use strict";var $run={menu_icon:$(".menu-icon"),menu_list:$(".menu-list"),festivals_container:$(".festival"),festivals_content:$(".inner-content"),festivals_content_btn:$(".festival .more-details"),menu_icon__icons:$(".icon"),location_container:$(".location-container"),columns_left:$(".location-container .left-content"),columns_right:$(".location-container .right-content"),loaction_container_heading:$(".location-container .heading-opa"),get_there_container:$(".get-there-container"),get_there_container_heading:$(".get-there-container .heading-opa"),get_there_container_map:$(".get-there-container .map-container"),contact_container:$(".contact-container"),contact_container_heading:$(".contact_container .heading-opa"),contact_column:$(".contact-container .column"),on_track_container:$(".on-track-container"),details_container:$(".details-container"),application:function(){$run.menu_icon.on("click",$run.showMenu),$run.festivals_content_btn.on("click",$run.displayInfo),$run.onScroll(),$run.linkAnimationScroll()},displayInfo:function(n){n.preventDefault(),$run.details_container.toggleClass("display-block")},linkAnimationScroll:function(){$('a[href*="#"]:not([href="#"])').on("click",function(n){if(n.preventDefault(),location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var t=$(this.hash);if(t=t.length?t:$("[name="+this.hash.slice(1)+"]"),t.length)return $("html, body").animate({scrollTop:t.offset().top},1e3),!1}})},showMenu:function(){$run.menu_icon__icons.toggleClass("active"),$run.menu_list.toggleClass("open-nav")},onScroll:function(){$run.festivals_container.waypoint(function(n){"down"===n&&$run.festivals_content.fadeIn("slow")},{offset:"70%"}),$run.location_container.waypoint(function(n){"down"===n&&($run.columns_left.removeClass("left-content"),$run.columns_left.addClass("columns-origin"),$run.columns_right.removeClass("right-content"),$run.columns_right.addClass("columns-origin"),$run.loaction_container_heading.addClass("animate-center"))},{offset:"50%"}),$run.get_there_container.waypoint(function(n){"down"===n&&($run.get_there_container_heading.addClass("animate-center"),$run.get_there_container_map.fadeIn(1500))},{offset:"50%"}),$run.contact_container.waypoint(function(n){"down"===n&&($run.contact_column.css({transform:"translate(0)","-webkit-transform":"translate(0)","-moz-transform":"translate(0)","-webkit-transition":"transform 700ms ease-in 0s","-moz-transition":"transform 700ms ease-in 0s",transition:"transform 700ms ease-in 0s"}),$run.contact_container_heading.addClass("animate-center"))},{offset:"70%"})}};$(function(){}),$run.application();