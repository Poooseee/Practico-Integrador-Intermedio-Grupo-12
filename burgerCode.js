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

function validateForm(event)
{
  event.preventDefault();

  //inputs
  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("apellido").value;
  let telefono = document.getElementById("telefono").value;
  let anios = document.getElementById("anios").value;
  let terminos = document.getElementById("terminos").value;
  let cv = document.getElementById("cv").value;
  let email = document.getElementById("email").value;

  if(nombre.trim() === "")
  {
    alert("Por favor ingrese un nombre");
    return false;
  }

  if(apellido.trim() === "")
    {
      alert("Por favor ingrese un apellido");
      return false; 
    }

  if(telefono.trim() === "")
    {
      alert("Por favor ingrese un telefono");
      return false; 
    }

  if(anios.trim() == false)
    {
      alert("Por favor confirme que es mayor");
      return false;
    }

  if(terminos.trim() == false)
    {
      alert("Por favor acepte los términos");
      return false;
    }

  if(cv.trim() === "")
    {
      alert("Por favor suba su cv");
      return false;
    }

  if(email.trim() === "")
  {
    alert("por favor ingresa un mail");
    return false;
  }

  if(!isValidEmail(email))
  {
    alert("Por favor ingresa un MAIL VALIDO");
    return true;
  }



function isValidEmail(email)
{
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailRegex.test(email);
}



  alert("Formulario enviado correctamente");
  return true;

}  


document.getElementById("myForm").addEventListener("submit", validateForm);
