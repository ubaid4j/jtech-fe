import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-send-message',
    templateUrl: './send-message.component.html',
    styleUrls: ['./send-message.component.scss'],
})
export class SendMessageComponent implements OnInit {
    public message: string;
    constructor() { }

    ngOnInit() {}

    public onSend(): void {
        // console.log(this.message);
    }

}
