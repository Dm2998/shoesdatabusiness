// ===============================
// SHOE TYPES (Supabase)
// ===============================
async function getShoeTypes() {
  const supabaseUrl = 'https://alaajplhlfovuvlxtjen.supabase.co';
  const supabaseKey = 'sb_publishable_fU_j2GK7Pq-6SnrO46GekQ_Ksl-4JO3';
  const supabaseClient = supabase.createClient(supabaseUrl, supabaseKey);

  const { data, error } = await supabaseClient
    .from('bike_types') // rename later to shoe_types if you want
    .select('*');

  if (error) {
    console.error('Error fetching shoe types:', error);
    return [];
  }
  return data;
}

function createShoeTypeCard(shoe) {
  return `
    <div class="col-md-6 col-lg-3 mb-4 d-flex justify-content-center" data-aos="zoom-in-up">
      <div class="shoetype-card text-center custom-card">
        <img src="${shoe.image_url}" class="card-img-top shoe-image" alt="${shoe.bike_type}">
        <div class="shoetype-card-body">
          <h5 class="card-title">${shoe.bike_type}</h5>
          <p class="card-text">Starts from €${shoe.rent_per_hour}</p>
        </div>
      </div>
    </div>
  `;
}

async function displayShoeTypeCards() {
  const shoeTypes = await getShoeTypes();
  const cardsHTML = shoeTypes.map(createShoeTypeCard).join('');
  document.querySelector('#shoes-type-container .row').innerHTML = cardsHTML;
}

document.addEventListener('DOMContentLoaded', displayShoeTypeCards);
