import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnectToSqlserverComponent } from './pages/cs/connect-to-sqlserver/connect-to-sqlserver.component';
import { CsComponent } from './pages/cs/cs.component';

const routes: Routes = [
  { path: 'cs', component: CsComponent },
  { path: 'cs', children: [
    { path: 'connect-to-sqlserver', component: ConnectToSqlserverComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
