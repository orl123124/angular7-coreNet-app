import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../Models/UserModel';
import { FormControl, FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  myFormHome: FormGroup;
  flag = false;
  users: any[] = [];

  constructor(private userService: UserService, private fb: FormBuilder, private toastr: ToastrService) {
    // this.userService.getUserAPI();
     /* const data = new User();
      data.Nombre = 'orlando comp';
      data.Apellido = 'barria comp';
      data.Email = 'orl@iclod.com.comp ';
     this.userService.addUserAPI(data);  */


  }

  ngOnInit() {
    this.myFormHome = this.fb.group({
        email: [''], nombre: [''], apellido: [''], date: [''],
        telefonos: this.fb.array([this.fb.group({telefono: ['']})])
    });
  }

  onSubmit(formValue: any) {
    // tslint:disable-next-line: no-debugger
    debugger;
    const data = new User();
    data.Email = formValue.email;
    data.Nombre = formValue.nombre;
    data.Apellido = formValue.apellido;
    data.Date = new Date(formValue.date.year, formValue.date.month - 1, formValue.date.day);
    data.Telefonos = formValue.telefonos;
    this.userService.addUserAPI(data);

    this.flag = !this.flag;

    // iterar ngFor
    this.userService.getUsersAPI()
    .subscribe((resp: any) => { this.users = resp; this.showSuccess(); });
  }

  get getTelefonos() {
    return this.myFormHome.get('telefonos') as FormArray;
  }

  addTelefono() {
    const control = this.myFormHome.controls.telefonos as FormArray;
    control.push(this.fb.group({telefono: ['']}));
  }

  removeTelefono(index: number) {
    const control = this.myFormHome.controls.telefonos as FormArray;
    control.removeAt(index);
  }

  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }


}
