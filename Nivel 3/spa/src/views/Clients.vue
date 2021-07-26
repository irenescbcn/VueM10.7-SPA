<template>
  <div>
    <h2>CLIENTS</h2>

    <router-link :to="{ name: 'Clients', params: {id: item.name} }"
      v-for="(item, index) of clientsArray" :key="index">
      <button class="btn">Cliente {{item.id}}</button>
    </router-link>

    <ClientsComponent />
    <button class="btn" @click="goBack">Tornar enrere</button>

  </div>
</template>

<script>
import ClientsComponent from '@/components/ClientsComponent.vue'

export default {
  name: 'Clients',
  components: {
    ClientsComponent
  },
  data(){
      return{
          clientsArray: [
            {id: 1, name: "María Martínez"},
            {id: 2, name: "Carlos Pérez"},
            {id: 3, name: "Marc Márquez"},
            {id: 4, name: "Juan González"},
            {id: 5, name: "Rosa Rodríguez"} 
        ]          
      }
  },
  methods:{
      goBack(){
          this.$router.go(-1)
      }
  }

}
</script>
<style>
.btn{
    background: #2c3e50;
    color: #ffffff;
    margin: 0 5px;
}
</style>