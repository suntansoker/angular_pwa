import { Component,Input, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'prod-component',
    templateUrl: './prod.component.html',
    styleUrls:['./prod.component.css']
})

export class ProdComponent{
    @Input() emptable;
    name: String = '';
    quantity: Number = 1;
    @Output('addedNameQuantityEvent')
    addedEvent = new EventEmitter();

    addEvent(){
        this.addedEvent.emit([this.name, this.quantity]);
    }

}