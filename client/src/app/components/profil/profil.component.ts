import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

interface userInterface {
  id: number;
  firsname: string;
  lastname: string;
  email: string;
}
@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  emailUser: string;
user: userInterface;
  

  constructor(private service: ServiceService) { }

  ngOnInit() {
    console.log(sessionStorage.getItem('email'));
    this.emailUser = sessionStorage.getItem('email')

    this.service.getUser(this.emailUser).subscribe(res => this.user = <userInterface>res)

  }

}
