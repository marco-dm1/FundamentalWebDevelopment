Name: "JavaScript Programming All-in-One Tutorial Series (9 HOURS!)"
Author: Caleb Curry
Resources: 
	https://www.youtube.com/watch?v=9M4XKi25I2M
Extra Notes:
	I played the video on 1.5-2x to get through the content faster and had no problem. I also skipped note taking on some very simple things at the start.
----------

JavaScript is a language used for web and mobile development.
    - It is mainly used for making the front end of websites and mobile apps interactive.
        - We can also use frameworks with JavaScript like ReactJS, AngularJS, and VueJS to create good web apps.
    - It can also be used in the back end of websites, with certain technologies (Like node.js), to give the website client-server interactions
    - JavaScript has some similar syntax to C# and Java.

Web browsers are able to run JavaScript because they have internal javascript engines.
    - It is important that JavaScript is so widely supportered because then 90%+ of people can run our code natively
    - We can test the javascript engine in Google Chrome by typing "javascript: alert("test")" in the url bar.
        This will prompt us with text that says "test" and a button to dismiss it.
    - We can also test JavaScript in Google Chrome through opening the Chrome Dev Tools and using the Console to type in our commands.

We can connect a JS file to a HTML file by using the "script" element and then specifying the source.
    - "<script src="test.js"></script>
    
There are multiple ways to load JavaScript in HTML with the script element
    - We can do the normal way and just have our script element under the elements we are editing.
        <script src="test.js"></script>
    - We can add "defer" to the script element which will wait for the whole page to load and then run so that it can change elements regardless of it is above/below in the HTML
        <script defer src="test.js"></script>
    - We can add "async" to the script element which will make it run before the page is loaded
        <script async src="test.js"></script>

We can change HTML elements to make interactive websites with JavaScript.
    - We can get the button with confirm-button id to hide itself and have the confirm-text id display "test" when it is clicked.

        <p id="confirm-text">please place your order</p>    <---- Javascript references the id with getElementById
        <button id="confirm-button">place order</button>    <---- Javascript references the id with getElementById
        <script src="test.js"></script> <---- Javascript file is added to the HTML so it can run on the document. (It needs to be added under it for it to work, if its above then it hasn't loaded in those elements yet so it errors)

        document.getElementById("confirm-button").onclick = function(){
            document.getElementById("confirm-text").innerHTML = "test";   <---- Changes the innerHTML (everything inside the element) to that text
            document.getElementById("confirm-button").style.display = "none";  <---- Changes the CSS (style) display property to none (hides the button).
        }
