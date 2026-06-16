import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class DashboardComponent implements OnInit, AfterViewInit {
  @ViewChild('accessCard') accessCard!: ElementRef;

  // Header quick stats
  stats = [
    { value: '3+', label: 'Years Exp', icon: 'clock', accent: 'stats-blue' },
    { value: '10+', label: 'Projects', icon: 'folder-open', accent: 'stats-pink' },
    { value: '15+', label: 'Tools Used', icon: 'cpu', accent: 'stats-emerald' },
    { value: '100%', label: 'Commitment', icon: 'heart', accent: 'stats-purple' }
  ];

  // Expanded project list
  featuredProjects = [
    { 
      name: 'BrgyConnect', 
      category: 'Barangay Management', 
      tags: ['Laravel', 'MySQL', 'JavaScript'],
      desc: 'Digital platform streamlining public records, request workflows, and community announcements.',
      link: '/projects'
    },
    { 
      name: 'FitCore GymHub', 
      category: 'Gym Management', 
      tags: ['Angular', 'Laravel', 'PostgreSQL'],
      desc: 'Modern gym solution for member schedules, tracking, attendance, and trainer sessions.',
      link: '/projects'
    },
    { 
      name: 'LearnSphere', 
      category: 'Learning Management', 
      tags: ['Laravel', 'JavaScript', 'MySQL'],
      desc: 'An interactive portal allowing courses, assignments, quizzes, and progression metrics.',
      link: '/projects'
    },
    { 
      name: 'LibriTrack', 
      category: 'Library Management', 
      tags: ['Angular', 'PostgreSQL', 'JavaScript'],
      desc: 'A digital checkout system tracking book borrowing, return scheduling, and analytics.',
      link: '/projects'
    }
  ];

  // Core metrics for the Tech Stack panel
  coreSkills = [
    { name: 'Laravel (Backend)', percentage: 90, level: 'Advanced' },
    { name: 'Angular (Frontend)', percentage: 80, level: 'Advanced' },
    { name: 'JavaScript (Frontend)', percentage: 85, level: 'Advanced' },
    { name: 'Databases (MySQL & Postgres)', percentage: 75, level: 'Intermediate' },
    { name: 'C++ (Problem Solving)', percentage: 70, level: 'Intermediate' },
    { name: 'Git & VCS Workflow', percentage: 85, level: 'Advanced' }
  ];

  // Skills overview fallback (retains names for general lists)
  skills = [
    { name: 'Laravel', category: 'Backend' },
    { name: 'Angular', category: 'Frontend' },
    { name: 'MySQL', category: 'Database' },
    { name: 'JavaScript', category: 'Frontend' },
  ];



  // Terminal variables
  activeTerminalTab = 'terminal';
  terminalLines: string[] = [
    'System initialization successful.',
    'Terminal v1.4.2 connected to portfolio service.',
    'Type commands or use quick access buttons below to test terminal endpoints.',
    'Try typing: help, about, skills, projects, clear'
  ];
  terminalCommandHistory: string[] = [];

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.initTiltEffect();
    this.initLucide();
  }

  private initLucide() {
    setTimeout(() => {
      if (typeof (window as any).lucide !== 'undefined') {
        (window as any).lucide.createIcons();
      }
    }, 100);
  }

  private initTiltEffect() {
    if (!this.accessCard) return;
    const card = this.accessCard.nativeElement;

    card.addEventListener('mousemove', (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / 10; // slightly more responsive tilt
      const rotateY = (centerX - x) / 10;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    });
  }



  // Terminal Interactions
  switchTerminalTab(tab: string) {
    this.activeTerminalTab = tab;
    this.initLucide();
  }

  onTerminalInput(cmdInput: HTMLInputElement) {
    const command = cmdInput.value.trim();
    if (!command) return;
    
    this.executeTerminalCommand(command);
    cmdInput.value = '';
  }

  executeTerminalCommand(command: string) {
    this.terminalLines.push(`guest@chatjbt:~$ ${command}`);
    this.terminalCommandHistory.push(command);

    const cmd = command.toLowerCase();
    
    setTimeout(() => {
      switch (cmd) {
        case 'help':
          this.terminalLines.push(
            'Supported terminal actions:',
            '  about       - Summarize Niño\'s professional focus',
            '  skills      - Print language and tool mastery rates',
            '  projects    - Output featured systems and links',
            '  sysinfo     - Display platform build environment diagnostics',
            '  clear       - Wipe output log history'
          );
          break;
        case 'about':
          this.terminalLines.push(
            'Niño Jaybee R. Bermas — Full Stack Developer',
            'Specialization: Angular core frontend architecture, Laravel backends.',
            'Philosophy: Building maintainable, fast, user-oriented apps.',
            'Location: Philippines'
          );
          break;
        case 'skills':
          this.terminalLines.push(
            'Technical Proficiency Metrics:',
            '  Laravel      [██████████████████░░] 90% (Advanced)',
            '  Angular      [████████████████░░░░] 80% (Advanced)',
            '  JavaScript   [█████████████████░░░] 85% (Advanced)',
            '  Databases    [██████████████░░░░░░] 75% (Intermediate)',
            '  Git Flow     [████████████████░░░░] 80% (Advanced)'
          );
          break;
        case 'projects':
          this.terminalLines.push(
            'Current Production Systems:',
            '  • BrgyConnect  - Barangay digitizer portal (Laravel/MySQL)',
            '  • FitCore Gym  - Membership workflows (Angular/Laravel/Postgres)',
            '  • LearnSphere  - E-Learning courseware hub (Laravel/MySQL)',
            '  • LibriTrack   - School library logs (Angular/Postgres)'
          );
          break;
        case 'sysinfo':
          this.terminalLines.push(
            'HOST: chatjbt-portfolio-v1.4',
            'OS: Linux x86_64 Angular Component Container',
            'NODE: v20.x, ANGULAR: v21.2.0',
            'STATUS: Online & Active',
            'LATENCY: 42ms'
          );
          break;
        case 'clear':
          this.terminalLines = [];
          break;
        default:
          this.terminalLines.push(`Command not recognized: "${command}". Type "help" to list valid instructions.`);
      }
      this.scrollTerminalToBottom();
    }, 100);
  }

  dashboardContactSubmitted = false;

  onDashboardContactSubmit(subject: string, message: string, event: Event) {
    event.preventDefault();
    if (!subject.trim() || !message.trim()) return;
    this.dashboardContactSubmitted = true;
  }

  private scrollTerminalToBottom() {
    setTimeout(() => {
      const container = document.querySelector('.terminal-body-scroll');
      if (container) {
        container.scrollTop = container.scrollHeight;
      }
    }, 50);
  }
}
