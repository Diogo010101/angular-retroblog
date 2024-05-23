import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-smallmorecard',
  standalone: true,
  imports: [],
  templateUrl: './app-smallmorecard.component.html',
  styleUrl: './app-smallmorecard.component.css'
})
export class AppSmallmorecardComponent implements OnInit{
  @Input()
  photoCover: string = "";
  @Input()
  dataPost: string = "";
  @Input()
  cardTitle: string = "";
  @Input()
  cardDescription: string = "";


  constructor(){
  }  
  ngOnInit(): void {
  }

}
