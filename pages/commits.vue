<template>
  <div>
    <div class="p-7 overflow-x-auto">
      <table class="table w-full">
        <thead>
        <tr>
          <th>sha</th>
          <th>提交者</th>
          <th>邮箱</th>
          <th>提交信息</th>
          <th>日期</th>
          <th>对比更改</th>
          <th>版本主页</th>
        </tr>
        </thead>
        <tbody>
        <tr class="commitlist" v-for="(item,index) in commitList" :key="index">
          <td>{{ item.sha?.substr(0, 6) }}</td>
          <td class="min-w-36">
            <img v-show="item.committer" :src="item.committer?.avatar_url" class="rounded-full me-2 inline" width="30">
            {{ item.commit?.author.name }}
          </td>
          <td>{{ item.commit?.author.email }}</td>
          <td class="max-w-48">{{ item.commit?.message }}</td>
          <td>{{ new Date(item.commit?.author.date).toLocaleDateString() }}</td>
          <td><a :href="item.html_url" class="link" target="_blank">查看</a></td>
          <td><a :href="`https://github.com/xjuunn/Renioo/tree/${item.sha}`" class="link" target="_blank">查看</a></td>
        </tr>
        </tbody>
      </table>
    </div>
    <br>
    <br>
    <div ref="loading" class="text-center">{{ print }}</div>
    <br><br> <br>
  </div>
</template>
<script lang="ts" setup>
import 'animate.css';

const print = ref("正在加载 . . . ");
const commitList = ref([]);
const loading = ref(null);
const loadingVisiblity = useElementVisibility(loading)
let EnableLoading = false;
let page = 1;
onMounted(async () => {
  loadMore();
})
watch(loadingVisiblity, () => {
  if (loadingVisiblity.value && EnableLoading) {
    loadMore();
  }
})
async function loadMore() {
  EnableLoading = false;
  const moreList = await $fetch('/github/commits?pageSize=10&pageNum=' + page++);
  if (moreList.length == 0) {
    print.value = "没有更多了";
    return;
  }
  for (let i = 0; i < moreList.length; i++) {
    setTimeout(() => {
      commitList.value.push(moreList[i]);
    }, i * 20)
  }
  if (loadingVisiblity.value) {
    loadMore();
  }
  EnableLoading = true;
}
</script>
<style lang="scss" scoped>
.commitlist{
  transition: .6s;
}

</style>