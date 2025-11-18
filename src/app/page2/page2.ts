import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-page2',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './page2.html',
  styleUrls: ['./page2.css']
})
export class Page2 {

  firstName = '';
  lastName = '';
  email = '';

  showToast = false;

  onSubmit(event: Event) {
    event.preventDefault();

    this.showToast = true;

    // toast 3 sec
    setTimeout(() => {
      this.showToast = false;
    }, 3000);
  }
}

