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
      }) => `<li class="gallery-card">
      <a class="card-link" href="${largeImageURL}">
    <img class="card-image" src="${webformatURL}" alt="${tags}"/>
    </a>
    <ul class="card-info">
    <li class="params-item-value"><h2 class="textBold">Likes</h2> <p class="amount">${likes}</p></li>
    <li class="params-item-value"><h2 class="textBold">Views</h2> <p class="amount">${views}</p></li>
    <li class="params-item-value"><h2 class="textBold">Comments</h2> <p class="amount">${comments}</p></li>
    <li class="params-item-value"><h2 class="textBold">Downloads</h2> <p class="amount">${downloads}</p></li>
    </ul>
    </li> `
    )
    .join('');
}
