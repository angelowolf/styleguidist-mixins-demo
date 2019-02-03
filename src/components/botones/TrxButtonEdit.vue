<script>
import TrxButtonBase from './TrxButtonBase'

export default {
  name: 'TrxButtonEdit',
  mixins: [TrxButtonBase],
  props: {
    icon: {
      default: 'edit',
      type: String
    },
    label: {
      default: '',
      type: String
    },
    type: {
      default: 'primary',
      type: String
    },
    tooltip: {
      default: 'Editar',
      type: String
    }
  }
}
</script>
