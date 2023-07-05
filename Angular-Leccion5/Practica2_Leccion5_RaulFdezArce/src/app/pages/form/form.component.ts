import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public email = '';
  public passwd = '';

  public show = false;

  public validate = false;
  public validateEmail = false;
  public validatePasswd = false

  public validateFormLogin(){
    this.show = true;
    var regExp = '^[a-zA-Z0-9.!#$%&*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$';
    if(this.email.match(regExp)){
      this.validateEmail = true;
    }else{
      this.validateEmail = false;
    }

    if(this.passwd.length > 8){
      this.validatePasswd = true;
    }else{
      this.validatePasswd = false; 
    }

    if(this.validateEmail && this.validatePasswd){
      this.validate = true;
    }else{
      this.validate = false;
    }
  }

}
