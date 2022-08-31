<template>
    <div class="slider-instrucciones">
        <div class="titulo">
            <div class="intrucciones" v-html="tituloTexto">
            </div>

        </div>
        <div class="contenedor-slider flex-center-elements-row-nowrap">
            <div v-if="!imagen.ocultarNavegacion" class="next" :style="styleObjectNext" @click="next()" >
            </div>
            <!-- :class="`contenedor-imagenes-${imagen.id}`" :style="[styleObjectContenedor, styleObjectValidacion]" -->
            <div class="contenedor-items-slider gap-4">
                <slot name="sliders">

                </slot>
            </div>
                <div v-if="!imagen.ocultarNavegacion" class="prev" :style="styleObjectPrev" @click="prev()" id="enviar">
                </div>         
        </div>
    </div>
</template>

<script setup>
import ImagenFlechaDerecha from '@/assets/img/barraDerecha.png';
import ImagenFlechaIzquierda from '@/assets/img/barraIzquierda.png';
import { ref, reactive, watch, onMounted, computed, onBeforeMount } from 'vue'
import animateCSS from "@/assets/helpers/animations.js";
import gsap from "gsap";

const imagen = defineProps({
    id: Number,
    tituloInstruccion: {
        type: Array,
        default: [
            'Lorem'
        ]
    },
    numerodeSliders: {
        type: Number,
        default: 1
    },
    ocultarNavegacion: {
        type: Boolean,
        default: true
    }
})

onMounted(() => {
    tituloTexto.value = imagen.tituloInstruccion[sliderActual.value]
})
const finAnimacionSlider = ref(false)
const sliderActual = ref(0)
const tituloTexto = ref('')

const styleObjectNext = reactive({
    cursor: "pointer",
    zIndex: "9999",
    /*  backgroundColor: "#00008F", */
    padding: "5px",
    borderRadius: "100%",
    filter: 'opacity(0.5)',
    pointerEvents: 'none',
    color: "white",
    backgroundImage: `url('${ImagenFlechaDerecha}')`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'contain',
    width: '4vh',
    height: '4vh'
});

const styleObjectPrev = reactive({
    cursor: "pointer",
    zIndex: "9999",
    filter: 'opacity(1)',
    /* backgroundColor: "#00008F", */
    padding: "5px",
    borderRadius: "100%",
    pointerEvents: 'all',
    color: "white",
    backgroundImage: `url('${ImagenFlechaIzquierda}')`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'contain',
    width: '4vh',
    height: '4vh'
});





const prev = () => {
    navegacion();
    if (sliderActual.value != imagen.numerodeSliders) {
        
        let contenedorItemsSliders = document.querySelector(`.contenedor-items-slider`).getBoundingClientRect()
        animateCSS(".titulo", "fadeOut").then((message) => {
            tituloTexto.value = imagen.tituloInstruccion[sliderActual.value]
            animateCSS(".titulo", "fadeIn").then((message) => {


            });

        });

        gsap.to(`.contenedor-items-slider`, {
            x: `+=-${contenedorItemsSliders.width+32}px`
            , onComplete: () => {
                finAnimacionSlider.value = false
                sliderActual.value++
                navegacion()

            }
        });
    }

}

const next = () => {
    navegacion();
    if (sliderActual.value != 0) {
        let contenedorItemsSliders = document.querySelector(`.contenedor-items-slider`).getBoundingClientRect()

        animateCSS(".titulo", "fadeOut").then((message) => {
            tituloTexto.value = imagen.tituloInstruccion[sliderActual.value]
            animateCSS(".titulo", "fadeIn").then((message) => {


            });

        });
        gsap.to(`.contenedor-items-slider`, {
            x: `+=${contenedorItemsSliders.width+32}px`, ease: 'Power.easeInOut', onComplete: () => {
                finAnimacionSlider.value = false
                sliderActual.value--
                /* tituloTexto.value = imagen.tituloInstruccion[sliderActual.value] */
                navegacion()
            }
        });
    }

}


