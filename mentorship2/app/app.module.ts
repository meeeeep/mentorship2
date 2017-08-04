import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";

import { SignupComponent } from "./signup/signup.component";
import { LandingsComponent } from "./landing/landing4Mentee/landing.component";
import { Landing4MentorComponent } from "./landing/landing4Mentor/landing4Mentor.component";
import { LoginComponent } from "./login/login.component";

// import { ItemService } from "./item/item.service";
// import { LandingsComponent } from "./landing/landing4Mentee/landing.component";
// import { ItemDetailComponent } from "./item/item-detail.component";

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpModule } from "nativescript-angular/http";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        LandingsComponent,
        SignupComponent,
        Landing4MentorComponent,
        LoginComponent

    ],
    providers: [

    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
