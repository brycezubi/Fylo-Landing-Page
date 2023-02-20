const form = document.querySelector('#formulario');
const subs = document.querySelector('#subscription');

form.addEventListener('submit',(e)=>{
  e.preventDefault();

  const email =  form['email'].value;
  // console.log(email)
  

  if(email === ''){
    addError('email','campo vacio')
  }else if(!isValid(email)){
    addError('email' , 'ingrese un correo valido')
  }else{
    removeError('email')
  }
})


function addError(campo , mensaje){

  const formControl = form[campo].parentNode;
  formControl.classList.add('error')
  
  const small = formControl.querySelector('small');
  small.innerText = mensaje;

}
function removeError(campo){  
  const formControl = form[campo].parentNode;
  formControl.classList.remove('error')
}
function isValid(email) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}