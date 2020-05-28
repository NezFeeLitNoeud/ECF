import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isEmpty: boolean;
  model: any;
  constructor(private http: HttpClient,
    private router: Router,
    private service: ServiceService) { 

    }

  ngOnInit() {
    this.model = {};
    sessionStorage.setItem('token', '');
  }

  register(){
    this.service
    .register(this.model.email, this.model.firstname, this.model.lastname, this.model.password)
    .subscribe(
      () => {
        let base64hash = btoa(this.model.email + ':' + this.model.firstname + ':' + this.model.lastname + ':' + this.model.password);
        sessionStorage.setItem('token', base64hash);
        this.router.navigate(['']);
      },
      error => {
        console.log(error);
      }
    );

    if(this.model.firstname.isEmpty){
      this.isEmpty = true;
      console.log(this.isEmpty)
    }

    console.log(this.model.firstname)
    
  }

}
