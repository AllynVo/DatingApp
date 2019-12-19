import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { User } from '../_models/user';
import { UserService } from '../_services/user.service';
import { AlertifyService } from '../_services/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../_services/auth.service';

@Injectable({
    providedIn: 'root'
})
export class MemberEditResolver implements Resolve<User> {
    constructor(
        private userService: UserService,
        private router: Router,
        private alertify: AlertifyService,
        private authService: AuthService) {}

    resolve(route: ActivatedRouteSnapshot) : Observable<User> {
        // When using a resolve, it subscribes automatically
        return this.userService.getUser(this.authService.decodedtoken.nameid)
            .pipe(
                catchError(error => {
                    this.alertify.error('Problem getting your data');
                    this.router.navigate(['/members']);
                    return of(null);
                })
            );
    }
}