import { IButton } from "../interfaces";

export class ItalicButtonClass implements IButton {
    public readonly buttonClasses = 'option-button format';
    public readonly iconClasses = 'fa-solid fa-italic';
    public readonly tag = 'i';
    public readonly openedTag = 'i';
    public readonly closedTag = '</i>';
    public readonly nodeName = 'I';
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
