<template>
    <div class="contenedor-opciones-pregunta animate__animated  animate__delay-1s animate__zoomIn">
        <div class="opcion-border-rigth  opcion-normal">
            <slot name="letra">

            </slot>
        </div>
        <div class="texto-opcion ">
            <slot name="texto">

            </slot>
        </div>
    </div>
</template>

<script setup >
import { ref, onMounted, onBeforeMount, computed, reactive } from "vue";
//Imagenes

import ImagenCheckawert from '@/assets/img/check_awert.png'
import ImagenCheckwrong from '@/assets/img/check_wrong.png'



const secuencia = defineProps({
    id: {
        type: Number,
        default: 0
    },
    respuestaOpcion: {
        type: String,
        default: ''
    }
})

</script>

<style scoped>
#opciones-0-awswer,
#opciones-1-awswer,
#opciones-2-awswer,
#opciones-3-awswer {
    visibility: hidden
}

.contenedor-opciones-pregunta {
    display: grid;
    grid-template-columns: 1fr 3fr;
    place-content: center;
    align-items: center;
}

.opcion-border-rigth {
    /*     background: var(--info-mensaje); */
    height: inherit;
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    margin-right: 7px;
    color: var(--azul-axa);
    font-size: 4.7em;
}

.opcion:hover {
    box-shadow: 3px 4px 5px silver;
    transform: scale(1.03);
    transition: transform 0.5s ease-in-out;
    cursor: pointer
}

.opcion:not(:hover) {
    box-shadow: 3px 4px 0px silver;
    transform: scale(1);
    transition: transform 0.5s ease-in-out;
}

/* s */

.texto-opcion {
    pointer-events: none;
    text-align: left;
    color: black;
    font-size: 1.3em;
    font-family: Source Sans Pro
}

@media screen and (min-width: 360px) and (max-width: 800px) and (orientation: landscape) {
.opcion-border-rigth{
    /* background: var(--info-mensaje); */
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    margin-right: 3px;
    color: var(--azul-axa);
    font-size: 300%;
}

.texto-opcion[data-v-449d05e8] {
    pointer-events: none;
    text-align: left;
    color: black;
    font-size: 1.7vw;
    font-family: Source Sans Pro;
}
}

</style>