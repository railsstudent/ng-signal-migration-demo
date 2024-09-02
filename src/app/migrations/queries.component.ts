import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-queries',
  standalone: true,
  imports: [],
  template: `
    <h2>ViewChild, ContentChild, ContentChildren</h2>
    <p>queries works!</p>
    <ng-content select="[header]" />
    <ng-content />
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QueriesComponent {
  name = 'ViewChild, ContentChild, ContentChildren';
}
