import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { TravelsComponent } from './travels/travels.component';
import { TravelsDisplayComponent } from './travels-display/travels-display.component';
import { TravelsEditComponent } from './travels-edit/travels-edit.component';

import { AngularFireModule } from '@angular/fire'
import { AngularFireDatabaseModule } from '@angular/fire/database'
import { environment } from '../environments/environment'
import { TravelsService } from './travels.service'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogComponent,
    TravelsComponent,
    TravelsDisplayComponent,
    TravelsEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
