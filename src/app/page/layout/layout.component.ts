import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit{
  title = '2025';
  isVisible = true;

  ngOnInit(): void {
    // Oculta a tela de transição após 3 segundos
    setTimeout(() => {
      this.isVisible = false;
    }, 1500);
  }
}
