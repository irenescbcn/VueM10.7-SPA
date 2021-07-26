<template>
    <div>
        <p class="pClient">Nom del Client: {{ $route.params.id }}</p>
    </div>
</template>

<script>
export default {
    name: "ClientsComponent",
}
</script>

<style>
.pClient{
    margin-top: 15px;
}
</style>