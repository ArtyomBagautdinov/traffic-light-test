import sortState from '@/enums/sortState'


const state = {
    achievmentsData : [
        {
            id : 0,
            position: 1,
            login: 'smith@gmail.com',
            confirmedOrders: 312,
            status: 'Ценитель красоты'
        },
        {
            id : 2,
            position: 2,
            login: 'lenin@gmail.com',
            confirmedOrders: 120,
            status: 'Поставщик аксессуаров'
        },
        {
            id : 4,
            position: 3,
            login: 'mask@gmail.com',
            confirmedOrders: 98,
            status: 'Конкурент минздрава'
        },
        {
            id : 16,
            position: 4,
            login: 'dog@mail.ru',
            confirmedOrders: 64,
            status: 'рыбак'
        },
        {
            id : 32,
            position: 5,
            login: 'nightmare@mail.ru',
            confirmedOrders: 34,
            status: 'охотник'
        },
        {
            id : 64,
            position: 6,
            login: 'cat@mail.ru',
            confirmedOrders: 1,
            status: 'Ценитель красоты'
        }
    ],
    filter: {
        login : '',
        ordersMin: 0,
        ordersMax: 1000000,
        status: ''
    },
    sorts : {
        sortByPosition: sortState.NOSORT,
        sortByStatus : sortState.FORWARD,
        sortByLogin : sortState.NOSORT,
        sortByOrders: sortState.NOSORT
    }
}
  
const mutations = {
    FILTER: (state,data) =>{
        state.filter = {
            login : data.login,
            ordersMin : data.ordersMin,
            ordersMax : data.ordersMax,
            status : data.status
        }
    }
}
  
const helpers = {
    searchAchievments(login,status,ordersMin,ordersMax) {
      return (currentObject) => {
        return currentObject.login.toLowerCase().includes(login.toLowerCase()) && 
        currentObject.status.toLowerCase().includes(status.toLowerCase()) && 
        currentObject.confirmedOrders <= ordersMax && 
        currentObject.confirmedOrders >= ordersMin;
      }
    },
    sortBy(arr,mode,field){
        if(mode === sortState.FORWARD){
            arr.sort((x,y)=> {
                if(x[field] > y[field]) return 1;
                if(x[field] < y[field]) return -1;
                return 0;
            })
        }
        if(mode === sortState.REVERSED){
            arr.sort((x,y)=> {
                if(x[field] < y[field]) return 1;
                if(x[field] > y[field]) return -1;
                return 0;
            })
        }
        return arr;
    }

}
  
const getters = {
    filteredAchievments: (state) => {

      state.achievmentsData = helpers.sortBy(state.achievmentsData,state.sorts.sortByPosition,'position');

      state.achievmentsData = helpers.sortBy(state.achievmentsData,state.sorts.sortByStatus,'status');

      state.achievmentsData = helpers.sortBy(state.achievmentsData,state.sorts.sortByLogin,'login');

      state.achievmentsData = helpers.sortBy(state.achievmentsData,state.sorts.sortByOrders,'confirmedOrders');

      return state.achievmentsData.filter(
            helpers.searchAchievments(
                state.filter.login,
                state.filter.status,
                state.filter.ordersMin,
                state.filter.ordersMax
                )
            )
    }
}

const actions = {
    filter({commit}, data){
        commit('FILTER', data);
    }
}
  
export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
  