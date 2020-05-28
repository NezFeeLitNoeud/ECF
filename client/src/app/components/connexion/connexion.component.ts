import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  model: any;
  isLogged: boolean = true;

  constructor(private service: ServiceService,
    private router: Router,
    private http: HttpClient) { }

  ngOnInit() {
    this.model = {};
    sessionStorage.setItem('token', '');
    
  }

  login() {
    this.service
      .login(this.model.email, this.model.password)
      .subscribe(
        (res) => {
          
          console.log(res)
          if(res === true) {
            this.router.navigate(['profil']);
            let base64hash = btoa(this.model.email + ':' + this.model.password);
          sessionStorage.setItem('token', base64hash);
          sessionStorage.setItem('email', this.model.email);
          } else {
            this.router.navigate(['']);
            sessionStorage.setItem('token', '');
            sessionStorage.setItem('email','');
            this.isLogged = false;
            console.log("is logged : " + this.isLogged)
          }
          
        },
        error => {
          if (error.status === 401) {
            alert("Authentication failed");
          } else if (error.status === 500) {
            this.isLogged = false
          }
        }
      );

    
  }
}
