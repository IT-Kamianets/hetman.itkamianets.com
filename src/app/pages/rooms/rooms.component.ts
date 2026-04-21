import { Component } from '@angular/core';
import { TranslatePipe } from '@wawjs/ngx-translate';
import roomsData from '../../../data/rooms.json';

@Component({
    selector: 'app-rooms',
    imports: [TranslatePipe], 
    templateUrl: './rooms.component.html',
    styleUrl: './rooms.component.scss'
})
export class RoomsComponent {
    protected readonly rooms = roomsData;

    protected readonly hotelRules = [
        'Заїзд: з 14:00 | Виїзд: до 12:00 (ранній/пізній — доплата 50%)',
        'Туристичний збір: 34,60 грн/добу з особи',
        'Розміщення з тваринкою: 500 грн за добу',
        'Знижки: 10% для УБД; від 10 до 31% іменинникам'
    ];
}