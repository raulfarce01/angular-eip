import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.scss']
})
export class UserDataComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public name: String = '';
  public surname: String = '';
  public address: String = '';
  public phone: String = '';

  /*Esta variable sirve para comprobar cuando falte algún dato, y se utiliza en la función validateForm*/
  public validate = false;

  public show = false

  public result = '';

  public validateForm(){
    this.show = true;

    if(this.name !== '' && this.surname !== '' && this.address !== '' && this.phone !== ''){
      this.validate = true;
      //this.result = 'Name:' +  + 'surname: {{ surname }} \n Address: {{ address }} \n Phone: {{ phone }}';
/*       this.result = `Name: ${this.name} | Surname: ${this.surname} | Address: ${this.address} | Phone Number: ${this.phone}`
 */    }else{
      this.validate = false;
/*       this.result = 'Debes rellenar todos los datos';
 */    }
  }

}
