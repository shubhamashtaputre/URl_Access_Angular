import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup,FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-urlsetting',
  templateUrl: './urlsetting.component.html',
  styleUrls: ['./urlsetting.component.css']
})
export class UrlsettingComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  homePage():void{
    this.router.navigate(['home']);
  }

}
