<template>
    <div class="flex flex-col items-center mt-20 gap-2" >
      <div>邮箱：<input v-model="email" class="input input-accent" type="email"/></div>
      <div>密码：<input v-model="pass" class="input input-accent" type="password"/></div>
      <button class="btn btn-primary" @click="login">登录</button>
      <button class="btn btn-primary" @click="sign">注册</button>
      <button class="btn btn-primary" @click="getInfo">获取信息</button>
      <button class="btn btn-primary" @click="getSession1">获取Session</button>
      <button class="btn btn-primary" @click="mslogin">微软登录</button>
      <button class="btn btn-primary" @click="googlelogin">谷歌登录</button>
      <button class="btn btn-primary" @click="githublogin">github登录</button>
      <button class="btn btn-primary" @click="discordlogin">Discord登录</button>
      <button class="btn btn-primary" @click="Zoomlogin">Zoom登录</button>
      <button class="btn btn-primary" @click="gitlabogin">gitlab登录</button>
      <button class="btn btn-primary" @click="logout">登出</button>
    </div>

</template>
<script setup lang="ts">
const email = ref("");
const pass = ref("");
const supabase = useSupabaseClient();
async function login(){
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: pass.value
  });
  console.log(data,error);
}
async function sign(){
  const { data, error } = await supabase.auth.signUp({
    email: email.value,
    password: pass.value,
    options: {
      data: {
        first_name: 'John',
        age: 27,
      }
    }
  })
  console.log(data,error?.message);
}

async function getInfo(){
  const {data,error} = await supabase.auth.getUser();
  console.log(data,error?.message);
  // const user = useSupabaseUser();
  // console.log(user);
}
async function getSession1(){
  const {data, error} = await supabase.auth.getSession();
  console.log(data,error?.message);
  // const session = useSupabaseSession();
  // console.log(session)
}
async function mslogin(){
  const {data, error} = await supabase.auth.signInWithOAuth({
    provider:'azure',
  })
  console.log(data,error?.message);
}
async function googlelogin(){
  const {data, error} = await supabase.auth.signInWithOAuth({
    provider:'google',
  })
  console.log(data,error?.message);
}
async function githublogin(){
  if(import.meta.server) return;
  const {data, error} = await supabase.auth.signInWithOAuth({
    provider:'github',
  })
  console.log(data,error?.message);
}
async function discordlogin(){
  const {data, error} = await supabase.auth.signInWithOAuth({
    provider:'discord',
  })
  console.log(data,error?.message);
}
async function Zoomlogin(){
  const {data, error} = await supabase.auth.signInWithOAuth({
    provider:'zoom',
  })
  console.log(data,error?.message);
}
async function gitlabogin(){
  const {data, error} = await supabase.auth.signInWithOAuth({
    provider:'gitlab',
  })
  console.log(data,error?.message);
}
async function logout(){
  const data = await supabase.auth.signOut();
  console.log(data)
}
</script>