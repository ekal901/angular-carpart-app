/**
 * Created by vega on 2017-03-29.
 */
import { NgModule }       from '@angular/core';
import { OrdinalPipe} from './pipe/ordinal.pipe';
import { MyDatePipe } from './pipe/mydate.pipe';
import { HiddenDirective } from './directive/hidden.directive';
import { UnderlineDirective } from './directive/underline.directive';
import { ColorDirective } from './directive/color.directive';
import { DirectiveComponent } from './component/directive.component';
import { PipeComponent } from './component/pipe.component';

import { CommonModule } from '@angular/common';

@NgModule({
    imports: [CommonModule],
    declarations: [ DirectiveComponent,PipeComponent,OrdinalPipe,MyDatePipe,HiddenDirective,UnderlineDirective,ColorDirective ],
    exports : [DirectiveComponent,PipeComponent,OrdinalPipe,MyDatePipe,HiddenDirective,UnderlineDirective,ColorDirective]
})

export class SharedModule {}