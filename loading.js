/* loader-44 */
var num = document.querySelector('.loader-44 .loader-numbers'),    // Get the number
    duration = 5500;                                               // Animation in ms
    
// Custom easing function, ripped directly from the jQuery easing plugin (easeOutSine)
$.extend($.easing, {
  easeIn: function (x, t, b, c, d) {
    return c * Math.sin(t/d * (Math.PI/2)) + b;
  }
});
    
// Numbers animation 
$({'number': 0}).delay(800).animate({'number': 100}, {
  duration: duration,
  easing: 'easeIn',
  step: function (a) {
    a = Math.round(a);                   //rounded number
    a = String(a);                       //convert a number to a string
    $(num).html(a + '%');
  }
});