import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RESUME_CONTENT } from '../data/resume-content';

@Component({
  selector: 'app-misc',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './misc.component.html',
  styleUrl: './misc.component.scss'
})
export class MiscComponent {
  readonly courses = RESUME_CONTENT.courses;
}
