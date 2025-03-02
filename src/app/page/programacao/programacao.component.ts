import { Component } from '@angular/core';

@Component({
  selector: 'app-programacao',
  templateUrl: './programacao.component.html',
  styleUrls: ['./programacao.component.scss']
})
export class ProgramacaoComponent {
  horario = true
  items_manha = [
    {
      horario: "08:00 - 09:00",
      titulo: "Credenciamento"
    },
    {
      horario: "09:00 - 10:00",
      titulo: "Em breve",
      palestrante: "",
      atividade: "Mesa Redonda",
      cargo: "",
      sala: "Auditório",
      color: "#F9AB00",
    },
  ]

  items_manha2 = [
    {
      horario: "12:00 - 14:00",
      titulo: "Almoço"
    },
  ]

  children1 = [
    {
      sala: "Auditório",
      titulo: "Empreendendo um Futuro Melhor: Desafios e Lições da Minha Jornada",
      atividade: "Palestra",
      palestrante: "Iana Chan",
      foto: "/assets/palestrantes/iana_chan.png",
      cargo: "CEO e Fundadora da PrograMaria",
      color: "#F9AB00",
      exibir: false
    },
    {
      sala: "Sala Vermelha",
      atividade: "Workshop",
      titulo: "Descomplicando a Agilidade: Mais que Cerimônias, uma Nova Mentalidade!",
      palestrante: "Elaine Pereira",
      cargo: "",
      foto: "/assets/palestrantes/elaine_pereira.png",
      color: "#EA4335",
      id: 1,
      exibir: false
    },
    {
      sala: "Sala Azul",
      atividade: "Workshop",
      titulo: "Tech & Você: Desvendando a Inteligência Artificial com o Celular",
      palestrante: "Mariana Oliveira",
      cargo: "",
      foto: "/assets/palestrantes/mariana_oliveira.png",
      color: "#4285F4",
      id: 10,
      exibir: false
    },
    {
      sala: "Sala Verde",
      atividade: "Workshop",
      titulo: "Em breve",
      palestrante: "",
      cargo: "",
      color: "#34A853",
      id: 2,
      exibir: false
    },
    {
      sala: "Sala Preta",
      atividade: "Workshop",
      titulo: "O beabá do OKR",
      palestrante: "Nadia Pedrosa",
      cargo: "",
      foto: "/assets/palestrantes/nadia_pedrosa.png",
      color: "#000000",
      id: 2,
      exibir: false
    },
  ]

  children2 = [
    {
      sala: "Auditório",
      atividade: "Palestra",
      titulo: "O Papel da Tecnologia Responsável na Construção de um Futuro mais Inclusivo",
      palestrante: "Júlia Bezerra",
      cargo: "",
      foto: "/assets/palestrantes/julia_bezerra.png",
      color: "#F9AB00",
      exibir: false
    },
    {
      sala: "Sala Vermelha",
      atividade: "Workshop",
      titulo: "Guia essencial para iniciar sua trajetória na Área de Negócios",
      palestrante: "Wygna Yngrid",
      cargo: "",
      foto: "/assets/palestrantes/Wygna_Yngrid.png",
      color: "#EA4335",
      id: 3,
      exibir: false
    },
    {
      sala: "Sala Azul",
      atividade: "Workshop",
      titulo: "Em breve",
      palestrante: "",
      cargo: "",
      foto: "",
      color: "#4285F4",
      id: 9,
      exibir: false
    },
    {
      sala: "Sala Verde",
      atividade: "Workshop",
      titulo: "Inteligência Artificial com Banco de Dados – Teoria e Prática",
      palestrante: "Sulamita Dantas",
      cargo: "",
      foto: "/assets/palestrantes/sulamita_dantas.png",
      color: "#34A853",
      id: 9,
      exibir: false
    },
    {
      sala: "Sala Preta",
      titulo: "Em breve",
      atividade: "Workshop",
      palestrante: "",
      cargo: "",

      color: "#000000",
      exibir: false
    }
  ]
  
