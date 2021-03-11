<template>
    <div class="app-card">
        <input v-model="login" @change="useFilter" class="app-input" type="text" placeholder="Логин">
        <input v-model="status" @change="useFilter" class="app-input" type="text" placeholder="Статус">
        <input v-model="ordersMin" @change="useFilter" type="number" min="0" placeholder="Минимум заказов"/>
        <input v-model="ordersMax" @change="useFilter" type="number" min="0" placeholder="Максимум заказов"/>
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
                ordersMin : null,
                ordersMax : null,
            }
        },
        methods : {
            useFilter(){
                this.$_filterAchievments({
                    login : this.login,
                    status: this.status,
                    ordersMin : this.ordersMin === '' ? null :  this.ordersMin,
                    ordersMax: this.ordersMax === '' ? null :  this.ordersMax,
                })
                
            }
        },
        mounted(){
            const { login, status, ordersMin, ordersMax} = this.$route.query
            this.login = login || '';
            this.status = status || '';
            this.ordersMin = ordersMin || null;
            this.ordersMax = ordersMax || null;
        }
    }
</script>
