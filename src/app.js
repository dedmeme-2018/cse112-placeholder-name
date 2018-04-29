var app = new Vue({
    el: '#app',
    data: {
        message: 'DEDMEME4LYFE!',
        currentColor: 'salmon',
        numberOfMessages: 0,
        colors: [
            {color: "salmon"},
            {color: "lightblue"},
            {color: "grey"},
            {color: "green"}
        ],
    },
    methods: {
        changeCurrentColor: function (value) {
            this.currentColor = value
        },
        addMessage: function (){
            this.numberOfMessages++
        },
        removeMessage: function (){
            this.numberOfMessages--
        }
    }
})
