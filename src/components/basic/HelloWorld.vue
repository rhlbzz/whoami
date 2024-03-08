<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'HelloWorld',

})
</script>

<template>
    <section class="overflow-auto pb-20px">
        <h1 class="head-1 font-code text-center">Hello world! 👋🏼</h1>
        <div class="presentation">
            <p class="paragraph-1">
                My name is <span class="highlight">Rachele Bizzarri</span> and I am a <span class="highlight">frontend developer</span>.
            </p>       
            <p class="paragraph-1 mt-3">
                I was born on August the 4th 1994 in Volterra, where I graduateed in accounting with a curriculim in programming, at Istituto Tecnico Commerciale F. Niccolini. Afterwards, in 2013, I moved to Pisa to start my study at Università di Pisa where I've erned my master's degree in <span class="highlight">Digital Humanities</span> in 2019.
            </p>       
            <p class="paragraph-1 mt-1"> I really like to read and my greatest passion is music.</p>
            <p class="paragraph-1 mt-1">I'm particularly interested in the potential of digital technologies as a powerful inclusive and democratizing tool for dissemination on cultural and artistic heritage.</p>
            <p class="paragraph-1 mt-5">At the time, I'm working at MONOGRID.</p>
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