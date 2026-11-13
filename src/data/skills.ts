export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: 'Languages',
    skills: ['C#', 'JavaScript', 'TypeScript', 'SQL', 'Java', 'Dart'],
  },
  {
    category: 'Frameworks',
    skills: ['.NET Core', 'React.js', 'Flutter'],
  },
  {
    category: 'Databases',
    skills: ['SQL Server', 'MySQL', 'Oracle'],
  },
  {
    category: 'Tools & Practices',
    skills: ['Git', 'RESTful APIs', 'Docker', 'Dapper', 'SignalR', 'Clean Architecture', 'Agile / SCRUM'],
  },
];
