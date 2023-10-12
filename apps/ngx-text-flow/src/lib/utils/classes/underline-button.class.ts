import { IButton } from "../interfaces";

export class UnderlineButtonClass implements IButton {
    public readonly buttonClasses = 'option-button format';
    public readonly iconClasses = 'fa-solid fa-underline';
    public readonly tag = 'u';
    public readonly openedTag = '<u>';
    public readonly closedTag = '</u>';
    public readonly nodeName = 'U';
    public isActive = false;

    public toggleActive(): void {
        this.isActive = !this.isActive;
    }
    
    public setActive(): void {
        this.isActive = true;
    }

    public setNotActive(): void {
        this.isActive = false;
    }
}
