!function(n){var t=n(window),e=t.height();t.resize(function(){e=t.height()}),n.fn.parallax=function(o,i,r){function u(){var r=t.scrollTop();h.each(function(){var t=n(this),u=t.offset().top,a=l(t);r>u+a||u>r+e||h.css("backgroundPosition",o+" "+Math.round((u-r)*i)+"px")})}var h=n(this),l,a,c=0;h.each(function(){a=h.offset().top}),l=r?function(n){return n.outerHeight(!0)}:function(n){return n.height()},(arguments.length<1||null===o)&&(o="50%"),(arguments.length<2||null===i)&&(i=.1),(arguments.length<3||null===r)&&(r=!0),t.bind("scroll",u).resize(u),u()}}(jQuery);