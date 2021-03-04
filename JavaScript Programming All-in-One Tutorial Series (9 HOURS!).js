Name: "JavaScript Programming All-in-One Tutorial Series (9 HOURS!)"
Author: Caleb Curry
Resources: 
	https://www.youtube.com/watch?v=9M4XKi25I2M
Extra Notes:
	I played the video on 2-2.5x normal speed to finish it faster. I felt that a lot time in the tutorial was spent on explaining programming fundamentals topics
	and not JavaScript itself which definitely made the video unnecessarily long so I did skip a decent bit of notes and even full lessons. I found that the series
	was mostly about just general JavaScript and then the last hour went into explaining how HTML and CSS works and also some basic editing of it with JS. Another tutorial
	is definitely needed if you want to properly learn how to manipulate websites with JS.
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
    We can also make single line if statements in JavaScript
        Single line if statements only take the first instruction.
        ex:
            {
                let name = "bob";
                if(name == "bob") console.log("the name is bob!");
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
        If we want to have multiple cases do the same thing we can "stack" them.
            ex:
                {
                    let x = 5;
                    switch(x){
                        case 2: <---- There is no break on this so it will just continue and run case 3's code
                        case 3:
                            console.log("x is 2 or 3!");
                            break;
                        default:
                            console.log("x is not 2 or 3");
                            break;
                    }
                }

Ternary Operator in JavaScript
    The Ternary Operator allows us to give functionality for different values by returning the answer
        The Ternary Operator has three parts: the check between two values, the true return (signified by the "?" and then the true return), and the false return (signified by the ":" and the false return)
        ex:
            {
                let name = "bob";
                let answer = name === "bob" ? "it's true" : "its false";
                console.log(answer);    <---- "this would return it's true because bob == bob"
            }
    We can also use the Ternary Operator to execute instructions
        ex:
            {
                let name = "bob";
                name === "bob" ? console.log("it's true") : console.log("its false");
            }

Loops in JavaScript
    Loops allow repeated instructons based on a condition
    There are multiple types of loops in JavaScript which do provide different functionality.
        For loops - For loops run based on the statements inside of them.
            ex:
                {
                    for(let i = 0; i < 10; i++){
                        console.log(i);
                    }
                }
        While loops - While loops run "while" the condition is true
            ex:
                {
                    let i = 0;
                    while(i < 10){
                        console.log(i);
                        i++;
                    }
                }
        Do while loops - Do while loops work the same as while loops except they run the code first and then check the condition
            ex:
                {
                    let i = 0;
                    do{
                        console.log(i);
                        i++;
                    } while(i < 10);
                }
    We can also skip iterations/stop loops with break and continue
        We can use break to stop the entire loop
            ex:
                {
                    let myString = "this is my string"
                    for(let i = 0; i < myString.length; i++){
                        if(myString[i] == "m"){
                            console.log("Found m in the string!");
                            break;  <---- Stops the entire loop because we are only looking for "m"
                        }
                    }
                }

        We can use continue to skip a single iteration of the loop
            ex:
                {
                    let myString = "this is my string"
                    for(let i = 0; i < myString.length; i++){
                        if(myString[i] == "r"){
                            continue;  <---- Skips over this iteration of the loop because we don't want it to output that the character isn't r
                        }
                        console.log("This character is not r!");
                    } 
                }

Arrays in JavaScript
    Arrays allow us to store a collection of things
        The things inside of the array are known as elements or items
        In JavaScript, arrays are not limited to a specific datatype so multiple items with multiple data types don't affect the array.
        Each element has an index which is number from 0 to (n.length - 1)
        We can change the size of the array through setting array.length to the size we want or if we set an index higher then (n.length - 1) it will make the array's size fit up to that index and then set that index's value
    We can create an array by doing this:
        ex:
            {
                let myArray = [4, 6, 2, 1, 7, 8, 4, 5];
                console.log(myArray[0]);    <---- Outputs 4 because the first index of the array (myArray[0]) is 4
            }
    A multidimensional array is an array inside of an array
        ex:
            {
                let myArray = [[4, 2, 5, 6, 3, 21, 7], [1, 6, 3, 4, 2, 8, 9]];  <---- myArray consists of two items which are both arrays
                console.log(myArray[0][1]); <---- Outputs 2 because the second item of the first item's array is 2
            }
    We can also use methods on our array to have extra functionality
        ex:
            {
                let myArray = [2, 4, 6, 2, 1];
                myArray.push(6);    <---- Adds 6 to the end of the array so the array becomes: [2, 4, 6, 2, 1, 6]
                console.log((myArray.length - 1));  <---- Outputs 6 because it is now the last element of the array
                myArray.pop();  <---- Removes the last item from the array and removes it from the array
                myArray.unshift(3);  <---- Adds one/multiple item(s) to the start of the array and returns the new length
                myArray.shift();  <---- Removes the first item from the array and removes it from the array
                myArray.splice(2, 3);  <---- Starts at index 2 and deletes the next 3 items and then returns the modified array
                myArray.splice(2, 0, 5, 6, 7);  <---- Starts at index 2, deletes 0 items, and then adds 5, 6, and 7 as the next items and returns the modified array
                myArray.sort();  <---- Sorts the array
                myArray.reverse();  <---- Reveres the array
                myArray.reverse(2, 0, 5);  <---- Fills at items 2 through 5 with the value 0
                myArray.concat(mySecondArray);  <---- Combines myArray and mySecondArray together
                myArray.includes(22);  <---- Returns true or false if 22 exists in the array
                myArray.indexOf(23);  <---- Returns -1 if it doesn't exist otherwise it returns the index of the specified value
                myArray.join(" ");  <---- Returns all of the items in the array into a string form with spaces inbetween every value
                myArray.slice(3, 5);  <---- Removes the items 3 through 5 in the array
            }

Dates in JavaScript
    The Data object lets us get information of the current time or other time.
    We can make a new date object like this
        {
            var myDateObject = new Date();  <---- We write "new" because its a constructor and creates a new instance of the Date object
            console.log(myDateObject);  <---- This outputs the date when we created the instance of the Date object
        }
    We can also pass in paramters to our Date Object
        {
            var myDateObject = new Date(1990, 11, 28);  <---- Creates a date object in the 12th month (starts at 0 not 1) on the 28th day of the year 1990
            console.log(myDateObject);  <---- Outputs the time
        }
    We can also use it on other ways like:
        { 
            var myDateObject = new Date(123);   <---- Creates Date instance at 123 milliseconds after unix epoch
            Date.now(); <---- Returns the current milliseconds since unix epoch
            Date.parse("12 Jan 1995");  <---- Tries to turn the given arguments into that time in a Date instance
            myDateObject.getFullYear(); <---- Return year
            myDateObject.getMonth();    <---- Returns month
            myDateObject.getDay();  <---- Returns day
        }

Functions in JavaScript
    Functions allow us to modularly run code
    Functions are also objects so we can use specific methods on functions
    We can make a function 3 different ways:
        {
            function myFunction(arg1){
                console.log(arg1);
            }

            let myFunctionInAVariable = function(){ <---- We could also do this and set the function directly to a variable (This is called function expression)
                console.log("hi!");
            }

            myArrowFunction = () => {   <---- This is an arrow function called "myArrowFunction" and its a smaller way to create a function. (The parameters of the function are passed inside of the "()", the "()" are optional to put in if they is only one parameter being passed otherwise they need to be there) (this doesn't change in arrow functions like in normal functions)
                console.log("We can create a shorter function with this!");
            }

            mySmallerArrowFunction = () => "This returns this text!";   <---- This is the same as the arrow function above except it is on one line because it only has one statement so it can work this way
        }
    In JavaScript all arguments are passed as values and not references.
        The only time this is not true is when the value is an object which then it would mean that modifying it would modify that object which would include modifying outside of the function's scope
    In JavaScript we can use "Hoisting" to invoke functions before even if they are under the code invoking them.
        Hoisting works by the engine going through all the code and getting the functions set up and then going back through all the code and invoking them
        ex:
            {
                doStuff();  <---- (Second Pass) This is ran on the second pass which invokes the function doStuff() that is already defined
                function doStuff(){ <---- (First Pass) This is defined on the first pass by the engine
                    console.log("It worked!");
                }

                x();    <---- This doesn't work with function expressions which is what x() is
                var x = function(){
                    console.log("this doesn't work!");
                }
            }
    We can also set default parameters in JavaScript which set the parameter to a default value if it is undefined
        ex:
            {
                myFunction(x, y = 2){   <---- y defaults to 2
                    console.log(x);
                    console.log(y); <---- A y is never passed during the invokation so its defaulted to 2 above
                }
                myFunction(3);  <---- y is never passed
            }
    We can also take extra parameters that are not defined in the invokation
        ex:
            {
                myFunction(x, y, ...myExtraParameters){ <---- We write "..." and then a variable name for the extra parameters
                    console.log(x); <---- Outputs 3
                    console.log(x); <---- Outputs 4
                    for(let i = 0; i < myExtraParameters.length; i++){
                        console.log(myExtraParameters[i]);  <---- Outputs 6, 7, and 1
                    }
                }

                myFunction(3, 4, 6, 7, 1);
            }
    All function also come wth Implicit parameters
        Implicit parameters are always available in JavaScript and they provide extra functionality for our code
        ex:
            {
                myFunction(x){
                    console.log(x);
                    console.log(this);  <---- This outputs what this is
                    console.log(arguments); <---- This outputs the Arguments object that also can function as an array for all the arguments passed (including the 3 that we passed for x)
                }

                myFunction(3);
            }


Using this in JavaScript
    The variable this always refers to the object it is a child of
        ex:
            {
                console.log(this);  <---- This would just output the window because there's nothing else
            }
        ex:
            {
                let x = {
                    name: "test",
                    myTest = function(){
                        console.log(this.name); <---- It becomes a child of the function and the function is an object so this is changed for this specific scope. Therefore we can use it to get other things in it like the name
                    }
                }
            }
    We can also use "call", "apply", and "bind" to change the this variable when invoking a function in JS
        ex:
            {
                myFunction(x, y){
                    console.log(x);
                    console.log(y);
                    console.log(this);  <---- Outputs "thisIsMyThis" because this equals that
                }

                myFunction.call("thisIsMyThis", 3, 4);  <---- Invokes the function like normal (with passing x as 3 and y as 4) but changes the this variable to "thisIsMyThis"
            }
        We can also use "apply" do the same thing but it takes a single array of arguments instead of just multiple arguments.
            ex:
                {
                    myFunction(x, y){
                        console.log(x);
                        console.log(y);
                        console.log(this);  <---- Outputs "thisIsMyThis" because this equals that
                    }

                    myFunction.apply("thisIsMyThis", [3, 4]);  <---- Invokes the function but passes the arguments inside of a single array and changes the this variable to "thisIsMyThis"
                }
        We can also use "bind" to bind the this change and the rest of the paramters to a specific variable
            ex:
                {
                    myFunction(x, y){
                        console.log(x);
                        console.log(y);
                        console.log(this);  <---- Outputs "thisIsMyThis" because this equals that
                    }

                    let myBindedFunction = myFunction.bind("thisIsMyThis", 3, 4);
                    myBindedFunction(); <---- Invokes the function with the changed this and 3 as x and 4 as y
                }

Using strict in JavaScript
    We can use "use strict"; in JavaScript to put our code in Strict Mode
        This makes our code less leniant on syntax errors and ensures clean code
        More information can be found here: https://www.w3schools.com/js/js_strict.asp
    ex:
        {
            function myFunction(){
                "use strict";   <---- Puts this scope into Strict Mode
                x = 3;  <---- This causes an error because the variable was not previously declared (var)
            }

            myFunction();
        }

Control Flow and Error Handling
    We can wrap our code to do something if it errors
        ex:
            {
                try{
                    thisisntvalid
                } finally{
                    console.log("Our code wasn't able to run!");
                }
            }
        We can also have a catch stage inbetween try and finally to try something else
            ex:
                {
                    try{
                        thisisntvalid
                    } catch {
                        diditworkthesecondtime?
                    } finally{
                        console.log("Our code wasn't able to run in our try and catch phases!");
                    }
                }
    We can also create our own error:
        ex:
            {
                throw "ErrorTest"; Errors with ErrorTest string value
                throw 42;   <---- Errors with 42 number value
                throw true; <---- Errors with true boolean value
                throw new Error("This Errored!");    <---- Errors with the message of "This Errored!"
            }

Object Oriented Programming in JavaScript
    - Objects describe some entity (a person, car, request, things)
        We can create a single Object with specific fields for traits and then we can use a constructor function to create a new version of the object and assign those traits to it
            ex:
                {
                    function Person(Name, Age, FavoriteFood){   <---- We pass the traits nd then we can set them.
                        this.Name = Name;
                        this.Age = Age;
                        this.FavoriteFood = FavoriteFood;
                    }

                    var bobsPerson = new Person();  <---- We use the constructor function to create a new "Person"
                    bobsPerson.Name = "Bob";    <---- We can set the traits after we have already created it
                    bobsPerson.Age = 23;
                    bobsPerson.FavoriteFood = Pizza;
                    var tomsPerson = newPerson("Tom", 15, "Pizza"); <---- We can also set the traits during the creation
                }
        Methods in Objects will typically cost more memory so we use Prototype functions and assign them to the Object's prototype so then each individual Object we clone doesn't have a different method since they all do the same functionality
            - This works when the Object's method is called it isn't found inside of the object it goes up one layer to the prototype and check if its there and it is so it can access it
            - We can therefore use Prototype functions and make methods outside of the Object
                ex:
                    {
                        function Person(Name){
                            this.Name = Name;
                        }

                        Person.prototype.myFunction = function(){   <---- We access the Object's prototype and then set the function up
                            console.log("This is " + this.Name + "'s Function!");   <---- We can use this to access the properties of the Object
                        }

                        var bob = new Person("Bob");
                    }
                This would be the equivalent way of doing it inside of the Object but this is usually not recommended
                    ex:
                        {
                            function Person(Name){
                                this.Name = Name;
                                this.myFunction = function(){
                                    console.log("This is " + this.Name + "'s Function!");
                                }
                            }

                            var bob = new Person("Bob");
                        }
            - We also should use Prototype Properties when we have very similar things but need slight differences and we can do this by setting the prototype of one Object to another
                ex:
                    {
                        let user = {
                            active = true
                        }

                        let teacher = {
                            teaching: ["math", "science"]
                        }

                        Object.setPrototypeOf(teacher, user);   <---- Sets teacher's prototype to user
                        console.log(teacher.active);    <---- We are now able to access the this property from the user because it is using the user as its prototype
                    }
                The prototype's properties also don't inherit over meaning if we can the teacher's active it won't change the user's active because it first looks for the property in the Object it is in and then goes up and tries to find it in the prototype if it wasn't found originally
                    ex:
                        {
                            let user = {
                                active = true
                            }

                            let teacher = {
                                teaching: ["math", "science"]
                            }

                            Object.setPrototypeOf(teacher, user);

                            teacher.active = false; <---- Sets ONLY the teacher's active to false
                            console.log(teacher.active);    <---- Outputs false because teacher's active is false
                            console.log(user.active);   <---- Outputs true because the user's active was never changed
                        }
            - Polymorphism in JavaScript
                Polymorphism allows us to treat multiple things as one type

We can check if an Object exists inside of a property in JavaScript by comparing the property to undefined
    ex:
        {
            function A(){

            }

            if(A.Name === undefined){
                console.log("Doesn't exist!");
            }
        }

We can edit the CSS in our web page by referencing an element's style property
    ex:
        {
            myElement = document.getElementById("testId");
            myElement.style.color = rgb(255, 255, 255);
        }

Document Object Model (DOM)
    - The DOM refers to the nodes of a web page
        The nodes of the web page make up all of the elements
            - We can get the first child node by using "childNotes"
                ex:
                    {
                        console.log(document.childNodes[0]);
                    }
            - We can also get the parent element of an element using parentElement
                ex:
                    {
                        console.log(myElement.parentElement);
                    }
            - All nodes also have siblings so we can use previousSibling and nextSibling to get those
                ex:
                    {
                        console.log(myElement.nextSibling);
                        console.log(myElement.previousSibling);
                    }
        There are two main types of nodes Element nodes and Text nodes
            - Element nodes refer to nodes that are HTML elements
                Element nodes can have other elements nodes in it like <b> and <i> elements inside of a <p> element
            - Text nodes refer to text in an HTML element
            - There are also other types of nodes but these are the two main ones
            - All nodes also have a nodeType property with a numerical value that determines that node type
                Some nodes can have their nodeType changed by changing the nodeValue property they have
    We can get specific elements by their identifiers like classes, ids, and tags
        ex:
            {
                myTaggedElement = document.getElementsByTagName("h1");
                myClassedElement = document.getElementsByClassName("h1");
                myIdedElement = document.getElementById("h1");
            }
