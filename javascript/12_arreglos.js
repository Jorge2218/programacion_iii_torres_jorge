let personajes =["rick","morty", "Summer", "jerry", "jorge", " torres"];
console.log("Elemento 0", personajes [0]);
console.log("Elemento 2", personajes [2]);
console.log("Elemento 5", personajes [5]);
console.log("Elemento 4", personajes [4]);
console.log("Tamaño del arreglo", personajes.length);

console.log("personajes", personajes);
console.log("incluir elementos a un arreglo con push");
console.log("personajes", personajes);
personajes.push("Molina");
console.log("personajes", personajes);
personajes.push("Koke");
console.log("personajes", personajes);
console.log("modificar elementos a un arreglo");
personajes[7]="javier";
console.log("personajes", personajes);

console.log("Eliminar un elemento del arerglo:")
personajes.pop();
console.log("Personajes:",personajes)
personajes.shift();
console.log("Personajes:",personajes)
personajes.splice(1,1);
console.log("Personajes:",personajes)