import { Component, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Skill {
  name: string;
  icon: string;
  image?: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class AboutComponent implements AfterViewInit {
  skills: Skill[] = [
    { name: 'HTML', icon: 'file-code', image: '/html-5.png' },
    { name: 'CSS', icon: 'palette', image: '/css-3.png' },
    { name: 'JavaScript', icon: 'braces', image: '/js.png' },
    { name: 'Angular', icon: 'component', image: '/angular_icon_gradient.gif' },
    { name: 'React.js', icon: 'atom', image: '/react.png' },
    { name: 'Laravel', icon: 'box', image: '/Laravel.svg' },
    { name: 'Node.js', icon: 'server', image: '/nodejs.png' },
    { name: 'Python', icon: 'terminal', image: '/Python-logo.png' },
    { name: 'C++', icon: 'cpu', image: '/c-.png' },
    { name: 'MySQL', icon: 'database', image: '/mysql.png' },
    { name: 'PostgreSQL', icon: 'hard-drive', image: '/postgre.png' },
    { name: 'Git', icon: 'git-branch', image: '/git.png' },
    { name: 'GitHub', icon: 'github', image: '/github.png' },
    { name: 'Bitbucket', icon: 'git-merge', image: '/bitbucket.png' },
    { name: 'Microsoft Power Automate', icon: 'workflow', image: '/Microsoft_Power_Automate.png' },
    { name: 'Microsoft Power BI', icon: 'bar-chart-3', image: '/power bi.png' },
    { name: 'RPA & Automation', icon: 'cpu' }
  ];

  ngAfterViewInit() {
    setTimeout(() => {
      if (typeof (window as any).lucide !== 'undefined') {
        (window as any).lucide.createIcons();
      }
    }, 100);
  }
}

