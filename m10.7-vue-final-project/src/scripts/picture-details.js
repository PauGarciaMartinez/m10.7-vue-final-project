import { ref } from 'vue'
import getAlbumDetails from './../composables/getAlbumDetails.js'

export default {
  name: 'Pictures',
  props: ['id'],
  setup(props) {
    const { album, error, loadAlbum} = getAlbumDetails(props.id)

    loadAlbum()

    return { album, error }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    }
  }
}