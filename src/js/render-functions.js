export default function renderFunction(arr) {
  return arr
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
        previewWidth,
      }) => `<li class="gallery-card">
      <a class="card-link" href="${largeImageURL}">
    <img class="card-image" src="${webformatURL}" alt="${tags}" width="${previewWidth}"/>
    <div class="card-info">
    <p class="params-item-value">Likes: ${likes}</p>
    <p class="params-item-value">Views: ${views}</p>
    <p class="params-item-value">Comments: ${comments}</p>
    <p class="params-item-value">Downloads: ${downloads}</p>
    </div>
    </a>
    </li> `
    )
    .join('');
}
