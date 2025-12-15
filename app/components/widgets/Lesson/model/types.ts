export interface LessonSection {
  title: string;
  subtitle: string;
  content: string;
  points?: Array<{ icon: string; text: string }>;
  achievements?: string[];
  features?: Array<{ icon: string; text: string }>;
  limitation?: string;
  approach?: string;
  improvements?: Array<{ icon: string; text: string }>;
  facts?: string[];
  warning?: { icon: string; text: string };
  gradient: 'orange' | 'purple' | 'blue';
}

export interface LessonData {
  sections: LessonSection[];
  keyPoints: string[];
  conclusion: { title: string; content: string };
}

export interface LessonConclusion {
  title: string;
  content: string;
}

export type LessonWarning = { icon: string; text: string };
