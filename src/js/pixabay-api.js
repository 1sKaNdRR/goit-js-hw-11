const API_KEY = '36831131-bfb1c5890fc73f15a7de29d05';

export async function fetchImages(query) {
    const url = `https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`;
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error('Failed to fetch images');
    }

    const data = await response.json();
    return data.hits;
}
