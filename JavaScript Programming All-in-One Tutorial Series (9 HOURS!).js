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

We can store data in JavaScript with variables:
    ex:
        var username = prompt();    <----   This makes a variable with identifier of "username" and the value is the return value of the prompt function.
    We can also test the values of our variables with the Chrome Dev Tools by just typing the variable name and it will output its value
    Javascript is dynamtically typed so we don't have to specify a specific data type
    Whenever we set the value of a variable to another variable the data is copied so if the variable we are using for the value is changed then the other variable will remain the same because it is a copy

We can output into the console in JS by using "console.log"
        console.log("this is my print");

We can also use 2 types of comments in JS to give ourselves notes in our code.
    - Single line comments:
        ex: // This is my comment
    - Multiline comments
        ex: /*
                This is my multiline comment
            */

JS Web Architecture
    - We should never trust the client because the data on it can be changed
    - The server side of the website handles the databases

Variable Scope in JS
    Whenever we create a variable in JS it is put into the Global Scope
        - We can see the Global Scope (window) by just typing "window" in the Chrome Dev Tools and it will display our variable with other information including things like "document"
    We don't always want to use the Global Scope when making variables because variables intended for different scopes could interfere with eachother
    We can make a IIFE (immediately invoked function expression) in JS to create local scopes for our variables
        ex:
            (function(){    <---- The first "(" begins to wrap the function, the two "()" are for the args of the function and the bracket "{" opens the area to put the code inside of the function
                var dog = 5;    <---- This creates a new local variable because "var" means to create a new variable in JS. This means that this variable is contained inside this function
                cat = 6;    <---- This doesn't create a local variable because there is no "var". This means that it either changes an existing variable named "cat" or creates a new global variable named "cat"
            })();   <---- The two last "()" execute the function, the bracket "}" closes the other bracket of the function and the other ")" finishes wrapping the function

Javascript in relation to other languages
    - JavaScript looks similar to languages like Java and C# but doesn't actually work the same.
    - JavaScript doesn't require an installation to be ran
    - JavaScript is executed through a JS Engine instead of a compiler.
        There are multiple JS Engines like V8 (Chrome), SpiderMonkey (Firefox), Chakra (Edge)
            - All the engines use the ECMAScript standard so all websites can work the same.
                How much the different engines confirm to ECMAScript's standards can be tested through a test called "Test 262"
            - The engines use JIT Compilation (Just in Time Compilation) meaning JavaScript is compiled when it is needed

Block Level Scoping in JavaScript
    - A block in JavaScript is something inbetween brackets.
        Blocks can be created anywhere in our javascript files to create block level scoping
        ex:
            {
                // This is a block and this works if it is placed anywhere in our javascript!
            }
    - "let" and "const" variables are block level variable types available in newer JS implementations
        Block Level Scoping allows us to create local scope while not having to deal with complicated wrapping techniques like in the previous explanation of local variable scopes
        "let" allows us to completely keep a variable in the local scope
            ex:
                if(blah){
                    var y = 5;  <---- Since this is a if statement this would still let the y variable's scope go out of these brackets
                    let x = 5;  <---- Since this is a let variable the x variable's scope completely stays in this scope.
                }
        "const" works the same way as "let" except it is a constant so it can't be changed after it has been set.
        Even if we create "let" or "const" variables at the heighest scope in our JavaScript file it still remains out of Global Scope and is inaccessible through "window"

Data Types in JavaScript
    - We don't have to specify the actual type of data in JavaScript because it is dynamically typed.
        TypeScript is an alternative to JavaScript that includes statically typed data types.
    - There are two types of data types in JavaScript: primitives and objects
        Primitive is a type of data that is not an object and has no methods
            ex: String, number, bigint, boolean, undefined, symbol, and null
        Objects is a type of data that is used for data structures
            ex: Object, Array, Map, Set, WeakMap, WeakSet, Date, etc..
