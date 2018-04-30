<template>
  <div id="PeterDemo">
    <img src="../assets/dmmlogo_copy.png" style="width: 200px">
    <photoshop-picker v-model="colors" @ok="onOk" @cancel="onCancel" style="margin: auto"></photoshop-picker>
    <input @change="updateRepeat()" id="repeat_greeting" v-model="repeat_times" type="number" value="1" style="height: 50px"/>
    <ul class="ow" :style="{color:this.colors.hex}"> 
      <!-- eslint-disable-next-line -->
      <li v-for="(item, index) in greet_arr" ><p > {{item}} - "{{index+1}}"</p></li>
    </ul>
  </div>
</template>

<script>
import photoshop from '../../node_modules/vue-color/src/components/Photoshop.vue'

let greetStr = 'Look Peter, the component works!'
let greetArr = Array(1).fill(greetStr)
let repeatTimes = 1
let fontColor = 0x123456

let defaultProps = {
  hex: '#194d33',
  hsl: {
    h: 150,
    s: 0.5,
    l: 0.2,
    a: 1
  },
  hsv: {
    h: 150,
    s: 0.66,
    v: 0.30,
    a: 1
  },
  rgba: {
    r: 25,
    g: 77,
    b: 51,
    a: 1
  },
  a: 1
}

export default {
  name: 'PeterDemo',
  components: {
    'photoshop-picker': photoshop
  },

  data () {
    return {
      colors: defaultProps,

      repeat_times: repeatTimes,

      greeting_color: fontColor,

      greet_arr: greetArr
    }
  },

  computed: {
    bgc () {
      return this.colors.hex
    }
  },

  methods: {
    onOk () {
      console.log('ok')
    },
    onCancel () {
      console.log('cancel')
    },
    updateValue (value) {
      this.colors = value
    },
    updateRepeat () {
      if (this.repeat_times <= 0) {
        this.greet_arr = Array(1).fill(greetStr)
        this.greet_arr.pop()
      } else {
        this.greet_arr = Array(this.repeat_times - 1).fill(greetStr)
        this.greet_arr.push(greetStr)
      }
    }
  },
  created () {
  }
}
</script>

<style>
  #app {
    font-family: Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
