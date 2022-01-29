var lil = document.getElementById('shit');

lil.style.color = "white";
lil.style.backgroundColor = "green";
lil.style.fontSize = "50px";
lil.style.textAlign = "center";
lil.style.margin = "20px 20px";
lil.style.borderRadius = "10px";
lil.style.padding = "10px 20px";


var authors = document.getElementsByClassName('author');


for(var i=0; i< authors.length; i++){
    var element = authors[i];
    element.innerHTML = "Lekhok - "+(i+1);
    element.style.color = "Green";
    element.style.backgroundColor = "yellow";
    element.style.width = "300px";
    element.style.border = "2px solid grey";
    element.style.borderRadius = "15px";
    element.style.textAlign = "center";
    element.style.padding = "5px 0px";
    element.setAttribute('title', 'all authors are same');
} 


var title = document.querySelectorAll(".special .title");
for(var i=0;i<title.length;i++){
    var element = title[i];
    element.style.color = "darkblue";
    element.innerHTML = "Testing DOM";
    element.style.textAlign = "center"; 

}

document.body.style.backgroundColor = "tomato";

const article_one = document.getElementById('first-article');

var newParagraph = document.createElement('p');
newParagraph.innerHTML = "Added by javaScript";
newParagraph.style.color = "yellow";
article_one.appendChild(newParagraph);

var listing = document.getElementById('giftlist');
var newlist = document.createElement('li');
newlist.innerHTML = "list - 6 [Added by JavaScript]";
listing.appendChild(newlist);

