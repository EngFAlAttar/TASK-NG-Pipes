import { Component, Input, Pipe } from '@angular/core';
import { User } from '../../data/users';
import { CurrencyPipe, DatePipe, DecimalPipe, TitleCasePipe } from '@angular/common';
import { StatusPipe } from '../pipes/status.pipe';
import { EmojiPipe } from '../pipes/emoji.pipe';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [TitleCasePipe, DatePipe, CurrencyPipe, DecimalPipe, StatusPipe, EmojiPipe],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input() data!: User;
}
