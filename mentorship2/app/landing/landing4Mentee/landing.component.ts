import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";


@Component({
    selector: "landings",
    moduleId: module.id,
    templateUrl: "./landing.component.html"
})

export class LandingsComponent implements OnInit {
    constructor(
    public route: ActivatedRoute
    ) {}


ngOnInit(): void {};
}

