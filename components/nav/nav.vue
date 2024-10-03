<template>
    <div class="navbar sticky top-0 z-50 glass">
        <div class="flex-1">
          <router-link to="/" class="btn btn-ghost text-xl">
            <img :src="logoUrl" width="20px" height="20px" alt="logo">
            Renioo
          </router-link>
        </div>
        <span class="hidden sm:block">
            <label class="input input-sm input-goast border-0 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                    class="h-4 w-4 opacity-70">
                    <path fill-rule="evenodd"
                        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                        clip-rule="evenodd" />
                </svg>
                <input type="text" class="grow" placeholder="搜索..." />
                <kbd class="kbd kbd-sm opacity-50">⌘</kbd>
                <kbd class="kbd kbd-sm opacity-50">K</kbd>
            </label>
        </span>
        <div class="flex-none">
            <ul class="menu menu-horizontal px-1">
                <li>
                  <router-link to="/">
                    首页
                  </router-link>
                </li>
                <li><a>登录</a></li>
            </ul>
        </div>
        <NavThemeButton/>
    </div>
</template>

<script setup lang="ts">
const isDark = useLocalStorage('isDark', 'true');
const logoUrl = ref('/favicon-light.ico');
watch(isDark, () => logoUrl.value = `/favicon${isDark.value === 'true' ? '-light' : ''}.ico`)
onMounted(() => logoUrl.value = `/favicon${isDark.value === 'true' ? '-light' : ''}.ico`)
</script>
<style lang="scss" scope>
</style>