export interface MenuItem {
    icon?: string;
    iconAsset?: string;
    route?: string;
    title?: string;
    hasChildRoute?: boolean;
    childRoute?: any;
    panelOpenState?: any;
}
