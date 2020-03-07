var myIma = document.querySelector("img");
myIma.addEventListener("click",()=>{
	const mySc = myIma.getAttribite("src")
	mySc === "images/claviatura.jpg"?myIma.setAttribute ('src',"images/priroda-1.jpg"):myIma.setAttribute('src',"images/claviatura.jpg")
	})
// 	myIma.onclick = function() {
// 	var mySc = myIma.getAttribute("src");
// if(mySc === "images/claviatura.jpg") {
//       myIma.setAttribute ('src',"images/priroda-1.jpg");
// } else { myIma.setAttribute ('src',"images/claviatura.jpg") ;    //как же, сука, сложно                                              
//     }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
  var myName = prompt('Ты кто?');
  localStorage.setItem('name', myName);
  myHeading.innerHTML  = " Good morning,"+ myName;
}
if(!localStorage.getItem('name')) {
setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML  = 'Good morning, ' + storedName;
}
  myButton.onclick = function() {setUserName();
  
}
