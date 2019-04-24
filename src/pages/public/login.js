import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import 'popper.js'
import 'jquery'
import './../../login.css';




export class Login extends Component {

  render() {
    return (
        <div class="container-fluid">
        <div class="row no-gutter">
          <div class="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
          <div class="col-md-8 col-lg-6">
            <div class="login d-flex align-items-center py-5">
              <div class="container">
                <div class="row">
                  <div class="col-md-9 col-lg-8 mx-auto">
                    <h3 class="login-heading mb-4">Inicio de Sesion</h3>
                    <form>
                      <div class="form-label-group">
                        <input type="email" id="inputEmail"  class="form-control" placeholder="Correo Electronico" required autofocus/>
                        <label for="inputEmail">Correo Electronico</label>
                      </div>
      
                      <div class="form-label-group">
                        <input type="password" onChange={(e)=>{
                          this.setState({
                            password: e.target.value
                          })
                        }} class="form-control" id="inputPassword" placeholder="Contraseña" required />
                        <label for="inputPassword">Contraseña</label>
                      </div>
      
                      <button class="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2" type="submit">Iniciar</button>
                      <div class="text-center">
                        <a class="small" href="./RecupContra.js">Recuperar Contraseña</a><br/>
                    </div>
                    <div class="text-center">
                        <a class="small" href="./Create">Crear Cuenta</a><br />
                    </div>
                    
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}



export default Login
