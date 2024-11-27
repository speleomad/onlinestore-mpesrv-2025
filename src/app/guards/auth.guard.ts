import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
 const auth = inject(AuthService);
 const router = inject(Router);

 if(!auth.isAuthenticated()) {
     router.navigateByUrl('/signin')
     return false
 }
 return true;
};
