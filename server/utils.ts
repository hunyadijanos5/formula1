import { iDriver } from "./interfaces";

export function shuffle<T>(array: T[]): T[] {
    let currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
};

export const sortDrivers = (a:iDriver, b: iDriver) => (a?.place || 0) - (b?.place || 0)

// fill imgUrl & place field into drivers data
export const initDrivers = () => {
    console.log("Loading drivers data from json")
    const drivers = require('./drivers.json')

    console.log("Shuffling drivers")
    const places:number[] = []
    for (let i = 0; i < drivers.length; i++) {
        places.push(i + 1)
    }
    const randomPlaces = shuffle(places)

    console.log("Sort drivers by places")
    const randomDrivers:iDriver[] = drivers.map((d:iDriver, i:number) => ({
        ...d,
        imgUrl: `/images/${d.code.toLowerCase()}.png`,
        place: randomPlaces[i]
    })).sort(sortDrivers)

    return randomDrivers
}