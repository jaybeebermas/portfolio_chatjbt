import { Component, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Skill {
  name: string;
  icon: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class SkillsComponent implements AfterViewInit {
  skills: Skill[] = [
    { name: 'HTML', icon: 'file-code' },
    { name: 'CSS', icon: 'palette' },
    { name: 'JavaScript', icon: 'braces' },
    { name: 'Angular', icon: 'component' },
    { name: 'Laravel', icon: 'box' },
    { name: 'C++', icon: 'cpu' },
    { name: 'MySQL', icon: 'database' },
    { name: 'PostgreSQL', icon: 'hard-drive' },
    { name: 'Git', icon: 'git-branch' },
    { name: 'GitHub', icon: 'github' },
    { name: 'Bitbucket', icon: 'git-merge' }
  ];

  ngAfterViewInit() {
    setTimeout(() => {
      if (typeof (window as any).lucide !== 'undefined') {
        (window as any).lucide.createIcons();
      }
    }, 100);
  }
}
