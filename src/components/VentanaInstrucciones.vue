<template>

    <div :style="styleContenedor" class=" animate__animated animate__ animate__jackInTheBox">
        <div class="texto-instrucciones contenedor-items  center-element">
            <div :style="styleImagenTexto">
                <div class="texto">
                    <slot name="texto">

                    </slot>
                </div>
                <div v-if="opciones.isPersonajeVisible" class="imagen">
                    <img src="@/assets/img/Personajes.png" alt="" class="responsive-instrucciones">
                </div>
            </div>

            <div class="btn-jugar auto flex-center-elements-row gap-2" style="text-align:center"
                @click="continuarActividad">
                <slot v-if="opciones.ocultarBotones" name="btntexto">
                    <div class="btn-primary">
                        {{ opciones.ocultarBotones }}JUGAR</div>
                </slot>
            </div>

        </div>
    </div>
</template>

<script setup>
import { ref, reactive, onBeforeMount, onMounted, watch } from 'vue'
import imagenFondoBienvenidaImagen from '@/assets/img/BienvidaJuegos.png'
import imagenFondoInstruccionesImagen from '@/assets/img/fondoEscenario.png'

const emit = defineEmits(['ocultarVentana'])
const imagenFondo = ref('')

const continuarActividad = () => {
    emit('ocultarVentana')
}

onBeforeMount(() => {
    if (opciones.urlImagenFondo === 'BienvidaJuegos') {
        imagenFondo.value = imagenFondoBienvenidaImagen
        styleContenedor.backgroundImage = `url(${imagenFondo.value})`
        styleImagenTexto.gridTemplateColumns = "2fr 1fr"
    } else {
        imagenFondo.value = imagenFondoInstruccionesImagen
        styleContenedor.backgroundImage = `url(${imagenFondo.value})`
        styleImagenTexto.gridTemplateColumns = "1fr"
    }
});


const opciones = defineProps({
    urlImagenFondo: {
        type: String,
        default: 'InstruccioneJuegos'
    },
    ocultarBotones: {
        type: Boolean,
        default: false
    },
    isPersonajeVisible: {
        type: Boolean,
        default: false
    }
});



watch(opciones.isPersonajeVisible, (newSlider, oldSlider) => {
    if (newSlider) {
        
    } else {
        styleImagenTexto.gridTemplateColumns = "1fr"
    }
})

const styleContenedor = reactive({
    backgroundImage: `url(${imagenFondo.value}.png)`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundColor: "#18488c",
    width: '100vw',
    height: '105vh',
    position: 'absolute',
    zIndex: '9999',
    filter: 'drop-shadow(2px 4px 6px black)'
});

const styleImagenTexto = reactive({
    display: "grid",
    gridTemplateColumns: "2fr 1fr",
    placeItems: "center"
});




</script>

<style lang="css" scoped>
.btn-jugar {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-40vh, 30vh);
}

.texto-instrucciones {
    width: 70vw;
    height: 34vw;
    max-height: 44vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 1%;
    padding: 6px 44px;
}

.texto-instrucciones div {
    text-align: left;
}

.texto {
    width: 62%;
    height: 41em;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-content: center;
    color: white;
    font-family: Source Sans Pro;
    font-size: 0.9em;
    font-weight: normal;
    grid-gap: 1rem;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
@media (min-width: 360px) and (max-width: 800px) and (orientation: landscape) {

   .texto-instrucciones {
    width: 80vw;
    height: 6vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 1%;
    padding: 5px 46px;
}

.texto {
    width: 65%;
    height: 42em;
    line-height: 1em;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-content: center;
    color: white;
    font-family: Source Sans Pro;
    font-size: 90%;
    font-weight: 100%;
    grid-gap: 0.8rem;
}

}

@media (min-width: 801px) and (max-width: 1023px) and (orientation: landscape) {

    .texto-instrucciones {
    width: 80vw;
    height: 6vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 1%;
    padding: 5px 46px;
}

.texto {
    width: 65%;
    height: 42em;
    line-height: 1em;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-content: center;
    color: white;
    font-family: Source Sans Pro;
    font-size: 90%;
    font-weight: 100%;
    grid-gap: 0.8rem;
}

}

@media (min-width: 1368px) and (orientation: landscape) {
.texto {
    width: 62%;
    height: 40em;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-content: center;
    color: white;
    font-family: Source Sans Pro;
    font-size: 1em;
    font-weight: normal;
    grid-gap: 2rem;
}
}

</style>