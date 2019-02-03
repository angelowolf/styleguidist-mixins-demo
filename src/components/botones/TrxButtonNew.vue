<script>
import TrxButtonBase from './TrxButtonBase'

export default {
  name: 'TrxButtonNew',
  mixins: [TrxButtonBase],
  props: {
    icon: {
      default: 'plus',
      type: String
    },
    label: {
      default: 'Nuevo',
      type: String
    },
    type: {
      default: 'success',
      type: String
    },
    tooltip: {
      default: 'Nuevo',
      type: String
    }
  }
}
</script>
