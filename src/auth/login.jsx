import React from 'react';

function Login() {
  return(
    <div class='container'>
     <form>
       <input
         type="text"
         name="email"
         placeholder="email"
         required
       />

       <input
         type="password"
         name="password"
         placeholder="Contrasena"
         required
       />
       <a
         class="waves-effect waves-light btn">
           Iniciar sesion
       </a>
     </form>
    </div>
  )
}

export default Login;
