window.sr= ScrollReveal({reset:true});


// PAGINA INDEX | VIDEOS
sr.reveal('.titulo-pagina', {duration: 1000});

sr.reveal('.cartao--destaque', 
  {
    rotate: { x: 0, y: 80, z: 0 },
    duration: 1000,
    scale: 0.7,
    easing   : 'ease',
});

sr.reveal('.cartao--recentes', {
  rotate: { x: 1, y: 100}, 
  delay    : 100,
  duration: 1000,
  easing   : 'ease-in-out',
  scale: 0.7,
});


sr.reveal('.secao-videos', {
  origin : 'right',
  delay    : 300,
  distance : '150px',
  easing   : 'ease-in-out',
  
});

sr.reveal('.secao-produtos', {
  origin : 'right',
  delay    : 300,
  distance : '150px',
  easing   : 'ease-in-out',
  
});

// PAGINA VIDEO DENTRO 
