import { Component, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Skill {
  name: string;
  icon: string;
  image?: string;
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
    { name: 'HTML', icon: 'file-code', image: '/html-5.png' },
    { name: 'CSS', icon: 'palette', image: '/css-3.png' },
    { name: 'JavaScript', icon: 'braces', image: '/js.png' },
    { name: 'Angular', icon: 'component', image: '/angular_icon_gradient.gif' },
    { name: 'Laravel', icon: 'box', image: '/Laravel.svg' },
    { name: 'C++', icon: 'cpu', image: '/c-.png' },
    { name: 'MySQL', icon: 'database', image: '/mysql.png' },
    { name: 'PostgreSQL', icon: 'hard-drive', image: '/postgre.png' },
    { name: 'Git', icon: 'git-branch', image: '/git.png' },
    { name: 'GitHub', icon: 'github', image: '/github.png' },
    { name: 'Bitbucket', icon: 'git-merge', image: '/bitbucket.png' }
  ];

  ngAfterViewInit() {
    setTimeout(() => {
      if (typeof (window as any).lucide !== 'undefined') {
        (window as any).lucide.createIcons();
      }
    }, 100);
  }
}
