<script>
import TrxButtonBase from './TrxButtonBase'

export default {
  name: 'TrxButtonDefault',
  mixins: [TrxButtonBase],
  props: {
    type: {
      default: 'default',
      type: String
    }
  }
}
</script>
