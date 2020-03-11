import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { Level4Component } from "./app/components/level1/level2/level3/level4/level4.component";
import { StoreModule } from "@ngrx/store";
import { reducers, metaReducers } from "./reducers";
import { EffectsModule } from "@ngrx/effects";
import { AppEffects } from "./app.effects";

@NgModule({
    declarations: [AppComponent, Level4Component],
    imports: [BrowserModule, StoreModule.forRoot(reducers, { metaReducers }), EffectsModule.forRoot([AppEffects])],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor() {}
}
