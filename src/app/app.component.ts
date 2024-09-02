import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { SomeComponent } from './migrations/some.component';
import { QueriesComponent } from './migrations/queries.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SomeComponent, QueriesComponent],
  template: `
    <app-some [backgroundColor]="color" [name]="name" [num]="20" (triple)="tripleValue = $event" />
    <p>Tripe: {{ tripleValue }}</p>
    <app-queries />
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'Migrate to signals using ngxtension library';
  color = 'red';
  name = 'Hello World!!!!';

  tripleValue = 0;
}
