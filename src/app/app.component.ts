import { Component } from '@angular/core';
import { DatabaseService } from './core/database/database.service';

@Component({
  selector: 'app-root',
  template: `<full-loader></full-loader><router-outlet></router-outlet>`
})
export class AppComponent {
  title = 'inventory-management-service';

  constructor(private dbService: DatabaseService) {
    this.dbService.createDatabase();
  }
}
