"use strict"
const aboveMobile= 1000
const mobile= aboveMobile/1.6

// run once to check
addIdOnResize()

function addIdOnResize(){
 const bodyWidth= window.innerWidth
 
 if(bodyWidth <= aboveMobile && bodyWidth > mobile) html.id="tb"
 
 if(bodyWidth <= mobile) html.id="mb"
 csl(bodyWidth)
}

event(window,"resize",()=>{
 addIdOnResize()
})
