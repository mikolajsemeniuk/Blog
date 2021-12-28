import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CsComponent } from './pages/cs/cs.component';
import { ConnectToSqlserverComponent } from './pages/cs/connect-to-sqlserver/connect-to-sqlserver.component';
import { TitleComponent } from './components/title.component';
import { PrerequisitesComponent } from './components/prerequisites.component';
import { SubtitleComponent } from './components/subtitle.component';
import { DescriptionComponent } from './components/description.component';
import { CodesComponent } from './components/codes.component';
import { OrangeComponent } from './components/orange.component';
import { BlueComponent } from './components/blue.component';
import { GreenComponent } from './components/green.component';
import { YellowComponent } from './components/yellow.component';
import { PurpleComponent } from './components/purple.component';
import { GrayComponent } from './components/gray.component';
import { RedComponent } from './components/red.component';
import { FormsModule } from '@angular/forms';
import { IndexComponent } from './pages/index/index.component';
import { PyComponent } from './pages/py/py.component';

@NgModule({
  declarations: [
    AppComponent,
    CsComponent,
    ConnectToSqlserverComponent,
    TitleComponent,
    PrerequisitesComponent,
    SubtitleComponent,
    DescriptionComponent,
    CodesComponent,
    OrangeComponent,
    BlueComponent,
    GreenComponent,
    YellowComponent,
    PurpleComponent,
    GrayComponent,
    RedComponent,
    IndexComponent,
    PyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// <div class="bg-rose-500/20 border-l-4 border-rose-500">
//     <pre class="before:content-['-'] before:mx-4 before:text-rose-500">removed short line...</pre>
// </div>
// <div class="bg-rose-500/20 border-l-4 border-rose-500">
//     <pre class="before:content-['-'] before:mx-4 before:text-rose-500">removed long line line line line line line line line line line line line line line line line line line line line...</pre>
// </div>