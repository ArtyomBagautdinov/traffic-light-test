import {createNamespacedHelpers} from 'vuex'
import sortState from '@/enums/sortState'
const { mapState,mapActions,mapGetters } = createNamespacedHelpers('achievments');

const computed = {
  ...mapState({
    $_achievmentsData : 'achievmentsData',
    $_filterData : 'filter',
    $_sortsData : 'sorts'
  }),
  ...mapGetters({
    $_filteredAchievments: 'filteredAchievments'
  }),
  buildedLink(){
    let link = `localhost:8080?`;
    link = (this.$_filterData.login === '') ? link : link+=`login=${this.$_filterData.login}&`; 
    link = (this.$_filterData.status === '') ? link : link+=`status=${this.$_filterData.status}&`; 
    link = (this.$_filterData.ordersMin === undefined) ? link : link+=`ordersMin=${this.$_filterData.ordersMin}&`; 
    link = (this.$_filterData.ordersMax === undefined) ? link : link+=`ordersMax=${this.$_filterData.ordersMax}&`; 
    link = (this.$_sortsData.sortByPosition === sortState.NOSORT) ? link : link+=`sortByPosition=${this.$_sortsData.sortByPosition}&`; 
    link = (this.$_sortsData.sortByStatus === sortState.NOSORT) ? link : link+=`sortByStatus=${this.$_sortsData.sortByStatus}&`; 
    link = (this.$_sortsData.sortByLogin === sortState.NOSORT) ? link : link+=`sortByLogin=${this.$_sortsData.sortByLogin}&`; 
    link = (this.$_sortsData.sortByOrders === sortState.NOSORT) ? link : link+=`sortByOrders=${this.$_sortsData.sortByOrders}&`; 
    return link.substring(0, link.length - 1);
  }
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
