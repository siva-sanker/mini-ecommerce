import productsData from '@/data/products.json';

export async function GET(request, { params }) {
  await new Promise(resolve => setTimeout(resolve, 100));
  
  try {
    // Await the params promise first
    const resolvedParams = await params;
    const productId = parseInt(resolvedParams.id);
    
    console.log('Product ID:', productId);
    
    const product = productsData.find(p => p.id === productId);
    
    if (!product) {
      return new Response(JSON.stringify({ error: 'Product not found' }), {
        status: 404,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
    
    return new Response(JSON.stringify(product), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('API Error:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch product' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}