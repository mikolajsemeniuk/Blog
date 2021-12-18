import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-connect-to-sqlserver',
  templateUrl: './connect-to-sqlserver.component.html'
})
export class ConnectToSqlserverComponent implements OnInit {
  containerName: string = 'db'
  externalPort: string = '1433'
  databaseName: string = 'Project'
  databasePassword: string = 'P@ssw0rd'
  netVersion: string = '6.0.0'
  projectName: string = 'server'
  contextNamespaceName: string = 'Data'
  contextName: string = 'DataContext'
  migrationName: string = 'Initial'

  constructor() { }

  ngOnInit(): void {
  }

  onNavigate(url: string){
    window.open(url, "_blank");
  }
}
