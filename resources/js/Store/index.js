import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'
import moment from 'moment';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        count:0,
        timer: undefined,
        started: false,
        billings: [],
        activity_name: 'Add Activity',
        selected_case: 'Select Case'
        

    },
    getters:{
        billings: state => {
            return state.billings
        },
    },
    mutations: {
        START_TIMER(state) {
            state.count += 1;
        },
        RESET_TIMER(state){
            state.count = 0;
        },
        FETCH_BILLINGS(state, billings) {
            return state.billings = billings
        },
        UPDATE_COUNT(state, count) {
            return state.count = count
        },
        UPDATE_ACTIVITY_NAME(state, activity_name) {
            return state.activity_name = activity_name
        },
        UPDATE_CASE(state, selected_case) {
            return state.selected_case = selected_case
        },
    },
    actions: {
        fetchBillings({commit}) {
            axios.get('/api/billings')
                .then(res => {
                // console.log(res.data.data)
                    commit('FETCH_BILLINGS', res.data.data)
                }).catch(err => {
                console.log(err)
            })
        },
        fetchRunningBilling({commit,dispatch}) {
            axios.get('/api/billing/running')
                .then(res => {
                    if(res.data.status){
                    var a = moment(res.data.data.created_at);
                    var b = moment(new Date());
                     commit('UPDATE_COUNT', b.diff(a,'seconds'))
                     commit('UPDATE_ACTIVITY_NAME', res.data.data.activity_name)
                     commit('UPDATE_CASE', res.data.data.legal_case.name)
                     dispatch('start')
                    }
                   
                // console.log(moment(a).add(13, 'seconds').format('HH:mm:ss'))
                
                // console.log(b)
                    // commit('UPDATE_COUNT', res.data.data)
                }).catch(err => {
                console.log(err)
            })
        },
        start({commit, state}) {
            clearInterval(state.timer);
            state.started = true
            state.timer = setInterval(() => {
              commit('START_TIMER')
            }, 1000);
          },
          stop({commit,state}) {
            commit('RESET_TIMER')
            clearInterval(state.timer);
            commit('UPDATE_ACTIVITY_NAME', 'Add Activity')
            commit('UPDATE_CASE', 'Select Case')
            state.started = false

          },
          reset({commit,state}) {
            commit('RESET_TIMER')
            clearInterval(state.timer);
            state.started = false

          }
    }
})

export default store;