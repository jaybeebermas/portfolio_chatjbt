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
      name: 'Faculty Schedule RPA',
      category: 'Process Automation',
      tags: ['Python', 'RPA', 'Automation'],
      desc: 'Automates the generation and distribution of faculty workload schedules, minimizing administrative overhead.',
      link: '/projects'
    },
    {
      name: 'Interlink Event Automation',
      category: 'Workflow Automation',
      tags: ['Node.js', 'SMTP', 'PDF Gen'],
      desc: 'Manages event registration, generates invitation letters and certificates, and emails them automatically.',
      link: '/projects'
    },
    { 
      name: 'BrgyConnect', 
      category: 'Barangay Management', 
      tags: ['PHP', 'MySQL', 'JavaScript'],
      desc: 'Digital platform streamlining public records, request workflows, and community announcements.',
      link: '/projects'
    },
    { 
      name: 'FitCore GymHub', 
      category: 'Gym Management', 
      tags: ['TypeScript', 'PHP', 'PostgreSQL'],
      desc: 'Modern gym solution for member schedules, tracking, attendance, and trainer sessions.',
      link: '/projects'
    }
  ];

  // Core metrics for the Tech Stack panel
  coreSkills = [
    { name: 'Laravel', percentage: 90, level: 'Advanced', image: '/Laravel.svg' },
    { name: 'Angular', percentage: 85, level: 'Advanced', image: '/angular_icon_gradient.gif' },
    { name: 'JavaScript', percentage: 85, level: 'Advanced', image: '/js.png' },
    { name: 'MySQL', percentage: 85, level: 'Advanced', image: '/mysql.png' },
    { name: 'C++', percentage: 75, level: 'Intermediate', image: '/c-.png' },
    { name: 'Git', percentage: 80, level: 'Intermediate', image: '/git.png' }
  ];

  // Skills overview fallback (retains names for general lists)
  skills = [
    { name: 'Backend Dev', category: 'Backend' },
    { name: 'Frontend Dev', category: 'Frontend' },
    { name: 'Databases', category: 'Database' },
    { name: 'Automation', category: 'RPA' },
  ];



  // Terminal variables
  activeTerminalTab = 'terminal';
  terminalLines: { text: string; type?: string }[] = [];
  terminalCommandHistory: string[] = [];
  historyIndex = -1;

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
    this.historyIndex = -1;
  }

  onTerminalKeyDown(event: KeyboardEvent, cmdInput: HTMLInputElement) {
    if (event.key === 'Tab') {
      event.preventDefault();
      this.handleTabCompletion(cmdInput);
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      this.navigateHistory(cmdInput, -1);
    } else if (event.key === 'ArrowDown') {
      event.preventDefault();
      this.navigateHistory(cmdInput, 1);
    }
  }

  private handleTabCompletion(cmdInput: HTMLInputElement) {
    const currentVal = cmdInput.value.trim().toLowerCase();
    if (!currentVal) return;
    
    const commands = ['help', 'about', 'skills', 'projects', 'sysinfo', 'clear'];
    const matches = commands.filter(c => c.startsWith(currentVal));
    
    if (matches.length === 1) {
      cmdInput.value = matches[0];
    } else if (matches.length > 1) {
      this.terminalLines.push({ text: currentVal, type: 'input' });
      this.terminalLines.push({ text: `Candidates: ${matches.join(', ')}`, type: 'info' });
      this.scrollTerminalToBottom();
    }
  }

  private navigateHistory(cmdInput: HTMLInputElement, direction: number) {
    if (this.terminalCommandHistory.length === 0) return;
    
    if (this.historyIndex === -1) {
      if (direction === -1) {
        this.historyIndex = this.terminalCommandHistory.length - 1;
      } else {
        return;
      }
    } else {
      const newIndex = this.historyIndex + direction;
      if (newIndex >= 0 && newIndex < this.terminalCommandHistory.length) {
        this.historyIndex = newIndex;
      } else if (newIndex >= this.terminalCommandHistory.length) {
        this.historyIndex = -1;
        cmdInput.value = '';
        return;
      } else {
        return;
      }
    }
    
    cmdInput.value = this.terminalCommandHistory[this.historyIndex];
    setTimeout(() => {
      cmdInput.selectionStart = cmdInput.selectionEnd = cmdInput.value.length;
    }, 0);
  }

  executeTerminalCommand(command: string) {
    this.terminalLines.push({ text: command, type: 'input' });
    this.terminalCommandHistory.push(command);

    const cmd = command.toLowerCase();
    
    switch (cmd) {
      case 'help':
        this.terminalLines.push(
          { text: 'Supported terminal actions:', type: 'header' },
          { text: '  about       - Summarize Niño\'s professional focus', type: 'output' },
          { text: '  skills      - Print language and tool mastery rates', type: 'output' },
          { text: '  projects    - Output featured systems and links', type: 'output' },
          { text: '  sysinfo     - Display platform build environment diagnostics', type: 'output' },
          { text: '  clear       - Wipe output log history', type: 'output' }
        );
        break;
      case 'about':
        this.terminalLines.push(
          { text: 'Niño Jaybee R. Bermas — Full Stack Developer', type: 'header' },
          { text: 'Specialization: Full-stack applications, API integration, and automation systems.', type: 'output' },
          { text: 'Philosophy: Building maintainable, fast, user-oriented apps.', type: 'output' },
          { text: 'Location: Philippines', type: 'output' }
        );
        break;
      case 'skills':
        this.terminalLines.push(
          { text: 'Technical Proficiency Metrics:', type: 'header' },
          { text: '  Backend Dev  [██████████████████░░] 90% (Advanced)', type: 'skill' },
          { text: '  Frontend Dev [████████████████░░░░] 80% (Advanced)', type: 'skill' },
          { text: '  Scripting    [█████████████████░░░] 85% (Advanced)', type: 'skill' },
          { text: '  Databases    [█████████████████░░░] 85% (Advanced)', type: 'skill' },
          { text: '  Git Flow     [████████████████░░░░] 80% (Intermediate)', type: 'skill' }
        );
        break;
      case 'projects':
        this.terminalLines.push(
          { text: 'Current Production Systems:', type: 'header' },
          { text: '  • Faculty RPA  - Faculty Workload Schedule automation (Python/RPA)', type: 'output' },
          { text: '  • Interlink    - Event registration & certificate automation (Node.js/SMTP)', type: 'output' },
          { text: '  • BrgyConnect  - Barangay digitizer portal (PHP/MySQL)', type: 'output' },
          { text: '  • FitCore Gym  - Membership workflows (TS/PHP/Postgres)', type: 'output' }
        );
        break;
      case 'sysinfo':
        this.terminalLines.push(
          { text: 'SYSTEM DIAGNOSTICS:', type: 'header' },
          { text: '  HOST: chatjbt-portfolio-v1.4', type: 'output' },
          { text: '  OS: Linux x86_64 Angular Component Container', type: 'output' },
          { text: '  NODE: v20.x, ANGULAR: v21.2.0', type: 'output' },
          { text: '  STATUS: Online & Active', type: 'success' },
          { text: '  LATENCY: 42ms', type: 'output' }
        );
        break;
      case 'clear':
        this.terminalLines = [];
        break;
      default:
        this.terminalLines.push({ text: `Command not recognized: "${command}". Type "help" to list valid instructions.`, type: 'error' });
    }
    this.scrollTerminalToBottom();
  }

  getParsedSkill(text: string) {
    const regex = /^\s*([A-Za-z0-9\s#+\.\-]+?)\s+\[([█]+)([░]*)\]\s*(\d+%)\s*(\(.+?\))/;
    const match = text.match(regex);
    if (!match) return null;
    return {
      name: match[1].trim(),
      filled: match[2],
      empty: match[3],
      percent: match[4],
      level: match[5]
    };
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
