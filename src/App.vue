<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
            <!-- <a class="nav-link active" aria-current="page" href="#">Home</a> -->
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About</router-link>
            <!-- <a class="nav-link" href="#">Features</a> -->
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{name:'newpage'}">新增頁面</router-link>
            <!-- <a class="nav-link" href="#">Pricing</a> -->
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{name:'newpage2'}">新增頁面2</router-link>
            <!-- <a class="nav-link disabled">Disabled</a> -->
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link :to="{name:'新增頁面'}">新增頁面</router-link>
  </nav> -->

  <div class="container">
    <hr>
    <h1>container</h1>
    <hr>
    <router-view/>
  </div>

</template>

<style lang="scss">
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }

// nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
