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
       if(this.newTodo!==""){
           this.toDo.push(this.newTodo);
           this.newTodo = "";
       }
         
    },
}
});