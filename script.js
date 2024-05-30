

const { createApp } = Vue

createApp({
data() {
    return {

        lista: [
            {
                text: "biscotti",

                done:"false"
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
}
}).mount('#app')
