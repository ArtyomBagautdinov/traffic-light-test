import sortState from '@/enums/sortState'
import router from '@/router'

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
            id : 64,
            position: 6,
            login: 'cat@mail.ru',
            confirmedOrders: 1,
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
            id : 16,
            position: 4,
            login: 'dog@mail.ru',
            confirmedOrders: 64,
            status: 'рыбак'
        },
        {
            id : 4,
            position: 3,
            login: 'mask@gmail.com',
            confirmedOrders: 98,
            status: 'Конкурент минздрава'
        },
        {
            id : 32,
            position: 5,
            login: 'nightmare@mail.ru',
            confirmedOrders: 34,
            status: 'охотник'
        }
    ],
    filter: {
        login : '',
        ordersMin: null,
        ordersMax: null,
        status: ''
    },
    sorts : {
        sortByPosition: sortState.NOSORT,
        sortByStatus : sortState.NOSORT,
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
        
        helpers.replaceRoute(state);
    },
    SORT: (state,data) => {
        state.sorts[data.field] = data.mode;
        for(let key in state.sorts) {
            if(key != data.field) state.sorts[key] = sortState.NOSORT;
        }

        helpers.replaceRoute(state);
    }
}
  
const helpers = {
    searchAchievments(login,status,ordersMin,ordersMax) {
      return (currentObject) => {

        let lessThan = true;
        let moreThan = true;
        const coincidence =  currentObject.login.toLowerCase().includes(login.toLowerCase()) && currentObject.status.toLowerCase().includes(status.toLowerCase());
        if(ordersMax != null) lessThan = currentObject.confirmedOrders <= ordersMax;
        if(ordersMin != null) moreThan = currentObject.confirmedOrders >= ordersMin;

        return lessThan && moreThan && coincidence;
        
      }
    },
    sortBy(arr,mode,field){
        if(mode === sortState.FORWARD){
            return arr.sort((x,y)=> {
                if(x[field] > y[field]) return 1;
                if(x[field] < y[field]) return -1;
                return 0;
            })
        }
        if(mode === sortState.REVERSED){
            return arr.sort((x,y)=> {
                if(x[field] < y[field]) return 1;
                if(x[field] > y[field]) return -1;
                return 0;
            })
        }
        return arr;
    },
    replaceRoute(state){

        if(state.sorts.sortByPosition != sortState.NOSORT) {

            router.replace(
                { 
                    name: "Home", 
                    query: {
                        login: state.filter.login, 
                        status: state.filter.status, 
                        ordersMin: state.filter.ordersMin || null,
                        ordersMax: state.filter.ordersMax || null,
                        sortByPosition: state.sorts.sortByPosition
                    } 
                })

        }
        else if(state.sorts.sortByStatus != sortState.NOSORT) {

            router.replace(
                { 
                    name: "Home", 
                    query: {
                        login: state.filter.login, 
                        status: state.filter.status, 
                        ordersMin: state.filter.ordersMin || null,
                        ordersMax: state.filter.ordersMax || null,
                        sortByStatus : state.sorts.sortByStatus
                    } 
                })

        }
        else if(state.sorts.sortByLogin != sortState.NOSORT) {

            router.replace(
                { 
                    name: "Home", 
                    query: {
                        login: state.filter.login, 
                        status: state.filter.status, 
                        ordersMin: state.filter.ordersMin || null,
                        ordersMax: state.filter.ordersMax || null,
                        sortByLogin : state.sorts.sortByLogin
                    } 
                })

        }
        else if(state.sorts.sortByOrders != sortState.NOSORT) {

            router.replace(
                { 
                    name: "Home", 
                    query: {
                        login: state.filter.login, 
                        status: state.filter.status, 
                        ordersMin: state.filter.ordersMin || null,
                        ordersMax: state.filter.ordersMax || null,
                        sortByOrders : state.sorts.sortByOrders
                    } 
                })

        }
        else{

            router.replace(
                { 
                    name: "Home", 
                    query: {
                        login: state.filter.login, 
                        status: state.filter.status, 
                        ordersMin: state.filter.ordersMin || null,
                        ordersMax: state.filter.ordersMax || null
                    } 
                })

        }
    }

}
  
const getters = {
    filteredAchievments: (state) => {
    
      let newAchievments = JSON.parse(JSON.stringify(state.achievmentsData));

      console.log(newAchievments);
      newAchievments = helpers.sortBy(
          newAchievments,
          state.sorts.sortByPosition,
          'position'
        );

      newAchievments = helpers.sortBy(
          newAchievments,
          state.sorts.sortByStatus,
          'status'
          );

      newAchievments = helpers.sortBy(
          newAchievments,
          state.sorts.sortByLogin,
          'login'
          );

      newAchievments = helpers.sortBy(
          newAchievments,
          state.sorts.sortByOrders,
          'confirmedOrders'
          );

      return newAchievments.filter(
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
    },
    sort({commit},data){
        commit('SORT',data);
    } 
}
  
export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
  