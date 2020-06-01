import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  items: Array<any> = [];

  constructor() {

    this.items = [
      { name: '/../../assets/img/thumb1.jpg',title:'1',info:'1' },
      { name: '/../../assets/img/thumb2.jpg',title:'2',info:'2' },
      { name: '/../../assets/img/thumb3.jpg',title:'3',info:'3' },
      { name: '/../../assets/img/thumb4.jpg',title:'4',info:'4'},
      { name: '/../../assets/img/thumb5.jpg',title:'5',info:'5'},
      { name: '/../../assets/img/thumb6.jpg',title:'6',info:'6'},
      { name: '/../../assets/img/thumb7.jpg',title:'7',info:'7'},
      { name: '/../../assets/img/thumb8.jpg',title:'8',info:'8'},
      { name: '/../../assets/img/thumb9.jpg',title:'9',info:'9'},
      { name: '/../../assets/img/thumb10.jpg',title:'10',info:'10'}
    ]
   }

  ngOnInit(): void {
  }

}
