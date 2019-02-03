<template>
  <button v-tooltip.hover="tooltip" :disabled="haciendo || disabled" @click.prevent="clickEnBoton" :class="`btn btn-${type} ${(size && ' btn-'+size)} ${clase}`" type="button"><i :class="[haciendo ? 'fa-circle-o-notch fa fa-spin' : `fa fa-${icon}`]"></i> {{haciendo ? newLabel : label}}</button>
</template>
<script>
  /**
   * Estructura base para todos los botones.
   * @mixin
   */
  export default {
    name: 'TrxButtonBase',
    props: {
      /**
       * Clase que se le agrega al botón.
       */
      clase: {
        default: '',
        type: String
      },
      /**
       * El tipo de botón.
       * `primary, primary2, info, default, default2, danger, danger2, warning, warning2, success`
       */
      type: {
        default: 'primary',
        type: String
      },
      /**
       * El tamaño del botón.
       * `xs, sm, md, lg`
       */
      size: {
        default: 'sm',
        type: String
      },
      /**
       * El icono a mostrar en el botón. Fontawesome **v4.x.x** . Nombre del icono **sin** "fa-".
       */
      icon: {
        default: 'plus',
        type: String
      },
      /**
       * Label a mostrar en el botón.
       */
      label: {
        default: '',
        type: String
      },
      /**
       * Label a mostrar en el botón, cuando **haciendo** es **true**.
       */
      newLabel: {
        default: '',
        type: String
      },
      /**
       * Deshabilita el botón.
       */
      disabled: {
        default: false,
        type: Boolean
      },
      /**
       * Deshabilita el boton, y muestra una animación de *cargando*.
       */
      haciendo: {
        default: false,
        type: Boolean
      },
      /**
       * El texto a mostrar en el tooltip del botón.
       */
      tooltip: {
        default: '',
        type: String
      }
    },
    methods: {
     /**
      * Emitido cuando el botón es clickeado.
      * @event click
      * @type {Event}
      */
     clickEnBoton (e) {
       this.$emit('click', e)
     }
   }
  }
</script>
