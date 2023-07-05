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

  public email : String = '';
  public passwd : String = '';

  public show : Boolean = false;

  public validate : Boolean = false;
  public validateEmail : Boolean = false;
  public validatePasswd : Boolean = false

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
