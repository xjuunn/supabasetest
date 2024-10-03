

export default defineNuxtPlugin(nuxtApp => {
    const supabase = useSupabaseClient();
    nuxtApp.supabase = supabase;
})