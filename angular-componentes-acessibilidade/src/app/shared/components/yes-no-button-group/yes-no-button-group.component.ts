import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-yes-no-button-group',
  templateUrl: './yes-no-button-group.component.html',
  styleUrls: ['./yes-no-button-group.component.scss']
})
export class YesNoButtonGroupComponent implements OnInit {

  @Input() public value: string = null;
  @Input() public label = '';
  @Output() public valueChange = new EventEmitter<string>();
  public options = YesNoButtonGrupOptions;
  constructor() { }

  ngOnInit(): void {
  }

  public activate(value: string): void{
    this.value = value;
    this.valueChange.emit(value);
  }
}

enum YesNoButtonGrupOptions{
  YES = 'yes',
  NO = 'no'
}
