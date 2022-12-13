<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    
    .bg_grad-13
      .row.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/sintesis/1.png", alt="alt")
        .col-lg-7.d-flex.align-items-center
          .tarjeta.bgr.p-4
            p.colr <em>Up to this point, we have been able to appreciate everything that has to do with the past perfect tense, the past simple, the third conditional, argumentative expressions, and the use of pronouns, relative clauses, modal verbs, and verbs as subjects, which is why we invite you to consider the following conceptual scheme that summarizes the subject treated:</em>
            p.mb-0.colr_1 Hasta aquí, hemos podido apreciar todo lo que tiene que ver con el pretérito perfecto, el pretérito simple, el tercer condicional, las expresiones argumentativas y el uso de pronombres, cláusulas relativas, verbos modales y verbos como sujetos, por lo que le invitamos a considerar el siguiente esquema conceptual que resume el tema tratado :
    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/sintesis/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
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
