import {createNamespacedHelpers} from 'vuex'
const { mapState,mapActions,mapGetters } = createNamespacedHelpers('achievments');

const computed = {
  ...mapState({
    $_achievmentsData : 'achievmentsData',
    $_filterData : 'filter'
  }),
  ...mapGetters({
    $_filteredAchievments: 'filteredAchievments'
  })
}

const methods = {
  ...mapActions({
    "$_filterAchievments" : 'filter'
  })
}


export default {
  computed,
  methods
}
