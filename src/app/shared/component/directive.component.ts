import { Component } from '@angular/core';

@Component({
    selector: 'my-directive',
    template: ` <h1>Custom Directive 예제</h1>
                <h1 myHidden>Hidden Welcome</h1>
                <h2> <span myUnderline>Hover to underline</span> </h2>
                <h1 mycolor> Let's 'Hover' me!</h1>
                `
})

export class DirectiveComponent {
    val = true;
}