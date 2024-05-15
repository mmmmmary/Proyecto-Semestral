
const header = document.querySelector("header")

const footer = document.querySelector("footer");

header.innerHTML=` <div class="container-fluid bg-primary d-flex justify-content-between">
<p class="text-light mb-0 p-2 fs-6 mr-auto">GroundZero.info@gmail.com</p>
<p class="text-light mb-0 p-2 fs-6">+56 9 XXXX XXXX</p>
</div>

<nav  class="navbar navbar-expand-lg navbar-light p-3"  id="menu">
    <div class="container">
      <a class="navbar-brand" href="index.html">
          <span class="fs-5 text-primary fw-bold">GroundZero</span>
      </a>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>


      <!--listas-->
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="index.html">Inicio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="Artistas.html">Artistas</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="Nosotros.html">Nosotros</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Sesion
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="Sesion.html">Iniciar Sesion</a></li>
              <li><a class="dropdown-item" href="Crear_usuario.html">Registrarse</a></li>
              
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Obras
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="Galeria.html">Pinturas</a></li>
              <li><a class="dropdown-item" href="Galeria.html">Orfebrería</a></li>
              <li><a class="dropdown-item" href="Galeria.html">Esculturas</a></li>
              <li><a class="dropdown-item" href="Galeria.html">Tejidos</a></li>
              <li><a class="dropdown-item" href="Galeria.html">Otros</a></li>
            </ul>
          </li>
        </ul>
        
        <!--buscador-->
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Buscar</button>
        </form>
        
      </div>

    </div>
  </nav>`



  footer.innerHTML=`<div class="w-100  d-flex  align-items-center justify-content-center flex-wrap">
    <p class="fs-5 px-3  pt-3">GroundZero &copy; Todos Los Derechos Reservados 2024</p>
    <div id="iconos" >
        <a href="#"><i class="bi bi-facebook"></i></a>
        <a href="#"><i class="bi bi-twitter"></i></a>
        <a href="#"><i class="bi bi-instagram"></i></a>  
    </div>
  </div>`

