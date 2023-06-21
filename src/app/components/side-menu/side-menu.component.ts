import { Component, HostBinding, HostListener, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {MatIconRegistry, MatIconModule} from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
const DASHBOARD_ICON =
  `
  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 5v2h-4V5h4M9 5v6H5V5h4m10 8v6h-4v-6h4M9 17v2H5v-2h4M21 3h-8v6h8V3zM11 3H3v10h8V3zm10 8h-8v10h8V11zm-10 4H3v6h8v-6z"/></svg>
  `;
 const ADD_USER=`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
 <path stroke-linecap="round" stroke-linejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
</svg>
`;
const BACK_PAGE=`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
<path stroke-linecap="round" stroke-linejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
</svg>
`;
const LOG_OUT=`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
</svg>
`;

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',

  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {




  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIconLiteral('dashboard', sanitizer.bypassSecurityTrustHtml(DASHBOARD_ICON));
    iconRegistry.addSvgIconLiteral('addCustomer', sanitizer.bypassSecurityTrustHtml(ADD_USER));
    iconRegistry.addSvgIconLiteral('backPage', sanitizer.bypassSecurityTrustHtml(BACK_PAGE));
    iconRegistry.addSvgIconLiteral('logOut', sanitizer.bypassSecurityTrustHtml(LOG_OUT));
  }

  ngOnInit(): void {

    /*Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
      footer: '<a href="">Why do I have this issue?</a>'
    })*/
  }


}
