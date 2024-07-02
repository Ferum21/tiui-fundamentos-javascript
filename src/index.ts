import axios from "axios";

var A = 'https://rickandmortyapi.com/api/character/';

const printInfo = async (): Promise<void> => {
    console.log((await X(A)))
}  

const X = async (a: string): Promise<string> => {
    try {
        const response = await axios.get(a);

        const responseJson = response.data;
        const dimensionResponse = await axios.get(responseJson.results[0].origin.url)
        const dimensionResponseJson = dimensionResponse.data

        const characterName = responseJson.results[0].name
        const totalCharacters = responseJson.info.count
        const dimension = dimensionResponseJson.dimension

        return `Personajes: ${totalCharacters}\nPrimer personaje: ${characterName}\nDimensión: ${dimension}`;
        
    } catch (e) {
        return `ERROR: ${e}`
    }
}

printInfo()

/*X(A).then(
  (resolve) => {
    console.log(`Personajes: ${JSON.parse(resolve).info.count}\nPrimer personaje: ${JSON.parse(resolve).results[0].name}`)
    X(JSON.parse(resolve).results[0].origin.url).then(
      (resolve) => { console.log(`Dimensión: ${JSON.parse(resolve).dimension}`) })
  }
).catch((reject) => { console.log(JSON.stringify(reject)) })*/

/*X(A, b = (c, d) => {
  if (c) return console.error(`Error ${c}`);
  X(A + JSON.parse(d).results[0].id, j = (e, f) => {
    if (e) return console.error(`Error ${e}`);
    X(JSON.parse(f).origin.url, k = (g, h) => {
      if (g) return console.error(`Error ${g}`);
      console.log(`Personajes: ${JSON.parse(d).info.count} \nPrimer Personaje: ${JSON.parse(f).name} \nDimensión: ${JSON.parse(h).dimension}`);
    });
  });
});*/