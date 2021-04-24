import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SingleComponent } from './components/single/single.component';
import { MultiComponent } from './components/multi/multi.component';
import { UploadService } from './services/upload.service';
import { AgGridModule } from 'ag-grid-angular';
import { ListingComponent } from './components/listing/listing.component';
import { PreviewComponent } from './components/preview/preview.component';
import { ProgressbarComponent } from './components/progressbar/progressbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { SinglereduxComponent } from './components/singleredux/singleredux.component';
import { StoreModule } from '@ngrx/store';

import { addISingleReducer } from './components/singleredux/singleredux.reducer';
import { EffectsModule } from '@ngrx/effects';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SingleComponent,
    MultiComponent,
    ListingComponent,
    PreviewComponent,
    ProgressbarComponent,
    SinglereduxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgGridModule.withComponents([ PreviewComponent ]),
    BrowserAnimationsModule,
    MatProgressBarModule,
    StoreModule.forRoot({ singleRedux: addISingleReducer}, {}),
    EffectsModule.forRoot([])
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [UploadService],
  bootstrap: [AppComponent],
  entryComponents:[]
})
export class AppModule { }
