<template>
   <table class="styled-table">
        <thead>
            <tr>
                <th>Место</th>
                <th>Логин</th>
                <th>Подтвержденные заказы</th>
                <th>Статус</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in $_filteredAchievments" :key="item.id">
                <td>{{item.position}}</td>
                <td>{{item.login}}</td>
                <td>{{item.confirmedOrders}}</td>
                <td>{{item.status}}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
    import achievmentsMixin from '@/mixins/achievmentsMixin'
    export default {
        mixins : [
            achievmentsMixin
        ],
    }
</script>
