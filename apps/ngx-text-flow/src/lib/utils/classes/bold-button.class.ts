import { IButton } from "../interfaces";

export class BoldButtonClass implements IButton {
    public readonly buttonClasses = 'option-button format active';
    public readonly iconClasses = 'fa-solid fa-bold';
    public readonly tag = 'b';
    public readonly openedTag = 'b';
    public readonly closedTag = '</b>';
    public readonly nodeName = 'B';
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
