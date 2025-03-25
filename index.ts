import { Celular } from "./Celus";

let primerCelular = new Celular("samsung","galaxy s22", "android");
let segundoCelular = new Celular("lg","G7","android", 6);
let tercerCelular = new Celular("iphone","13 pro max","IOS",undefined, 256);
let cuartoCelular = new Celular("nokia", "lumia 520","windows phone", undefined, 64);

//////PRUEBAS//////

console.log(primerCelular);
console.log(segundoCelular);
console.log(tercerCelular);
console.log(cuartoCelular);

console.log(primerCelular.getmarca());
console.log(segundoCelular.getmodelo());
console.log(tercerCelular.getprendido());
console.log(cuartoCelular.getAlmacenamiento());


primerCelular.setmarca("xiaomi");
primerCelular.setmodelo("poco");

console.log(primerCelular);

segundoCelular.prenderApagar();
segundoCelular.mostrarInfo();

tercerCelular.mostrarInfo();