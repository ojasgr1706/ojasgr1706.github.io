import { Component } from '@angular/core';
import { RESUME_CONTENT } from '../data/resume-content';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  readonly profiles = RESUME_CONTENT.profiles;
}
