import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  //identifies the component. By convention, Angular component selectors begin with the prefix app-, followed by the component name.
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
  //both reference the component's HTML and CSS
})
export class ProductAlertsComponent {
  //this class handle functionality for the component.
  @Input() product: Product | undefined;
  @Output() notify = new EventEmitter();
}
