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
  origin : 'top',
  delay    : 100,
  distance : '150px',
  easing   : 'ease-in-out',
  
});

sr.reveal('.secao-produtos2', {
  origin : 'top',
  delay    : 150,
  distance : '150px',
  easing   : 'ease-in-out',
  
});

sr.reveal('.secao-produtos3', {
  origin : 'top',
  delay    : 200,
  distance : '150px',
  easing   : 'ease-in-out',
  
});

sr.reveal('.secao-produtos4', {
  origin : 'top',
  delay    : 250,
  distance : '150px',
  easing   : 'ease-in-out',
  
});


sr.reveal('.secao-picos', {
  origin : 'bottom',
  delay    : 100,
  distance : '150px',
  easing   : 'ease',
  
});

sr.reveal('.conteudo__capa--desktop',{
  origin : 'bottom',
  duration: 1000,
  delay    : 100,
  scale: 0.7,
  distance : '100px',
  easing   : 'ease-in-out',
});

sr.reveal('.conteudo__titulo',{duration: 1000});

sr.reveal('.criador__artigo',{duration: 1800});

sr.reveal('.conteudo__texto',{duration: 2000});

sr.reveal('.conteudo__imagens',{
  rotate: { x: 0, y: 80, z: 0},
  easing   : 'ease-in-out',
  duration: 800,
  scale: 0.7,
});

sr.reveal('.cartao__picos',{
  origin : 'right',
  duration: 800,
  distance : '150px',
  easing   : 'ease-in-out',
});

sr.reveal('.mapa',{
  rotate: { x: 0, y: 60, z: 0},
  duration: 1100,
  scale: 0.5,
  easing   : 'ease-in-out',
});
