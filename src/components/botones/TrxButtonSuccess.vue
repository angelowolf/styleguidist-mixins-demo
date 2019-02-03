<script>
import TrxButtonBase from './TrxButtonBase'

export default {
  name: 'TrxButtonSuccess',
  mixins: [TrxButtonBase],
  props: {
    icon: {
      default: 'check',
      type: String
    },
    label: {
      default: '',
      type: String
    },
    type: {
      default: 'success',
      type: String
    },
    tooltip: {
      default: '',
      type: String
    }
  }
}
</script>
