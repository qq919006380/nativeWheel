//=======oop prototype=============
/*function Tabs(selector){
	this.elements=document.querySelector(selector)
	this.init()	
	this.bindEvents()
}
Tabs.prototype.init=function(){
	this.elements.children[0].children[0].classList.add('active')
	this.elements.children[1].children[0].classList.add('active')
}
Tabs.prototype.bindEvents=function(){
	this.elements.onclick=(e)=>{
		if(e.target.tagName==='LI' && e.target.parentElement.className==='tabs-bar'){
			// tabs-bar
			var tabsBar=e.target.parentElement.children
			for(var i=0;i<tabsBar.length;i++){
				tabsBar[i].classList.remove('active')
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
}*/
//========oop ES6=============
class Tabs{
	constructor(selector){
		this.elements=document.querySelector(selector)
		this.init()	
		this.bindEvents()
	}
	init(){
		this.elements.children[0].children[0].classList.add('active')
		this.elements.children[1].children[0].classList.add('active')
	}
	bindEvents(){
		this.elements.onclick=(e)=>{
			if(e.target.tagName==='LI' && e.target.parentElement.className==='tabs-bar'){
				// tabs-bar
				var tabsBar=e.target.parentElement.children
				for(var i=0;i<tabsBar.length;i++){
					tabsBar[i].classList.remove('active')
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
}
var tabs=new Tabs('.tabs')
var tabs=new Tabs('.xxx')