import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/core/services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = '';
  password: string = '';

  constructor(private userService: UsersService, private ruta: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('token')) {
      this.ruta.navigate(['/dashboard']);
    }
  }

  login() {
    this.userService.loginUser(this.username, this.password)
      .subscribe({
        next: (response: any) => {
          if (response && response.length > 0) {
            localStorage.setItem('token', JSON.stringify(response));
            this.ruta.navigate(['/dashboard']);
          } else {
            console.log('credenciales incorrectas')
          }
        },
        error: (error: any) => {
          console.error('Error al iniciar sesión:', error);
        }
      });
  }
}
  
  


  



