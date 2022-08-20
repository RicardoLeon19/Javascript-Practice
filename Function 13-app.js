
const reproductor = {
    cancion: '',

    reproducir : id => console.log(`Reproduciendo cancion con el ${id}`) ,
    pausar: () => console.log('pausando...')   ,
    borrar:id =>  console.log (`Borrando cancion... ${id}`)  ,
    crearPlaylist:nombre => console.log(`Creando playlist...${nombre}`),
    reproducirPlaylist: nombre => console.log(`Reproduciendo playlist...${nombre}`),   

    set nuevaCancion (cancion){
        this.cancion = cancion;
        console.log (`Anadiendo ${cancion}`);
    },
    get obetnerCancion() {
        console.log(`${this.cancion}`)
    }
}


reproductor.nuevaCancion = 'Enter Sandman'
reproductor.obetnerCancion;

