<template>

  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
   <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Single Case</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active">Case Management</li>
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

            <!-- <h3 class="m-0 text-dark">Add File</h3> -->
         
              <br><br>
            <div>
                <span class="btn btn-sm btn-warning float-right">Upload Document</span>

              <h2>Documents</h2>

                </div>

         <div class="card">
                <ul>
                    <li v-for="docs in documents" :key="docs.id">{{docs.name}}</li>
                </ul>


            
            
          
            </div>
            <!-- /.card -->
                <br><br>

<hr>
                <br><br>
                <div>
                <span class="btn btn-sm btn-warning float-right">Print Receipt</span>

              <h2>Billings</h2>

                </div>

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
                  <!-- <div class="col-md-1 "><button class="btn btn-danger float-right" @click="deleteBilling(item.id)">Delete</button></div> -->
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
  <!-- /.content-wrapper -->
</template>

<script>
export default {
    name: 'SingleCase',

      data () {
    return {
        documents: [],
        billings: [],
  
    }
  },
    mounted() {
  
            
             axios.get('/api/cases/singleCase/1')
                .then(res => {
                    this.documents = res.data.documents_data,
                    this.billings = res.data.billings_data,

                console.log(res.data.data)
                }).catch(err => {
                console.log(err)
            })
        
            
            },

            methods:{
     
      
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