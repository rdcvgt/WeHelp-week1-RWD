const menuBtn = document.querySelector('.phoneMenu');
const sidebar = document.querySelector('.sidebar');
const closeBtn = document.querySelector('.closeBtn');

if(menuBtn){
	menuBtn.addEventListener('click', () =>{
			sidebar.style["animation"]= "moveSidebar 0.5s both ";
			// sidebar.style["animation-duration"]= "0.5s";
			// sidebar.style["animation-fill-mode"]= "both";
			// sidebar.style["animation-direction"]= "alternate";

	});
}

if(closeBtn){
	closeBtn.addEventListener('click', () =>{
			sidebar.style["animation"]= "moveSidebarReverse 0.5s both";
	});
}
