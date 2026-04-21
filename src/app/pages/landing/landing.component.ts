import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@wawjs/ngx-translate';
import roomsData from '../../../data/rooms.json';

@Component({
    selector: 'app-landing',
    imports: [RouterLink, NgOptimizedImage, TranslatePipe],
    templateUrl: './landing.component.html',
    styleUrl: './landing.component.scss',
})
export class LandingComponent {
    protected readonly hotelRules = [
        'Заїзд: з 14:00 | Виїзд: до 12:00 (ранній/пізній — доплата 50% вартості доби)',
        'Туристичний збір: 34,60 грн/добу з особи (лише з повнолітніх)',
        'Розміщення з тваринкою: 500 грн за добу',
        'Знижки: 10% для УБД; від 10 до 31% іменинникам (відсоток = дата народження)'
    ];

    protected readonly featuredRooms = roomsData.slice(0, 3);

    protected readonly services = [
        {
            title: 'Сніданки',
            subtitle: 'Ресторан працює лише на сніданках. П\'ять варіантів по меню.',
            description: 'Почніть свій день смачно! До ваших послуг п\'ять збалансованих варіантів сніданків на вибір. Свіжі продукти, запашна кава та традиційні рецепти зарядять вас енергією на весь день.',
            image: '/assets/service/breakfast.jpg',
            icon: 'restaurant'
        },
        {
            title: 'Сауна',
            subtitle: '750 грн/год (до 4 осіб), за додаткову особу — доплата.',
            description: 'Відновіть сили та зніміть втому в нашій затишній сауні. Ідеальне місце для релаксу після насиченого дня, прогулянок містом або довгої дороги. Справжній відпочинок для тіла та душі.',
            image: '/assets/service/sauna.jpg',
            icon: 'hot_tub'
        }
    ];

    protected readonly galleryPreview = [
        '/assets/gallery/1.jpg',
        '/assets/gallery/2.jpg',
        '/assets/gallery/3.jpg',
        '/assets/gallery/4.jpg'
    ];
}