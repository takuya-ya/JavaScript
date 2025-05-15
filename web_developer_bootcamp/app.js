import axios from 'axios';

const form = document.querySelector('#searchForm');

const fam = 1;
fam;

form.addEventListener('submit', async function (event) {
  event.preventDefault();
  const searchTermInput = form.elements.query;
  const resource = await axios.get(
    `https://api.tvmaze.com/search/shows?q=${searchTermInput.value}`,
  );
  // console.log(resource);
  makeImages(resource.data);
});

const makeImages = (results) => {
  for (let result of results) {
    if (result.show.image) {
      const img = document.createElement('img');
      img.src = result.show.image.medium;
      document.body.append(img);
    }
  }
};
