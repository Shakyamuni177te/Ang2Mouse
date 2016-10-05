import { InMemoryDbService } from 'angular2-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let characters = [
      {id: 1, name: 'Dragon-Bear', stamina: 95, randomness: 90, accuracy: 50, laydeeeeez: 89, menz: 43, emotionalMaturity: 21},
      {id: 2, name: 'Clown-Fox', stamina: 37, randomness: 71, accuracy: 57, laydeeeeez: 98, menz: 72, emotionalMaturity: 17},
      {id: 3, name: 'Boa-Duck', stamina: 78, randomness: 81, accuracy: 12, laydeeeeez: 53, menz: 87, emotionalMaturity: 1},
      {id: 4, name: 'Rabbit-Cat', stamina: 51, randomness: 60, accuracy: 44, laydeeeeez: 17, menz: 64, emotionalMaturity: 12},
      {id: 5, name: 'The Master Priest', stamina: 34, randomness: 23, accuracy: 67, laydeeeeez: 72, menz: 34, emotionalMaturity: 96},
      {id: 6, name: 'Furry-Giraffe', stamina: 52, randomness: 38, accuracy: 97, laydeeeeez: 88, menz: 92, emotionalMaturity: 98},
      {id: 7, name: 'Ariadne', stamina: 30, randomness: 59, accuracy: 45, laydeeeeez: 44, menz: 62, emotionalMaturity: 34},
      {id: 8, name: 'Deer-Wolf', stamina: 31, randomness: 51, accuracy: 57, laydeeeeez: 54, menz: 83, emotionalMaturity: 69},
      {id: 9, name: 'Tiger-Hummingbird', stamina: 85, randomness: 82, accuracy: 52, laydeeeeez: 43, menz: 48, emotionalMaturity: 52},
      {id: 10, name: 'Lene-Cow', stamina: 41, randomness: 97, accuracy: 22, laydeeeeez: 12, menz: 58, emotionalMaturity: 22},
      {id: 11, name: 'Ant-Salamander', stamina: 72, randomness: 100, accuracy: 2, laydeeeeez: 0, menz: 0, emotionalMaturity: 99},
      {id: 12, name: 'Bluewhale-Beaver', stamina: 32, randomness: 31, accuracy: 45, laydeeeeez: 17, menz: 9, emotionalMaturity: 64},
      {id: 13, name: 'Red-Spirit', stamina: 65, randomness: 3, accuracy: 57, laydeeeeez: 23, menz: 62, emotionalMaturity: 22},
      {id: 14, name: 'Moon-Possum', stamina: 14, randomness: 75, accuracy: 67, laydeeeeez: 47, menz: 39, emotionalMaturity: 85} 
    ];
    return {characters};
  }
}

