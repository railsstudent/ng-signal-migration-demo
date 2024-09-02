import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SomeComponent } from './migrations/some.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SomeComponent],
  template: `
    <app-some [backgroundColor]="color" [name]="name" [num]="20" />
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'Migrate to signals using ngxtension library';
  color = 'red';
  name = 'Hello World!!!!';
}
