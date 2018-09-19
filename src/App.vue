<template>
  <div id="app">
    <div
      class="area"
      :style="content"
      v-tap="tap"
      v-swipeleft="swipeleft"
      v-swiperight="swiperight"
      v-press="press">
      {{name}}
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'app',
  data () {
    return {
      name: 'try to tap'
    }
  },
  computed: {
    content () {
      return {
        'height': `${document.documentElement.clientHeight - 20}px`
      }
    }
  },
  methods: {
    tap:function(s){
      console.log("点击")
    },
    swipeleft:function(s){
      console.log("向左滑动:x偏移量["+s.deltaX+"],y偏移量["+s.deltaY+"]")
    },
    swiperight:function(s){
      console.log("向右滑动:x偏移量["+s.deltaX+"],y偏移量["+s.deltaY+"]")
    },
    press:function(s){
      console.log("长按")
    }
  }
}
</script>
<style lang="scss" scoped>
.area {
  width: 100%;
  height: 500px;
  border-radius: 5px;
  text-align: center;
  line-height: 500px;
  background-color: #ccc;
}
</style>

