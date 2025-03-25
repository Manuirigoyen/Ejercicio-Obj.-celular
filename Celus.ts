export class Celular{
    
    private marca:string;
    private modelo:string; 
    private sistemaOp:string;
    private memoriaRam?:number;
    private almacenamiento?:number;
    private prendido?:boolean;
    
    constructor(pMarca:string,pModelo:string,pSistemaOp:string,pMemoriaRam?:number,pAlmacenamiento?:number,pPrendido?:boolean){
       this.marca = pMarca;
       this.modelo = pModelo;
       this.sistemaOp = pSistemaOp;
       this.memoriaRam = pMemoriaRam ?? 8;
       this.almacenamiento = pAlmacenamiento ?? 128;
       this.prendido = pPrendido ?? false;
    }

    public prenderApagar(): void {
        this.prendido = !this.prendido; // Cambia el estado
        if (this.prendido) {
            console.log("El sistema se ha encendido.");
        } else {
            console.log("El sistema se ha apagado.");
        }
    }

    public mostrarInfo():void{
        console.log(`Marca: ${this.marca}    Modelo: ${this.modelo}    Sistema Op.: ${this.sistemaOp}    Memoria Ram: ${this.memoriaRam}   Almacenamiento: ${this.almacenamiento}    Esta prendido?: ${this.prendido}`);
        
    }

    public getmarca() : string {
        return this.marca
    }

    public setmarca(pMarca:string) : void {
        this.marca = pMarca;
    }
    
    public getmodelo() : string {
        return this.modelo;
    }

    public setmodelo(pModelo:string) : void {
        this.modelo = pModelo;
    }

    public getsistemaOp() : string {
        return this.sistemaOp;
    }

    public setsistemaOp(pSistemaOp:string) : void {
        this.sistemaOp = pSistemaOp;
    }

    public getMemoriaRam(): number | undefined {
        return this.memoriaRam;
      }
      
      public setMemoriaRam(pMemoriaRam: number): void {
        this.memoriaRam = pMemoriaRam;
      }
      
      public getAlmacenamiento(): number | undefined {
        return this.almacenamiento;
      }
      
      public setAlmacenamiento(pAlmacenamiento: number): void {
        this.almacenamiento = pAlmacenamiento;
      }

      public getprendido(): boolean | undefined{
        return this.prendido;
      }
      
      public setprendido(pPrendido: boolean): void {
        this.prendido = pPrendido;
      }

}