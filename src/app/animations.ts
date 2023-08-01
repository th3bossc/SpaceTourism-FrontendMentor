import { trigger, animate, transition, style, query } from '@angular/animations';

export const fader = trigger('fadeAnimation', [
    transition('* => *', [
        query(':enter', [
            style({
                opacity : 0,
                position : 'absolute',
                top : 0,
            })
        ], { optional : true }),
        query(':leave', [
            style({ opacity : 1 }),
            animate('100ms', style({
                opacity : 0,
                position : 'absolute',
                top : 0,
            }))
        ], { optional : true }),
        query(':enter', [
            style({ opacity : 0 }),
            animate('100ms', style({
                opacity : 1,
                position : 'relative',
                top : 0,
            }))
        ], { optional : true }),
    ]),
])