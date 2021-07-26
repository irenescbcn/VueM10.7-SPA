<template>
  <div class="botiga">
    <keepAlive>
        <component :is="currentComponent"></component>
    </keepAlive>
    <button class="btn" @click="switchComponent('Alimentacio')">Alimentació</button>
    <button class="btn" @click="switchComponent('Congelats')">Congelats</button>
  </div>
</template>

<script>
import BotigaComponent from '@/components/BotigaComponent.vue'
import Congelats from '@/views/Congelats.vue'
import Alimentacio from '@/views/Alimentacio.vue'

export default {
  name: 'Botiga',
  components: {
    BotigaComponent,
    Congelats,
    Alimentacio
  },
  data(){
    return{
      currentComponent: "BotigaComponent"
    }
  },
  methods:{
    switchComponent(value){
      this.currentComponent = value
    }
  },
}
</script>

<style>
.btn{
  background-color: #787A91;
  margin: 10px;
  color: white
}
</style>