<template>
   <table class="app-table">
        <thead>
            <tr>
                <th @click="useSort('sortByPosition')">
                    <img src="@/assets/icons/sort.svg" alt="sort">
                </th>
                <th @click="useSort('sortByLogin')">
                    <img src="@/assets/icons/sort.svg" alt="sort">
                </th>
                <th @click="useSort('sortByOrders')">
                    <img src="@/assets/icons/sort.svg" alt="sort">
                </th>
                <th @click="useSort('sortByStatus')">
                    <img src="@/assets/icons/sort.svg" alt="sort">
                </th>
            </tr>
            <tr>
                <th>Место</th>
                <th>Логин</th>
                <th>Подтвержденные заказы</th>
                <th>Статус</th>
            </tr>
        </thead>
        <tbody>
            <tr v-if="$_filteredAchievments.length===0">
                <td v-for="i in 4" :key="i">нет совпадений</td>
            </tr>
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
    import sortState from '@/enums/sortState';

    export default {
        mixins : [
            achievmentsMixin
        ],
        methods : {
            useSort(tableField){

                if(this.$_sortsData[tableField] === sortState.NOSORT){
                    this.$_sortAchievments({
                        field : tableField,
                        mode : sortState.FORWARD
                    });
                }
                else if(this.$_sortsData[tableField] === sortState.FORWARD){
                     this.$_sortAchievments({
                        field : tableField,
                        mode : sortState.REVERSED
                    });
                }
                else if(this.$_sortsData[tableField] === sortState.REVERSED){
                    this.$_sortAchievments({
                        field : tableField,
                        mode : sortState.FORWARD
                    });
                }
            }
        }
    }
</script>
