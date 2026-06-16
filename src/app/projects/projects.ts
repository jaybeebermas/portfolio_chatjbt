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
      name: 'BrgyConnect',
      category: 'Barangay Management System',
      description: 'A digital barangay management platform designed to streamline resident records, document requests, announcements, and community services for faster and more organized local governance.',
      tags: ['Laravel', 'MySQL', 'JavaScript'],
      icon: 'landmark'
    },
    {
      name: 'FitCore GymHub',
      category: 'Gym Management System',
      description: 'A modern gym management solution for handling memberships, attendance tracking, workout scheduling, trainer management, and payment monitoring.',
      tags: ['Angular', 'Laravel', 'PostgreSQL'],
      icon: 'dumbbell'
    },
    {
      name: 'LearnSphere',
      category: 'Learning Management System',
      description: 'An interactive learning management platform that allows students and instructors to manage courses, assignments, quizzes, and learning progress efficiently.',
      tags: ['Laravel', 'JavaScript', 'MySQL'],
      icon: 'graduation-cap'
    },
    {
      name: 'LibriTrack',
      category: 'Library Management System',
      description: 'A smart library system for managing book inventories, borrowing records, return tracking, and student access with an intuitive digital interface.',
      tags: ['Angular', 'PostgreSQL', 'JavaScript'],
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
