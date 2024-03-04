import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainBodyComponent } from './components/main-body/main-body.component';
import { AgentsComponent } from './components/main-body/agents/agents.component';
import { MapsComponent } from './components/main-body/maps/maps.component';
import { WeaponsComponent } from './components/main-body/weapons/weapons.component';
import { BundlesComponent } from './components/main-body/bundles/bundles.component';
import { AppRoutingModule } from './app.routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AgentDetailsComponent } from './components/main-body/agents/agent-details/agent-details.component';
import { MapDetailsComponent } from './components/main-body/maps/map-details/map-details.component';
import { WeaponDetailsComponent } from './components/main-body/weapons/weapon-details/weapon-details.component';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainBodyComponent,
    AgentsComponent,
    MapsComponent,
    WeaponsComponent,
    BundlesComponent,
    AgentDetailsComponent,
    MapDetailsComponent,
    WeaponDetailsComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
