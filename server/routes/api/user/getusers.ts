import {createClient} from '@supabase/supabase-js';

export default defineEventHandler(async () => {
    // const {supabase} = useNuxtApp();
    // console.log(supabase)
    // return 'test222';

    const supabase = createClient('https://techczjxwjhgdhoesxqt.supabase.co'
        , 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRlY2hjemp4d2poZ2Rob2VzeHF0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc2OTg0NDAsImV4cCI6MjA0MzI3NDQ0MH0.T499H1WIT7ScpY6Eo5RfrwDtm0PPWj2fhb6c3LYSiuE');

    return await supabase
        .from('user')
        .select("*")


})