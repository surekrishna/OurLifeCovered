function commaSeparateNumber(a){for(;/(\d+)(\d{3})/.test(a.toString());)a=a.toString().replace(/(\d+)(\d{3})/,"$1,$2");return a}function updateSlider_one(a){var n=$(a),e=n.val(),t=n.attr("min"),s=n.attr("max"),r=Math.round(s-t),o=Math.round(100*(e-t)/r),p=n.next();p.find("span.bar-btn").css("left",o+"%"),p.find("span.bar > span").css("width",o+"%"),$(".coverage-amount").text("$"+commaSeparateNumber(e))}function updateSlider_two(a){var n=$(a),e=n.val(),t=n.attr("min"),s=n.attr("max"),r=Math.round(s-t),o=Math.round(100*(e-t)/r),p=n.next();p.find("span.bar-btn").css("left",o+"%"),p.find("span.bar > span").css("width",o+"%"),$(".coverage-term").text(commaSeparateNumber(e)+" years")}$(document).ready(function(){$("#open_menu").on("click",function(a){a.preventDefault(),$("ul#top_nav_menu").addClass("open"),$("a#close_menu").addClass("open")}),$("#close_menu").on("click",function(a){a.preventDefault(),$("ul#top_nav_menu").removeClass("open"),$("a#close_menu").removeClass("open")})}),$("document").ready(function(){$(".slider_one").rangeslider_one(),$(".slider_two").rangeslider_two()}),$.fn.rangeslider_one=function(a){var n=this,e=n.attr("value");return n.wrap("<span class='range-slider'></span>"),n.after("<span class='slider-container'><span class='bar'><span></span></span><span class='bar-btn'></span></span>"),n.attr("oninput","updateSlider_one(this)"),updateSlider_one(this),n},$.fn.rangeslider_two=function(a){var n=this,e=n.attr("value");return n.wrap("<span class='range-slider'></span>"),n.after("<span class='slider-container'><span class='bar'><span></span></span><span class='bar-btn'></span></span>"),n.attr("oninput","updateSlider_two(this)"),updateSlider_two(this),n};