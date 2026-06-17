import { Component, OnInit, AfterViewInit, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit, AfterViewInit {
  protected readonly title = signal('chatjbt');
  loading = false;
  isDark = false;
  mobileMenuOpen = false;

  navItems = [
    { label: 'Dashboard', path: '/', icon: 'layout-dashboard', exact: true },
    { label: 'About', path: '/about', icon: 'user', exact: false },
    { label: 'Projects', path: '/projects', icon: 'folder-open', exact: false },
    { label: 'Experience', path: '/experience', icon: 'briefcase', exact: false },
    { label: 'Contact', path: '/contact', icon: 'send', exact: false },
  ];

  ngOnInit() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      this.isDark = true;
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }

  ngAfterViewInit() {
    this.initLucide();
    setTimeout(() => {
      this.loading = false;
      this.initLucide();
    }, 1850);
  }

  private initLucide() {
    setTimeout(() => {
      if (typeof (window as any).lucide !== 'undefined') {
        (window as any).lucide.createIcons();
      }
    }, 50);
  }

  toggleTheme() {
    this.isDark = !this.isDark;
    if (this.isDark) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
    }
    this.initLucide();
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu() {
    this.mobileMenuOpen = false;
  }

  onRouteChange() {
    this.closeMobileMenu();
    setTimeout(() => {
      if (typeof (window as any).lucide !== 'undefined') {
        (window as any).lucide.createIcons();
      }
    }, 100);
  }
}
