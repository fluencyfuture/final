import operation from "./module-a.mjs"; //Importando função default
import { PI, URL_API } from "./module-a.mjs";

const valor = operation(10, 5);
console.log(valor);
console.log(PI);
console.log(URL_API);