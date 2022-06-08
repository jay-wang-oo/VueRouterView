<template>
  <div></div>
</template>

<script>
import axios from 'axios'
export default {
  created () {
    axios.get('https://randomuser.me/api/')
      .then((res) => {
        console.log(res)
      })
  }
}
</script>
