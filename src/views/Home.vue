<template>
  <div class="main">
    <table class="styled-table">
        <thead>
            <tr>
                <th>Место</th>
                <th>Логин</th>
                <th>Подтвержденные заказы</th>
                <th>Статус</th>
                <th><input type="text" placeholder="Логин" /></th>
                <th><input type="number" min="0" placeholder="Подтвержденные заказы"/></th>
                <th><input type="text" placeholder="Статус"/></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in $_filteredAchievments" :key="item.id">
                <td>{{item.position}}</td>
                <td>{{item.login}}</td>
                <td>{{item.confirmedOrders}}</td>
                <td>{{item.status}}</td>
                <td v-for="i in 3" :key="i"></td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
    import achievmentsMixin from '@/mixins/achievmentsMixin'
    export default {
    name: 'Home',
    mixins : [
        achievmentsMixin
    ]
}
</script>


<style scoped lang='scss'>
    .main {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .styled-table {
      border-collapse: collapse;
      margin: 25px 0;
      font-size: 0.9em;
      font-family: sans-serif;
      min-width: 320px;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.378);

      thead {
        tr {
          background-color: #6000af;
          color: #ffffff;
          text-align: left;
        }
      }

      th {
        padding: 12px 15px;
      }

      td {
        padding: 12px 15px;
      }

      tbody {
        tr {
          border-bottom: 1px solid #dddddd;
          transition: .2s;
          cursor: pointer;

          &:nth-of-type(even) {
              background-color: #f3f3f3;
          }

          &:last-of-type  {
              border-bottom: 2px solid #6f00ca;
          }

          &:hover {
            color: white;
            background-color: #6000af;
          }
          
        }

      }

    }
</style>