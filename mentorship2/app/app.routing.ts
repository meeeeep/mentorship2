import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { SignupComponent } from "./signup/signup.component";
import { LandingsComponent } from "./landing/landing4Mentee/landing.component";
import { Landing4MentorComponent } from "./landing/landing4Mentor/landing4Mentor.component";
import { LoginComponent } from "./login/login.component";

// import { ItemDetailComponent } from "./item/item-detail.component";

const routes: Routes = [
    { path: "", component: SignupComponent },
    { path: "landing", component: LandingsComponent},
    { path: "landing4Mentor", component: Landing4MentorComponent},
    { path: "login", component: LoginComponent}

    // { path: "item/:id", component: ItemDetailComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }