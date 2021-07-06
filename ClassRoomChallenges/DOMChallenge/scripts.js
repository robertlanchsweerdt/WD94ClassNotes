/*
Create a javascript file and link it to the html
add id's to the h1, p, ul tags to reference in your js file
use getelementbyid's in your .js file so you can target changes

//In the JS file
Change the Text of My Title to "My Grocery List"
Change the font color of the p tag to red
Remove the bullets on the ul's 
*/

const title = document.getElementById('title');
const para = document.getElementById('para');
const list = document.getElementById('list');

title.textContent = 'My Grocery List';
para.style.color = 'red';
list.style.listStyle = 'none';
