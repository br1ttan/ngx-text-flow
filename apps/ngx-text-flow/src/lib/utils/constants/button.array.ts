import { BoldButtonClass, ItalicButtonClass, StrikethroughButtonClass, UnderlineButtonClass } from "../classes";
import { IButton } from "../interfaces";

export const BUTTON_ARRAY: IButton[] = [
    new BoldButtonClass(),
    new ItalicButtonClass(),
    new UnderlineButtonClass(),
    new StrikethroughButtonClass()
];
