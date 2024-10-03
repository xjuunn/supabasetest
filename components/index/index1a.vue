<template>
  <IndexBg class="absolute" />
  <div class="index1 flex flex-col items-center justify-center w-full h-screen font-deyi">
    <div ref="title" class="text-2xl md:text-3xl lg:text-5xl title acttitle animate__animated animate__zoomIn">Renio-o</div>
    <br>
    <div class="opacity-40 tracking-widest text-md md:text-xl animate__animated animate__zoomIn">为用户打造跨越距离的 <b>无缝连接</b> & <b>沟通体验</b>
    </div>
  </div>
  <Teleport to="body">
    <button v-show="!isVisible" class="btn btn-sm btn-circle fixed right-4 bottom-4 transition-all z-50" tabindex="-1"
            @click="gotoTop">
      <svg height="1em" viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
        <path d="m5 15l7-7l7 7" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
              stroke-width="2"/>
      </svg>
    </button>
  </Teleport>
</template>
<script lang="ts" setup>
import 'animate.css';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const title: any = ref(null);
const isVisible = useElementVisibility(title);
watch(isVisible, () => {
  if (isVisible.value && title.value) title.value.classList.add('acttitle');
  else title.value.classList.remove('acttitle');
})

function gotoTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // 平滑滚动
  });
}
</script>
<style lang="scss" scoped>
.title {
  transition: .7s;
  transition-delay: .4s;
  letter-spacing: .1em;
}

.index1 .acttitle {
  letter-spacing: .2em;
}
</style>