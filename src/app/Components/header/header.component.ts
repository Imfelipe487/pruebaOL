import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  notifications: Notification[] = [];
  tasks: Task[] = [];
  
  constructor(
    private ruta: Router
  ) {}

  ngOnInit(): void {
  }

  logout() {
    localStorage.removeItem('token');
    this.ruta.navigate(['/']);
  }

  redirectToDashboard() {
    this.ruta.navigate(['/dashboard']);
  }

  redirectToProjects() {
    this.ruta.navigate(['/projects']);
  }

  redirectToUsers() {
    this.ruta.navigate(['/users']);
  }


}
