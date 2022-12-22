<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 <em>Past simple vs. past perfect</em> (pasado simple vs. pasado perfecto)
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0(data-aos="fade-right")
        figure.d-flex.justify-content-center
          img.w-auto(src="@/assets/curso/tema1/1.png", alt="alt")
      .col-lg-8
        TraduccionT.color-acento-botones(:dialogo="dialogo1")(data-aos="flip-up")
    
    h4.colr.mb-5 <em>Past simple</em> (Pasado simple) 
  
    .row.mb-5
      .col-lg-8
        TraduccionT.color-acento-botones(:dialogo="dialogo2")(data-aos="flip-up")
      .col-lg-4(data-aos="fade-right")
        figure.d-flex.justify-content-center
          img.w-auto.d-none.d-lg-flex(src="@/assets/curso/tema1/2.png", alt="alt")
    
    .bg_grad-02
      .row.mb-5.justify-content-center
        .col-lg-4.mb-3.mb-lg-0
          figure.d-flex.justify-content-center
            img.w-auto(src="@/assets/curso/tema1/3.svg", alt="alt") 
        .col-lg-6
          p.text-bold.text-center <em>Affirmative</em>
          figure.d-flex.justify-content-center.mb-3
            img.w-auto(src="@/assets/curso/tema1/4.svg", alt="alt")
          p.text-bold.text-center <em>Examples</em>
          .row.mb-3 
            .col-lg-6
              TarjetaAudio.color-primario.bgr_2.mb-3(
                texto="Susy <em>brought</em> <i>a sandwich.</i>"
                :audio="require('@/assets/componentes/audios/tema1/1.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
                .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
            .col-lg-6
              TarjetaAudio.color-primario.bgr_2.mb-3(
                texto="Peter <em>played</em> <i>chess with her.</i>"
                :audio="require('@/assets/componentes/audios/tema1/2.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
                .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
          p.colr <em>In order to write affirmative sentences in the simple past, you need to put the verb in the past form, but there are two types of verbs: <b>regular and irregular verbs</b>.</em>
          p.mb-0 Para escribir oraciones afirmativas en pasado simple, hay que poner el verbo en pasado, pero hay dos tipos de verbos: <b>los regulares y los irregulares.</b>  
    
    span.colr <em>To write affirmative sentences in the simple past, you have to put the verb in the past. Below is a short version of a list of irregular verbs with a link to the full list: </em>
    span.colr_1 / Para escribir oraciones afirmativas en pasado simple, hay que poner el verbo en pasado. A continuación, encontrará una versión corta de una lista de verbos irregulares con el enlace para consultar la lista completa:

    .bgr_3
      .row.mb-5.mt-5.justify-content-center.p-5
        p.text-center <em>Irregular verbs</em> / Verbos irregulares
        .col-xl-5.mb-3
          TarjetaAudio.color-primario.bgr_2.mb-3(
            texto="Description: Irregular verbs don’t follow any rule; they all appear in a list: the irregular verb list:"
            :audio="require('@/assets/componentes/audios/tema1/3.mp3')"
            @audio-hover="mostrarIndicadorTarjetaAudio = false"
          )
            .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
          .row.mb-3
            .col-lg-6
              p <em>Download Let us now look at the list of more irregular verbs:</em>
            .col-lg-6
              a.anexo.bgr(:href="obtenerLink('downloads/anexo02.pdf')" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p <b>Anexo</b>. List of 616 English Irregular Verbs
          figure.d-flex.justify-content-center
            img.w-auto(src="@/assets/curso/tema1/5.png", alt="alt")
        .col-xl-4
          table
            tr.bgr_4.text-center
              td 
                h4 <em>Base Form</em>
              td 
                h4 <em>Past Simple</em>
              td 
                h4 <em>Past Participle</em>
            tr.bgr.text-center
              td.ps-5
                p.mb-0.text-bold.colr <em>awake</em>
              td 
                p.mb-0.text-bold.colr <em>awoke</em>
              td 
                p.mb-0.text-bold.colr <em>awoken</em>
            tr.bgr.text-center
              td.ps-5
                p.mb-0.text-bold.colr <em>be</em>
              td 
                p.mb-0.text-bold.colr <em>was, were</em>
              td 
                p.mb-0.text-bold.colr <em>been</em>
            tr.bgr.text-center
              td.ps-5
                p.mb-0.text-bold.colr <em>beat</em>
              td 
                p.mb-0.text-bold.colr <em>beat</em>
              td 
                p.mb-0.text-bold.colr <em>beaten</em>
            tr.bgr.text-center
              td.ps-5
                p.mb-0.text-bold.colr <em>become</em>
              td 
                p.mb-0.text-bold.colr <em>became</em>
              td 
                p.mb-0.text-bold.colr <em>become</em>
            tr.bgr.text-center
              td.ps-5
                p.mb-0.text-bold.colr <em>begin</em>
              td 
                p.mb-0.text-bold.colr <em>began</em>
              td 
                p.mb-0.text-bold.colr <em>begun</em>
            tr.bgr.text-center
              td.ps-5
                p.mb-0.text-bold.colr <em>bend</em>
              td 
                p.mb-0.text-bold.colr <em>bent</em>
              td 
                p.mb-0.text-bold.colr <em>bent</em>
            tr.bgr.text-center
              td.ps-5
                p.mb-0.text-bold.colr <em>bet</em>
              td 
                p.mb-0.text-bold.colr <em>bet</em>
              td 
                p.mb-0.text-bold.colr <em>bet</em>
            tr.bgr.text-center
              td.ps-5
                p.mb-0.text-bold.colr <em>bid</em>
              td 
                p.mb-0.text-bold.colr <em>bid</em>
              td 
                p.mb-0.text-bold.colr <em>bid</em>
            tr.bgr.text-center
              td.ps-5
                p.mb-0.text-bold.colr <em>bite</em>
              td 
                p.mb-0.text-bold.colr <em>bit</em>
              td 
                p.mb-0.text-bold.colr <em>bitten</em>
            tr.bgr.text-center
              td.ps-5
                p.mb-0.text-bold.colr <em>blow</em>
              td 
                p.mb-0.text-bold.colr <em>blew</em>
              td 
                p.mb-0.text-bold.colr <em>blown</em>
            tr.bgr.text-center
              td.ps-5
                p.mb-0.text-bold.colr <em>break</em>
              td 
                p.mb-0.text-bold.colr <em>broke</em>
              td 
                p.mb-0.text-bold.colr <em>broken</em>
    
    span.colr <em>In all structures in the past, regular verbs have to follow some rules, it is important to review them below: </em>
    span.colr_1 / En todas las estructuras en pasado, los verbos regulares tienen que seguir unas reglas, es importante repasarlas a continuación:

    .row.mb-5.mt-5
      .col-xl-6.bg_grad-03(data-aos="fade-right")
        .row.d-flex.align-items-center.p-4.justify-content-center
          .col-lg-6
            figure.d-flex.justify-content-center
              img.w-auto(src="@/assets/curso/tema1/6.svg", alt="alt")
          .col-8.col-lg-6
            .bgr_5.p-3
              Audio.color-acento-botones.m-auto.mb-3(
                :audio="require('@/assets/componentes/audios/tema1/4.mp3')"
                @audio-hover="mostrarIndicadorAudio = false"
              )
                .indicador--click(v-if="mostrarIndicadorAudio")
              div.text-center
                p.colr_2.text-bold 1. <em>General rule</em>  
                p.mb-0 Add “ED” to the verb.
                p.mb-0 Example:
                p.mb-0 Walk → Walked
                p.mb-0 Play → Played
      .col-xl-6.bg_grad-04(data-aos="fade-left")
        .row.d-flex.align-items-center.p-4.justify-content-center
          .col-8.col-lg-6.order-2.order-lg-1
            .bgr_5.p-3
              Audio.color-acento-botones.m-auto.mb-3(
                :audio="require('@/assets/componentes/audios/tema1/5.mp3')"
                @audio-hover="mostrarIndicadorAudio = false"
              )
                .indicador--click(v-if="mostrarIndicadorAudio")
              div.text-center
                p.colr_2.text-bold 2. <em>Verbs ended in “E”</em>   
                p.mb-0 Add “D” to the verb.
                p.mb-0 Example:
                p.mb-0 Love → Loved
                p.mb-0 Live → Lived
          .col-lg-6.order-1.order-lg-2
            figure.d-flex.justify-content-center
              img.w-auto(src="@/assets/curso/tema1/7.svg", alt="alt")
    
    .row.mb-5
      .col-xl-6.bg_grad-03(data-aos="fade-left")
        .row.a.d-flex.align-items-center.p-4.justify-content-center
          .col-lg-6
            figure.d-flex.justify-content-center
              img.w-auto(src="@/assets/curso/tema1/8.svg", alt="alt")
          .col-8.col-lg-6
            .bgr_5.p-3
              Audio.color-acento-botones.m-auto.mb-3(
                :audio="require('@/assets/componentes/audios/tema1/6.mp3')"
                @audio-hover="mostrarIndicadorAudio = false"
              )
                .indicador--click(v-if="mostrarIndicadorAudio")
              div.text-center
                p.colr_2.text-bold 3. <em>Verbs ended in “Y” after a consonant</em>  
                p.mb-0 Change “Y” for “IED” in the verb
                p.mb-0 Example:
                p.mb-0 Study →  Studied
                p.mb-0 Copy →  Copied
      .col-xl-6.bg_grad-04(data-aos="fade-right")
        .row.a.d-flex.align-items-center.p-4.justify-content-center
          .col-md-8.col-lg-6.order-2.order-lg-1
            .bgr_5.p-2
              Audio.color-acento-botones.m-auto.mb-3(
                :audio="require('@/assets/componentes/audios/tema1/7.mp3')"
                @audio-hover="mostrarIndicadorAudio = false"
              )
                .indicador--click(v-if="mostrarIndicadorAudio")
              div.text-center
                p.colr_2.text-bold 4. <em>Consonant doubling</em>    
                p.mb-0 Double the last consonant when:
                p.mb-0 It’s ended cons-vow-cons.
                p.mb-0 K, W, X are not doubled.
                p Only double when the last syllable is stressed.
                p.mb-0 Example:
                p.mb-0 Stop → Stopped
                p.mb-0 Control → Controlled 
          .col-lg-6.order-1.order-lg-2
            figure.d-flex.justify-content-center
              img.w-auto(src="@/assets/curso/tema1/9.svg", alt="alt")
    
    span.colr <em>It is also possible to write negative sentences in order to talk about those events that didn’t happen to us. To do it, we need the following structure: </em>
    span.colr_1 También es posible escribir frases negativas para hablar de aquellos eventos que no nos ocurrieron a nosotros. Para hacer eso, necesitamos la siguiente estructura:

    .bg_grad-05
      .row.mb-5.mt-5.justify-content-center
        .col-lg-4.mb-3.mb-lg-0
          figure.d-flex.justify-content-center
            img.w-auto(src="@/assets/curso/tema1/10.svg", alt="alt") 
        .col-lg-6
          p.text-bold.text-center <em>Negative</em>
          figure.d-flex.justify-content-center.mb-3
            img.w-auto(src="@/assets/curso/tema1/11.svg", alt="alt")
          p.text-bold.text-center <em>Examples</em>
          .row.mb-3 
            .col-lg-6
              TarjetaAudio.color-primario.bgr_2.mb-3(
                texto="Susy <b>didn’t</b> <em>bring</em> <i>a sandwich.</i>"
                :audio="require('@/assets/componentes/audios/tema1/8.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
                .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
            .col-lg-6
              TarjetaAudio.color-primario.bgr_2.mb-3(
                texto="Peter <b>didn’t</b> <em>play</em> <i>chess with her.</i>"
                :audio="require('@/assets/componentes/audios/tema1/9.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
                .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
          .tarjeta.bgr.p-4
            figure.mb-3
              img.w-auto(src="@/assets/curso/tema1/12.svg", alt="alt") 
            p.colr <em>In the following structures, the verbs are not in past tenses, this is because the auxiliary verb is used, so the verb is used in base form.</em>
            p.mb-0 En las siguientes estructuras, los verbos no están en pasado, esto se debe a que se utiliza el verbo auxiliar, por lo que el verbo se utiliza en forma básica.
    
    span.colr <em>In case you need to know any information about something that happened in the past, you have to use an interrogative structure, let’s see how it works: </em>
    span.colr_1 / En caso de que se necesite saber alguna información sobre algo que ocurrió en el pasado, hay que utilizar una estructura interrogativa, veamos cómo funciona:

    .bg_grad-06
      .row.mb-5.mt-5.justify-content-center
        .col-lg-4
          figure.d-flex.justify-content-center
            img.w-auto(src="@/assets/curso/tema1/13.svg", alt="alt") 
        .col-lg-6
          p.text-bold.text-center <em>Interrogative</em>
          figure.d-flex.justify-content-center.mb-3
            img.w-auto(src="@/assets/curso/tema1/14.svg", alt="alt")
          p.text-bold.text-center <em>Examples</em>
          .row.mb-3 
            .col-lg-6
              TarjetaAudio.color-primario.bgr_2.mb-3(
                texto="<b>Did</b> Susy <em>bring</em> <i>a sandwich?</i>"
                :audio="require('@/assets/componentes/audios/tema1/10.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
                .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
            .col-lg-6
              TarjetaAudio.color-primario.bgr_2.mb-3(
                texto="<b>Did</b> Peter <em>play</em> <i>chess with her?</i>"
                :audio="require('@/assets/componentes/audios/tema1/11.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
                .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
    
    TraduccionT.color-acento-botones.mb-5(:dialogo="dialogo3")(data-aos="flip-up")

    Dialogo.color-primario.mb-5(:dialogo="dialogo7")
      template(#nombre-actividad) Arrastrar y Soltar
      template(#titulo-actividad) <em>Simple past practice</em> - Completa la conversación.
      template(#descripcion-actividad) Arrastra y suelta cada una de las palabras en el orden correcto.
    
    h4.colr.mb-5 <em>Past perfect</em> (Pasado perfecto)

    .row.mb-5
      .col-lg-8
        TraduccionT.color-acento-botones(:dialogo="dialogo4")(data-aos="flip-up")
      .col-lg-4(data-aos="fade-right")
        figure.d-flex.justify-content-center
          img.w-auto.d-none.d-lg-flex(src="@/assets/curso/tema1/17.png", alt="alt")
    
    .bg_grad-07
      .row.mb-5
        .col-lg-3.d-flex.align-items-center.mb-3.mb-lg-0
          figure.d-flex.justify-content-center
            img.w-auto(src="@/assets/curso/tema1/18.svg", alt="alt")
        .col-lg-9
          .tarjeta.bgr.p-4.mb-5
            SlyderA(tipo="b")
              div
                h4.text-center <em>Affirmative sentence</em>
                span.colr <em>Now that we reviewed how to put verbs into the past participle, let’s see how to write or say affirmative sentences in the past perfect: </em> 
                span.colr_1 / Ahora que hemos repasado cómo poner los verbos en el participio pasado, veamos cómo escribir o decir frases afirmativas en el pasado perfecto:
                figure.d-flex.justify-content-center.mt-3.mb-3
                  img.w-auto(src="@/assets/curso/tema1/19.svg", alt="alt")
                .row
                  .col-lg-4.mb-3.mb-lg-0
                    figure.d-flex.justify-content-center.mt-3
                      img.w-auto(src="@/assets/curso/tema1/20.svg", alt="alt")
                  .col-lg-7
                    p.colr.text-bold <em>Examples. Listen and repeat:</em>
                    TarjetaAudio.color-secundario.bgr_2.mb-3(
                      texto="Jose had called me many times before noon"
                      :audio="require('@/assets/componentes/audios/tema1/16.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                      .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                    p José me había llamado muchas veces antes del mediodía.
                    TarjetaAudio.color-secundario.bgr_2.mb-3(
                      texto="Laura had bought her clothes before her birthday."
                      :audio="require('@/assets/componentes/audios/tema1/17.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                      .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                    p Laura había comprado su ropa antes de su compleaños. 
              div
                h4.text-center <em>Negative sentence</em>
                TraduccionT.color-acento-botones(:dialogo="dialogo5")(data-aos="flip-up")
                figure.d-flex.justify-content-center.mt-3.mb-3
                  img.w-auto(src="@/assets/curso/tema1/21.svg", alt="alt")
                .row
                  .col-lg-4.mb-3.mb-lg-0
                    figure.d-flex.justify-content-center.mt-3
                      img.w-auto(src="@/assets/curso/tema1/22.svg", alt="alt")
                  .col-lg-7
                    p.colr.text-bold <em>Examples. Listen and repeat:</em>
                    TarjetaAudio.color-secundario.bgr_2.mb-3(
                      texto="Jose hadn’t called me many times before noon"
                      :audio="require('@/assets/componentes/audios/tema1/18.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                      .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                    p José no me había llamado muchas veces antes del mediodía.
                    TarjetaAudio.color-secundario.bgr_2.mb-3(
                      texto="Laura hadn’t bought her clothes before her birthday."
                      :audio="require('@/assets/componentes/audios/tema1/19.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                      .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                    p Laura no había comprado su ropa antes de su compleaños. 
              div
                h4.text-center <em>Interrogative sentence</em>
                TraduccionT.color-acento-botones(:dialogo="dialogo6")(data-aos="flip-up")
                figure.d-flex.justify-content-center.mt-3.mb-3
                  img.w-auto(src="@/assets/curso/tema1/23.svg", alt="alt")
                .row
                  .col-lg-4.mb-3.mb-lg-0
                    figure.d-flex.justify-content-center.mt-3
                      img.w-auto(src="@/assets/curso/tema1/24.svg", alt="alt")
                  .col-lg-7
                    p.colr.text-bold <em>Examples. Listen and repeat:</em>
                    TarjetaAudio.color-secundario.bgr_2.mb-3(
                      texto="Had Jose called me many times before noon?"
                      :audio="require('@/assets/componentes/audios/tema1/20.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                      .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                    p ¿Jose me había llamado muchas veces antes del mediodía?
                    TarjetaAudio.color-secundario.bgr_2.mb-3(
                      texto="Had Laura bought her clothes before her birthday?"
                      :audio="require('@/assets/componentes/audios/tema1/21.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                      .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                    p ¿Laura había comprado su ropa antes de su cumpleaños?   
    
    span.colr <em>In the following conversation, you will see an interaction in which the past perfect tense is used in a real-life situation, pay attention to the context and complete using the structures of the past perfect: </em>
    span.colr_1 / En la siguiente conversación, verá una interacción en la que se utiliza el pretérito perfecto en una situación de la vida real, preste atención al contexto y complete utilizando las estructuras del pasado perfecto:

    Dialogo.color-primario.mb-5.mt-5(:dialogo="dialogo8")
      template(#nombre-actividad) Arrastrar y Soltar
      template(#titulo-actividad) <em>Past perfect practice</em> - Completa la conversación.
      template(#descripcion-actividad) Arrastra y suelta cada una de las palabras en el orden correcto.


      
</template>

<script>
import TraduccionT from '../components/TraduccionT.vue'
export default {
  name: 'Tema1',
  components: {
    TraduccionT,
  },
  data: () => ({
    dialogo1: [
      {
        textoIng:
          '<em>The past tenses refer to those actions that started and were completed in the past. They cover different verb tenses, such as: simple past, past continuous, past perfect, and past perfect continuous. In this component, we will focus on the <b>past perfect and the simple past</b>. These two tenses are commonly confused due to how similar they are; however, there are differences that give them some specific uses. Let’s see those uses in each tense and, then, we will compare their structures to see how they can complement each other.</em>',
        textoEsp:
          'Los tiempos pasados se refieren a aquellas acciones que se iniciaron y se completaron en el pasado. Abarcan diferentes tiempos verbales, como: pasado simple, pasado continuo, pasado perfecto y pasado perfecto continuo. <br> En este componente, nos centraremos en el <b>pasado perfecto y el pasado simple</b>. Estos dos tiempos se confunden comúnmente debido a lo similares que son, sin embargo, hay diferencias que les dan algunos usos específicos. Veamos esos usos en cada tiempo y, luego, compararemos sus estructuras para ver cómo pueden complementarse.',
      },
    ],
    dialogo2: [
      {
        textoIng:
          '<em>The simple past is quite an important tense when having a conversation at a basic, intermediate or advanced level. <br><br> Therefore, being able to express your ideas using the past simple becomes a must. In order to do it, it is necessary to go from producing basic sentences, using only one verb and one structure, to link two or more ideas with different structures previously seen. In order to do it, it becomes important to check the basics, let’s do it:</em>',
        textoEsp:
          'El pasado simple es un tiempo bastante importante cuando se mantiene una conversación a nivel básico, intermedio o avanzado.<br><br>Por lo tanto, ser capaz de expresar sus ideas utilizando el pasado simple, se convierte en algo imprescindible. Para ello, es necesario pasar de producir oraciones básicas, con un solo verbo y una sola estructura, a enlazar dos o más ideas con diferentes estructuras previamente vistas. Para ello, es importante comprobar lo básico, hagámoslo:',
      },
    ],
    dialogo3: [
      {
        textoIng:
          '<em>Now that we have learned the basics in order to use this grammar tense, let’s see how it is used in a real life  situation, pay attention to the following conversation. Complete the following conversation using the structures of the simple past.</em>',
        textoEsp:
          'Ahora que hemos aprendido lo básico para utilizar este tiempo gramatical, vamos a ver cómo se utiliza en una situación de la vida real, preste atención a la siguiente conversación. Complete la siguiente conversación utilizando las estructuras del pasado simple.',
      },
    ],
    dialogo4: [
      {
        textoIng:
          '<em>Past perfect is a grammar tense used to talk about actions that occurred before another action in the past. There are different ways of using the past perfect apart from the one just mentioned. One of them is the use of past perfect to use the “indirect speech”; besides, it is an important part of the third conditional, because past perfect is the tense used as the condition.<br><br>In order to work with the past perfect, you need to use all the verbs in past participle. <b>Irregular verbs are found in a list, and to turn the regular verbs into the past, you have to use the same rules seen in the past simple tense. Let’s see:</b></em>',
        textoEsp:
          'El pasado perfecto es un tiempo gramatical que se utiliza para hablar de acciones que ocurrieron antes de otra acción en el pasado. Hay diferentes formas de utilizar el pasado perfecto, aparte de la que acabamos de mencionar. Una de ellas es el uso del pasado perfecto para utilizar el "discurso indirecto"; además, es una parte importante del tercer condicional porque el pretérito perfecto es el tiempo que se utiliza como condición.<br><br>Para trabajar con el pasado perfecto, es necesario utilizar todos los verbos en participio pasado. <b>Los verbos irregulares se encuentran en una lista, y para convertir los verbos regulares en pasado, tiene que utilizar las mismas reglas que se vieron en el pasado simple. Veamos:</b>',
      },
    ],
    dialogo5: [
      {
        textoIng:
          '<em>When using the past perfect, it is also important to know how to work with negative sentences. The negative sentences are quite similar to the affirmative ones, the only difference is that you have to put the auxiliary verb in the negative form. However, the other elements keep exactly the same; the verb is also in past participle form and the order of the structure is the same. Let’s see how the structure works: </em>',
        textoEsp:
          'Al utilizar el pasado perfecto, también es importante saber cómo trabajar con oraciones negativas. Las oraciones negativas son bastante similares a las afirmativas, la única diferencia es que hay que poner el verbo auxiliar en la forma negativa. Sin embargo, los demás elementos se mantienen exactamente igual; el verbo también está en forma de participio pasado y el orden de la estructura es el mismo. Veamos cómo funciona la estructura:',
      },
    ],
    dialogo6: [
      {
        textoIng:
          '<em>Questions in past perfect are made in a similar way in which other grammar tenses work. The sentences start with the auxiliary verb in case of a yes/no question, and with an open question they start with a WH word. Let’s see how questions work.</em>',
        textoEsp:
          'Las preguntas en pasado perfecto se hacen de forma similar a como funcionan otros tiempos gramaticales. Las frases comienzan con el verbo auxiliar en el caso de una pregunta de sí o no, y con una pregunta abierta comienzan con una palabra WH. Veamos cómo funcionan las preguntas.',
      },
    ],
    dialogo7: {
      personajes: [
        {
          nombre: 'Carla',
          img: require('@/assets/curso/tema1/15.svg'),
        },
        {
          nombre: 'Rick',
          img: require('@/assets/curso/tema1/16.svg'),
        },
      ],
      dialogo: [
        {
          personaje: 'Carla',
          textoIng: '<em>Hi, Rick! How</em> *** <em>your meeting?</em>',
          textoEsp: '¡Hola, Rick! ¿Cómo estuvo tu reunión?',
          audio: require('@/assets/componentes/audios/tema1/12.mp3'),
          palabra: '<em>was</em>',
        },
        {
          personaje: 'Rick',
          textoIng:
            '<em>Amazing! I</em> *** <em>the new apps that my team developed last month!</em>',
          textoEsp:
            '¡Increíble! ¡Presenté las nuevas aplicaciones que mi equipo desarrolló el mes pasado!',
          audio: require('@/assets/componentes/audios/tema1/13.mp3'),
          palabra: '<em>presented</em>',
        },
        {
          personaje: 'Carla',
          textoIng: '<em>***</em> <em>the shareholders like them?</em>',
          textoEsp: '¿Les gustaron a los accionistas?',
          audio: require('@/assets/componentes/audios/tema1/14.mp3'),
          palabra: '<em>Did</em>',
        },
        {
          personaje: 'Rick',
          textoIng:
            '<em>Well, not all of them, but they</em> *** <em>the most important one! </em>',
          textoEsp: 'Bueno, no todas, ¡pero la más importante les encantó!',
          audio: require('@/assets/componentes/audios/tema1/15.mp3'),
          palabra: '<em>loved</em>',
        },
      ],
    },
    dialogo8: {
      personajes: [
        {
          nombre: 'Sharon',
          img: require('@/assets/curso/tema1/25.svg'),
        },
        {
          nombre: 'Anton',
          img: require('@/assets/curso/tema1/26.svg'),
        },
      ],
      dialogo: [
        {
          personaje: 'Sharon',
          textoIng:
            '<em>Had you</em> *** <em>the report before I texted you?</em>',
          textoEsp:
            '<em>¿Habías enviado el informe antes de que te enviara el mensaje?',
          audio: require('@/assets/componentes/audios/tema1/22.mp3'),
          palabra: '<em>sent</em>',
        },
        {
          personaje: 'Anton',
          textoIng:
            '<em>Yes, I</em> *** <em>even told my boss about it. Sorry, I didn’t know you had to add more information.</em>',
          textoEsp:
            'Sí, incluso se lo había dicho a mi jefe. Lo siento, no sabía que había que añadir más información.',
          audio: require('@/assets/componentes/audios/tema1/23.mp3'),
          palabra: '<em>had</em>',
        },
        {
          personaje: 'Sharon',
          textoIng: '<em>Luckily, I had</em> *** <em>him.</em>',
          textoEsp: 'Por suerte, le había informado.',
          audio: require('@/assets/componentes/audios/tema1/24.mp3'),
          palabra: '<em>informed</em>',
        },
        {
          personaje: 'Anton',
          textoIng:
            '<em>You know I had never</em> *** <em>such a mistake.</em>',
          textoEsp: 'Sabes que nunca había cometido un error así.',
          audio: require('@/assets/componentes/audios/tema1/25.mp3'),
          palabra: '<em>made</em>',
        },
      ],
    },
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
