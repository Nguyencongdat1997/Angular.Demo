import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

import { MenuItems } from './core/constants/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'main-website';
  isExpanded = true;
  menuItems;

  constructor(
    public iconRegistry?: MatIconRegistry,
    public sanitizer?: DomSanitizer
  ) {
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {
    this.menuItems = MenuItems;
    this.registSvgIcon();
  }

  private registSvgIcon() {
    MenuItems.forEach(menuItem => {
      this.iconRegistry.addSvgIcon(menuItem.icon, this.sanitizer.bypassSecurityTrustResourceUrl(menuItem.iconAsset));
    });
    this.iconRegistry.addSvgIcon(
      'image-alt',
      this.sanitizer.bypassSecurityTrustResourceUrl('../assets/icon-svg/image-alt.svg')
    );
    this.iconRegistry.addSvgIcon(
      'menu',
      this.sanitizer.bypassSecurityTrustResourceUrl('../assets/icon-svg/menu.svg')
    );
  }
}
