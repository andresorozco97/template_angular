import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedInfoService {

  persistentStore = {};

  constructor() { }

  savePersistentData(id: string, data) {
    if ( data && this.verifyData( data, id ) ) {
      this.persistentStore[id] = data;
    }
  }

  getPersistentData(id: string) {
    return this.persistentStore[id];
  }

  verifyData ( dataToVerify, id = null ) {
    const isEmpty = (Object.keys(dataToVerify)).length > 0;
    if ( isEmpty ) {
      const data = JSON.stringify(this.persistentStore[id]);
      const verifyData = JSON.stringify(dataToVerify);

      return data !== verifyData;
    }
    return false;
  }

  removeData() {
    this.persistentStore = [];
  }
}
