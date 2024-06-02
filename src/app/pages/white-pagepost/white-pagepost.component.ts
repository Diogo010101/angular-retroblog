import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-white-pagepost',
  standalone: true,
  imports: [],
  templateUrl: './white-pagepost.component.html',
  styleUrl: './white-pagepost.component.css'
})
export class WhitePagepostComponent implements OnInit{
  @Input()
  titlePost: string = "";
  @Input()
  descPost: string = "";
  @Input()
  imgPost:  string = "";


  constructor(){
  }

  ngOnInit(): void {
  }

}
