export interface UiTag {
  label: string;
  toneClass: string;
}

function containsAny(value: string, patterns: string[]): boolean {
  const lower = value.toLowerCase();
  return patterns.some((pattern) => lower.includes(pattern.toLowerCase()));
}

export function deriveProjectTag(title?: string, subtitle?: string): UiTag {
  const haystack = `${title ?? ''} ${subtitle ?? ''}`;

  if (containsAny(haystack, ['independent project'])) {
    return { label: 'Independent', toneClass: 'tag--independent' };
  }

  if (containsAny(haystack, ['course project'])) {
    return { label: 'Course', toneClass: 'tag--course' };
  }

  if (containsAny(haystack, ['graduate research', 'r&d', 'b.tech project'])) {
    return { label: 'Research', toneClass: 'tag--research' };
  }

  return { label: 'Project', toneClass: 'tag--neutral' };
}

export function deriveWorkTag(title?: string, subtitle?: string): UiTag {
  const haystack = `${title ?? ''} ${subtitle ?? ''}`;

  if (containsAny(haystack, ['teaching assistant', 'grader'])) {
    return { label: 'Teaching', toneClass: 'tag--teaching' };
  }

  return { label: 'Experience', toneClass: 'tag--experience' };
}
