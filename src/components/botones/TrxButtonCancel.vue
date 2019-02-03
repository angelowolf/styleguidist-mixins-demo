<script>
import TrxButtonBase from './TrxButtonBase'

export default {
  name: 'TrxButtonCancel',
  mixins: [TrxButtonBase],
  props: {
    icon: {
      default: 'ban',
      type: String
    },
    label: {
      default: 'Cancelar',
      type: String
    },
    newLabel: {
      default: 'Cancelando',
      type: String
    },
    type: {
      default: 'primary',
      type: String
    },
    tooltip: {
      default: 'Cancelar',
      type: String
    }
  }
}
</script>
