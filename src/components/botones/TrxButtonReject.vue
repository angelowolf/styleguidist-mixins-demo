<script>
import TrxButtonBase from './TrxButtonBase'

export default {
  name: 'TrxButtonReject',
  mixins: [TrxButtonBase],
  props: {
    icon: {
      default: 'ban',
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
      default: '',
      type: String
    }
  }
}
</script>
