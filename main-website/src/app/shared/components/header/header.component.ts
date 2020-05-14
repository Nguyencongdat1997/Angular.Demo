import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import * as lang_en from '../../../../assets/i18n/en.json';
import * as lang_vi from '../../../../assets/i18n/vi.json';

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
        label: lang_en.HEADER.HOME_SERVICE,
        path: 'home',
        index: 0
      }, {
        label: lang_en.HEADER.CATALOG_SERVICE,
        path: 'catalog',
        index: 1
      }, {
        label: lang_en.HEADER.GROUPBUY_SERVICE,
        path: 'group-buying',
        index: 2
      }, {
        label: lang_en.HEADER.CART_SERVICE,
        path: 'cart',
        index: 3
      }, {
        label: lang_en.HEADER.ACCOUNT_SERVICE,
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
