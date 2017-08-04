"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var LandingsComponent = (function () {
    function LandingsComponent(route) {
        this.route = route;
    }
    LandingsComponent.prototype.ngOnInit = function () { };
    ;
    return LandingsComponent;
}());
LandingsComponent = __decorate([
    core_1.Component({
        selector: "landings",
        moduleId: module.id,
        templateUrl: "./landing.component.html"
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute])
], LandingsComponent);
exports.LandingsComponent = LandingsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsYW5kaW5nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCwwQ0FBaUQ7QUFTakQsSUFBYSxpQkFBaUI7SUFDMUIsMkJBQ08sS0FBcUI7UUFBckIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7SUFDekIsQ0FBQztJQUdSLG9DQUFRLEdBQVIsY0FBa0IsQ0FBQztJQUFBLENBQUM7SUFDcEIsd0JBQUM7QUFBRCxDQUFDLEFBUEQsSUFPQztBQVBZLGlCQUFpQjtJQU43QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLFVBQVU7UUFDcEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFdBQVcsRUFBRSwwQkFBMEI7S0FDMUMsQ0FBQztxQ0FJZ0IsdUJBQWM7R0FGbkIsaUJBQWlCLENBTzdCO0FBUFksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibGFuZGluZ3NcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vbGFuZGluZy5jb21wb25lbnQuaHRtbFwiXG59KVxuXG5leHBvcnQgY2xhc3MgTGFuZGluZ3NDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyByb3V0ZTogQWN0aXZhdGVkUm91dGVcbiAgICApIHt9XG5cblxubmdPbkluaXQoKTogdm9pZCB7fTtcbn1cblxuIl19