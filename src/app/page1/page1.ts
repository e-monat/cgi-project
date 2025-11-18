import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-page1',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './page1.html',
  styleUrls: ['./page1.css'],
})
export class Page1 {

}
