import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  users: any[] = [
    {
      name: "Dan",
      salary: 14000,
      bdDate: new Date()
    },
    {
      name: "Bob",
      salary: 5000,
      bdDate: new Date()
    },
  ];
  curUser: any;
  isEditInd: number = -1;

  constructor() {
    this.createUser();
  }

  private createUser(user: { name?: string, salary?: number, bdDate?: Date } = {}) {
    const { name = "", salary = null, bdDate = new Date() } = user;
    this.curUser = { name, salary, bdDate };
  }

  add(): void {
    this.users.push(this.curUser);
    this.createUser();
  }

  delete(ind: number): void {
    this.users.splice(ind, 1);
    this.createUser();
  }

  edit(ind: number): void {
    this.createUser(this.users[ind]);
    this.isEditInd = ind;
  }

  saveEdit(): void {
    this.users[this.isEditInd] = this.curUser;
    this.isEditInd = -1;
    this.createUser();
  }
}
