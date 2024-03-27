const { createApp } = Vue;

createApp({
  data: function(){
    return{
      todo: [
        {
          text: "Riempire il distributore",
          done: false,
        },
        {
          text: "Accendere il tablet",
          done: false,
        },
        {
          text: "Chiusura fiscale distributore",
          done: true,
        },
        {
          text: "Spazzare",
          done: false,
        },
        {
          text: "Accendere le luci",
          done: true,
        },
        {
          text: "Mostrare un sorriso smagliante",
          done: false,
        },
      ],
      textInput: "",
    }
  },

  methods: {
    removeTodo(i){
      this.todo.splice(i, 1);
    },
    saveTodo(){
      const newTodo = {
        text: this.textInput,
        done: false,
      }
      this.todo.push(newTodo);
    }
  },
  
}).mount('#app');