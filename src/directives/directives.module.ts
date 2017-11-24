import { NgModule } from '@angular/core';
import { AutosizeDirective } from './autosize/autosize';
import { ParallaxDirective } from './parallax/parallax';

@NgModule({
	declarations: [AutosizeDirective,
    ParallaxDirective],
	imports: [],
	exports: [AutosizeDirective,
    ParallaxDirective]
})
export class DirectivesModule {}
