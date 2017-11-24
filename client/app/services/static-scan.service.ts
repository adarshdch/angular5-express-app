import { StaticScanResult } from './../models/static-scan-result';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class StaticScanService {

  private scanResults = new BehaviorSubject<StaticScanResult[]>([
      new StaticScanResult({ sealId: 87270 }),
      new StaticScanResult({ sealId: 88908 }),
    ]);

  scanResult = this.scanResults.asObservable();

  constructor() { }

  changeScanResult(scanResult) {
    this.scanResults.next(scanResult)
  }

}
