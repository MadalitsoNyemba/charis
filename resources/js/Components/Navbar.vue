<template>
<div>
  <!-- Navbar -->
  <nav class="main-header navbar navbar-expand navbar-white navbar-light" >
    <!-- Left navbar links -->
    <!--<ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
      </li>
      <a href="index3.html" class="nav-link"> <img src="dist/img/charis.png" alt="User Image" style="margin-top:-10px;" ></a>
    </ul>-->

    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
      </li>
      <a href="ssss" class="nav-link"> <img src="assets/dist/img/charis.png" alt="User Image" style="margin-top:-10px;" ></a>
    </ul>

    <!-- SEARCH FORM -->
    <form class="form-inline" style="margin-left:60px;">
      <div class="input-group input-group-md">
        <input class="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search">
        <div class="input-group-append">
          <button class="btn btn-navbar" type="submit">
            <i class="fas fa-search"></i>
          </button>
        </div>
      </div>
    </form>

    <!-- Right navbar links -->
    <ul class="navbar-nav ml-auto">
         <a class="btn btn-app" href="ssss">
                  <i class="fas fa-copy" style="color:black;"></i> Files
                </a>
                <router-link :to="{name:'billing'}">
                <span class="btn btn-app" >
                  <i class="fas fa-dollar-sign" style="color:black;"></i>
                  <span v-if="!started">Billing</span> 
                  <span v-else>{{ formattedElapsedTime }}</span> 
                </span>
                </router-link>
      <!-- Messages Dropdown Menu -->
    
      <!-- Notifications Dropdown Menu -->

     
    </ul>
  </nav>
  <!-- /.navbar -->

  <!-- Main Sidebar Container -->
    <!-- Main Sidebar Container -->
  <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
  
    <!-- Sidebar -->
    <div class="sidebar">
      <!-- Sidebar user panel (optional) -->
      <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="image">
          <img src="assets/dist/img/user2-160x160.jpg" class="img-circle elevation-2" alt="User Image">
        </div>
        <div class="info">
          <a href="#" class="d-block">ME</a>
        </div>
      </div>

      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library -->
          <li class="nav-item">
        <router-link :to="{name:'dashboard'}">
              <span class="nav-link">

              <i class="nav-icon fas fa-tachometer-alt"></i>
              <p>
                Dashboard
              </p>
              </span>
        </router-link>
          
          </li>
          <br>
            <li class="nav-item">

           <router-link :to="{name:'billing'}">
              <span class="nav-link">

              <i class="nav-icon fas fa-calculator"></i>
              <p v-if="!started">
               Billing
              </p>
              <p v-else>
               {{ formattedElapsedTime }}
              </p>
              </span>

           </router-link>
          </li>
        <br>
          <li class="nav-item">

           <router-link :to="{name:'CaseManagement'}">
              <span class="nav-link">

               <i class="nav-icon fas fa-copy"></i>
              <p>
               Case Management
                
              </p>
              </span>

           </router-link>
          </li>
        
        
        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>
  </div>
</template>

<script>
import {mapState, mapGetters, mapActions} from 'vuex';

export default {
  
    name: 'navbar',
      computed:{
        ...mapState({
            started: state => state.started    
        }),
    formattedElapsedTime() {
      const date = new Date(null);
      date.setSeconds(this.$store.state.count*1000 / 1000);
      const utc = date.toUTCString();
      return utc.substr(utc.indexOf(":") - 2, 8);
    }      
    }
}
</script>