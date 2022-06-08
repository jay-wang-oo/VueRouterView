<template>
  <div class="row">
    <div class="col-3">
      <router-link :to="{name:'c1'}">C</router-link> |
      <router-link to="/newpage2/d">D</router-link> |
      <router-link to="/newpage2/namedView2/c2d">c2d</router-link> |
      <router-link to="/newpage2/namedView2/b2c">b2c</router-link>
    </div>
    <div class="col-9">
      <router-view></router-view>
    </div>
  </div>
</template>
