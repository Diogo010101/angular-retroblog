import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-app-smallmorecard',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './app-smallmorecard.component.html',
  styleUrl: './app-smallmorecard.component.css'
})
export class AppSmallmorecardComponent implements OnInit{
  @Input()
  id: string = "0";
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
