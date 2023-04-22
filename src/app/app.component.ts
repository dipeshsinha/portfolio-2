import { Component, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  xAxisValue = 0
  yAxisValue = 0
  xHeightValue = 0
  yWidthValue = 0
  bottomDivHeight = 0
  bottomDivWidth = 0
  mainContentDivHeight = 0
  mainContentDivWidth = 0
  gridRangeWidth = 0.35
  gridRangeHeight = 0.3




  onMouseMoved(event: MouseEvent) {


    if( event.clientY < (window.innerHeight*this.gridRangeHeight) ) {
      this.xAxisValue = event.clientY
    } else {
      this.xAxisValue = window.innerHeight*this.gridRangeHeight
    }

    if( event.clientX < (window.innerWidth*this.gridRangeWidth) ) {
      this.yAxisValue = event.clientX
    } else {
      this.yAxisValue = window.innerWidth*this.gridRangeWidth
    }

    
    // this.yAxisValue = event.clientX
    this.xHeightValue = this.xAxisValue - (window.innerHeight * 0.075)
    this.yWidthValue = this.yAxisValue - (window.innerWidth * 0.075)
    this.bottomDivHeight = window.innerHeight - this.xHeightValue - (window.innerHeight * 0.15)
    this.bottomDivWidth = window.innerWidth - this.yWidthValue - (window.innerWidth * 0.15)

    this.mainContentDivHeight = (window.innerHeight*(1 - this.gridRangeHeight)) - (window.innerHeight * 0.075)
    this.mainContentDivWidth = (window.innerWidth*(1 - this.gridRangeWidth)) - (window.innerWidth * 0.075);
  }

}
