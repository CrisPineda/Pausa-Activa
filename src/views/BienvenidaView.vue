
<template>
  <div class="container">
    <div v-if="mostrarVentanaContinuidad">
      <VentanaContinuidad />
    </div>
    <div v-else>
      <VentanaBienvenida v-if="ocultarVentana" :sliderActive="false"
        class="animate__animated animate__delay-2s animate__fadeIn" ruta="usuario" @cerrarVentana="openFullscreen">
        <!--  <template #titulo> Bienvenido </template> -->
        <template #texto>

          <h1 class="tituloP">Pausas Activas.</h1>

          <p><strong>Bienvenido</strong> al juego que le facilitará el proceso para el correcto cumplimiento de las pausas activas, haciéndolo de forma entretenida y divertida. <br> <br>
            <strong>Recuerde</strong> que la realización de pausas activas durante su jornada laboral es beneficiosa para su salud. Lo recomendable es hacerlas cada 2 horas, con una duración mínima por sesión de 10 minutos.
            Le invitamos a disponer de esta herramienta como guía y apoyo para la ejecución de las mismas activas siempre que lo desee. 
          </p>
        </template>
      </VentanaBienvenida>
      <VentanaInstrucciones v-if="ocultarInstrucciones" urlImagenFondo="Instrucciones" :ocultarNavegacion="true">
        <template #texto>
            <h1 class="tituloI">Instrucciones.</h1>
          <div>
            <sliderInstrucciones :numerodeSliders="4" :ocultarNavegacion="false"
              :tituloInstruccion="InstruccionesActividad">
              <template #sliders>
                <div id="contenedor-sliders" style="display: flex;justify-content: space-between;align-items: center;align-content: center;width: fit-content">
                  <div class="item-slider">
                    <img src="@/assets/img/sliders_camara_usuario.png" class="responsive-imagen-slider" alt="">
                  </div>
                  <div class="item-slider">
                    <img src="@/assets/img/Intrucciones_escenario.png" class="responsive-imagen-slider" alt="">
                  </div>
                  <div class="item-slider">
                    <img src="@/assets/img/Intrucciones_audios.png" class="responsive-imagen-slider" alt="">
                  </div>
                  <div class="item-slider">
                    <img src="@/assets/img/Intrucciones_ruleta.png" class="responsive-imagen-slider" alt="">
                  </div>
                  <div class="item-slider">
                    <img src="@/assets/img/sliders_instrucciones_balance_final.png" class="responsive-imagen-slider"
                      alt="">
                  </div>
                </div>

              </template>
            </sliderInstrucciones>
          </div>
          <div class="btn-jugar auto flex-center-elements-row gap-2" style="text-align:center"
            @click="ocultarVentanaInstrucciones">
            <div class="btn-primary2" > CONTINUAR</div>
          </div>

        </template>
      </VentanaInstrucciones>

    </div>
  </div>
</template>

<script setup>
import PuntosEscenario from '@/assets/svg/puntos_fondo.svg';
import VentanaBienvenida from "@/components/VentanaBienvenida.vue";
import VentanaInstrucciones from "@/components/VentanaInstrucciones.vue";
import VentanaContinuidad from "@/components/VentanaContinuidad.vue";
import sliderInstrucciones from "@/components/sliderInstrucciones.vue"
import { ref, reactive, onMounted, computed } from "vue";
import Sliders from "@/assets/textos/Bienvenida.json";
import { useLocalStorage, useMouse, usePreferredDark } from '@vueuse/core'
import { useConfigStore } from "../stores/config.js";
import { useRouter, useRoute } from "vue-router";
import animateCSS from "@/assets/helpers/animations.js";
import { instruccionesBienvenida } from "@/assets/textos/TextosInstrucciones.js";

//Textos Instrucciones
const InstruccionesActividad = ref(instruccionesBienvenida)

const router = useRouter()
const ocultarInstrucciones = ref(null)

const ocultarVentana = ref(false);
const ocultarBotones = ref(false);
const mostrarVentanaContinuidad = ref(false);
const countert = ref(null);
const config = useConfigStore();

onMounted(() => {



  if (config.posicionactualEscenarioJuego > 0) {
    setTimeout(() => {
      mostrarVentanaContinuidad.value = true
    }, 2000)

  }

})

const verifyMobile = () => {
  let isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  return isMobile
}

const ocultarVentanaInstrucciones = () => {
  router.push(`/Usuario`);
}

