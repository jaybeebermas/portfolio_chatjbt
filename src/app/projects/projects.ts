import { Component, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Project {
  name: string;
  category: string;
  description: string;
  tags: string[];
  icon: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class ProjectsComponent implements AfterViewInit {
  projects: Project[] = [
    {
      name: 'Faculty Schedule RPA',
      category: 'Robotic Process Automation',
      description: 'A Robotic Process Automation (RPA) system designed to automate the generation, formatting, and distribution of faculty workload schedules, significantly reducing administrative processing time and data entry errors.',
      tags: ['Python', 'RPA', 'Automation', 'Excel'],
      icon: 'cpu'
    },
    {
      name: 'Interlink Event Automation',
      category: 'Event & Email Automation',
      description: 'An end-to-end automation suite for the Interlink event, handling attendee registration, dynamic PDF generation for invitation letters and certificates, and automated SMTP email delivery.',
      tags: ['Node.js', 'SMTP', 'PDF Generation', 'Automation'],
      icon: 'mail'
    },
    {
      name: 'BrgyConnect',
      category: 'Barangay Management System',
      description: 'A digital barangay management platform designed to streamline resident records, document requests, announcements, and community services for faster and more organized local governance.',
      tags: ['PHP', 'MySQL', 'JavaScript'],
      icon: 'landmark'
    },
    {
      name: 'FitCore GymHub',
      category: 'Gym Management System',
      description: 'A modern gym management solution for handling memberships, attendance tracking, workout scheduling, trainer management, and payment monitoring.',
      tags: ['TypeScript', 'PHP', 'PostgreSQL'],
      icon: 'dumbbell'
    },
    {
      name: 'LearnSphere',
      category: 'Learning Management System',
      description: 'An interactive learning management platform that allows students and instructors to manage courses, assignments, quizzes, and learning progress efficiently.',
      tags: ['PHP', 'JavaScript', 'MySQL'],
      icon: 'graduation-cap'
    },
    {
      name: 'LibriTrack',
      category: 'Library Management System',
      description: 'A smart library system for managing book inventories, borrowing records, return tracking, and student access with an intuitive digital interface.',
      tags: ['TypeScript', 'PostgreSQL', 'JavaScript'],
      icon: 'book-open'
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
