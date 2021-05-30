<template>
  <v-row justify="center" align="center">
    <v-col cols="12">
      <h1>Список заказов</h1>
      <v-data-table
        :headers="headers"
        :items="orders"
        sort-by="date"
        class="elevation-1"
      >
        <template #item.date="{ item }">
          {{ new Date(item.date).toLocaleString() }}
        </template>
        <template #item.actions="{ item }">
          <v-icon
            v-if="item.canChange"
            small
            class="mr-2"
            @click="editItem(item)"
          >
            mdi-pencil
          </v-icon>
          <v-icon v-if="item.canDelete"
        </template>
      </v-data-table>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'Profile',
  middleware: ['auth'],
}
</script>

<style scoped></style>
