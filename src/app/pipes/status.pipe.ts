import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statuspipe',
  standalone: true
})
export class StatusPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {

    if(value === 'active')
      return 'green'
    if(value === 'inactive')
      return 'orange'

    return 'red'
  }

}