  children3 = [
    {
      sala: "Auditório",
      atividade: "Palestra",
      titulo: "Em breve",
      palestrante: "",
      cargo: "",

      color: "#F9AB00",
      exibir: false
    },
    {
      sala: "Sala Vermelha",
      atividade: "Mentoria",
      titulo: "Engenharia de Dados Descomplicada: Construindo uma Carreira de Sucesso",
      palestrante: "Fernanda Souza",
      cargo: "",
      foto: "/assets/palestrantes/fernanda_souza.png",
      color: "#EA4335",
      id: 4,
      exibir: false
    },
    {
      sala: "Sala Azul",
      atividade: "Mentoria",
      titulo: "Boas Práticas na Sustentação de Sistemas Legados",
      palestrante: "Camila Dong",
      cargo: "",
      foto: "/assets/palestrantes/camila_dong.png",
      color: "#4285F4",
      id: 5,
      exibir: false
    },
    {
      sala: "Sala Verde",
      atividade: "Mentoria",
      titulo: "Liderança Feminina em Setores de Tecnologia e Inovação",
      palestrante: "Jéssica Bezerril",
      cargo: "",
      foto: "/assets/palestrantes/jessica_bezerril.png",
      color: "#34A853",
      id: 5,
      exibir: false
    },
    {
      sala: "Sala Preta",
      atividade: "Workshop",
      titulo: "Code Like a Girl: Dominando a Programação Competitiva",
      color: "#000000",
      palestrante: "Thuanny Albuquerque",
      cargo: "",
      foto: "/assets/palestrantes/Thuanny_Albuquerque.png",
      id: 8,
      exibir: false
    },
  ]

  children4 = [
    {
      sala: "Auditório",
      atividade: "Palestra",
      titulo: "Cultura de Qualidade: Como Transformar sua Equipe de Desenvolvimento de Software",
      palestrante: "Elisabeth Mamede",
      cargo: "",
      foto: "/assets/palestrantes/elizabeth_mamede.png",
      color: "#F9AB00",
      exibir: false
    },
    {
      sala: "Sala Vermelha",
      atividade: "Mentoria",
      titulo: "Inovação Responsável: Como Garantir Conformidade Legal em Empresas de TI na Era da IA",
      palestrante: "Juliana Saraiva",
      cargo: "",
      foto: "/assets/palestrantes/juliana_saraiva.png",
      color: "#EA4335",
      id: 4,
      exibir: false
    },
    {
      sala: "Sala Azul",
      atividade: "Mentoria",
      titulo: "O Futuro é a Nuvem e é pra Lá que Eu Vou!",
      palestrante: "Byanca Calixto",
      cargo: "",
      foto: "/assets/palestrantes/byanca_calixto.png",
      color: "#4285F4",
      id: 5,
      exibir: false
    },
    {
      sala: "Sala Verde",
      atividade: "Mentoria",
      titulo: "O Desafio da Mulher Tech: Como se Destacar em uma Área Dominada por Homens?",
      palestrante: "Amanda Rodrigues",
      cargo: "",
      foto: "/assets/palestrantes/amanda_rodrigues.png",
      color: "#34A853",
      id: 5,
      exibir: false
    },
    {
      sala: "Sala Preta",
      titulo: "Code Game",
      color: "#000000",
      id: 8,
      exibir: false
    },
  ]

  children5 = [
    {
      sala: "Auditório",
      atividade: "Palestra",
      titulo: "IA + Design: Como a Tecnologia Está Redefinindo Experiências",
      palestrante: "Nina Talks",
      cargo: "",
      foto: "/assets/palestrantes/nina.png",
      color: "#F9AB00",
      exibir: false
    },
    {
      sala: "Sala Vermelha",
      atividade: "Mentoria",
      titulo: "Agilidade como um Meio de Transformação de Carreira",
      palestrante: "Clara Azevedo",
      cargo: "",
      foto: "/assets/palestrantes/clara_azevedo.png",
      color: "#EA4335",
      id: 4,
      exibir: false
    },
    {
      sala: "Sala Azul",
      atividade: "Mentoria",
      titulo: "Como Iniciar na Carreira de Segurança da Informação",
      palestrante: "Beatriz do Nascimento",
      cargo: "",
      foto: "/assets/palestrantes/beatriz_nascimento.png",
      color: "#4285F4",
      id: 5,
      exibir: false
    },
    {
      sala: "Sala Verde",
      atividade: "Mentoria",
      titulo: "Como Começar na Área de Desenvolvimento Android",
      palestrante: "Renata Kelly",
      cargo: "",
      foto: "/assets/palestrantes/renata_kelly.png",
      color: "#34A853",
      id: 5,
      exibir: false
    },
    {
      sala: "Sala Preta",
      titulo: "Code Game",
      color: "#000000",
      id: 8,
      exibir: false
    },
  ]

  items_tarde = [
    {
      horario: "17:00",
      titulo: "Encerramento"
    }
  ]

  troca(){
    this.horario = !this.horario
  }

  responsiveOptions = [
    {
      breakpoint: '1199px',
      numVisible: 3,
      numScroll: 1
  },
    {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
    }
  ];
}
