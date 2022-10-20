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
 
 dqA(".error").forEach(e=>{
    e.classList.add("trans")
  e.classList.add("l-opacity")
 })
}

const Card= {
 name: dq(".card__name"),
 num: dq(".card__num__tl"),
 mm: dq(".card__mm"),
 yy: dq(".card__yy"),
 cvc: dq(".card__cvc"),
 
 name__error: dq(".card__name__in + .error"),
 num__error: dq(".card__num__in + .error")
 
}

const Errors= [
 "should not be more than 19 char",
 "should not exceed 22 char",
 "only valid ASCII word char",
 "can't be more than 2 char",
 "input field can't be empty",
 ]


function writeOnCard(){
 
 const allInput= dqA("input").forEach((e,i)=>{
  
  event(e,"input",()=>{
   switch(i){
    case 0:
     Card.name.textContent= e.value
     break
     
   case 1:
    Card.num.textContent=e.value
    if(e.value.length > e.maxLength){
     e.classList.add("invalid")
     e.value=""
     Card.num__error.textContent= Errors[0]
     
     Card.num__error.classList.contains("l-opacity")?Card.num__error.classList.remove("l-opacity"):0
    }
    
    
    if(e.value.length===0) Card.num.innerText="00## #### #### ##00"
    
    break
    
  case 2:
     Card.mm.textContent=e.value
   break
   
   case 3:
        Card.yy.textContent=e.value

    break
    
  case 4:
      Card.cvc.textContent=e.value
  break
     default:
     console.log("error")
     break
   }
   
       
  if(e.classList.contains("invalid")){
     timeOut(()=>{
      e.classList.remove("invalid")
     },1000)
    }
    
    dqA(".error").forEach(e=>{
     e.classList.contains("l-opacity")?0:timeOut(()=>{e.classList.add("l-opacity")},1500)
    })

  })
 })
 
}


event(window,"load",()=>{
 normalize()
 
 writeOnCard()

})
