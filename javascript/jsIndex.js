var heading Text = "<h1>A Page of Javascript</h1>";
var myIntro = "Hello, welcome to my Javascript page!";
var linkTag = "<a href=\"https://popsmoke21.github.io/\">Link to a site</a>";
var redText = "<span style=\"color:red\">I am so colorful today!</span>";
var beginEffect = "<strong>";
var endEffect = "</strong>";
var beginPara = "<p>";
var endPara = "</p>";

document.write(headingText);
document.write(beginEffect + mIntro + endEffect);
document.write(beginPara + linkTag + endPara);
document.write(beginPara + redText + endPara);

function myFunction(){
    document.write('I\'m in the function!');
    
}

myFunction();
myFunction();
myFunction();
document.write('I\'m not in the function anymore :)<br>');