const openFullscreen = () => {
  ocultarVentana.value = true
  ocultarInstrucciones.value = !ocultarInstrucciones.value
  if (verifyMobile()) {
    var targetelement = document.documentElement;

    if (targetelement.requestFullscreen) {
      targetelement.requestFullscreen();
    }
    if (targetelement.webkitRequestFullscreen) {
      targetelement.webkitRequestFullscreen();
    }
    if (targetelement.mozRequestFullScreen) {
      targetelement.mozRequestFullScreen();
    }
    if (targetelement.msRequestFullscreen) {
      targetelement.msRequestFullscreen();
    }
  }

}

const texto = reactive({
  titulo: computed(() => { config.titulo })
})


const cerrarBienvenida = () => {
  ocultarVentana.value = false

  /*  router.push(`/Usuario`); */
  /*  animateCSS(".contenedor-instrucciones", "fadeOut").then((message) => {
 
 
    
   }); */
}

onMounted(() => {
  const { Bienvenida } = Sliders[0];

  Bienvenida.forEach((element) => {
    slidersBienvenida.value.push(element);
  });

  // persist state in localStorage
  /*   const store = useLocalStorage(
      'my-storage',
      {
        name: 'Apple',
        color: 'red',
      },
    ) */



  countert.value = config.titulo


  let instruciones = setTimeout(() => {
    ocultarVentana.value = !ocultarVentana.value
    clearTimeout(instruciones)
  }, 4200);


});

const slidersBienvenida = ref([]);
</script>



<style lang="css">
.animacion-bienvenida {
  width: 99vw;
  height: 100vh;
  background-image: url('@/assets/animaciones/axa.gif');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.tituloP{
  margin-top: 10%;
  align-self: self-start;
  font-weight: bold;
  color: white;
  font-family: PublicoBanner;
  font-size: 5em;

}

.tituloI{
  display: flex;
  justify-content: flex-start;
  align-self: flex-start;
  font-weight: bold;
  color: white;
  width: 29vw;
  height: 14%;
  position: absolute;
  left: 18%;
  top: -18%;
  transform: translate(-50%, -50%);
  font-family: PublicoBanner;
  font-size: 2em;

}

.puntos-escena {
  width: 94vw;
  height: 910px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.item-slider img {
    object-fit: scale-down;
    width: 35% !important;
    height: 20%; 
}

@media  (min-width:360px) and (max-width: 899px) and (orientation: landscape) {

   .tituloP{
   margin-top: 10%;
   align-self: self-start;
   font-weight: bold;
   color: white;
   font-family: PublicoBanner;
   font-size: 4em;

  }

  .tituloI{
  display: flex;
  justify-content: flex-start;
  align-self: flex-start;
  font-weight: bold;
  color: white;
  width: 37%;
  height: 10%;
  position: absolute;
  left: 22%;
  top: -20%;
  transform: translate(-50%, -50%);
  font-family: PublicoBanner;
  font-size: 2em;

}
  .item-slider img {
    object-fit: scale-down;
    width: 30% !important;
    height: 200%; 
}

}

@media (min-width: 900px) and (max-width: 1023px) and (orientation: landscape) {
  
  .tituloP{
   margin-top: 10%;
   align-self: self-start;
   font-weight: bold;
   color: white;
   font-family: PublicoBanner;
   font-size: 4em;

  }

  .tituloI{
  display: flex;
  justify-content: flex-start;
  align-self: flex-start;
  font-weight: bold;
  color: white;
  width: 37%;
  height: 10%;
  position: absolute;
  left: 22%;
  top: -16%;
  transform: translate(-50%, -50%);
  font-family: PublicoBanner;
  font-size: 2em;

}
  .item-slider img {
    object-fit: scale-down;
    width: 30% !important;
    height: 200%; 
}

}


@media (min-width: 1024px) and (max-width: 1367px) and (orientation: landscape) {

    .tituloP{
   margin-top: 10%;
   align-self: self-start;
   font-weight: bold;
   color: white;
   font-family: PublicoBanner;
   font-size: 4em;

  }
  

  .tituloI{
  display: flex;
  justify-content: flex-start;
  align-self: flex-start;
  font-weight: bold;
  color: white;
  width: 29vw;
  height: 14%;
  position: absolute;
  left: 22%;
  top: 1%;
  transform: translate(-50%, -200%);
  font-family: sans-serif;
  font-size: 4em;

}

.item-slider img {
    object-fit: scale-down;
    width: 50% !important;
    height: 200%; 
}

}

@media (min-width: 1368px) and (orientation: landscape) {

    .tituloP{
   margin-top: 10%;
   line-height: 77%;
   align-self: self-start;
   font-weight: bold;
   color: white;
   font-family: PublicoBanner;
   font-size: 4em;

  }
  .item-slider img {
    object-fit: scale-down;
    width: 60% !important;
    height: 200%; 
}


}

</style>