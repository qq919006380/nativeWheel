var tabs=document.querySelector('.tabs')
tabs.onclick=(e)=>{
	if(e.target.tagName==='LI' && e.target.parentElement.className==='tabs-bar'){
		var tabsBar=document.querySelector('.tabs-bar').children
		for(var i=0;i<tabsBar.length;i++){
			console.log(tabsBar[i])
			tabsBar[i].classList.remove('active')
		}
		e.target.classList.add('active')
	}
}