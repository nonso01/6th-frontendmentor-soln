"use strict"

const csl=x=> console.log(x)
const dc=x=> document.createElement(x)
const dq=x=> document.querySelector(x)
const dqA=x=>document.querySelectorAll(x)

const html= dq("html")
const body= dq("body")

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

function opacity(a,b,i){
 a.classList.add("invalid")
 a.value=""
  b.classList.contains("l-opacity")?b.classList.remove("l-opacity"):0
    if(i){  b.textContent= Errors[i]}

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
 num__error: dq(".card__num__in + .error"),
 mm__error: dq(".pack + .error"),
 cvc__error: dq(".card__expire__in + .error")
 
}

const Errors= [
 "should not be more than 16 char",
 "names shouldn't exceed 22 char",
 "only valid ASCII word char",
 "Too many char",
 "input field can't be empty",
 "Valid month/year 🙂"
 ]

/* under development*/

function writeOnCard(){
 
 const allInput= dqA("input").forEach((e,i)=>{
  
  event(e,"input",()=>{ 
   // any changes
 
   switch(i){
    case 0:
     let _zero= /(\d)|(\W{2})/g
     
     Card.name.textContent= e.value
     if(e.value.length>22){
      
      opacity(e,Card.name__error,1)
     }
     if(_zero.test(e.value)){
     opacity(e,Card.name__error,2)
     }

   if(e.value.length===0){
     let t = "Kenechukwu Amah"
      Card.name.textContent=t
    }

     break
     
   case 1:
    let v= e.value
    let ev= v.slice(0,4) +" " + v.slice(4,8) + " " + v.slice(8,12) + " " + v.slice(12,16)
    
    Card.num.textContent=ev
      
    if(e.value.length > e.maxLength){
     Card.num__error.textContent= Errors[0] // todo
     
     opacity(e,Card.num__error)
    } 
    
   if(e.value.length===0){
     let t = "12** **** **** **16"
      Card.num.textContent=t
    }
    break
    
  case 2:
 
     Card.mm.textContent=e.value
 
   if(e.value.length >2){
      opacity(e,Card.mm__error,3)
     }
   if(e.value.length===0){
      Card.mm.textContent="09"
    }
    if(true) {
     let _zero= /[0-1][0-9]?/
     
    if(!_zero.test(e.value)){opacity(e,Card.mm__error,5)}
    }

   break
   
   case 3:
        Card.yy.textContent=e.value
      if(e.value.length >2){
    opacity(e,Card.mm__error,3)
          }
      if(e.value.length===0){
      Card.yy.textContent="22"
    }

      if(true){
 let _zero= /[2][0-9]?/
 !_zero.test(e.value)?opacity(e,Card.mm__error,5):0
    }
    
    break
    
  case 4:
      Card.cvc.textContent=e.value
      
        if(e.value.length >3){
       opacity(e,Card.cvc__error,3)
        }
    e.value.length===0?Card.cvc.textContent=124:0

  break
     default:
     console.warn("error")
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
  // end input event
  
  
  event(e,"focus",()=>{  //focus
   switch(i){
    case 0:
    Card.name.classList.add("layer")
     break
   case 1:
   Card.num.classList.add("layer")
   break
   
   case 2:
    break
   
  case 3:
     break;
   case 4:
      break
   default:
   csl("error")
   break;
   }
  
  })
  
  event(e,"blur",()=>{ // out of focus
   for(let prop in Card){
    Card[prop].classList.remove("layer")
   // csl("out of focus")
   }
  })
 })
 
}


event(window,"load",()=>{
 normalize()
 
 writeOnCard()

})
