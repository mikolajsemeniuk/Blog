import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnectToSqlserverComponent } from './pages/cs/connect-to-sqlserver/connect-to-sqlserver.component';
import { CsComponent } from './pages/cs/cs.component';
import { IndexComponent } from './pages/index/index.component';
import { PyComponent } from './pages/py/py.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'cs', component: CsComponent },
  { path: 'cs', children: [
    { path: 'connect-to-sqlserver', component: ConnectToSqlserverComponent }
  ]},
  { path: 'py', component: PyComponent },
  { path: 'py', children: [
    // { path: 'views'}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
