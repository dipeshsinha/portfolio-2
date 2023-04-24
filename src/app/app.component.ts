import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('mouseLinkHover',[
      state('on',style({
        height: '50px',
        width: '50px',
        border: '#c6c6c6 solid .5px',
        opacity: '.3', 
      })),
      state('off',style({
        height: '30px',
        width: '30px',
        border: 'transparent',
        opacity: '1',
      })),
      transition('on => off',animate('1000ms ease-out')),
      transition('off => on',animate('1000ms ease-in'))
    ])
  ]
})
export class AppComponent{

  cursorPositionX = 0
  cursorPositionY = 0

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

  cursorOnLink = false

  cursorState() {
    return this.cursorOnLink ? 'on' : 'Off'
  }

  onMouseHover() {

  }


  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {

    this.cursorPositionX = event.clientX
    this.cursorPositionY = event.clientY


    if( this.cursorPositionY < (window.innerHeight*this.gridRangeHeight) ) {
      this.xAxisValue = this.cursorPositionY
    } else {
      this.xAxisValue = window.innerHeight*this.gridRangeHeight
    }

    if( this.cursorPositionX < (window.innerWidth*this.gridRangeWidth) ) {
      this.yAxisValue = this.cursorPositionX
    } else {
      this.yAxisValue = window.innerWidth*this.gridRangeWidth
    }

    
    this.xHeightValue = this.xAxisValue - (window.innerHeight * 0.075)
    this.yWidthValue = this.yAxisValue - (window.innerWidth * 0.075)
    this.bottomDivHeight = window.innerHeight - this.xHeightValue - (window.innerHeight * 0.15)
    this.bottomDivWidth = window.innerWidth - this.yWidthValue - (window.innerWidth * 0.15)

    this.mainContentDivHeight = (window.innerHeight*(1 - this.gridRangeHeight)) - (window.innerHeight * 0.075)
    this.mainContentDivWidth = (window.innerWidth*(1 - this.gridRangeWidth)) - (window.innerWidth * 0.075);


  }

}
