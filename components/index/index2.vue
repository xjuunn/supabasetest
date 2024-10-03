<template>
  <div class="pt-20 pb-20 flex lg:flex-row flex-col justify-center items-center overflow-hidden">
    <div class="flex-1 w-full h-full p-10 flex flex-col items-center justify-center">
      <div
          class="card bg-base-100 w-full sm:w-96 border border-base-content lg:border-none lg:shadow-2xl lg:ms-20 animate__animated animate__zoomIn">
        <div class="card-body p-5">
          <h5 :class="repoInfo == 'null'?'skeleton':''" class="card-title w-40">
            <svg height="1.3em" viewBox="0 0 24 24" width="1.3em" xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
                  fill="currentColor"/>
            </svg>
            <a :href="repoInfo.html_url" class="text-sm cursor-pointer hover:link animate__animated animate__zoomIn"
               target="_blank">{{ repoInfo.full_name }}</a>
          </h5>
          <div :class="repoInfo == 'null'?'skeleton':''" class="text-sm opacity-70 h-5">{{ repoInfo.description }}</div>
          <ul class="menu bg-base-100 rounded-box">
            <li class="menu-title">联系我</li>
            <li>
              <ul class="grid grid-cols-2">
                <li><a @click="clickQQ">
                  <svg height="1em" viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <g fill="none">
                      <path
                          d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/>
                      <path
                          d="M12 2a6.285 6.285 0 0 0-6.276 5.937l-.146 2.63a28 28 0 0 0-.615 1.41c-1.24 3.073-1.728 5.773-1.088 6.032c.335.135.913-.426 1.566-1.432a6.67 6.67 0 0 0 1.968 3.593c-1.027.35-1.91.828-1.91 1.33c0 .509 2.48.503 4.239.5h.001c.549-.002 1.01-.008 1.38-.057a6.7 6.7 0 0 0 1.76 0c.37.05.833.055 1.382.056c1.76.004 4.239.01 4.239-.499c0-.502-.883-.979-1.909-1.33a6.67 6.67 0 0 0 1.967-3.586c.65 1.002 1.227 1.56 1.56 1.425c.64-.259.154-2.96-1.088-6.032a28 28 0 0 0-.607-1.395l-.147-2.645A6.285 6.285 0 0 0 12 2"
                          fill="currentColor"/>
                    </g>
                  </svg>
                  <span id="QQ">QQ</span>
                </a>
                </li>
                <li>
                  <a @click="clickWechat">
                    <svg height="1em" viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path
                          d="M15.85 8.14c.39 0 .77.03 1.14.08C16.31 5.25 13.19 3 9.44 3c-4.25 0-7.7 2.88-7.7 6.43c0 2.05 1.15 3.86 2.94 5.04L3.67 16.5l2.76-1.19c.59.21 1.21.38 1.87.47c-.09-.39-.14-.79-.14-1.21c-.01-3.54 3.44-6.43 7.69-6.43M12 5.89a.96.96 0 1 1 0 1.92a.96.96 0 0 1 0-1.92M6.87 7.82a.96.96 0 1 1 0-1.92a.96.96 0 0 1 0 1.92"
                          fill="currentColor"/>
                      <path
                          d="M22.26 14.57c0-2.84-2.87-5.14-6.41-5.14s-6.41 2.3-6.41 5.14s2.87 5.14 6.41 5.14c.58 0 1.14-.08 1.67-.2L20.98 21l-1.2-2.4c1.5-.94 2.48-2.38 2.48-4.03m-8.34-.32a.96.96 0 1 1 .96-.96c.01.53-.43.96-.96.96m3.85 0a.96.96 0 1 1 0-1.92a.96.96 0 0 1 0 1.92"
                          fill="currentColor"/>
                    </svg>
                    <span id="wechat">微信</span>
                  </a>
                </li>
                <li>
                  <a href="https://t.me/xJuunn" target="_blank">
                    <svg height="1em" viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <g fill="none" fill-rule="evenodd">
                        <path
                            d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/>
                        <path
                            d="M19.777 4.43a1.5 1.5 0 0 1 2.062 1.626l-2.268 13.757c-.22 1.327-1.676 2.088-2.893 1.427c-1.018-.553-2.53-1.405-3.89-2.294c-.68-.445-2.763-1.87-2.507-2.884c.22-.867 3.72-4.125 5.72-6.062c.785-.761.427-1.2-.5-.5c-2.302 1.738-5.998 4.381-7.22 5.125c-1.078.656-1.64.768-2.312.656c-1.226-.204-2.363-.52-3.291-.905c-1.254-.52-1.193-2.244-.001-2.746z"
                            fill="currentColor"/>
                      </g>
                    </svg>
                    Telegram
                  </a>
                </li>
                <li>
                  <a href="https://discord.gg/U3tNJecv" target="_blank">
                    <svg height="1em" viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path
                          d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.1.1 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.1 16.1 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02M8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12m6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12"
                          fill="currentColor"/>
                    </svg>
                    Discord
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <div class="card-actions justify-end opacity-60 mt-2 flex">
            <span class="flex me-0.5">
              <svg height="0.9em" viewBox="0 0 256 256" width="0.9em" xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M243 96a20.33 20.33 0 0 0-17.74-14l-56.59-4.57l-21.84-52.81a20.36 20.36 0 0 0-37.66 0L87.35 77.44L30.76 82a20.45 20.45 0 0 0-11.66 35.88l43.18 37.24l-13.2 55.7A20.37 20.37 0 0 0 79.57 233L128 203.19L176.43 233a20.39 20.39 0 0 0 30.49-22.15l-13.2-55.7l43.18-37.24A20.43 20.43 0 0 0 243 96m-70.47 45.7a12 12 0 0 0-3.84 11.86L181.58 208l-47.29-29.08a12 12 0 0 0-12.58 0L74.42 208l12.89-54.4a12 12 0 0 0-3.84-11.86l-42.27-36.5l55.4-4.47a12 12 0 0 0 10.13-7.38L128 41.89l21.27 51.5a12 12 0 0 0 10.13 7.38l55.4 4.47Z"
                  fill="currentColor"/>
            </svg>
            <span class="text-xs ms-1">{{ repoInfo.stargazers_count }}</span>
            </span>
            <span class="flex me-0.5">
              <svg height="0.9em" viewBox="0 0 24 24" width="0.9em" xmlns="http://www.w3.org/2000/svg">
	              <path
                    d="M12 21a2 2 0 1 0 0-4a2 2 0 0 0 0 4m1-5.874A4.002 4.002 0 0 1 12 23a4 4 0 0 1-1-7.874V13H7a3 3 0 0 1-3-3V8.874A4.002 4.002 0 0 1 5 1a4 4 0 0 1 1 7.874V10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V8.874A4.002 4.002 0 0 1 19 1a4 4 0 0 1 1 7.874V10a3 3 0 0 1-3 3h-4zM4.997 7h.006a2 2 0 1 0-.006 0M19 7a2 2 0 1 0 0-4a2 2 0 0 0 0 4"
                    fill="currentColor"/>
              </svg>
            <span class="text-xs ms-1">{{ repoInfo.forks_count }}</span>
            </span>
            <span class="flex me-0.5">
              <svg height="0.9em" viewBox="0 0 24 24" width="0.9em" xmlns="http://www.w3.org/2000/svg">
	                <path
                      d="M12 9a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-4.5c5 0 9.27 3.11 11 7.5c-1.73 4.39-6 7.5-11 7.5S2.73 16.39 1 12c1.73-4.39 6-7.5 11-7.5M3.18 12a9.821 9.821 0 0 0 17.64 0a9.821 9.821 0 0 0-17.64 0"
                      fill="currentColor"/>
              </svg>
              <span class="text-xs ms-1">{{ repoInfo.watchers }}</span>
            </span>
          </div>

        </div>
      </div>
    </div>
    <div class="flex-1 text-center flex items-center justify-center flex-col">
      <!-- 距离上次更新的时间 -->
      <span class="opacity-50 animate__animated animate__zoomIn">距离上次更新已经过了</span>
      <div class="grid auto-cols-max grid-flow-col gap-1 text-center animate__animated animate__zoomIn">
        <div class="bg-neutral rounded-btn text-neutral-content flex flex-col p-2">
          <span class="countdown font-mono text-xl">
            <span :style="`--value:${stepTime.day};`"></span>
          </span>
          天
        </div>
        <div class="bg-neutral rounded-btn text-neutral-content flex flex-col p-2">
          <span class="countdown font-mono text-xl">
            <span :style="`--value:${stepTime.hour};`"></span>
          </span>
          时
        </div>
        <div class="bg-neutral rounded-btn text-neutral-content flex flex-col p-2">
          <span class="countdown font-mono text-xl">
            <span :style="`--value:${stepTime.minute};`"></span>
          </span>
          分
        </div>
        <div class="bg-neutral rounded-btn text-neutral-content flex flex-col p-2">
          <span class="countdown font-mono text-xl">
            <span :style="`--value:${stepTime.second};`"></span>
          </span>
          秒
        </div>
      </div>
      <br>
      <!-- 提交列表 -->
      <ul class="timeline timeline-vertical text-sm h-full">
        <li class="commit-li animate__animated animate__bounceInRight">
          <div class="timeline-start w-20 text-right">
            历史
          </div>
          <div class="timeline-middle">
            <svg class="h-5 w-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <g fill="none">
                <path
                    d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/>
                <path
                    d="M2.907 6.75c2.9-5.022 9.321-6.743 14.343-3.843a10.5 10.5 0 0 1 4.915 11.732c-.318 1.225-1.81 1.57-2.658.746l-.095-.1l-2.251-2.587c-1.003-1.152.024-2.89 1.478-2.628l.133.03l.518.134a7.5 7.5 0 1 0-2.031 7.117a1.5 1.5 0 1 1 2.104 2.139c-3.281 3.228-8.43 4.018-12.613 1.603c-5.022-2.9-6.743-9.32-3.843-14.343M12 5.5a1.5 1.5 0 0 1 1.493 1.355L13.5 7v4.379l2.06 2.06a1.5 1.5 0 0 1-2.007 2.225l-.114-.103l-2.5-2.5a1.5 1.5 0 0 1-.432-.913L10.5 12V7A1.5 1.5 0 0 1 12 5.5"
                    fill="currentColor"/>
              </g>
            </svg>
          </div>
          <div class="timeline-end timeline-box text-left">
            <router-link class="link" to="/commits">查看历史的提交</router-link>
          </div>
          <hr>
        </li>
        <!--        [&:nth-child(-n+6)]:hidden [&:nth-child(-n+6)]:lg:grid  隐藏指定个数的li       -->
        <li v-for="(item,index) in commitList" :key="index"
            class="commit-li animate__animated animate__bounceInRight">
          <!--          <hr v-show="index!=0" :class="index<=3?'hidden lg:grid':''">-->
          <hr>
          <div class="timeline-start w-20 text-right">
            {{ formatTimeInterval(getTimeInterval(new Date(item.commit.committer.date))) }}
          </div>
          <div class="timeline-middle">
            <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path clip-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    fill-rule="evenodd"/>
            </svg>
          </div>
          <div class="timeline-end timeline-box text-left">{{ item.commit.message }}</div>
          <hr v-show="index != commitList.length-1">
        </li>
      </ul>
    </div>


  </div>
