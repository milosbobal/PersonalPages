import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoringdataService {

  constructor() { }

  getSenders(){
    return [
      {"id": 0, "name": "Milos", "email": "milos.bobal@visma.com", "message": "Aloha"},
      {"id": 1, "name": "Jozko", "email": "jozko@jozko.com", "message": "Hallo"},
      {"id": 2, "name": "Fero", "email": "jozko@jozko.com", "message": "Hello"},
      {"id": 3, "name": "Roman", "email": "jozko@jozko.com", "message": "Sewas"},
      {"id": 4, "name": "Jana", "email": "jozko@jozko.com", "message": "Dzen dobry"},
      {"id": 5, "name": "Zdena", "email": "jozko@jozko.com", "message": "Zdrastvuj"}
    ];
  }
}
