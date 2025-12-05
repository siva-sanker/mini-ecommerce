import productsData from '@/data/products.json';

export async function GET(request) {
  // Simulate a small delay to mimic network request
  await new Promise(resolve => setTimeout(resolve, 100));
  
  try {
    // Get search params for filtering if needed
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    
    let filteredProducts = [...productsData];
    
    if (category) {
      filteredProducts = filteredProducts.filter(
        product => product.category.toLowerCase() === category.toLowerCase()
      );
    }
    
    return new Response(JSON.stringify(filteredProducts), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to fetch products' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}