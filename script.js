

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
           
        ],

        nuovoOggettoLista: "",

        


   
    }
},

methods:{

    fatto: function(index){

        this.lista[index].done = !this.lista[index].done

    },

    rimuovi:function(index){
        this.lista.splice(index,1)

    },

    aggiungi:function(oggetto){

        const nuovoOggetto={
            text: oggetto,
            done: "false"
        } 

        this.lista.push(nuovoOggetto)

    }
}
}).mount('#app')

