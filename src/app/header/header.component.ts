import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RESUME_CONTENT } from '../data/resume-content';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isContactDropdownOpen = false;
  isDarkMode = false;
  readonly profiles = RESUME_CONTENT.profiles;

  constructor() {
    if (typeof window !== 'undefined') {
      const savedTheme = window.localStorage.getItem('theme');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.isDarkMode = savedTheme ? savedTheme === 'dark' : prefersDark;
      this.applyTheme();
    }
  }

  scrollToWork() {
    const workElement = document.getElementById('work-section');
    if (workElement) {
      workElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  scrollToProjects() {
    const projectsElement = document.getElementById('projects-section');
    if (projectsElement) {
      projectsElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  openCV() {
    window.open('/CV/Ojas-Gramopadhye-resume.pdf', '_blank');
  }

  toggleContactDropdown() {
    this.isContactDropdownOpen = !this.isContactDropdownOpen;
  }

  closeContactDropdown() {
    this.isContactDropdownOpen = false;
  }

  openLinkedIn() {
    window.open(this.profiles.linkedin.url, '_blank', 'noopener,noreferrer');
  }

  openGithub() {
    window.open(this.profiles.github.url, '_blank', 'noopener,noreferrer');
  }

  openGoogleScholar() {
    window.open(this.profiles.googleScholar.url, '_blank', 'noopener,noreferrer');
  }

  openEmail() {
    window.open(`mailto:${this.profiles.email}`);
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
    }
    this.applyTheme();
  }

  private applyTheme() {
    if (typeof document !== 'undefined') {
      document.body.classList.toggle('dark-theme', this.isDarkMode);
    }
  }
}
