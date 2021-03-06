<template>
  <div class="main">
    <app-table/>
    <app-filter/>
    <p>localhost:8080?login={{$_filterData.login}}&status={{$_filterData.status}}&ordersMin={{$_filterData.ordersMin}}&ordersMax={{$_filterData.ordersMax}}</p>
  </div>
</template>

<script>
    import achievmentsMixin from '@/mixins/achievmentsMixin'
    import appFilter from '../components/appFilter.vue'
    import appTable from '../components/appTable.vue'
    export default {
    name: 'Home',
    components : {
        appFilter,
        appTable
    },
    mixins : [
        achievmentsMixin
    ],
    data(){
        return {

        }
    },
    // computed : {
    //     link: ()=>{
            // return `localhost:8080?login=${this.$_filterData}&status=${this.$_filterData}&ordersMin=${this.$_filterData}&ordersMax=${this.$_filterData}`
    //     }
    // },
    methods : {
    },
    mounted(){
        const { login, status, ordersMin, ordersMax} = this.$route.query
        console.log(login,status,ordersMin,ordersMax);

        this.$_filterAchievments({
                    login : login || "",
                    status: status || "",
                    ordersMin : ordersMin || 0,
                    ordersMax: ordersMax || 10000
                })
        
    }
}
</script>


// ?login=smith&status=ценитель%20красоты&ordersMin=0&ordersMax=400

// У трафика из инстаграма будет источник — instagram