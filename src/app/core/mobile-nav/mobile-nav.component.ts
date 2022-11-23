import { Component } from '@angular/core';
import { MobileNavLink } from 'src/app/shared/models';

@Component({
    selector: 'app-mobile-nav',
    templateUrl: './mobile-nav.component.html',
})
export class MobileNavComponent {
    public menu_items: MobileNavLink[] = [
        new MobileNavLink({
            icon: 'fa-solid fa-gamepad',
            link: '/pokelist',
            name: 'Pokemon'
        }),
        new MobileNavLink({
            icon: 'fa-solid fa-gamepad',
            link: '/pokelist',
            name: 'Pokemon'
        }),
        new MobileNavLink({
            icon: 'fa-solid fa-gamepad',
            link: '/pokelist',
            name: 'Pokemon'
        }),
        new MobileNavLink({
            icon: 'fa-solid fa-gamepad',
            link: '/pokelist',
            name: 'Pokemon'
        }),
    ]
}
