Vue.component('coloritem', {
    props: ['color'],
    // neccessary to have data in function for each instance to have its own version of "intialColor"
    data: function () {
      return {
        initialColor: this.color
      }
    },
    methods: {
        getColor: function () {
            // have event named get-color to listening parent. Return this.color to listening parent.
            this.$emit('get-color', this.color)
        }
    },
    template: `<div v-on:click="getColor" v-bind:style="{'background-color': initialColor}" class="coloritem"></div>`,
})
