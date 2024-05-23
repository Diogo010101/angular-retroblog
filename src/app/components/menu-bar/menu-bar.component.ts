import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.css'
})
export class MenuBarComponent {
  ligarDesligar: string = "menu-off";

  constructor(){

  }

  mostrarMenu(){
    if (this.ligarDesligar === "menu-off"){
      this.ligarDesligar = "menu-on";
    } else {
      this.ligarDesligar = "menu-off"
    }
  }

}
