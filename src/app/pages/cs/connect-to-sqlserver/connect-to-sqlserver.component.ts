import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-connect-to-sqlserver',
  templateUrl: './connect-to-sqlserver.component.html'
})
export class ConnectToSqlserverComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onNavigate(url: string){
    window.open(url, "_blank");
  }
}
