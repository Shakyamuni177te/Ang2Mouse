import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'mouse-bases',
    templateUrl: 'bases.component.html',
    styleUrls: [ 'bases.component.css' ] 
})

export class BasesComponent implements OnInit {

  sectiontitle = 'Base Facility:';
  
  constructor(
    private router: Router) { }

  ngOnInit(): void {
    
  } 
}
