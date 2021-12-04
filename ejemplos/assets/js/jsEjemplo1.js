var  Person = Backbone.Model.extend();  
var person = new Person();  
person.set({ fname: "Gabriel", lname:"Chaparro"}); 
/* document.write(`What's my name: ${person.get('fname')} ${person.get('lname')}`); */

let div = document.getElementById('ejemplo');
div.innerHTML = `Cual es tu nombre?: ${person.get('fname')} ${person.get('lname')}`
div.style.backgroundColor = 'red';