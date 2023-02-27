// fetch("https://jsonplaceholder.typicode.com/todos") //poco a poco
//   .then((response) => response.json())
//   .then((data) => {
//     const mapeo = data.map((objeto) => objeto.id);
//      const ordenoDescendente=mapeo.sort((a,b)=>b-a);
//      const sumoValores=ordenoDescendente.reduce((a,b)=>a+b,0);
//      console.log(sumoValores);
//   });
fetch("https://jsonplaceholder.typicode.com/todos") //reducido
  .then((response) => response.json())
  .then((data) => {
    const mapeo = data
    .map((objeto) => objeto.id)
    .sort((a,b)=>b-a)
    .reduce((a,b)=>a+b,0);
     console.log(mapeo);
  });