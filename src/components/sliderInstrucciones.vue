<template>
    <div class="slider-instrucciones">
        <div class="titulo">
            <div class="intrucciones" v-html="tituloTexto"></div>

        </div> 
<!--         
        <div class="main-flex" >
             <div v-if="!imagen.ocultarNavegacion" class="next flex-1" :style="styleObjectNext" @click="next()" ></div>
             <div class="flex-2 contenedor-items-slider gap-4">
                <slot name="sliders">
                </slot>
             </div>
             <div v-if="!imagen.ocultarNavegacion" class="prev flex-3" :style="styleObjectPrev" @click="prev()" id="enviar"></div>

        </div> -->
                <div class="contenedor-slider flex-center-elements-row-nowrap">
                    <div v-if="!imagen.ocultarNavegacion" class="next flex-1" :style="styleObjectNext" @click="next()" >
                    </div>
                   
                    <div class="contenedor-items-slider gap-4 flex-2">
                        <slot name="sliders">

                        </slot>
                    </div>
                        <div v-if="!imagen.ocultarNavegacion" class="prev flex-3" :style="styleObjectPrev" @click="prev()" id="enviar"> </div>         
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
            x: `+=-${contenedorItemsSliders.width+320}px`
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

.main-flex{

    display: flex;
    flex-direction: row;
    width: 100%;
}
.flex-1 {
  width: 10%;
}

.flex-2 {
  width: 80%;
}

.flex-3 {
  width: 10%;
}

.contenedor-slider {
    width: 100%;
    height: 100%;
    margin-right: 10%;
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
    font-size: var(--h2-title-size);
    color: black;
    font-weight: normal;
    text-align: left;
    height: 32vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

//MediaDevices/* Media querys*/
@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    .slider-instrucciones {
        width: 495px;
        height: 14pc;
    }

    .texto-instrucciones {
        width: 70vw;
        height: 130px;
    }

    .contenedor-slider {
        height: 28vh;
    }

    .contenedor-items-slider {
        width: 354px;
    }

    .intrucciones {
        font-size: 0.8em;
    }
}

@media (min-width: 801px) and (max-width: 1024px) and (orientation: landscape) {

      .slider-instrucciones {
        width: 100%;
        height: 100%;
        
    }

    .texto-instrucciones {
        width: 70%;
        height: 130px;
        

    }

    .contenedor-slider {
        height: 100%;
    }

    .contenedor-items-slider {
    }

    .intrucciones {
        font-family: Source Sans Pro;
        font-size: var(--h2-title-size);
        color: black;
        font-weight: normal;
        text-align: left;
        height: 32vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    

    

}

@media screen and (min-width: 1024px) and (max-width: 1367px) and (orientation: landscape) {

      .slider-instrucciones {
        width: 100%;
        height: 100%;
    }

    .texto-instrucciones {
        width: 70%;
        height: 130px;
    }

    .contenedor-slider {
        height: 100%;
    }

    .intrucciones {
        font-family: Source Sans Pro;
        font-size: var(--h2-title-size);
        color: black;
        font-weight: normal;
        text-align: left;
        height: 32vh;
        display: flex;
        justify-content: center;
        align-items: center;

    }

    
    
}

@media screen and (min-width: 1368px) and (orientation: landscape){

     .slider-instrucciones {
        width: 100%;
        height: 100%;
    }

    .texto-instrucciones {
        width: 70%;
        height: 130px;
    }

    .contenedor-slider {
        height: 100%;
    }


    .intrucciones {
        font-family: Source Sans Pro;
        font-size: var(--h2-title-size);
        color: black;
        font-weight: normal;
        text-align: left;
        height: 32vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    

}
</style>