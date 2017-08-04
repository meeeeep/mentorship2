import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";


@Component({
    selector: "landing4mentor",
    moduleId: module.id,
    templateUrl: "./landing4Mentor.component.html"
})

export class Landing4MentorComponent implements OnInit {
    constructor(
        public route: ActivatedRoute
    ) {}


    ngOnInit(): void {};
}