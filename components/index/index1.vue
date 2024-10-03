<template>
  <IndexBg class="absolute" />
  <div class="h-screen w-full flex flex-col items-center justify-center index1">
    <div ref="Renioo" class="font-deyi text-5xl sm:text-7xl lg:text-9xl text-center reniootitle renioovisible">
      <b v-for="(item, index) in `Renio-o`" :key="index" class="renioo relative opacity-0">{{ item }}</b>
    </div>
    <div class="text-center sm:text-2xl lg:text-4xl font-deyi">
      <span class="sub-titles relative opacity-0">为用户打造</span>
      <span class="sub-titles relative opacity-0">跨越<b>距离</b></span>
      <span class="sub-titles relative opacity-0">的</span>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span class="sub-titles relative opacity-0 title-connect text-info">
        <b>无 缝 连 接</b> </span>&nbsp;&nbsp;
      <span class="sub-titles relative opacity-0">&</span>&nbsp;&nbsp;
      <span class="sub-titles relative opacity-0 title-communicate text-primary">
        <b>沟 通 体 验</b>
      </span>
    </div>
    <button class="btn btn-ghost lg:btn-lg w-32 lg:w-48 try-btn relative top-40 opacity-0">
      <img class="w-4 lg:w-6" src="/public/favicon-light.ico" alt="logo">
      试试
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
        <g fill="none" fill-rule="evenodd">
          <path
            d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
          <path fill="currentColor"
            d="M16.06 10.94a1.5 1.5 0 0 1 0 2.12l-5.656 5.658a1.5 1.5 0 1 1-2.121-2.122L12.879 12L8.283 7.404a1.5 1.5 0 0 1 2.12-2.122l5.658 5.657Z" />
        </g>
      </svg>
    </button>
  </div>
</template>
<script lang="ts" setup>
const { $anime } = useNuxtApp();
const Renioo = ref(null);
const isVisible = useElementVisibility(Renioo);
watch(isVisible, () => {
  if (Renioo.value == null) return;
  const ren: Element = Renioo.value;
  if (isVisible.value && Renioo.value) {
    ren.classList.add("renioovisible");
  } else {
    ren.classList.remove("renioovisible");
  }
});
onMounted(() => {
  $anime
    .timeline({})
    .add({
      targets: ".renioo",
      duration: 900,
      top: "-180px",
      opacity: 1,
      delay: $anime.stagger(20),
    })
    .add(
      {
        targets: ".sub-titles",
        duration: 200,
        top: (e: Element, i: number) => {
          if (i > 2) {
            return "-40px";
          }
          return "-70px";
        },
        opacity: 1,
        easing: "easeInOutQuad",
        delay: $anime.stagger(100),
      },
      "400"
    ).add({
      targets: '.try-btn',
      duration: 1000,
      easing: 'easeInOutQuad',
      opacity: 1,
      top: '5em'
    }, "400");
});
</script>
<style lang="scss" scoped>
.title-communicate,
.title-connect {
  transition: 1s;
  font-size: 1.2em;
}

.reniootitle {
  transition: 2s;
  letter-spacing: 0.1em;
  transition-delay: 0.3s;
}

.renioovisible {
  letter-spacing: 0.3em;
}
</style>
