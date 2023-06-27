import { sendRequest } from '../../tools/sendRequest';

export const putFavoritesToFavoritesDB = async (favoriteId, favoriteItems) => {
  try {
    const favorites = favoriteItems.map(item => item.id);

    const newFavoriteData = {
      id: favoriteId,
      products: [...favorites]
    };

    const favoriteULRForPUT = 'http://localhost:3004/api/favorite';
    const favoritePUTResponse = await sendRequest(favoriteULRForPUT, 'PUT', newFavoriteData);

    if (!favoritePUTResponse.statusText) {
      throw new Error('Network response was not ok');
    }
  } catch (err) {
    console.error('Error fetching products:', err);
  }
};
