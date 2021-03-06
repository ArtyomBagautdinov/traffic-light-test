<template>
  <div class="filters">
        <h2>Фильтры</h2>
        <input v-model="login" @change="useFilter" class="styled-input" type="text" placeholder="Логин">
        <input v-model="status" @change="useFilter" class="styled-input" type="text" placeholder="Статус">
        <input v-model="ordersMin" @change="useFilter" type="number" min="0" placeholder="Минимум"/>
        <input v-model="ordersMax" @change="useFilter" type="number" min="0" placeholder="Максимум"/>
    </div>
</template>

<script>
    import achievmentsMixin from '@/mixins/achievmentsMixin'
    export default {
        mixins : [
            achievmentsMixin
        ],
        data(){
            return {
                login: '',
                status: '',
                ordersMin : 0,
                ordersMax : 320
            }
        },
        methods : {
            useFilter(){
                this.$_filterAchievments({
                    login : this.login,
                    status: this.status,
                    ordersMin : this.ordersMin,
                    ordersMax: this.ordersMax
                })
            }
        },
        mounted(){
            const { login, status, ordersMin, ordersMax} = this.$route.query
            this.login = login || '';
            this.status = status || '';
            this.ordersMin = ordersMin || 0;
            this.ordersMax = ordersMax || 10000000;
        }
    }
</script>
