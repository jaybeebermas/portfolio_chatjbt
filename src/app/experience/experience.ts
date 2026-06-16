import { Component, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Milestone {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './experience.html',
  styleUrl: './experience.css'
})
export class ExperienceComponent implements AfterViewInit {
  milestones: Milestone[] = [
    {
      title: 'Discovered Programming',
      subtitle: 'The Beginning',
      description: 'Started learning the fundamentals of programming with C++ and basic web technologies. Built a strong foundation in logic, algorithms, and problem-solving.',
      icon: 'terminal'
    },
    {
      title: 'Frontend Development',
      subtitle: 'Building Interfaces',
      description: 'Dove deep into HTML, CSS, and JavaScript. Learned how to craft responsive, accessible, and visually engaging user interfaces from scratch.',
      icon: 'monitor'
    },
    {
      title: 'Backend & Databases',
      subtitle: 'Server-Side Mastery',
      description: 'Picked up Laravel as the primary backend framework. Gained proficiency in MySQL and PostgreSQL for designing efficient, scalable database architectures.',
      icon: 'database'
    },
    {
      title: 'Full Stack with Angular',
      subtitle: 'Leveling Up',
      description: 'Embraced Angular for building complex, component-driven single-page applications. Combined frontend and backend expertise to deliver end-to-end solutions.',
      icon: 'layers'
    },
    {
      title: 'Building Real Projects',
      subtitle: 'Shipping Solutions',
      description: 'Applied skills to real-world projects like BrgyConnect, FitCore GymHub, LearnSphere, and LibriTrack — systems that solve actual problems for real users.',
      icon: 'rocket'
    },
    {
      title: 'Continuous Growth',
      subtitle: 'Always Learning',
      description: 'Currently exploring new tools, deepening existing skills, and looking for ways to write cleaner, more maintainable code every day.',
      icon: 'trending-up'
    }
  ];

  ngAfterViewInit() {
    setTimeout(() => {
      if (typeof (window as any).lucide !== 'undefined') {
        (window as any).lucide.createIcons();
      }
    }, 100);
  }
}
