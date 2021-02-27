import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ShuperModelComponent} from './components/shuper-model/shuper-model.component';
import {InterfaceComponent} from './components/interface/interface.component';
import {SensitiveShuperComponent} from './components/sensitive-shuper/shuper-sensitive.component';

@NgModule({
  declarations: [
    AppComponent,
    InterfaceComponent,
    SensitiveShuperComponent,
    ShuperModelComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
