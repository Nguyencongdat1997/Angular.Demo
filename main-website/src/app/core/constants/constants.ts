import * as lang_en from '../../../assets/i18n/en.json';
import * as lang_vn from '../../../assets/i18n/vi.json';
import { MenuItem } from '../models/menu-item';

export const MenuItems: MenuItem[] = [
    {
        icon: 'home',
        iconAsset: '../../../assets/icon-svg/image-alt.svg',
        route: 'home',
        title: lang_en.MENU_ITEM.HOME,
        hasChildRoute: true,
        childRoute: [
            {
                route: 'home',
                title: lang_en.MENU_ITEM.HOME + '1',
                hasChildRoute: false
            },
            {
                route: 'home',
                title: lang_en.MENU_ITEM.HOME + '2',
                hasChildRoute: false
            },
        ]
    },
    {
        icon: 'account-manage',
        iconAsset: '../../../assets/icon-svg/image-alt.svg',
        route: 'account',
        title: lang_en.MENU_ITEM.ACCOUNT_MANAGE,
        hasChildRoute: false,
    },
    {
        icon: 'cart-manage',
        iconAsset: '../../../assets/icon-svg/image-alt.svg',
        route: 'cart',
        title: lang_en.MENU_ITEM.CART_MANAGE,
        hasChildRoute: false,
    },
    {
        icon: 'catalog-manage',
        iconAsset: '../../../assets/icon-svg/image-alt.svg',
        route: 'catalog',
        title: lang_en.MENU_ITEM.CATALOG_MANAGE,
        hasChildRoute: false,
    },
    {
        icon: 'group-buy-manage',
        iconAsset: '../../../assets/icon-svg/image-alt.svg',
        route: 'group-buying',
        title: lang_en.MENU_ITEM.GROUP_BUYING_MANAGE,
        hasChildRoute: false,
    }
];
