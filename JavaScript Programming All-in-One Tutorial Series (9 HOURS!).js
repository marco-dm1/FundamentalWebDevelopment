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
            - ex: String, number, bigint, boolean, undefined, symbol, and null
            - Primitives don't have methods, they have objects attached to them that have methods. For methods to work the objects wrap the primitives and perform the methods and then return a primitive back
                ex:
                    let test = "me";
                    let yes = new String("no");
                    console.log(typeof(test));  <---- Outputs "string" because it is a string
                    console.log(typeof(yes));   <---- Outputs "object" because its actually an object
            - When primitives are set again they ignore the old value and don't modify the old value
                ex:
                    let x = 5;
                    x = 10; <---- This simply sets the variable to 10, it doesn't actually modify the old value of the variable to get the desired value
                - This means that using primitive's object's methods don't actually alter the original value.
                    ex:
                        let x = "test";
                        x.toUpperCase() <---- Returns the uppercase version of test and that's it
                        console.log(x)  <---- Still outputs test because test was never modified
        Objects is a type of data that is used for data structures
            ex: Object, Array, Map, Set, WeakMap, WeakSet, Date, etc..
    - Numbers are also stored uniquely in JavaScript
        Numbers are internally stored as 64 bit floating point numbers
        In JS there are no specific data types for different types of numbers like integers and decimals
            - Because of this storing numbers can sometimes be unreliable.
                We can test how accurate our number ranges can be by using MAX_SAFE_INTEGER and MIN_SAFE_INTEGER
                    ex:
                        {
                            console.log(Number.MAX_SAFE_INTEGER);   <---- This outputs the highest value that we can savely store in JS
                            console.log(Number.MIN_SAFE_INTEGER);   <---- This outputs the lowest value that we can savely store in JS
                            let x = 8345872782523;
                            console.log(Number.isSafeInteger(x));   <---- Outputs true/false if the number is safe
                        }
        There are also three special values numbers can have in JS
            - Infinity
                ex:
                    console.log(Math.pow(Number.MAX_SAFE_INTEGER, 200)); <---- Outputs infinity
            - Negative Infinity
                ex:
                    console.log(Math.pow(-Number.MAX_SAFE_INTEGER, 201)); <---- Outputs negative infinity
            - Not a Number (NaN)
                ex:
                    console.log(console.log() + 2); <---- Outputs NaN

Numeric Operators in JavaScript
    We can use numeric operators to change the values of our numbers.
    There are 5 primary numeric operators in JavaScript
        + (Add)
        - (Subtract)
        * (Multiply)
        / (Divide)
        % (Modulus)
    We can also force precedence through using "()"
        ex:
            let x = 5 * (5 / 2)
            console.log(x)  <---- Outputs 12.5
    We also use postfix increment operators to increment by 1 
        ex:
            {
                let x = 5;
                x--; <---- Subtracts 1
                x++; <---- Adds 1
                ++x; <---- Adds 1
                x *= 5; <---- Multiplies by 5
                x -= 5; <---- Subtracts by 5
                x /= 5; <---- Divides by 5
                x += 5; <---- Adds by 5
                x %= 5; <---- Modulizes by 5
            }

We can convert strings to numbeers by doing using parseInt and parseFloat
    ex:
        {
            let x = 5;
            let y = "10";
            console.log(x + Number.parseFloat(y));  <---- Adds 5 + the float 10
            console.log(x + Number.parseInt(y)); <---- Adds 5 + the integer 10
        }
    We can also convert numbers to decimals, hexadecimals, etc using Number.parseInt
        ex:
            {
                let x = 5;
                console.log(Number.parseInt(x, 2)); <---- Converts 5 to base 2
            }
    We can even convert the numbers to binary
        ex:
            {
                let x = 5.5;
                console.log(x, x.toString(2))   <---- Converts to base 2
            }

Constructors in JavaScript
    Constructors are a way to create new objects.
        ex:
            {
                let x = new Number();   <---- Uses the Number constructor to make a new number object.
                x.ToString();  <---- Converts number to a string
            }

Math Object in JavaScript
    We can use the Math object in JavaScript to give extra numerical functionality in our code. There are multiple different methods we can use from it:
        ex:
           Math.abs(-36)  <---- Absolute value, gives positive version of number
           Math.ceil(.0001)  <---- Rounds upwards
           Math.floor(.999)  <---- Rounds downwards
           Math.pow(3, 2)  <---- Raises the first argument to the second arguemnt (3^2)
           Math.round(.9)  <---- Rounds based on which number is it closer to (0.9 = 1, 1.4 = 1)
           Math.sign(-Infinity)  <---- Whether the number is positive, negative, or zero
           Math.trunc(4.9999)  <---- Returns number without any fractional digits

