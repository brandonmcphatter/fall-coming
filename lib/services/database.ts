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

export async function fetchSongUrl(songTitle: string) {
    const {data, error} = await supabase
        .from('Music')
        .select('track_url').eq('song_title', songTitle).single();
    if (error) {
        console.error('Error fetching song data:', error.message);
        throw error;
    }
    if (!data) {
        throw new Error('Song not found');
    }
    return data;
}