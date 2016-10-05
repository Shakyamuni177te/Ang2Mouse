import { InMemoryDbService } from 'angular2-in-memory-web-api';

export class InMemoryBaseService implements InMemoryDbService {
  createDb() {
    let base = [
      {size: 1, server: 'Red-Hat', network: 'Cat 5e', facilities: ['basicComputing', 'basicWashing', 'basicCleaning', 'basicSleeping', 'basicEating'], inbase: [1, 3], onmission: [2, 4]},
    ];
    return {base};
  }
}

