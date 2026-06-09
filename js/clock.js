/* clock.js — kept for backwards compatibility, but the elegant
   countdown is now handled inline in index.html.
   This file is only needed if you still want the FlipClock
   widget elsewhere on the page. */

$(document).ready(function () {

  // The elegant countdown in the hero is pure JS (no jQuery / FlipClock needed).
  // If you also want a FlipClock somewhere, uncomment below and add
  // <div class="clock"></div> to your HTML.

  /*
  var currentDate = new Date();
  // NOTE: moment-timezone identifier for Egypt is "Africa/Cairo"
  var targetDate  = moment.tz("2026-06-26 20:00", "Africa/Cairo");
  var diff = targetDate / 1000 - currentDate.getTime() / 1000;

  var clock;
  if (diff <= 0) {
    clock = $(".clock").FlipClock(0, {
      clockFace: "DailyCounter",
      countdown: true,
      autostart: false
    });
  } else {
    clock = $(".clock").FlipClock(diff, {
      clockFace: "DailyCounter",
      countdown: true,
      callbacks: {
        stop: function () { console.log("Timer has ended!"); }
      }
    });

    (function checktime() {
      setTimeout(function () {
        if (clock.getTime() <= 0) { clock.setTime(0); }
        checktime();
      }, 1000);
    }());
  }
  */
});
