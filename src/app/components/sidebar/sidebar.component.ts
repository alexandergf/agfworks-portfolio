import { Component, OnInit } from '@angular/core';
import { faEnvelope, faLaptopCode, faGraduationCap, faAddressCard, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { SidebarItem } from '../../models/SidebarItem';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  menu:SidebarItem[] = [
    {
      id: 0,
      title: 'About',
      icon: faAddressCard,
      direction: '/about',
    },
    {
      id: 1,
      title: 'Projects',
      icon: faLaptopCode,
      direction: '/projects',
    },
    {
      id: 2,
      title: 'Education & Experience',
      icon: faGraduationCap,
      direction: '/EducationExperience',
    },
    {
      id: 3,
      title: 'Contact',
      icon: faEnvelope,
      direction: '/contact',
    }
  ];

  icons = {
    menu: faBars,
    closeMenu: faTimes 
  }
  collapseShow = "hidden";

  constructor() { }

  ngOnInit(): void {
  }

  toggleCollapseShow(classes:string) {
    this.collapseShow = classes;
  }

}
