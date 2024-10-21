<script lang="ts">
import { defineComponent} from 'vue'
import { GMAIL_MAIL, LINKEDIN_PROFILE_LINK } from '@/utils/constants';
import { usePageTransition } from '@/functions/usePageTransition';
import PageLayout from '@/components/basic/PageLayout.vue';
import SimpleCtaComponent from '@/components/base/SimpleCtaComponent.vue';

export default defineComponent({
    name: 'ContactsPage',
    components: {
      PageLayout,
      SimpleCtaComponent
    },
    setup() {
      usePageTransition()
      
      return {
        GMAIL_MAIL,
        LINKEDIN_PROFILE_LINK
      }
    }
})
</script>

<template>
  <PageLayout class="contacts-page">
    <template #title>
      <span class="c-contacts-contrast">Contacts</span>
    </template>
    <template #body>
      <p class="p">If you wanna get in touch you can write me an email at 
      <SimpleCtaComponent 
        theme="contacts_contrast"
        target="_blank" 
        rel="nofollow noopener noreferrer"
        :href="'mailto:'+GMAIL_MAIL"
      >rachebizz@gmail.com</SimpleCtaComponent> 
      or we can connect on 
      <SimpleCtaComponent 
        theme="contacts_contrast"
        target="_blank" 
        rel="nofollow noopener noreferrer"
        :href="LINKEDIN_PROFILE_LINK"
      >LinkedIn</SimpleCtaComponent> 🙃 !</p>
    </template>
  </PageLayout>

</template>


<style lang="scss" scoped>
// 
.contacts-page {
  background-color: $c-fourth;
  color: $c-dark;
}
</style>