import { TestBed } from '@angular/core/testing';

import { SharedInfoService } from './shared-info.service';

describe('SharedInfoService', () => {
  let service: SharedInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should savePersistentData', () => {
    service.savePersistentData('data', {name:'hola'});
    expect(service.persistentStore['data']).toEqual({name:'hola'});
  });

  it('should getPersistentData', () => {
    service.persistentStore['data'] = {name: 'hola'}
    service.getPersistentData('data');
    expect(service.persistentStore['data']).toEqual({name:'hola'});
  });

  it('should verifyData ', () => {
    service.verifyData({}, '');
    expect(service.verifyData({}, '')).toBeFalsy();
  });

  it('should removeData', () => {
    service.removeData();
    expect(service.persistentStore).toEqual([]);
  });

});
