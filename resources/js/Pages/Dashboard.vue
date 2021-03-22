<template>
    <!-- Content Wrapper. Contains page content -->
<div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0 text-dark">Dashboard</h1>
          </div><!-- /.col -->
          <!--<div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active">Dashboard</li>
            </ol>
          </div> /.col -->
        </div><!-- /.row -->
      </div><!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->

    <!-- Main content -->
    <section class="content">
      <div class="container-fluid">

        <!-- /.row -->
        <!-- Main row -->
        <div class="row">
          <!-- Left col -->
          <section class="col-lg-7">
                      <div class="row">
          <div class="col-lg-4 col-6">
            <div class="small-box bg-info">
              <div class="inner">
                <h3>150</h3>
                <p>Total Files</p>
              </div>
              <div class="icon">
                <i class="ion ion-bag"></i>
              </div>
              <!--<a href="#" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a>-->
            </div>
          </div>
          <!-- ./col -->
          <div class="col-lg-4 col-6">
            <div class="small-box bg-success">
              <div class="inner">
                <h3>53<sup style="font-size: 20px">%</sup></h3>
                <p>Billing Rate</p>
              </div>
              <div class="icon">
                <i class="ion ion-stats-bars"></i>
              </div>
              <!--<a href="#" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a>-->
            </div>
          </div>
          <!-- ./col -->
          <div class="col-lg-4 col-6">
            <!-- small box -->
            <div class="small-box bg-warning" >
              <div class="inner">
                <h3>44</h3>
                <p>Forms Available</p>
              </div>
              <div class="icon">
                <i class="ion ion-person-add"></i>
              </div>
              <!--<a href="#" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a>-->
            </div>
          </div>
          <!-- ./col -->
          <div class="col-lg-3 col-6">
            <!-- small box -->
         
          </div>
          <!-- ./col -->
        </div>
            <!-- Custom tabs (Charts with tabs)-->
               <div class="card">
              <div class="card-header border-transparent">
                <h1 class="card-title"><strong>YOUR CASES</strong></h1>
              </div>
              <!-- /.card-header -->
              <div class="card-body p-0">
                <div class="table-responsive">
                  <table class="table m-0">
                    <thead>
                    <tr>
                      <th colspan="2">Title</th>
                      <th>Status</th>
                      <th>Documents</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td colspan="2"><a href="pages/examples/invoice.html" style="color:black;">OR9842</a> </td>
                      <td>COMPLETE</td>
                      <td>
                        <div class="sparkbar" data-color="#00a65a" data-height="20">90,80,90 </div>
                      </td>
                    </tr>
                    <tr>
                      <td colspan="2"><a href="pages/examples/invoice.html" style="color:black;">OR1848</a></td>
                      <td>PENDING</td>
                      <td>
                        <div class="sparkbar" data-color="#f39c12" data-height="20"> 90,80,-90,</div>
                      </td>
                    </tr>
                    <tr>
                      <td colspan="2"><a href="pages/examples/invoice.html" style="color:black;">consectetur adipisicing elit. Molestias, odio.</a></td>
                      <td>CLOSED</td>
                      <td>
                        <div class="sparkbar" data-color="#f56954" data-height="20">90,-80,90,7</div>
                      </td>
                    </tr>
                    </tbody>
                  </table>
                </div>
                <!-- /.table-responsive -->
              </div>
              <!-- /.card-body -->
              <div class="card-footer clearfix">
                <!--<a href="#" class="btn btn-sm btn-info float-left">Add File</a>-->
                <a href="case_files.html" class="btn btn-sm btn-secondary float-right">View All Cases</a>
              </div>
              <!-- /.card-footer -->
            </div>
          </section>
          <!-- right col (We are only adding the ID to make the widgets sortable)-->
          <section class="col-lg-5">

            <!-- Map card -->
            <div class="card">
              <div class="card-header border-0">
                <h3 class="card-title">
                   QUICK CASE ADD
                </h3>
                <!-- /.card-tools -->
              </div>
              <div class="card-body">
              <!-- /.card-header -->
              <!-- form start -->
              <form class="form-horizontal">
                <div class="card-body">
                  <div class="form-group row">
                   
                    <div class="col-sm-10">
                      <input type="text" class="form-control" id="inputEmail3" placeholder="Client Name"><br>
                    </div>
                    <br>
                    <div class="col-sm-10">
                      <input type="text" class="form-control" id="inputEmail3" placeholder="Title"><br>
                    </div>
                    <br>
                    <div class="col-sm-10">
                      <input type="text" class="form-control" id="inputEmail3" placeholder="Date"><br>
                    </div>
                    <br>
                    <div class="col-sm-10">
                    <input type="file" class="custom-file-input" id="customFile">
                      <label class="custom-file-label" for="customFile">Choose file</label>
                      </div>
                  </div>
                </div>
                <!-- /.card-body -->
                <div class="card-footer">
                  <button type="submit" class="btn btn-info">Save</button>
                  <button type="submit" class="btn btn-default float-right">Cancel</button>
                </div>
                <!-- /.card-footer -->
              </form>
                <!--<div id="world-map" style="height: 250px; width: 100%;"></div>-->
                
              </div>           
            </div>           
            <!-- Calendar -->
          </section>
          <!-- right col -->
        </div>
        <!-- /.row (main row) -->
      </div><!-- /.container-fluid -->
    </section>
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->
</template>

<script>
export default {
    name: 'dashboard'
}
</script>