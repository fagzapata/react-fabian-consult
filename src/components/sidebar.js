import React, { Component } from 'react'

export class Sidebar extends Component {
  render() {
    return (
      <footer class="footer text-center">
    <div class="container">
      <div class="row">
        <div class="col-md-4 mb-5 mb-lg-0">
          <h4 class="text-uppercase mb-4">Ubicacion</h4>
          <p class="lead mb-0">Direccion
            <br/>Olmeca, pst: 62234</p>
        </div>
        <div class="col-md-4 mb-5 mb-lg-0">
          <h4 class="text-uppercase mb-4">Sitios Web</h4>
          <ul class="list-inline mb-0">
            <li class="list-inline-item">
              <a class="btn btn-outline-light btn-social text-center rounded-circle" href="www.facebook.com">
                <i class="fab fa-fw fa-facebook-f"></i>
              </a>
            </li>
            <li class="list-inline-item">
              <a class="btn btn-outline-light btn-social text-center rounded-circle" href="#">
                <i class="fab fa-fw fa-google-plus-g"></i>
              </a>
            </li>
            <li class="list-inline-item">
              <a class="btn btn-outline-light btn-social text-center rounded-circle" href="#">
                <i class="fab fa-fw fa-twitter"></i>
              </a>
            </li>
            <li class="list-inline-item">
              <a class="btn btn-outline-light btn-social text-center rounded-circle" href="#">
                <i class="fab fa-fw fa-github"></i>
              </a>
            </li>
            <li class="list-inline-item">
              <a class="btn btn-outline-light btn-social text-center rounded-circle" href="#">
                <i class="fab fa-fw fa-whatsapp"></i>
              </a>
            </li>
          </ul>
        </div>
        <div class="col-md-4">
          <h4 class="text-uppercase mb-4">Informacion adicional</h4>
          <p class="lead mb-0">Maestro
            <a href="#">Carlos M. Zapata Lopez</a>.</p>
        </div>
      </div>
    </div>
  </footer>
    )
  }
}

export default Sidebar
