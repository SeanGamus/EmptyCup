count=1;
$(document).ready(() => {
const deg=6;


$("button").click(function(){
  
  $(".clock, .box, .container, section, button, box1").toggleClass("active");
  
  if (count==1)
  {$("button").text("GLASSMORPHISM");
    
  count=0;
}
  else
  {count=1;
  $("button").text("NEUMORPHISM");}
})

setInterval(()=>{
  let day = new Date();
  let hh = day.getHours() * 30;
  let mm = day.getMinutes() * deg;
  let ss = day.getSeconds() * deg;


  // hr.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
  // mn.style.transform = `rotateZ(${mm}deg)`; 
  // sc.style.transform = `rotateZ(${ss}deg)`;
  $("#hr").css("transform", `rotateZ(${(hh)+(mm/12)}deg)`)
  $("#mn").css("transform", `rotate(${mm}deg)`)
  $("#sc").css("transform", `rotate(${ss}deg)`)

})
})
