import {createNamespacedHelpers} from 'vuex'
const { mapState,mapActions,mapGetters } = createNamespacedHelpers('achievments');

const computed = {
  ...mapState({
    $_achievmentsData : 'achievmentsData',
    $_filterData : 'filter',
    $_sortsData : 'sorts'
  }),
  ...mapGetters({
    $_filteredAchievments: 'filteredAchievments'
  })
}

const methods = {
  ...mapActions({
    $_filterAchievments : 'filter',
    $_sortAchievments : 'sort' 
  })
}


export default {
  computed,
  methods
}
