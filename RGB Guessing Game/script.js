var count=6;
var colors=generateRandomColors(6);
var lis=document.querySelectorAll(".square");
var pickedColor=pickRandomColor();
var colorDisplay=document.querySelector("#top");
var message=document.querySelector("#msg");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#first");
var easy=document.querySelector("#easy");
var hard=document.querySelector("#hard");

easy.addEventListener("click",function(){
	easy.classList.add("selected");
	hard.classList.remove("selected");
	message.textContent="";
	resetButton.textContent="New Colors";
	count=3;
	colors=generateRandomColors(count);
	pickedColor=pickRandomColor();
	for(var i=0;i<lis.length;i++){
		if(i<3)
			lis[i].style.backgroundColor=colors[i];
		else
			lis[i].style.display="none";
	}
	h1.style.backgroundColor="steelblue";
	colorDisplay.textContent=pickedColor;
});

hard.addEventListener("click",function(){
	easy.classList.remove("selected");
	hard.classList.add("selected");
	message.textContent="";
	resetButton.textContent="New Colors";
	count=6;
	colors=generateRandomColors(count);
	pickedColor=pickRandomColor();
	for(var i=0;i<lis.length;i++){
		if(i<3)
			lis[i].style.backgroundColor=colors[i];
		else{
			lis[i].style.display="block";
			lis[i].style.backgroundColor=colors[i];
		}
	}
	h1.style.backgroundColor="steelblue";
	colorDisplay.textContent=pickedColor;
});

resetButton.addEventListener("click",function(){
	message.textContent="";
	resetButton.textContent="New Colors";
	colors=generateRandomColors(count);
	pickedColor=pickRandomColor();
	for(var i=0;i<lis.length;i++)
		lis[i].style.backgroundColor=colors[i];
	h1.style.backgroundColor="steelblue";
	colorDisplay.textContent=pickedColor;
});

colorDisplay.textContent=pickedColor;

for(var i=0;i<lis.length;i++){
	lis[i].style.backgroundColor=colors[i];
	lis[i].addEventListener("click",function(){
		var clickedColor=this.style.backgroundColor;
		if(clickedColor===pickedColor){
			message.textContent="Correct!";
			h1.style.backgroundColor=clickedColor;
			fill(clickedColor);
			resetButton.textContent="Play Again";
		}
		else{
			this.style.backgroundColor="#232323";
			message.textContent="Try Again";
		}
	});
}

function pickRandomColor(){
	var index=Math.floor(Math.random()*colors.length);
	return colors[index];
}

function generateRandomColors(n){
	var arr=[];
	for(var i=0;i<n;i++){
		var red,green,blue;
		red=Math.floor(Math.random()*256);
		green=Math.floor(Math.random()*256);
		blue=Math.floor(Math.random()*256);
		var ans="rgb("+red+", "+green+", "+blue+")";
		arr.push(ans);
	}
	return arr;
}

function fill(color){
	for(var i=0;i<lis.length;i++)
		lis[i].style.backgroundColor=color;
}