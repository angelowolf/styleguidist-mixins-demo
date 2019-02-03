<script>
import TrxButtonBase from './TrxButtonBase'

export default {
  name: 'TrxButtonAssign',
  mixins: [TrxButtonBase],
  props: {
    icon: {
      default: '',
      type: String
    },
    label: {
      default: 'Asignar',
      type: String
    },
    type: {
      default: 'success',
      type: String
    },
    tooltip: {
      default: 'Asignar',
      type: String
    }
  }
}
</script>
