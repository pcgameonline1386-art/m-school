const progress=document.getElementById('progress');
function setProgress(){const max=document.documentElement.scrollHeight-innerHeight;progress.style.width=(max>0?scrollY/max*100:0)+'%'}
addEventListener('scroll',setProgress,{passive:true});setProgress();
const toggle=document.getElementById('menuToggle'),nav=document.getElementById('nav');
toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.textContent=open?'×':'☰'});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.textContent='☰'}));
if('IntersectionObserver'in window){const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el))}else{document.querySelectorAll('.reveal').forEach(el=>el.classList.add('visible'))}
const feedback=document.getElementById('quizFeedback');document.querySelectorAll('.quiz-options button').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.quiz-options button').forEach(b=>b.classList.remove('selected'));btn.classList.add('selected');feedback.textContent=btn.dataset.answer==='right'?'درست است. انتشار آنلاین می‌تواند از کنترل ما خارج شود؛ پس بهتر است پیش از انتشار فکر کنیم.':'این گزینه درست نیست. نکته اصلی این است که بازنشر محتوا همیشه قابل کنترل نیست.'}));

// Robust back-to-top behavior: avoid depending on anchor positioning or sticky-header offsets.
document.querySelectorAll('[data-scroll-top]').forEach(link=>link.addEventListener('click',event=>{
  event.preventDefault();
  window.scrollTo({top:0,left:0,behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});
}));
const themeToggle=document.getElementById('themeToggle');
if(themeToggle){
  const themeIcon=themeToggle.querySelector('.theme-icon');
  const themeLabel=themeToggle.querySelector('.theme-label');
  const applyTheme=dark=>{
    document.body.classList.toggle('dark-theme',dark);
    themeIcon.textContent=dark?'☀':'☾';
    themeLabel.textContent=dark?'حالت روشن':'حالت تیره';
    themeToggle.setAttribute('aria-label',dark?'فعال‌کردن تم روشن':'فعال‌کردن تم تیره');
  };
  applyTheme(false);
  themeToggle.addEventListener('click',()=>applyTheme(!document.body.classList.contains('dark-theme')));
}
