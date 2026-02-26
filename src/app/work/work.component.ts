import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RESUME_CONTENT, TimelineEntry } from '../data/resume-content';
import { UiTag, deriveWorkTag } from '../shared/ui-taxonomy';

interface WorkCardView extends TimelineEntry {
  tag: UiTag;
}

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './work.component.html',
  styleUrl: './work.component.scss'
})
export class WorkComponent {
  readonly workExperiences: WorkCardView[] = this.sortByReverseChronology(RESUME_CONTENT.workExperiences)
    .map((item) => ({
      ...item,
      tag: deriveWorkTag(item.title, item.subtitle)
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
