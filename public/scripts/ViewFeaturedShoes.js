// ===============================
// SUPABASE SETUP
// ===============================


// asynchroneous function to fetch featured shoes from the database
async function setupShoesShop() {
    // initialize the supabase client using the API key and URL 
    const supabaseUrl = 'https://trjkoclrcdyrkdtwqlyq.supabase.co';
    const supabaseKey = 'sb_publishable_Dy0ijVacCjT5BrvK7-j25A_VODf1lN-';
    const supabaseClient = createClient(supabaseUrl, supabaseKey);

    // function to get the featured shoes from the database 
    async function fetchFeaturedShoes() {
        const { data, error } = await supabaseClient
            .from('shoes_list') // Select the shoes_list table
            .select('*') // Select all columns
            .limit(3); // Fetch only 3 shoes

        // Check if there was an error fetching the featured shoes from the database
        if (error) {
            console.error('Error fetching featured shoes:', error);
        } else {
            return data;
        }
    }

    // function to display an overlay with the shoe image
    function showFeaturedShoesOverlay(imageSrc) {
        const overlay = document.createElement('div');
        overlay.classList.add('featured-shoes-overlay');

        // Create an image element and set the source
        const overlayImage = document.createElement('img');
        overlayImage.src = imageSrc;

        // Append image to overlay
        overlay.appendChild(overlayImage);
        document.body.appendChild(overlay);

        // Remove overlay on click
        overlay.addEventListener('click', () => {
            document.body.removeChild(overlay);
        });
    }

    // function to render the featured shoes 
    function renderFeaturedShoes(shoes) {
        const featuredShoesContainer = document.getElementById('featured-shoes');
        featuredShoesContainer.innerHTML = '';
        featuredShoesContainer.classList.add('featured-shoes-container');

        // Loop through the shoes array
        shoes.forEach(shoe => {
            // Create shoe card
            const shoeCard = document.createElement('div');
            shoeCard.classList.add('shoe-card');
            shoeCard.setAttribute('data-aos', 'zoom-in-down');

            // Shoe image
            const shoeImage = document.createElement('img');
            shoeImage.src = shoe.image_url;
            shoeImage.alt = shoe.name;

            // Shoe info container
            const shoeInfo = document.createElement('div');
            shoeInfo.classList.add('shoe-info');

            // Shoe name
            const shoeName = document.createElement('h3');
            shoeName.textContent = shoe.name;

            // Shoe category
            const shoeCategory = document.createElement('p');
            shoeCategory.textContent = `Category: ${shoe.category}`;

            // Shoe price
            const shoePrice = document.createElement('p');
            shoePrice.textContent = `Price: €${shoe.price}`;

            // Append info
            shoeInfo.appendChild(shoeName);
            shoeInfo.appendChild(shoeCategory);
            shoeInfo.appendChild(shoePrice);

            shoeCard.appendChild(shoeImage);
            shoeCard.appendChild(shoeInfo);

            shoeImage.addEventListener('click', () => {
                showFeaturedShoesOverlay(shoe.image_url);
            });

            featuredShoesContainer.appendChild(shoeCard);
        });
    }
// ===============================
// INIT SHOP
// ===============================

    // Fetch and render featured shoes
    const featuredShoes = await fetchFeaturedShoes();
    renderFeaturedShoes(featuredShoes);
}

setupShoesShop(); // Call the setupShoesShop function

