import { Component, Input, OnInit } from '@angular/core';
import { MenuBarComponent } from "../../components/menu-bar/menu-bar.component";

@Component({
    selector: 'app-black-pagepost',
    standalone: true,
    templateUrl: './black-pagepost.component.html',
    styleUrl: './black-pagepost.component.css',
    imports: [MenuBarComponent]
})
export class BlackPagepostComponent implements OnInit {
    @Input()
    titlePost: string = "";
    @Input()
    descPost: string = "";
    @Input()
    dataPost: string = "";
    @Input()
    authorPost: string = "";
    @Input()
    categoryPost: string = "";



    constructor(){

    }

    ngOnInit(): void {
    }


}
