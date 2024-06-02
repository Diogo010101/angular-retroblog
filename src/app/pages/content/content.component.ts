import { Component, Input, OnInit } from '@angular/core';
import { MenuBarComponent } from "../../components/menu-bar/menu-bar.component";
import { WhitePagepostComponent } from '../white-pagepost/white-pagepost.component';
import { BlackPagepostComponent } from "../black-pagepost/black-pagepost.component";
import { ActivatedRoute, RouterModule } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
    selector: 'app-content',
    standalone: true,
    templateUrl: './content.component.html',
    styleUrl: './content.component.css',
    imports: [RouterModule ,MenuBarComponent, WhitePagepostComponent, BlackPagepostComponent]
})
export class ContentComponent implements OnInit{

    titlePost: string = "";
    descPost: string = "";
    dataPost: string = "";
    authorPost: string = "";
    categoryPost: string = "";
    introTitle: string = "";
    introDescription: string = "";
    photoIntro: string = "";
    secondTitle: string = "";
    addSecondDescription: string = "";
    addSecondPhoto: string = "";

    private id: string | null = "0"

    constructor(
        private route:ActivatedRoute

    ){}


    ngOnInit(): void {
        this.route.paramMap.subscribe( value =>
            this.id = value.get("id")
        )
        this.setValuesToComponent(this.id)
    }

    setValuesToComponent(id:string | null){
        const result = dataFake.filter(article => article.id.toString() == id )[0]

            this.titlePost = result.title
            this.descPost = result.description
            this.dataPost = result.data
            this.authorPost = result.author
            this.categoryPost = result.category
            this.introTitle = result.introTitle
            this.introDescription = result.introDescription
            this.photoIntro = result.photoIntro
            this.secondTitle = result.addlTitle
            this.addSecondDescription = result.addDescription
            this.addSecondPhoto = result.addPhoto



    }


}
