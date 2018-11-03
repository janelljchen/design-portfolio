import $ from 'jquery';
import whatInput from 'what-input';

window.$ = $;

import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';

import 'tablesaw/dist/tablesaw.jquery';
import libs from './lib/dependencies';
window.libs = libs;

$(document).foundation();


$(document).ready(function() {
  var activeLink=$("#work");
  var activePage=$("#work-page");
  $(".nav").each(function(){
    var self=$(this);
    self.click(function() {
      activeLink.toggleClass("nav-active");

      activePage.toggleClass("page-inactive");

      activeLink=self;

      if (self.attr('id') == "work") {
        $("#work-page").toggleClass("page-inactive");
        activePage=$("#work-page");
      }
      else if (self.attr('id') == "about") {
        $("#about-page").toggleClass("page-inactive");
        activePage=$("#about-page");
      }
      else if (self.attr('id') == "resume") {
        $("#resume-page").toggleClass("page-inactive");
        activePage=$("#resume-page");
      }
      else {
        $("#contact-page").toggleClass("page-inactive");
        activePage=$("#contact-page");
      }
      activeLink.toggleClass("nav-active");
    });
  });

});
