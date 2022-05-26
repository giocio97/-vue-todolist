const listToDo = new Vue({
el: "#app",
data: {
   newTodo : "",
    toDo:[
        {
            text: `fare la spesa`,
            done: true
        },

        {
            text: `pulire casa`,
            done: true
        },

        {
            text: `comprare pane`,
            done: false
        },

        {
            text: `lavare la macchina`,
            done: true
        },

        {
            text: `studiare`,
            done: false
        },




    ]
},

methods:{
   addItem(){
       const nuovoAdd = {
           text: this.newTodo,
           done: false
       }

       if(this.newTodo!==""){
           this.toDo.push(nuovoAdd);
           this.newTodo = "";
       }
         
    },

    deleteItem(index){
        this.toDo.splice(index,1);
    },

}
});