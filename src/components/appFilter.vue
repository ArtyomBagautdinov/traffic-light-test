<template>
    <div class="app-card">
        <input v-model="login" @change="useFilter" class="app-input" type="text" placeholder="Логин">
        <input v-model="status" @change="useFilter" class="app-input" type="text" placeholder="Статус">
        <div>
            <span>Минимум подтвержденных заказов:</span>
            <input v-model="ordersMin" @change="useFilter" type="number" min="0" placeholder="Минимум"/>
        </div>
        <div>
            <span>Максимум подтвержденных заказов:</span>
             <input v-model="ordersMax" @change="useFilter" type="number" min="0" placeholder="Максимум"/>
        </div>
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
                ordersMax : 320,
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
