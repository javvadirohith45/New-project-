document.addEventListener("DOMContentLoaded",()=>{
  document.body.classList.add("page-enter");
  const reveals=[...document.querySelectorAll(".reveal")];
  if("IntersectionObserver" in window){
    const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("show");io.unobserve(e.target)}}),{threshold:.08});
    reveals.forEach((el,i)=>{el.style.transitionDelay=Math.min(i*70,500)+"ms";io.observe(el)});
  }else reveals.forEach(el=>el.classList.add("show"));
  const bar=document.querySelector(".progress span");
  const update=()=>{if(!bar)return;const d=document.documentElement.scrollHeight-innerHeight;bar.style.width=(d>0?(scrollY/d)*100:0)+"%"};
  addEventListener("scroll",update,{passive:true});update();
  document.querySelectorAll('a[href$=".html"]').forEach(a=>{
    a.addEventListener("click",()=>{document.body.classList.add("page-leaving")});
  });
});
function heartBurst(count=30){
  const icons=["❤️","💗","💖","💘","💞","✨","💍"];
  for(let i=0;i<count;i++){
    const s=document.createElement("span");s.textContent=icons[Math.floor(Math.random()*icons.length)];
    s.style.position="fixed";s.style.left=(50+(Math.random()*60-30))+"vw";s.style.top=(55+(Math.random()*20-10))+"vh";
    s.style.zIndex="9999";s.style.pointerEvents="none";s.style.fontSize=(18+Math.random()*22)+"px";
    s.style.transition="transform 1.2s ease, opacity 1.2s ease";document.body.appendChild(s);
    requestAnimationFrame(()=>{s.style.transform=`translate(${(Math.random()*360-180)}px,${-(120+Math.random()*420)}px) rotate(${Math.random()*360-180}deg)`;s.style.opacity="0"});
    setTimeout(()=>s.remove(),1300);
  }
}
