//Tuesday Activity//

//getElementById()
const title_a = document.getElementById('main-heading');
//have to use single quotes around your ID, grabbed an ELEMENT (main heading), and put it in a constant called title_a, always terminate with a semicolon

//getElementsByClassName()
const listItems = document.getElementsByClassName('list-items');
//gets the WHOLE CLASS (array of elements) not just one element like what we did right above this 

for (i=0; i < listItems.length; i++){
    listItems[i].getElementsByClassName.fontSize = '5rem';
}
//array items are numbered 0-however many there are, start with 0 (i=0), changes the styles for all list items (we did font but it could be color, etc)

//getElemetsbyTagName
const tagNames = document.getElementsByTagName('li');

//querySelector is the most useful for selecting things, more than the stuff above (selector gets the first one, all gets ALL)

//querySelector()
const firstDiv = document.querySelector('div');
const title_b = document.querySelector('#main-heading');
title_b.style.color = 'purple';

//querySelectorAll()
const allDiv = document.querySelectorAll('div');

//Create Elements
//first create the variable/constant to grab or create
const get_ul = document.querySelector('ul');
const put_li = document.createElement('li');

//use append to insert your new element:
get_ul.append(put-li);

//add text to li
put_li.innerText = 'Yogurt'; 

//the adding text did not work

//Extra stuff she did in the lecture, not currently working from here but works in developer tools on chrome

title_a.style.color = 'blue';
title_a.style.fontSize = '5rem';
title_a.innerText = 'Favorite Class';


