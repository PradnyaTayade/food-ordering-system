let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick= () =>{
	menu.classList.toggle('fa-times');
	navbar.classList.toggle('active');
}
window.onscroll =() =>{
	menu.classList.remove('fa-times');
	navbar.classList.remove('active');
	if(window.scrollY > 60){
		document.querySelector('#scroll-top').classList.add('active');
	}else{
		document.querySelector('#scroll-top').classList.remove('active');
	}
}


if(value1="admin" && value2="admin")
{
	"<a href="file:///C:/Users/Pradnya/Documents/hcss/home.html"></a>""
}
else{

}