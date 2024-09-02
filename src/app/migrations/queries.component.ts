import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-queries',
  standalone: true,
  imports: [],
  template: `
    <p>
      queries works!
    </p>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QueriesComponent {

}
