import { IButton } from "../interfaces";

export class StrikethroughButtonClass implements IButton {
    public readonly buttonClasses = 'option-button format';
    public readonly iconClasses = 'fa-solid fa-strikethrough';
    public readonly tag = 'strike';
    public readonly openedTag = '<strike>';
    public readonly closedTag = '</strike>';
    public readonly nodeName = 'STRIKE';
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
