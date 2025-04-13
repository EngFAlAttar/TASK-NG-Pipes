import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emoji',
  standalone: true
})
export class EmojiPipe implements PipeTransform {

  transform(value: Date, ...args: unknown[]): unknown {
    const daysAgo = (Date.now() - new Date(value).getTime()) / (1000 * 60 * 60 * 24)
    if(daysAgo > 90)
      return '👻'
    if(daysAgo>30)
      return '🦥';
    if(daysAgo > 7)
      return '💤'
    return '🔥';
  }

}
