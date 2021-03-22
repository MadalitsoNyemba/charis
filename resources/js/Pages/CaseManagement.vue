<template>

  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
   <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Case Management</h1>
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
         <div class="card">
            
          <ul>
            <li v-for="legal_case in cases" :key="legal_case.id">
              <router-link :to="{name:'SingleCase'}">{{legal_case.name}}</router-link> 
            </li>
          </ul>
            </div>
            <!-- /.card -->

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
    name: 'CaseManagement',

      data () {
    return {
        cases: [],
  
    }
  },
    mounted() {
  
            
             axios.get('/api/cases')
                .then(res => {
                    this.cases = res.data.data,

                console.log(res.data.data)
                }).catch(err => {
                console.log(err)
            })
        
            
            },
}
</script>