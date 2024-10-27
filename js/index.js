let i = document.querySelectorAll("nav li")
let listt =document.getElementById("list")
let barr =document.getElementById("bar")
let iconss =document.getElementById("icons")
let w = document.querySelectorAll(".made li")
let web =document.getElementById("webdevelopment")
let vis =document.getElementById("visual")
let ad =document.getElementById("advertising")
let aa =document.getElementById("all")

let dvv =document.getElementById("visuall") 
let add =document.querySelector(".made #advertisingg") 
let webb =document.querySelector(".made .row #webdevelopment") 
let r =document.getElementById("rr") 
let s =document.querySelector("section.form form .s") 
let btnl =document.getElementById("btt") 

let t =document.querySelector(" .form input[type=text]")
let n =document.querySelector(" .form input[type=email]") 
let ss =document.querySelector(" .form input[type=subject]") 
let mm =document.querySelector(" .form input[type=message]") 

let tt= document.getElementById("tt")
let mmmm= document.getElementById("mmmm")
let eeee= document.getElementById("eeee")
let ssss= document.getElementById("ssss")




btnl.onclick=()=>{
    window.scroll({
        top:0, 
        behavior:"smooth"
    })
}

window.onscroll=()=>{
    // console.log(window.scrollY)

    if(window.scrollY >= 100 ){
            for(let y = 0 ; y < i.length ; y++){
                i[y].style.color="#fff"
                document.getElementById("nav").style.background="#007bff";
                barr.style.color="#fff"

            }

    }else{
        document.getElementById("nav").style.background="transparent";
        barr.style.color="rgb(163, 141, 141);"

        for(let z = 0 ; z < i.length ; z++){
            i[z].style.color="#aeaeaf"

        }

    }



    // btn on scroll top

    
if ( window.scrollY >= 300 ){
    btnl.style.display="block"
}else{
    btnl.style.display="none"

}


/////

}
barr.onclick=()=>{
    listt.classList.toggle("dropdown")
    iconss.classList.toggle("show")
}

for(let x = 0 ; x < w.length ; x++){
    w[x].onclick=()=>{
        let o = w[x].innerHTML
        for(let y = 0 ; y < w.length ; y++){
            w[y].classList.remove("active")
        }
        w[x].classList.add("active")



    }


}

vis.onclick= ()=>{
    console.log(webb)
    webb.style.display="none"
    add.style.display="none"
    dvv.style.display="unset"

    
}

ad.onclick= ()=>{
    webb.style.display="none"
    add.style.display="unset"
    dvv.style.display="none"
    console.log(webb)


    
}
web.onclick= ()=>{
    webb.style.display="unset"
    add.style.display="none"
    dvv.style.display="none"
    console.log(webb)

}


aa.onclick= ()=>{
    webb.style.display="unset"
    add.style.display="unset"
    dvv.style.display="unset"
    console.log(webb)

    
}




s.onclick=(e)=>{
    e.preventDefault()


     if(t.value != "" ){
        t.style.borderBottom="2px solid #ff7902"
        tt.innerHTML=""
 
            
    }
    else {  
        t.style.borderBottom="4px solid red"
        tt.innerHTML="please fill this input"
        tt.style.color="red"
     

    
    }




         if(  mm.value !="" ){
                mm.style.borderBottom="2px solid #ff7902"
                mmmm.innerHTML=""
             } 
             else{
                mm.style.borderBottom="4px solid red"
                mmmm.innerHTML="please fill this input"
                mmmm.style.color="red"
             }
             if(  n.value !="" ){   
                n.style.borderBottom="2px solid #ff7902"
                eeee.innerHTML=""
             }
             else{
                n.style.borderBottom="4px solid red"
                eeee.innerHTML="please fill this input"
                eeee.style.color="red" 
             }
             if(  ss.value !="" ){
                ss.style.borderBottom="2px solid  #ff7902"
                ssss.innerHTML=""
             }
             else{
                ss.style.borderBottom="4px solid red"
                ssss.innerHTML="please fill this input"
                ssss.style.color="red"
             }
   
    


}





t.oninput=()=>{
    t.style.borderBottom="2px solid #ff7902"
    tt.innerHTML=""

}
mm.oninput=()=>{
    mm.style.borderBottom="2px solid #ff7902"
    mmmm.innerHTML=""

}
ss.oninput=()=>{
    ss.style.borderBottom="2px solid #ff7902"
    ssss.innerHTML=""

}
n.oninput=()=>{
    n.style.borderBottom="2px solid #ff7902"
    eeee.innerHTML=""


}






















