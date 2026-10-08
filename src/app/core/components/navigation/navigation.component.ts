import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, signal } from '@angular/core';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent {
  @Input() withCloseBtn = false;
  @Input() activeSection = 'hero';
  @Output() closeClicked = new EventEmitter<void>();

  navItems = signal([
  { href: '#about', title: 'About', id: 'about' },
  { href: '#skills', title: 'Skills', id: 'skills' },
  { href: '#projects', title: 'Projects', id: 'projects' },
  { href: '#journey', title: 'Journey', id: 'journey' },
  { href: '#blog', title: 'Blog', id: 'blog' },
  { href: '#contact', title: 'Contact', id: 'contact' },
]);

  onNavClick() { this.closeClicked.emit(); }
}
