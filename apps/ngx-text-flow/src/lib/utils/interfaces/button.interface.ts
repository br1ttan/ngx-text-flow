export interface IButton {
    readonly buttonClasses: string;
    readonly iconClasses: string;
    readonly tag: string;
    readonly openedTag: string;
    readonly closedTag?: string;
    readonly nodeName: string;
    readonly isActive: boolean;
    readonly toggleActive: () => void;
    readonly setActive: () => void;
    readonly setNotActive: () => void;
}
