export class Serie {
    id: number;
    nombre: string;
    plataforma: string;
    temporadas: number;
  
    constructor(id: number,nombre: string,plataforma: string, temporadas: number) {
        this.id=id;
        this.nombre=nombre;
        this.plataforma=plataforma;
        this.temporadas=temporadas;
    }
  }