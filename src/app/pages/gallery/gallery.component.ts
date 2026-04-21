import { Component, signal } from '@angular/core';
import { TranslatePipe } from '@wawjs/ngx-translate';

@Component({
    selector: 'app-gallery',
    imports: [TranslatePipe],
    templateUrl: './gallery.component.html',
    styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
    protected readonly images = [
        '/assets/gallery/1.jpg',
        '/assets/gallery/2.jpg',
        '/assets/gallery/3.jpg',
        '/assets/gallery/4.jpg',
        '/assets/gallery/5.jpg',
        '/assets/gallery/6.jpg',
        '/assets/gallery/7.jpg',
        '/assets/gallery/8.jpg'
    ];

    protected readonly selectedImage = signal<string | null>(null);

    protected openImage(imageUrl: string): void {
        this.selectedImage.set(imageUrl);
        document.body.style.overflow = 'hidden';
    }

    protected closeImage(): void {
        this.selectedImage.set(null);
        document.body.style.overflow = '';
    }
}