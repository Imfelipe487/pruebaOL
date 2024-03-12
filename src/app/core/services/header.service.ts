import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  private closeSidenavSubject = new Subject<void>();
  closeSidenav$ = this.closeSidenavSubject.asObservable();

  constructor() { }

  closeSidenav(): void {
    this.closeSidenavSubject.next();
  }

  
}
