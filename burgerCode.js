document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      const target = document.querySelector(this.getAttribute('href'));
      const navbarHeight = document.querySelector('.nav_bar').offsetHeight;
      const offsetTop = target.offsetTop - navbarHeight;
  
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    });
  });
  
  const grande = document.querySelector('.grande')
  const punto = document.querySelectorAll('.punto')

  punto.forEach( ( cadaPunto , i )=> {
    punto[i].addEventListener('click',()=>{
        let posicion  = i;
        let operacion = posicion*-25;
        grande.style.transform = `translateX(${ operacion }%)`
        punto.forEach( ( cadaPunto , i )=>{
            punto[i].classList.remove('activo')
        })
        punto[i].classList.add('activo')
    })
})
