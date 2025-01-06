import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = '2025';
  isVisible = true;

  ngOnInit(): void {
    // Oculta a tela de transição após 3 segundos
    setTimeout(() => {
      this.isVisible = false;
    }, 1500);
  }
}
