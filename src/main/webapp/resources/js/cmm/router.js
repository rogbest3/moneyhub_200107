"use strict"
function Session(x){	// 자바스크립트 
	sessionStorage.setItem('ctx', x)
	sessionStorage.setItem('js', x + '/resources/js')
	sessionStorage.setItem('css', x + '/resources/css')
	sessionStorage.setItem('img', x + '/resources/img')

	return{
		ctx : ()=>{ return sessionStorage.getItem('ctx') },
		js : ()=>{ return sessionStorage.getItem('js') },
		css : ()=>{ return sessionStorage.getItem('css') },
		img : ()=>{ return sessionStorage.getItem('img') }
	}
}

function Customer_Info(x){
	sessionStorage.setItem('cemail', x.cemail)
	sessionStorage.setItem('cname', x.cname)
	
	return{
		cemail : ()=>{ return sessionStorage.getItem('cemail') },
		cname : ()=>{ return sessionStorage.getItem('cname') }
	}
}