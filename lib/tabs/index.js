var tabs=document.querySelector('.tabs')
tabs.children[0].children[0].classList.add('active')
tabs.children[1].children[0].classList.add('active')
tabs.onclick=(e)=>{
	if(e.target.tagName==='LI' && e.target.parentElement.className==='tabs-bar'){
		// tabs-bar
		var tabsBar=document.querySelector('.tabs-bar').children
		for(var i=0;i<tabsBar.length;i++){
			tabsBar[i].classList.remove('active')
		}
		e.target.classList.add('active')
		// tabs-content
		var tabs=e.target.parentElement.parentElement
		var index = [].indexOf.call(e.target.parentNode.children, e.target);
		if(tabs.children[1].className==='tabs-content'){
			var tabs_contentLi=tabs.children[1].children
			for(var i=0;i<tabs_contentLi.length;i++){
				tabs_contentLi[i].classList.remove('active')
			}
		}
		tabs_contentLi[index].classList.add('active')		
	}
}
function Tabs(selector){
	
}
var tabs=new Tabs('.tabs')