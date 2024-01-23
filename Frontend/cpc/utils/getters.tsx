
export async function getPosts() {
    const res = await fetch(`${process.env.BACKEND_URL}/posts`);
 
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
 
  return res.json();
}