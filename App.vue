<template>
  <div id="app">
    <nav class="navbar">
      <ul class="no-bullets">
        <li><router-link to="/">Login</router-link></li>
        <li><router-link to="/resume-portfolio">Resume</router-link></li>
        <li><router-link to="/blog-portfolio">Blog</router-link></li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .navbar {
    padding: 30px;
  }

  .navbar a {
    font-weight: bold;
    color: #2c3e50;
  }

  .navbar a.router-link-exact-active {
    color: #42b983;
  }
</style>
