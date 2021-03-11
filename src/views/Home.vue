<template>
  <div class="main">
    <app-filter/>
    <app-table/>
  </div>
</template>

<script>
    import achievmentsMixin from '@/mixins/achievmentsMixin'
    import appFilter from '@/components/appFilter.vue'
    import appTable from '@/components/appTable.vue'
    export default {
    components : {
        appFilter,
        appTable
    },
    mixins : [
        achievmentsMixin
    ],
    mounted(){
       this.initLink();
    },
    methods: {
        initLink(){
             const { 
                login, 
                status, 
                ordersMin, 
                ordersMax, 
                sortByPosition, 
                sortByStatus, 
                sortByLogin,
                sortByOrders
            } = this.$route.query;

            this.$_filterAchievments({
                        login : login || '',
                        status: status || '',
                        ordersMin : ordersMin || null,
                        ordersMax: ordersMax || null
                    });

            if(sortByPosition !== undefined){
                this.$_sortAchievments({
                    field : 'sortByPosition',
                    mode : parseInt(sortByPosition)
                })
            }

            if(sortByStatus !== undefined){
                this.$_sortAchievments({
                    field : 'sortByStatus',
                    mode : parseInt(sortByStatus)
                })
            }
            
            if(sortByLogin !== undefined){
                this.$_sortAchievments({
                    field : 'sortByLogin',
                    mode : parseInt(sortByLogin)
                })
            }

            if(sortByOrders !== undefined){ 
                this.$_sortAchievments({
                    field : 'sortByOrders',
                    mode : parseInt(sortByOrders)
                })
            } 
        }
    }
}
</script>
