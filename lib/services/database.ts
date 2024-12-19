import {supabase} from "@/lib/supabaseClient";

export async function fetchAllMusic() {
    const { data, error } = await supabase
        .from('Music')
        .select('*');
    if (error) {
        console.error('Error fetching music data:', error.message);
        throw error;
    }
    return data;
}