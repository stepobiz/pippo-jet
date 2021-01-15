import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'slider',
    templateUrl: './slider.component.html',
    styleUrls: ['./slider.component.scss']
})
export class PjSliderComponent implements OnInit {
    constructor() { }

    ngOnInit(): void { }
    imageObject: Array<object> = [{
        image: 'https://images.wired.it/wp-content/uploads/2017/03/29204936/1490806175_aerei.jpg',
        thumbImage: 'https://images.wired.it/wp-content/uploads/2017/03/29204936/1490806175_aerei.jpg',
    }, {
        image: 'https://fotohd.weebly.com/uploads/2/1/9/8/21989596/8140672_orig.jpg',
        thumbImage:'https://fotohd.weebly.com/uploads/2/1/9/8/21989596/8140672_orig.jpg', 
    
    }, {image: 'https://cdn.pixabay.com/photo/2015/07/11/23/02/plane-841441_960_720.jpg',
     thumbImage: 'https://cdn.pixabay.com/photo/2015/07/11/23/02/plane-841441_960_720.jpg',
    }, {
        image: 'https://cdn.pixabay.com/photo/2013/08/06/19/13/plane-170272_960_720.jpg',
        thumbImage: 'https://cdn.pixabay.com/photo/2013/08/06/19/13/plane-170272_960_720.jpg',
    }
    ];
}
    
