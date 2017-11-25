import { StaticScanService } from './../../services/static-scan.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'static-scan-dashboard',
  templateUrl: './static-scan-dashboard.component.html',
  styleUrls: ['./static-scan-dashboard.component.css']
})
export class StaticScanDashboardComponent implements OnInit {

  scanResults = []

  constructor(private staticScanService: StaticScanService) { }

  ngOnInit() {
    this.getScanResults();
    //this.itemCount = this.scanResults.length;
    this.staticScanService.scanResult.subscribe(res => this.scanResults = res);
    //this.staticScanService.changeScanResult(this.scanResults);
    this.staticScanService.getScanResults();
    console.log(this.scanResults);
  }

  getScanResults()
  {
    this.staticScanService.getScanResults()
    .subscribe(results => this.scanResults = results);
  }

}
