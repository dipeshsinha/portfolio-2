import { Component, ViewChild } from '@angular/core';

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
  gridRangeWidth = 0.6
  gridRangeHeight = 0.4

  xaxis = document.querySelector<HTMLDivElement>('#xaxis')

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

  }

}
