import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup,FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-urlaccess',
  templateUrl: './urlaccess.component.html',
  styleUrls: ['./urlaccess.component.css']
})
export class UrlaccessComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }

  settingsPage():void{
      this.router.navigate(['settings']);
  }


}
