

const { createApp } = Vue

createApp({
data() {
    return {

        lista: [
            {
                text: "biscotti",

                done:"true"
            },
            {
                text: "pane",

                done:"false"
            },
            {
                text: "burro",

                done:"false"
            },
            {
                text: "carne",

                done:"false"
            },
            {
                text: "mais",

                done:"false"
            },
           
        ]
   
    }
},

methods:{

    fatto: function(index){

        this.lista[index].done = !this.lista[index].done

    }
}
}).mount('#app')

