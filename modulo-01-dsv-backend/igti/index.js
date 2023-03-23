console.log("Hello World!");

let numero = 10;
for (var i = 0; i < numero; i++) {
  console.log(i);
}

numero = parseInt(process.argv[2]);
const multiplos = [];
for (let i = 3; i < numero; i++) {
  if (i % 3 == 0 || i % 5 == 0) {
    multiplos.push(i);
  }
}
console.log(`Multiplos de 3 e 5: ${multiplos.length}`);
