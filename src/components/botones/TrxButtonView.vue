<script>
import TrxButtonBase from './TrxButtonBase'

export default {
  name: 'TrxButtonView',
  mixins: [TrxButtonBase],
  props: {
    icon: {
      default: 'eye',
      type: String
    },
    label: {
      default: '',
      type: String
    },
    type: {
      default: 'info',
      type: String
    },
    tooltip: {
      default: 'Ver detalle',
      type: String
    }
  }
}
</script>
