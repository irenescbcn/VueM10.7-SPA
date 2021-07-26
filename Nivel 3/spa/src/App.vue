<template>
  <div id="app">
    <div id="nav">
      <nav class="navbar navbar-expand-lg">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler bg-light" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <router-link to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/clients/:id">Clients</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/proveidors">Proveïdors</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/magatzem">Magatzem</router-link>
            </li>
            <li class="nav-item dropdown">
              <router-link class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" to="/botiga">Botiga</router-link>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <router-link class="dropdown-item" to="/botiga/alimentacio">Alimentació</router-link>
                <router-link class="dropdown-item" to="/botiga/congelats">Congelats</router-link>
              </div>
            </li>
          </ul>
        </div>
      </nav>
      
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
h2{
    margin-top: 20px
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {

  background: #2c3e50;

  .navbar-toggle{
    background-color: #ffffff
  }

  .nav-item{
    padding: 10px;
  }

  a {
    font-weight: bold;
    color: #ffffff;

    &:hover{
      text-decoration:none;
    }
    
    &.router-link-exact-active {
      color: #42b983;
      
    }
  }

  .dropdown-menu{
    background: #2c3e50;
  }
  .dropdown-item:hover{
    background: #2c3e50;
    color: #42b983;
  }
  
}
</style>
