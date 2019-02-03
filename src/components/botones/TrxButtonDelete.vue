<script>
import TrxButtonBase from './TrxButtonBase'

export default {
  name: 'TrxButtonDelete',
  mixins: [TrxButtonBase],
  props: {
    icon: {
      default: 'trash',
      type: String
    },
    label: {
      default: '',
      type: String
    },
    type: {
      default: 'danger',
      type: String
    },
    tooltip: {
      default: 'Eliminar',
      type: String
    }
  }
}
</script>
