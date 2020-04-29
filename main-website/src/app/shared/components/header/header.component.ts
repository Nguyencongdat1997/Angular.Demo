import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  navLinks: any[];
  activeLinkIndex = -1;

  constructor(private router: Router) {
    this.navLinks = [
      {
        label: 'Home',
        path: 'home',
        index: 0
      }, {
        label: 'Catalog',
        path: 'catalog',
        index: 1
      }, {
        label: 'Group Buy',
        path: 'group-buying',
        index: 2
      }, {
        label: 'Cart',
        path: 'cart',
        index: 3
      }, {
        label: 'Account',
        path: 'account',
        index: 4
      }
    ];

   }

  ngOnInit(): void {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
    });
  }

}
