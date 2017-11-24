export class StaticScanResult {
  sealId: number
  high: number
  highNai: number
  medium: number
  mediumNai: number
  low: number
  lowNai: number

  constructor({sealId, high = 0, highNai = 0, medium = 0, mediumNai = 0, low = 0, lowNai = 0}){
    this.sealId = sealId
    this.high = high;
    this.highNai = highNai;
    this.medium = medium;
    this.mediumNai = mediumNai;
    this.low = low;
    this.lowNai = lowNai;
  }

}
