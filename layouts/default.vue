<template>
  <v-app dark>
    <MainMenu />
    <v-app-bar fixed app>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn
        v-for="item in links"
        :key="item.title"
        plain
        :to="item.url"
        class="hidden-sm-and-down"
      >
        {{ item.title }}
      </v-btn>
      <v-btn v-if="isLoggedIn" plain @click="onLogout"> Выйти </v-btn>
      <v-spacer />
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <MyProgress />
    <info />
  </v-app>
</template>

<script>
import Info from '~/components/Info'
import MyProgress from '~/components/MyProgress'
import MainMenu from '~/components/MainMenu'

export default {
  components: {
    Info,
    MyProgress,
    MainMenu,
  },
}
</script>
