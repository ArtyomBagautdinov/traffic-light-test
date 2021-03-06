<template>
  <div class="main">
    <app-table/>
    <app-filter/>
    <a :href="link">{{link}}</a>
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
            link: {
                base: 'localhost:8080?',
                login: '',
                status: '',
                orderMin: '',
                orderMax: ''
            }
        }
    },
    methods : {
    },
    mounted(){
        // const { utm_source, utm_medium, utm_campaign, utm_term, utm_content } = this.$route.query
    }
}
</script>


// o2-club.ru?utm_source=instagram&utm_medium=cpc&utm_campaign=first_line&utm_content=dom_1

// У трафика из инстаграма будет источник — instagram