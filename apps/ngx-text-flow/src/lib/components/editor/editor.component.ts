import { ChangeDetectionStrategy, ElementRef, ViewChild } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ChangeDetectorRef, Component, Inject } from '@angular/core';
import { BUTTON_ARRAY, IButton } from '../../utils';

@Component({
  selector: 'ngx-flow-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditorComponent {
  @ViewChild('textEditor')
  public textEditor!: ElementRef<HTMLDivElement>;

  public readonly buttons = BUTTON_ARRAY;
  private readonly containerElement = 'DIV';

  constructor(@Inject(DOCUMENT) private readonly document: Document) {}

  public onButtonClick(button: IButton): void {
    const selection = this.document.getSelection();

    if (!button.isActive) {
      if (selection && !selection.isCollapsed) {
        const range = selection.getRangeAt(0);
        const selectedText = range.toString();

        if (selectedText) {
          const element = document.createElement(button.tag);
          element.textContent = selectedText;

          range.deleteContents();
          range.insertNode(element);

          selection.removeAllRanges();
        }
      }
    } else {
      // Here will be a functional which can remove selected element by button
    }
  }

  public onEditorClick(): void {
    const selection = this.document.getSelection();
    this.setAllButtonsNotActive();

    if (selection && !selection.isCollapsed) {
      this.setActiveButton();
    } else {
      this.setAllButtonsNotActive();
    }
  }

  public onEditorBlur(): void {
    if (!this.textEditor.nativeElement.textContent) {
      this.textEditor.nativeElement.innerHTML = '';
    }
  }

  private setActiveButton(): void {
    const selection = this.document.getSelection()!;
    const range = selection.getRangeAt(0);
    const commonAncestorContainer = range.commonAncestorContainer;
    let closestElement = commonAncestorContainer.parentNode;

    if (closestElement?.nodeName !== this.containerElement) {
      while (
        closestElement &&
        closestElement.nodeName !== this.containerElement
      ) {
        this.buttons.forEach((button) => {
          if (closestElement?.nodeName == button.nodeName) {
            button.setActive();
          }
        });
        closestElement = closestElement.parentNode;
      }
    }
  }

  private setAllButtonsNotActive(): void {
    this.buttons.forEach((button) => {
      button.setNotActive();
    });
  }
}
