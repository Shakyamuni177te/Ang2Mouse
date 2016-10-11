import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryBasesService implements InMemoryDbService {
  createDb() {
    let base = [
      {id: 1, size: 1, server: 'Red-Hat', network: 'Cat 5e', facilities: ['basicComputing', 'basicWashing', 'basicCleaning', 'basicSleeping', 'basicEating'], inbase: [1, 3], onmission: [2, 4]},
    ];
    return {base};
  }
}

