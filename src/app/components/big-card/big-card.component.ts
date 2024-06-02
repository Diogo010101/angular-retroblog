import { Component, OnInit, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent implements OnInit {
  @Input()
  id:string = "0";
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