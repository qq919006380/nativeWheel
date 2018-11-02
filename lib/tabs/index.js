function Tabs(selector){
	var tabs=document.querySelector(selector)
	tabs.children[0].children[0].classList.add('active')
	tabs.children[1].children[0].classList.add('active')
	tabs.onclick=(e)=>{
		if(e.target.tagName==='LI' && e.target.parentElement.className==='tabs-bar'){
			// tabs-bar
			// var tabsBar=document.querySelector('.tabs-bar').children
			var tabsBar=e.target.parentElement.children
			console.log(tabsBar)
			for(var i=0;i<tabsBar.length;i++){
				tabsBar[i].classList.remove('active')
				console.log(tabsBar[i])
			}
			e.target.classList.add('active')
			// tabs-content
			var tabs=e.target.parentElement.parentElement
			var index = [].indexOf.call(e.target.parentNode.children, e.target);
			if(tabs.children[1].className==='tabs-content'){
				var tabs_contentLi=tabs.children[1].children
				for(let i=0;i<tabs_contentLi.length;i++){
					tabs_contentLi[i].classList.remove('active')
				}
			}
			tabs_contentLi[index].classList.add('active')		
		}
	}
}
var tabs=new Tabs('.tabs')
var tabs=new Tabs('.xxx')