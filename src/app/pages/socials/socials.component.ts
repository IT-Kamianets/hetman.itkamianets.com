import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslatePipe } from '@wawjs/ngx-translate';

@Component({
    selector: 'app-socials',
    imports: [TranslatePipe],
    templateUrl: './socials.component.html',
    styleUrl: './socials.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SocialsComponent {
    protected readonly contacts = {
        phone: '+38 (067) 588-22-15',
        phoneDisplay: '+38 (067) 588-22-15',
        email: 'hotel.hetman05@gmail.com',
        address: "вул. Польський ринок, 8 м.Кам'янець-Подільський 32300",
        mapLink: 'https://www.google.com/maps?cid=5604364324214158875&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYASAA&hl=en-US&source=embed'
    };

    protected readonly messengers = [
        { name: 'Telegram', link: 'https://t.me/hetman_hotel', text: '@hetman_hotel' },
        { name: 'Viber', link: 'viber://chat?number=%2B380970000000', text: '+38 (067) 588-22-15' },
        { name: 'WhatsApp', link: 'https://wa.me/380970000000', text: '+38 (067) 588-22-15' }
    ];

    protected readonly socialLinks = [
        { name: 'Instagram', link: 'https://www.instagram.com/hetman_kp/', text: '@hetman_kp' },
        { name: 'Facebook', link: 'https://www.facebook.com/hetmanHotel/', text: '/hetmanHotel' },
        { name: 'Google Business', link: 'https://www.google.com/maps/place/%D0%93%D0%B5%D1%82%D1%8C%D0%BC%D0%B0%D0%BD/@48.6751253,26.5716684,1019m/data=!3m2!1e3!4b1!4m9!3m8!1s0x4733c7865a863fcd:0x8a6f8f695b697a83!5m2!4m1!1i2!8m2!3d48.6751218!4d26.5742433!16s%2Fg%2F11btmq9yv4?entry=ttu&g_ep=EgoyMDI2MDQxNS4wIKXMDSoASAFQAw%3D%3D', text: '' }
    ];
}