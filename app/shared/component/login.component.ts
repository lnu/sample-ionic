import { NavController, Platform } from 'ionic-angular';
import { Http } from '@angular/http';
import { Component } from '@angular/core';
import { LoginService } from '../service/login-service';
import { OrderFormListComponent } from '../../orderForm/component/orderForm-list.component'

import {Auth, User, CloudSettings, provideCloud} from '@ionic/cloud-angular';


@Component({
    templateUrl: 'build/shared/template/login.component.html',
    providers: [LoginService]
})
export class LoginComponent {
    username: string;
    password: string;
    errorMessage: string;

    constructor(private _loginService: LoginService, private _navController: NavController, private _platform: Platform, private http: Http, private auth:Auth, private user:User) { }

    login() {
        // this._loginService.login(this.username, this.password).subscribe(
        //     data => {
        //         if (data) {
        //             //Navigate to home page                             
        //             this._navController.setRoot(OrderFormListComponent);
        //         } else {
        //             this.errorMessage = 'username or password is not correct';
        //         }
        //     }
        // )

        let details: any = { 'email': 'hi@ionic.io', 'password': 'puppies123' };

        this.auth.login("basic", details).then((res) => {
            this._navController.setRoot(OrderFormListComponent);
        }, () => {
            // for (let e of err.details) {
            //     if (e === 'conflict_email') {
                    alert('Email already exists.');
                //} else {
                    // handle other errors
                //}
            }
        );
    }
}