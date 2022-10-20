"use strict"

const csl=x=> console.log(x)
const dc=x=> document.createElement(x)
const dq=x=> document.querySelector(x)
const dqA=x=>document.querySelectorAll(x)


function interval(f,time){
const interval= setInterval(f,time)
}

function timeOut(f,time){
 const timeOut= setTimeout(f,time)
}

function event(e,t,f){
 const event= e.addEventListener(t,f)
}

function rmEvent(e,t,f){
 const remove= e.removeEventListener(t,f)
}



function normalize(){
 
 dqA("input").forEach(e=>{
 e.required=true
 e.classList.add("trans")
 })
 
 dqA("h3").forEach(e=>{
  e.classList.add("l-opacity")
  e.classList.add("trans")
 })
}


event(window,"load",()=>{
 normalize()

})
