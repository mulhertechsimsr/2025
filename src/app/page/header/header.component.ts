import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  enviarEmail() {
    const email = 'mulhertechsimsr@gmail.com';
    const subject = 'Patrocínio MulherTechSimSenhor';
    const body = 'Olá! Gostaria de ser um patrocinador do MulherTechSimSenhor. Como faço para contribuir?';
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }
}