Strings and String Manipulation in JavaScript
    We can make a string by using ""
        ex:
            let name = "bob";
    We can access individual characters the same way as we would access an specific array index or charAt
        ex:
            {
                let name = "john";
                console.log(name[2]);   <---- Outputs "h" because it the first character always starts as 0 instead of 1
                console.log(name.charAt(2));    <---- Works same as the above method and outputs "h" aswell
            }
        This returns undefined if the character is not found
    We can use escape characters to create special text
        ex:
            {
                let name = "hello\nworld";
                console.log(name);  <---- This would output "hello" on the first line and "world" on the second line because of the escape character "\" and the "n" which signifies a new line
            }
    We can combine strings two ways.
        Using a "+" combines the strings together
            ex:
                {
                    let name = "test";
                    console.log(name + "text");  <---- Outputs "testtext" because it combined the two strings together
                }
        Using a backtick to format the string
            The double quotes are replaced in this method with the backtick "`"(key under Esc)
            We can then specify things to add in by putting a dollar sign "$" and two brackets "{}" with the name of the thing inside. ex: ${myVariable}
            ex:
                {
                    let firstName = "bob";
                    let lastName = "tom";
                    console.log(`My name is: ${firstName} ${lastName}`);
                }
    We can cut off strings in our JavaScript code and have them keep their functionality with the break key after every line
        ex:
            {
                let paragraph = "This is a really cool paragraph.\
            This paragraph has the exact same functionality as\ <---- The broken lines' text have to be to the left or it will cause whitespace in the actual text
            normal string would have except it is easier to read\
            in the code editor.";
            }
    We can even get the length of a string in JavaScript by using ".length"
        ex:
            {
                let name = "bob";
                console.log(name.length);   <---- Outputs 3 because there are 3 characters
            }
    We can also add a string onto a string we already have by using concat
        ex:
            {
                let name = "bob";
                let lastName = "john";
                console.log(name.concat(" is my name"));    <---- Outputs "bob is my name"
                console.log(name.concat(" is my first name and ", lastName, " is my last name"));    <---- Outputs "bob is myu first name and john is my last name"
            }
    We can find a specific string inside of a string by using indexOf and includes
        ex:
            {
                let content = "this is my test string";
                let search1 = "test";
                let search2 = "string";

                console.log(content.indexOf(search1, 0));    <---- Searches at character 0 (and beyond) and then Outputs the index of the first character of the search1 string inside the content string
                console.log(content.includes(search1)); <---- Outputs true because it is included inside of the content string
                console.log(content.includes(search2, 30)); <---- Outputs false because it can't find the string search2 after character 30 of the content string
            }
    We can get specific pieces of strings by using substring and substr
        ex:
            {
                let name = "bobtest";
                console.log(name.substring(2, 4));  <---- Gets string between character 2 and 4 and then Outputs "bte"
                console.log(name.substr(2, 3)); <---- Works same as substring except the first argument is where the string starts and the second argument is how long the string
                console.log(name.slice(2)); <---- Outputs everything after 2nd character
            }
    We can remove whitespace on the ends of our string by using trim
        ex:
            {
                let name = "   test  ";
                console.log(name.trim());
                console.log(name.trimEnd());
                console.log(name.trimStart());
                console.log(name.trimLeft());
                console.log(name.trimRight());
            }
    We can seperate a string into an array by using split
        ex:
            {
                let content = "this is a test"
                console.log(content.split(" ")) <---- Output: ["this", "is", "a", "test"] because we specify the split key as a space " "
            }

Using "this" in JavaScript
    "this" is a keyword that can be used to grab data from the place it is in.
    While inside of a property it grabs the data of that object
        ex:
            {
                let myTest = {
                    x: 10,
                    y: 20,
                    print: function(){
                        console.log(this.x);    <---- Outputs 10
                    }
                }
                myTest.print();
            }
    While inside a normal function "this" acts as the window
        ex:
            {
                function myTest(){
                    console.log(this);  <---- Outputs the window
                }
            }

If statements in JavaScript
    If statements lets us check if something is true
        ex:
            {
                let x = "a";
                let z = "ab";
                if(z == x){
                    console.log("its true!");
                } else if(z.length > x.length){
                    console.log("z is bigger than x")
                }
                } else {
                    console.log("neither of those are true!")
                }
            }
    We can also check strict equality by using three "===" equal sigs instead of two. This checks the data type of it too
        ex:
            {
                let x = "5";
                let z = 5;
                if(x === z){
                    console.log("Yes");
                } else {
                    console.log("No");
                }
            }
    There are also other operators we can use to compare values in if statements
        - "==" - Equal
        - "!=" - Not Equal
        - "===" - Strict Equal
        - "!==" - Not Strict Equal
        - ">" - Greater Than
        - "<" - Less Than
        - ">=" - Greater Than or Equal
        - "<=" - Greater Than or Not Equal
    We can also combine our operations together
        - "&&" - And
        - "||" - Or
        We can use these like this
            ex
                {
                    let x = 5;
                    let y = 6;
                    if(x == 5 && y == 6){
                        console.log("x is 5 and y is 6");
                    }
                }

Switch Statements in JavaScript
    Switch Statements are an alternative to If statements that can be used when we are only checking a single variable onto multiple values
        ex:
            {
                let x = 5;
                switch(x){  <---- Run the switch statement on the variable "x"
                    case 3: <---- If x is 3
                        console.log("x is 3!");
                        break;  <---- Break it so it stops running the code under
                    case 4: <---- If x is 4
                        console.log("x is 4!");
                        break;  <---- Break it so it stops running the code under
                    case 5: <---- If x is 5
                        console.log("x is 5!");
                        break;  <---- Break it so it stops running the code under
                    default:    <---- If its not any of those cases. We put this at the bottom so the other cases have a chance to be checked
                        console.log("x is not 3, 4, or 5!");
                        break;  <---- Break it so it stops running the code under
                }
            }
