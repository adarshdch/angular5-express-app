import { StaticScanResult } from './../models/static-scan-result';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class StaticScanService {
  private scanUrl = 'api/static-scan';  // URL to web api

  private scanResults = new BehaviorSubject<StaticScanResult[]>([
      new StaticScanResult({ sealId: 87270 }),
      new StaticScanResult({ sealId: 88908 }),
    ]);

  scanResult = this.scanResults.asObservable();

  constructor(private http: HttpClient) { }

  getScanResults (): Observable<StaticScanResult[]> {
    return this.http.get<StaticScanResult[]>(this.scanUrl)
      .pipe(
        tap(results => this.log(`fetched heroes`)),
        catchError(this.handleError('getScanResults', []))
      );
  }


  //#region Start 
  // changeScanResult(scanResult) {
  //   this.scanResults.next(scanResult)
  //   console.log(scanResult);
  // }

  // updateScanResults(sealId: number): Observable<StaticScanResult> {
  //   const url = `${this.scanUrl}/${sealId}`;
  //   var newScanResults = this.http.get<StaticScanResult>(url)
  //     .pipe(tap(_ => this.log(`fetched seal id=${sealId}`)),
  //     catchError(this.handleError<StaticScanResult>(`getHero id=${sealId}`))
  //   );
  //   this.changeScanResult(of(newScanResults));
  //   return newScanResults;
  // }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
 
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
 
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
 
  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    //this.messageService.add('HeroService: ' + message);
  }
    //#endregion
}
