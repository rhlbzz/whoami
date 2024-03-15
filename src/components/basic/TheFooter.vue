<script lang="ts">
import { defineComponent } from 'vue';
import { GITHUB_PROFILE_LINK, GMAIL_MAIL, LINKEDIN_PROFILE_LINK } from '../../utils/constants'

export default defineComponent({
    name: 'TheFooter',
    setup() {
        return {
            GITHUB_PROFILE_LINK,
            GMAIL_MAIL,
            LINKEDIN_PROFILE_LINK,
        }
    }

})
</script>

<template>
    <footer class="fixed text-center w-full">
        <p>You can find me on <a :href="LINKEDIN_PROFILE_LINK"  rel="nofollo noopener noreferrer" target="_blank">LinkedIn</a>, <a :href="GITHUB_PROFILE_LINK"  rel="nofollo noopener noreferrer" target="_blank">GitHub</a>, or at my <a :href="'mailto:'+GMAIL_MAIL" rel="noopener" target="_blank">email</a> 🙃</p>
    </footer>
</template>

<style type="scss" scoped>
footer {
    background-color: $c-dark;
    bottom: 0;
    padding: 12px 4px;
    border-top: 1px whitesmoke solid;
}

.icon {
    height: 20px;
    fill: $c-mint;
    transition: fill 0.3s ease-in-out;

    &:hover {
        fill: $c-parakeet;
        transition: fill 0.3s ease-in-out;
    }
}

</style>