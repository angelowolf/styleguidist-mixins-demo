<script>
import TrxButtonBase from './TrxButtonBase'

export default {
  name: 'TrxButtonSave',
  mixins: [TrxButtonBase],
  props: {
    icon: {
      default: 'save',
      type: String
    },
    label: {
      default: 'Guardar',
      type: String
    },
    newLabel: {
      default: 'Guardando',
      type: String
    },
    type: {
      default: 'success',
      type: String
    },
    tooltip: {
      default: 'Guardar',
      type: String
    }
  }
}
</script>
