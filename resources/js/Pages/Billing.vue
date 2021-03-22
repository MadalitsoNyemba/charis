<template>
    <!-- Content Wrapper. Contains page content -->
<div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Bills</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active">All Bills</li>
            </ol>
          </div>
        </div>
      </div><!-- /.container-fluid -->
    </section>

    <!-- Main content -->
    <section class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
 <!-- <form @submit="checkForm" > -->
                   
          <div class="card" style="padding:10px">
              <div class="row">
                 
                         
                <div class="col-md-3">
                  <input type="text" id="activity_name" :disabled="started" v-model="activity_name" class="form-control" :placeholder="this.$store.state.activity_name">
                  <!-- <h3>{{this.$store.state.activity_name}}</h3> -->
                </div>
                <div class="col-md-3">
                  <select class="form-control" id="selected_case" :disabled="started" v-model="selected_case" name="selected_case">
                   <option disabled value="">{{this.$store.state.selected_case}}</option> 
                   <option v-bind:value="legal_case.id" v-for="legal_case in cases" :key="legal_case.id">{{legal_case.name}}</option>
                  </select>
                  <!-- <h3>{{this.$store.state.selected_case}}</h3> -->

                </div>
                <div class="col-md-1">
                </div>
                <div class="col-md-2">
                <p style="font-size:25px">{{ formattedElapsedTime }}</p>
                
                </div>
              
            
               

                <div class="col-md-3">
                  <div class="input-group-append">
                      <!-- <input id="add-new-event" type="submit" class="btn btn-block btn-primary" value="Start Timer"/> -->

                    <button v-if="!started" @click="startTimer" :disabled="!isComplete" id="add-new-event" type="button" class="btn btn-block btn-primary">Start Timer</button>
                    <div v-else class="row">
                        <!-- <div class="col-md-6"><button @click="stopTimer" id="add-new-event" type="button" class="btn btn-block btn-info">Pause Timer</button></div> -->
                        <div class="col-md-12"><button @click="stopTimer" id="add-new-event" type="button" class="btn btn-block btn-danger">Stop Timer</button></div>
                    </div>
                    
             
                  </div>
                </div>

              </div>
            </div>
                <!-- </form> -->


            <div class="card" v-for="(bill, index) in billings"  :key="bill.id">
                 <div class="card-footer clearfix">
                <span class="btn btn-sm btn-info float-left">{{formatDate(index)}}</span>
                <span class="float-right" style="color:black;font-size:18px">Total: {{formatTime(bill.total)}}</span>
               <!--  <a href="j#" class="btn btn-sm btn-secondary float-right">View All Files</a> -->
              </div>

              <div class="container" v-for="item in bill.data" :key="item.id">
              <div class="row" style="padding:10px;border-bottom:1px #ccc solid;">

                  <div class="col-md-3">{{item.activity_name}}</div>
                  <div class="col-md-3">{{item.legal_case.name}}</div>
                  <div class="col-md-3">
                      <div class="row">
                          <div class="col-md-5">{{formatDateTime(item.start_time)}}</div>
                          <div class="col-md-2">-</div>
                          <div class="col-md-5">{{formatDateTime(item.end_time)}}</div>
                      </div>
                  </div>
                  <div class="col-md-2 "><span class="float-right">{{formatTime(item.duration)}}</span></div>
                  <div class="col-md-1 "><button class="btn btn-danger float-right" @click="deleteBilling(item.id)">Delete</button></div>
              </div>
              </div>
            </div>

            
            <!-- /.card -->
          </div>
          <!-- /.col -->
        </div>
        <!-- /.row -->
      </div>
      <!-- /.container-fluid -->
    </section>
    <!-- /.content -->
  </div>
</template>

<script>
import {mapState, mapGetters, mapActions} from 'vuex';
// import moment from 'moment';
import axios from 'axios';
export default {
    name: 'billing',
    data () {
    return {
        cases: [],
        errors: [],
        activity_name: '',
        selected_case: '',
    }
  },
    mounted() {
        
            this.$store.dispatch('fetchBillings'),
           
            this.$store.dispatch('fetchRunningBilling'),
             axios.get('/api/cases')
                .then(res => {
                    this.cases = res.data.data,

                console.log(res.data.data)
                }).catch(err => {
                console.log(err)
            })
        
            
            },
    computed:{
        ...mapState({
            started: state => state.started
            
        }),
         ...mapGetters([
                    'billings',
                ]),
    formattedElapsedTime() {
      const date = new Date(null);
      date.setSeconds(this.$store.state.count*1000 / 1000);
      const utc = date.toUTCString();
      return utc.substr(utc.indexOf(":") - 2, 8);
    },
    isComplete () {
    return this.activity_name && this.selected_case;
  },
  
   
           
    },
    methods:{
        startTimer(){
            this.$store.dispatch('start')
             axios.post('/api/billing/add', {
                 case_id: this.selected_case,
                 activity_name: this.activity_name
                })
                .then((response) => {
                console.log(response);
                }, (error) => {
                console.log(error);
                });
        
        },
        stopTimer(){

            this.$store.dispatch('stop')
         axios.get('/api/billing/stop')
                .then(res => {
                   console.log(res)  
            this.$store.dispatch('fetchBillings')
                }).catch(err => {
                console.log(err)
            })

            this.activity_name = '';
            this.selected_case = '';
        },
        resetTimer(){
            this.$store.dispatch('reset')
        },
          formatDate(myDate){
        // get from-now for this date
    var fromNow = moment( myDate ).fromNow();

    // ensure the date is displayed with today and yesterday
    return moment( myDate ).calendar( null, {
        // when the date is closer, specify custom values
        lastWeek: '[Last] dddd',
        lastDay:  '[Yesterday]',
        sameDay:  '[Today]',
        sameElse: 'DD MMMM, YYYY'
        // when the date is further away, use from-now functionality             
        // sameElse: function () {
        //     return "[" + fromNow + "]";
        // }
    });
    },
    formatTime(time) {
      const date = new Date(null);
      date.setSeconds((time*1000) / 1000);
      const utc = date.toUTCString();
      return utc.substr(utc.indexOf(":") - 2, 8);
    },
    formatDateTime(date) {
      
      return moment(date).format('HH:mm:ss');
    },
    deleteBilling(id){
      if(confirm("Do you really want to delete entry?")){
             axios.get('/api/billing/delete/'+id)
                .then((response) => {
                  this.$store.dispatch('fetchBillings')
                console.log(response);
                }, (error) => {
                console.log(error);
                });
      }
        
        },

     
    }
}
</script>