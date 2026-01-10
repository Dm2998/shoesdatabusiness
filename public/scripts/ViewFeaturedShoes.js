// ===============================
// SUPABASE SETUP
// ===============================


// asynchroneous function to fetch featured shoes from the database
async function setupShoesShop() {
    const supabaseUrl = 'https://alaajplhlfovuvlxtjen.supabase.co';
    const supabaseKey = 'sb_publishable_fU_j2GK7Pq-6SnrO46GekQ_Ksl-4JO3';
    const supabaseClient = supabase.createClient(supabaseUrl, supabaseKey);

    async function fetchFeaturedShoes() {
        const { data, error } = await supabaseClient
            .from('bike_list')
            .select('*')
            .limit(4);

        if (error) {
            console.error('Error fetching featured shoes:', error);
        } else {
            return data;
        }
    }

    function showFeaturedShoesOverlay(imageSrc) {
        const overlay = document.createElement('div');
        overlay.classList.add('featured-shoes-overlay');

        const overlayImage = document.createElement('img');
        overlayImage.src = imageSrc;

        overlay.appendChild(overlayImage);
        document.body.appendChild(overlay);

        overlay.addEventListener('click', () => {
            document.body.removeChild(overlay);
        });
    }
    function renderFeaturedShoes(shoes = []) {
    const container = document.getElementById('featured-shoes');
    container.innerHTML = '';

    if (shoes.length === 0) {
        container.innerHTML = '<p>No shoes found.</p>';
        return;
    }

    shoes.forEach(shoe => {
        const shoeCard = document.createElement('div');
        shoeCard.classList.add('shoe-card');

        const img = document.createElement('img');
        img.src = shoe.image_url;
        img.alt = shoe.name;

        const name = document.createElement('h3');
        name.textContent = shoe.name;

        shoeCard.appendChild(img);
        shoeCard.appendChild(name);

        container.appendChild(shoeCard);
    });
}

    const featuredShoes = await fetchFeaturedShoes();
    renderFeaturedShoes(featuredShoes);
}

setupShoesShop(); // call the setup function


// ===============================
// END OF SUPABASE SETUP
// ===============================