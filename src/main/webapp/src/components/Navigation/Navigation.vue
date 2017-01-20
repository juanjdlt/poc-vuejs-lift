<template>
  <nav class="navbar fixed-top navbar-toggleable-sm navbar-inverse bg-inverse">
      <router-link class="navbar-brand" to="/">
        <img alt="Brand" src="public/assets/images/logo.png" height="20">
      </router-link>
    <ul class="navbar-nav">
      <router-link class="nav-item" tag="li" to="/" exact>
        <a class="nav-link"><i class="fa fa-home"></i> Home</a>
      </router-link>
      <router-link class="nav-item" tag="li" to="/ejemplo-rest" exact>
        <a class="nav-link"><i class="fa fa-file-text-o"></i>Ejemplo REST</a>
      </router-link>
      <router-link class="nav-item" tag="li" to="/naaa" exact>
        <a class="nav-link"><i class="fa fa-file-text-o"></i>Página que no existe</a>
      </router-link>
    </ul>
  </nav>
</template>