</template>
<script lang="ts" setup>
import 'animate.css';

const commitList = ref([]);
let lastCommitDate: Date;
let timer;
const repoInfo = ref('null');
const stepTime = ref({
  day: 0,
  hour: 0,
  minute: 0,
  second: 0,
})
onMounted(async () => {
  repoInfo.value = await $fetch('/github/repo');
  commitList.value = await $fetch('/github/commits');
  lastCommitDate = new Date(commitList.value[0].commit.author.date);
  commitList.value = commitList.value.reverse();
  timer = setInterval(() => {
    stepTime.value = getTimeInterval(lastCommitDate)
  }, 1000)
})

interface TimeInterval {
  day: number;
  hour: number;
  minute: number;
  second: number;
}

function getTimeInterval(start: Date, end: Date = new Date()): TimeInterval {
  const ms = end.getTime() - start.getTime();
  return {
    day: Math.floor(ms / (1000 * 60 * 60 * 24)),
    hour: Math.floor((ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minute: Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60)),
    second: Math.floor((ms % (1000 * 60)) / 1000)
  }
}

const formatTimeInterval = (timeInterval: TimeInterval) => {
  if (timeInterval.day > 100) return 'long long ago';
  if (timeInterval.day > 90) return '三个月前';
  if (timeInterval.day > 60) return '两个月前';
  if (timeInterval.day > 30) return '一个月前';
  if (timeInterval.day > 0) return `${timeInterval.day} 天前`;
  if (timeInterval.hour > 0) return `${timeInterval.hour} 小时前`;
  if (timeInterval.minute > 0) return `${timeInterval.minute} 分钟前`;
  return '刚刚';
}
const {isSupported, copy} = useClipboard();

