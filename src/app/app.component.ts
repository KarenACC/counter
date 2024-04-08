import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  ngOnInit(): void {
    const storedValue = localStorage.getItem('valor');
    if(storedValue){
      this.value = JSON.parse(storedValue)
    }
  }
  title = 'counter';
  public value:number = 0;

  changeValueBy(value:number){
    this.value +=value;
    localStorage.setItem('valor', JSON.stringify(this.value))
  };

  reset(){
    this.value=0;
    localStorage.removeItem('valor');
  }


}
