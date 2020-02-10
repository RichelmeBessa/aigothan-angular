import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dashboard';

  opened = true;

  mode = 'side';

  toggle() {
    this.opened = !this.opened;
  }
}