function clickQQ() {
  if (isSupported.value) {
    copy('1529415405');
    const QQ = document.getElementById("QQ");
    QQ.innerText = "已复制";
    setTimeout(() => {
      QQ.innerText = "QQ";
    }, 1000)
  } else {
    QQ.innerText = "1529415405";
  }
}

function clickWechat() {
  if (isSupported.value) {
    copy('_xjuunn');
    const wechat = document.getElementById("wechat");
    wechat.innerText = "已复制";
    setTimeout(() => {
      wechat.innerText = "微信";
    }, 1000)
  } else {
    wechat.innerText = "_xjuunn";
  }
}

// function formatDateTime(date, format = 'yy-M-d HH:m:s') {
//   const o = {
//     "M+": date.getMonth() + 1, // 月份
//     "d+": date.getDate(), // 日
//     "h+": date.getHours() % 12 === 0 ? 12 : date.getHours() % 12, // 小时
//     "H+": date.getHours(), // 小时
//     "m+": date.getMinutes(), // 分
//     "s+": date.getSeconds(), // 秒
//     "q+": Math.floor((date.getMonth() + 3) / 3), // 季度
//     S: date.getMilliseconds(), // 毫秒
//     a: date.getHours() < 12 ? "上午" : "下午", // 上午/下午
//     A: date.getHours() < 12 ? "AM" : "PM", // AM/PM
//   };
//   if (/(y+)/.test(format)) {
//     format = format.replace(
//         RegExp.$1,
//         (date.getFullYear() + "").substr(4 - RegExp.$1.length)
//     );
//   }
//   for (const k in o) {
//     if (new RegExp("(" + k + ")").test(format)) {
//       format = format.replace(
//           RegExp.$1,
//           RegExp.$1.length === 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length)
//       );
//     }
//   }
//   return format;
// }

onMounted(() => {
  clearInterval(timer);
})
</script>
<style lang="scss" scoped>
.commit-li {
  grid-template-columns: var(--timeline-col-start, minmax(0, 1fr)) auto var(--timeline-col-end, minmax(0, 3fr));
}

//.commit-li:nth-child(-n+3){
//  display: none;
//}
</style>