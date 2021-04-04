import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { faEnvelope, faLaptopCode, faGraduationCap, faAddressCard, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faGitlab, faInstagram, faBitbucket } from '@fortawesome/free-brands-svg-icons';
import { SidebarItem } from '../../models/SidebarItem';
import { TopbarComponent } from '../topbar/topbar.component';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @HostBinding('class.is-open')
  @Input() isOpen:boolean = false;

  menu:SidebarItem[] = [
    {
      id: 0,
      title: 'About Me',
      icon: faAddressCard,
      direction: '/',
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
      direction: '/educationAndExperience',
    },
    {
      id: 3,
      title: 'Contact',
      icon: faEnvelope,
      direction: '/contact',
    }
  ];

  iconsNav = {
    menu: faBars,
    closeMenu: faTimes 
  };

  iconsSocialNetwork:SidebarItem[] = [
    {
      id: 0,
      title: 'GitHub',
      icon: faGithub,
      direction: 'https://github.com/alexandergf',
    },
    {
      id: 1,
      title: 'BitBucket',
      icon: faBitbucket,
      direction: 'https://bitbucket.org/alexgferreiro96/',
    },
    {
      id: 2,
      title: 'GitLab',
      icon: faGitlab,
      direction: 'https://gitlab.com/alexandergf ',
    },
    {
      id: 3,
      title: 'Instagram',
      icon: faInstagram,
      direction: 'https://www.instagram.com/alexandergf1996/'
    }
  ];

  collapseShow = "hidden";

  constructor(private topBar:TopbarComponent) { }

  ngOnInit(): void {
  }

  toggleCollapseShow(){
    this.topBar.toggleCollapseShow();
  }

}
