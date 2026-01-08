async function setupShoesShop() {
    // Fetch featured shoes data from the server
    const supabaseUrl = 'https://your-supabase-url.supabase.co';
    const supabaseKey = 'your-anon-key';
    const supabaseClient = supabase.createClient(supabaseUrl, supabaseKey);

    //

    async function fetchFeaturedShoes() {
        const { data, error } = await supabaseClient
        .from('shoes_list')
        .select('*')
        .limit(3) // Limit to 3 featured shoes

        // Handle any errors
        if (error) {
            console.error('Error fetching featured shoes:', error);
        } else {
            return data;
        }
    }
}