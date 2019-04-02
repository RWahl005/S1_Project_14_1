"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 12
   Case Problem 1

   Author: Ryan Wahl
   Date:   4.2.19

   Filename: na_styler.js

   Functions
   =========
   
   setStyles()
      Sets up the style sheets and the style sheet switcher.
      
   randInt(size)
      Returns a random integer from 0 up to size-1.

*/

// Run setStyles() on load.
window.addEventListener("load", setStyles);

/**
 * Set up the style sheets and switches them
 */
function setStyles() {
      // Get a random number between 0 - 4
      var styleNum = randInt(5);
      // Create a link element
      var linkElem = document.createElement("link");
      // Add the rel attribute to the link element.
      linkElem.setAttribute("rel", "stylesheet");
      // Add the id attribute to the link element
      linkElem.setAttribute("id", "fancySheet");
      // Add the href attribute to the link element
      linkElem.setAttribute("href", "na_style_" + styleNum + ".css");
      // Add the link element to the header.
      document.head.appendChild(linkElem);

      // Create a figure box.
      var figBox = document.createElement("figure");
      // Add an id of styleThumbs to the figure box.
      figBox.setAttribute("id", "styleThumbs");

      // Add the figure box to the element with the id of box.
      document.getElementById("box").appendChild(figBox);

      // Loop through all of the possible style sheets.
      for (var i = 0; i < 5; i++) {
            // Creates an image element.
            var sheetImg = document.createElement("img");
            // Sets the source of the image to the image related to the number.
            sheetImg.setAttribute("src", "na_small_" + i + ".png");
            // Sets the alt of the image to the css realted to the number.
            sheetImg.setAttribute("alt", "na_style_" + i + ".css");

            // Add a click event listener when the image is clicked.
            sheetImg.addEventListener("click", function (e) {
                  // Set the stylesheet to the one in the alt.
                  document.getElementById("fancySheet").href = e.target.alt;
            });
            // Show the image in the figure box.
            figBox.appendChild(sheetImg);
      }

      // Make a stlye element called thumbStyles
      var thumbStyles = document.createElement("style");
      // Add the thumbStyles to the header.
      document.head.appendChild(thumbStyles);
      // Add following the style rule:
      thumbStyles.sheet.insertRule(
            "figure#styleThumbs {\
                  position: absolute;\
                  left: 0px;\
                  bottom: 0px;\
            }", 0);
      // Add following the style rule:
      thumbStyles.sheet.insertRule(
            "figure#styleThumbs img {\
                  outline: 1px solid black;\
                  cursor: pointer;\
                  opacity: 0.75;\
            }\
      ", 1);
      // Add following the style rule:
      thumbStyles.sheet.insertRule(
            "figure#styleThumbs img:hover { \
                  outline: 1px solid red;\
                  opacity: 1.0;\
            }\
      ", 2);
}


function randInt(size) {
      return Math.floor(size * Math.random());
}