import { InMemoryDbService } from 'angular2-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let characters = [
      {id: 1, name: 'Dragon-Bear'},
      {id: 2, name: 'Clown-Fox'},
      {id: 3, name: 'Boa-Duck'},
      {id: 4, name: 'Rabbit-Cat'},
      {id: 5, name: 'The Master Priest'},
      {id: 6, name: 'Furry-Giraffe'},
      {id: 7, name: 'Ariadne'},
      {id: 8, name: 'Deer-Wolf'},
      {id: 9, name: 'Tiger-Hummingbird'},
      {id: 10, name: 'Lene-Cow'},
      {id: 11, name: 'Ant-Salamander'},
      {id: 11, name: 'Bluewhale-Beaver'},
      {id: 12, name: 'Moon-Possum'} 
    ];
    return {characters};
  }
}


