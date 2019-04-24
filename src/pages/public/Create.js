import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'popper.js'
import 'jquery'
import './../../CrearCuenta.css';
import {firebaseAuth, firebaseDatabase} from '../../data/config'
  


  export class Create extends Component {
    
  constructor(){
   super()
   this.state = {
    name : '',
    email : '',
    password : '',
    confirmPassword: '',
   }
  }


  onSubmit(e){
    e.preventDefault()

  const {name , email , password , confirmPassword} = this.state

    if(password === confirmPassword){
        //invocas firebase
        firebaseAuth
        .createUserWithEmailAndPassword(name, email, password)
        .then(user => {
          let keyOfUser = user.user.uid;
          let userToupload = {
            name: name,
            email: email,
            password: password,
          }
          firebaseDatabase
          .ref('users')
          .child(keyOfUser)
          .set(userToupload)
          .catch(error => {
            console.log(error.message)
          })
        }).catch((error) => {
          console.log(error)
        })
    }else{
      alert("contraseña mala")
    }
  }

    render(){
        return (
            <div class="container">
            <div class="row">
              <div class="col-lg-10 col-xl-9 mx-auto">
                <div class="card card-signin flex-row my-5">
                  <div class="card-img-left d-none d-md-flex">
                  </div>
                  <div class="card-body">
                    <h5 class="card-title text-center">Registro de Clientes</h5>
                    <form class="form-signin" onSubmit={this.state.onSubmit}>
                      <div class="form-label-group">
                        <input type="text" 
                          id="inputUserame"
                          name="username"
                          value={this.state.name}
                          onChange={(e)=>{

                            this.setState({
                              name : e.target.value
                            })
                          }}
                          class="form-control" 
                          placeholder="Nombre completo"
                          required 
                          autofocus />
                        <label for="inputUserame">Nombre completo</label>
                      </div>
                      <div class="form-label-group">
                        <input type="email"
                        id="inputEmail"
                          name="email"
                          value={this.state.email}
                          onChange={(e)=>{

                            this.setState({
                              email : e.target.value
                            })
                          }}
                          class="form-control"
                          placeholder="Email" 
                          required />
                        <label for="inputEmail">Correo Electronico</label>
                      </div>
                      <hr />
                      <div class="form-label-group">
                        <input type="password" 
                        id="inputPassword"
                        name="password"
                        value={this.state.password}
                        onChange={(e)=>{

                          this.setState({
                            password : e.target.value
                          })
                        }}
                        class="form-control" 
                        placeholder="Password" 
                        required />
                        <label for="inputPassword">Contraseña</label>
                      </div>
                      <div class="form-label-group">
                        <input type="password" 
                        id="inputConfirmPassword"
                        name="confirmPassword"
                        value={this.state.confirmPassword}
                        onChange={(e)=>{

                          this.setState({
                            confirmPassword : e.target.value
                          })
                        }}
                        class="form-control" 
                        placeholder="Password" 
                        required />
                        <label for="inputConfirmPassword">Confirmar Contraseña</label>
                      </div>
                      <button class="btn btn-lg btn-primary btn-block text-uppercase"  type="submit">Registrar</button>
                     <div class="text-center">
                        <span class="text-muted">Ya eres usuario?</span>
                     </div>
                      <a class="d-block text-center mt-2 small" href="/Login">Iniciar Sesion</a><br />
                      <hr class="my-4" />
                      <button id="google-button" class="btn btn-lg btn-outline-danger btn-block text-uppercase" type="submit"><i class="fab fa-google mr-2"></i> Sign up with Google</button>
                      
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
    
        )
    }
}

export default Create