<script lang="ts">
import { defineComponent } from 'vue';
import { GITHUB_PROFILE_LINK, GMAIL_MAIL, LINKEDIN_PROFILE_LINK } from '../../utils/contants.ts'

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
        <div class="icons flex items-center justify-center w-full gap-3">
            <a :href="'mailto:'+GMAIL_MAIL" rel="noopener" target="_blank">
                <svg class="icon email" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75.294 75.294" xml:space="preserve"><path d="M66.097 12.089h-56.9C4.126 12.089 0 16.215 0 21.286v32.722c0 5.071 4.126 9.197 9.197 9.197h56.9c5.071 0 9.197-4.126 9.197-9.197V21.287c.001-5.072-4.125-9.198-9.197-9.198zm-4.494 6L37.647 33.523 13.691 18.089h47.912zm4.494 39.117h-56.9A3.201 3.201 0 0 1 6 54.009V21.457l29.796 19.16c.04.025.083.042.124.065.043.024.087.047.131.069.231.119.469.215.712.278.025.007.05.01.075.016.267.063.537.102.807.102h.006c.27 0 .54-.038.807-.102.025-.006.05-.009.075-.016.243-.063.48-.159.712-.278a3.27 3.27 0 0 0 .131-.069c.041-.023.084-.04.124-.065l29.796-19.16v32.551a3.204 3.204 0 0 1-3.199 3.198z"/></svg>
            </a>
            <a :href="GITHUB_PROFILE_LINK"  rel="noopener" target="_blank">
                <svg class="icon github" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 98 96">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" />
                </svg>
            </a>
            <a :href="LINKEDIN_PROFILE_LINK"  rel="noopener" target="_blank">
                <svg class="icon linkedin" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M41 4H9C6.24 4 4 6.24 4 9v32c0 2.76 2.24 5 5 5h32c2.76 0 5-2.24 5-5V9c0-2.76-2.24-5-5-5zM17 20v19h-6V20h6zm-6-5.53c0-1.4 1.2-2.47 3-2.47s2.93 1.07 3 2.47c0 1.4-1.12 2.53-3 2.53-1.8 0-3-1.13-3-2.53zM39 39h-6V29c0-2-1-4-3.5-4.04h-.08C27 24.96 26 27.02 26 29v10h-6V20h6v2.56S27.93 20 31.81 20c3.97 0 7.19 2.73 7.19 8.26V39z"/></svg>
            </a>
        </div>
    </footer>
</template>

<style>
footer {
    bottom: 0;
    padding: 12px 4px;
    border-top: 1px whitesmoke solid;
}

.icon {
    height: 20px;
    fill: #6C22A6;
    transition: fill 0.3s ease-in-out;
}

.icon:hover {
    fill: #0A1D56;
    transition: fill 0.3s ease-in-out;
}

</style>