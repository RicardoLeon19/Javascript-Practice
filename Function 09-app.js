
const reproductor = {
    reproducir : function(id) {
        console.log(`Reproduciendo cancion con el ${id}`)
    },
    pausar:function(){
        console.log('pausando...')
    },
    borrar:function(id){
        console.log (`Borrando cancion... ${id}`)
    },
    crearPlaylist:function(nombre){
        console.log(`Creando playlist...${nombre}`)
    },
    reproducirPlaylist:function(nombre){
        console.log(`Reproduciendo playlist...${nombre}`)
    }
}
    

reproductor.reproducir(30)
reproductor.reproducir(20)
reproductor.pausar();

reproductor.crearPlaylist('Heavy Metal');
reproductor.reproducirPlaylist();
reproductor.pausar();

reproductor.borrar()