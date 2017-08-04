import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";


@Component({
    selector: "login",
    moduleId: module.id,
    templateUrl: "./login.component.html"
})

export class LoginComponent implements OnInit {
    constructor(
        public route: ActivatedRoute
    ) {}


    ngOnInit(): void {};
}