function navegacion  () {

    let identificadorTiempoDeEspera;
    let tiempoEspera;
    let tiempoEspera2;
  
    if (sliderActual.value == imagen.numerodeSliders) {
       
        styleObjectNext.pointerEvents = 'none'
        styleObjectPrev.pointerEvents = 'none'
        styleObjectNext.filter = 'opacity(0.5)'
        styleObjectPrev.filter = 'opacity(0.5)' 
        tiempoEspera2 = setTimeout(funcionConRetraso3, 1500);

    } else if (sliderActual.value == 0) {
   
        styleObjectNext.pointerEvents = 'none'
        styleObjectPrev.pointerEvents = 'none'
        styleObjectNext.filter = 'opacity(0.5)'
        styleObjectPrev.filter = 'opacity(0.5)' 
        tiempoEspera = setTimeout(funcionConRetraso2, 1500);

    } else {
    
        styleObjectNext.pointerEvents = 'none'
        styleObjectPrev.pointerEvents = 'none'
        styleObjectNext.filter = 'opacity(0.5)'
        styleObjectPrev.filter = 'opacity(0.5)'   
        identificadorTiempoDeEspera = setTimeout(funcionConRetraso, 1500);

    }


   function funcionConRetraso() {

    styleObjectNext.pointerEvents = 'all'
    styleObjectPrev.pointerEvents = 'all'
    styleObjectNext.filter = 'opacity(1)'
    styleObjectPrev.filter = 'opacity(1)'
    
}

function funcionConRetraso2() {

        styleObjectNext.filter = 'opacity(0.5)'
        styleObjectPrev.filter = 'opacity(1)'
        styleObjectNext.pointerEvents = 'none'
        styleObjectPrev.pointerEvents = 'all'

    }

function funcionConRetraso3() {

        styleObjectNext.filter = 'opacity(1)'
        styleObjectPrev.filter = 'opacity(0.5)'
        styleObjectNext.pointerEvents = 'all'
        styleObjectPrev.pointerEvents = 'none'

       }

}

</script>

<style lang="scss" scoped>
.contenedor-slider {
    width: 100%;
    height: 40vh;
    overflow: hidden;
}

.contenedor-items-slider {
    display: flex;
    margin: 0px auto;
    width: 710px;
    /*     overflow: hidden; */
    flex-wrap: nowrap;
    justify-content: start;
    align-items: center;
    align-content: center;
}



.slider-instrucciones {
    width: 800px;
    height: 33vw;
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    flex-direction: column;
}




.titulo {
    text-align: center;
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
}

.intrucciones {
    font-family: Source Sans Pro;
    font-size: 2vw;
    line-height: 4vh;
    color: black;
    font-weight: normal;
    text-align: left;
    width: 73vw;
    height: 27vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

@media (min-width: 360px) and (max-width: 800px) and (orientation: landscape) {
   .slider-instrucciones {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    flex-direction: column;
}

    .texto-instrucciones {
        width: 70vw;
        height: 130px;
    }

    .contenedor-slider {
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.contenedor-items-slider {
    display: flex;
    margin: 1% -14%;
    flex-wrap: nowrap;
    justify-content: start;
    align-items: center;
    align-content: center;
}

.intrucciones{
    font-family: Source Sans Pro;
    font-size: 2vw;
    line-height: 4vh;
    color: black;
    font-weight: normal;
    text-align: left;
    width: 86vw;
    height: 27vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

}
//MediaDevices/* Media querys*/
@media (min-width: 801px) and (max-width: 1023px) and (orientation: landscape) {
   .slider-instrucciones {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    flex-direction: column;
}

    .texto-instrucciones {
        width: 70vw;
        height: 130px;
    }

    .contenedor-slider {
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.contenedor-items-slider {
    display: flex;
    margin: 0px auto;
    /*     overflow: hidden; */
    flex-wrap: nowrap;
    justify-content: start;
    align-items: center;
    align-content: center;
}

      .intrucciones {
    font-family: Source Sans Pro;
    font-size: 100%;
    line-height: 100%;
    color: black;
    font-weight: normal;
    text-align: left;
    width: 85%;
    height: 35vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

}


@media screen and (min-width: 1024px) and (max-width: 1367px) {
    .intrucciones {
    font-family: Source Sans Pro;
    font-size: 3vh;
    line-height: 130%;
    color: black;
    font-weight: normal;
    text-align: left;
    width: 88%;
    height: 27vh;
    display: flex;
    justify-content: center;
    align-items: center;
}



.slider-instrucciones {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    flex-direction: column;
}

.contenedor-slider {
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.contenedor-items-slider {
    display: flex;
    margin: 0px auto;
    /*     overflow: hidden; */
    flex-wrap: nowrap;
    justify-content: start;
    align-items: center;
    align-content: center;
}


}

@media screen and (min-width: 1368px) {

    .intrucciones {
    font-family: Source Sans Pro;
    font-size: 120%;
    line-height: 130%;
    margin-top: 10%;
    color: black;
    font-weight: normal;
    text-align: left;
    height: 16vh;
    display: flex;
    justify-content: center;
    align-items: center;
}


.slider-instrucciones {
    width: 100%;
    height: 110%;
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    flex-direction: column;
}

.contenedor-slider {
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.contenedor-items-slider {
    display: flex;
    margin: 0px auto;
    /*     overflow: hidden; */
    flex-wrap: nowrap;
    justify-content: start;
    align-items: center;
    align-content: center;
}


}
</style>