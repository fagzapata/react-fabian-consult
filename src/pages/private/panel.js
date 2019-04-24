import React, { Component } from 'react'

export class Panel extends Component {
  render() {
    return (
      <div>
        <header class="masthead">
        <div class="container h-100">
            <div class="row h-100 align-items-center justify-content-center text-center">
                <div class="col-lg-10 align-self-end">
                    <h1 class="text-uppercase text-white font-weight-bold">pagina de CONSULTORIA</h1>
                    <hr class="divider my-5"/>
                </div>
                <div class="col-lg-8 align-self-baseline">
                    <p class="text-white-75 font-weight-light mb-5">
                        Consultoria en informatica, programacion y Contabilidad
                    </p>
                    <a class="btn btn-primary btn-xl js-scroll-trigger" href="./SesionIni.html">Inicio de Sesion</a>
                </div>
            </div>
        </div>
    </header>
      </div>
    )
  }
}

export default Panel
