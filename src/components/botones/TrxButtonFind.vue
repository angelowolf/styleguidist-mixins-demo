<script>
import TrxButtonBase from './TrxButtonBase'

export default {
  name: 'TrxButtonFind',
  mixins: [TrxButtonBase],
  props: {
    icon: {
      default: 'search',
      type: String
    },
    label: {
      default: 'Buscar',
      type: String
    },
    newLabel: {
      default: 'Buscando',
      type: String
    },
    type: {
      default: 'primary',
      type: String
    },
    tooltip: {
      default: 'Buscar',
      type: String
    }
  }
}
</script>
