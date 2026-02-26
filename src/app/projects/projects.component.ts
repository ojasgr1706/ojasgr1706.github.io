import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RESUME_CONTENT, TimelineEntry } from '../data/resume-content';
import { UiTag, deriveProjectTag } from '../shared/ui-taxonomy';

interface ProjectCardView extends TimelineEntry {
  tag: UiTag;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  readonly projects: ProjectCardView[] = this.sortByReverseChronology(RESUME_CONTENT.projects)
    .map((item) => ({
      ...item,
      tag: deriveProjectTag(item.title, item.subtitle)
    }));

  openExternal(url: string): void {
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  private sortByReverseChronology(entries: TimelineEntry[]): TimelineEntry[] {
    return [...entries].sort((a, b) => {
      const endCompare = (b.endDate ?? '9999-12').localeCompare(a.endDate ?? '9999-12');
      if (endCompare !== 0) {
        return endCompare;
      }
      return b.startDate.localeCompare(a.startDate);
    });
  }
}
