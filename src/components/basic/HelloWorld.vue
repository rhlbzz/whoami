<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'HelloWorld',
    setup() {
        return {}
    }

})
</script>

<template>
    <section class="">
        <h1 class="head-1 font-code text-center">Hello world! 👋🏼</h1>
        <div class="presentation">
            <p class="paragraph-1">Mi chiamo <span class="highlight">Rachele Bizzarri</span> e sono una <span class="highlight">frontend developer</span>.</p>        
            <br />
            <p class="paragraph-1">
                Sono nata il 4 agosto 1994 a Volterra, dove ho frequentato l'Istituto Tecnico Commerciale F. Niccolini.
                Nel 2013 mi sono trasferita a Pisa per iniziare i miei studi universitari, conseguendo una laurea magistrale in <span class="highlight">Informatica Umanistica</span> nel novembre del 2019.
            </p>       
            <p class="paragraph-1">Mi piace molto leggere e la mia più grande passione è la musica.</p>
            <p class="paragraph-1">Sono particolarmente interessata alle potenzialità delle tecniche digitali come strumento di disseminazione culturale, diffusione del patrimonio artistico e democratizzazione del sapere collettivo.</p>
            <br />
            <p class="paragraph-1">Attualmente lavoro per MONOGRID.</p>
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