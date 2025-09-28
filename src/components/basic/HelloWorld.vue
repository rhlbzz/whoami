<script lang="ts">
import CtaCustom from '@/components/base/CtaCustom.vue';
import { GMAIL_MAIL, LINKEDIN_PROFILE_LINK } from '@/utils/constants';
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'HelloWorld',
    components: {
        CtaCustom
    },
    setup() {
        return {
            GMAIL_MAIL,
            LINKEDIN_PROFILE_LINK
        }
    }

})
</script>

<template>
    <section>
        <CtaCustom split>
            Ciao hello world
        </CtaCustom>
        <h1 class="head-1 text-center">Hello world! 👋🏼</h1>
        
        <div class="presentation">
            <p class="paragraph-1">My name is <span class="highlight">Rachele Bizzarri</span> and I am a <span class="highlight">web developer</span>.</p>

            <p class="paragraph-1 mt-3">I was born in Volterra, a <i>borgo</i> of etrurian heritage in the middle of Tuscany hills, where some years later I graduated in accounting with a curriculum in programming at Istituto Tecnico Commerciale F. Niccolini. During the summer of 2013, I was wondering how I could mix my favorite subjects - informatics and literature - for building my future, when suddenly I found what I was looking for at Università di Pisa. Thus, in September, I started my studies in <span class="highlight">Digital Humanities</span> and in 2019 I finished my master's degree with a thesis on scrollytelling - a digital interactive interpretation of storytelling, developing a JavaScript library from scratch with the purpose of helping other digital humanists in the creation of scrollytelling articles or posts.</p>

            <p class="paragraph-1 mt-3">Beside these two work-related passions, I consider myself really picky in my music tastes and I am a demanding reader, and I believe that the same attention is reflected in how I manage my daily work: I am always looking for the perfect detail or the most beautiful solution that could help in reaching the right compromise for deliver not only a functional work but aesthetic.</p>

            <p class="paragraph-1 mt-3">At the moment, I’m working at MONOGIRD, in Florence.</p>

            <p class="paragraph-1 mt-3">And… That’s almost everything 🙃 ! If you wanna get in touch you can write me an  
                <CtaCustom
                    split
                    :href="'mailto:'+GMAIL_MAIL" 
                    rel="noopener"
                    target="_blank"
                >
                    <template #default>
                        e-mail
                    </template>
                </CtaCustom>
            or we can connect on <a :href="LINKEDIN_PROFILE_LINK"  rel="nofollo noopener noreferrer" target="_blank">LinkedIn</a>.</p>
        </div>
    </section>
</template>


<style scoped>

@media only screen and (min-width: 768px) {

    .presentation {        
        max-width: 50vw;
    }
}
</style>