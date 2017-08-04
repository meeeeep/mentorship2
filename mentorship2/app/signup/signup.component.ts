import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";


@Component({
    selector: "signup",
    moduleId: module.id,
    templateUrl: "./signup.component.html"
})

export class SignupComponent implements OnInit {
    constructor(
        public route: ActivatedRoute
    ) {}


    ngOnInit(): void {};
}