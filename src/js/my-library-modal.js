'use strict';

import { populateSection } from './my-library';
let moreInfoModal = document.querySelector('.more-info-modal');
let modalSection = document.querySelector('[data-modal-video]');
const body = document.querySelector('body');

export const renderModal = example => {
  let foundSrc = ``;
  if (example.poster_path === null) {
    foundSrc = `https://scontent.xx.fbcdn.net/v/t1.15752-9/324876433_515011753945907_5094880799937398186_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=aee45a&_nc_ohc=CPCI4Yam_e0AX9eRJN5&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdQ0lgdF3j2QdVnr26sq4kCrZ-wu3LsaYxKDz79-gqJ0-w&oe=63E68EEB`;
  } else {
    foundSrc = `https://image.tmdb.org/t/p/w300${example.poster_path}`;
  }
  modalSection.classList.remove('is-hidden');
  const parsedGenres = example.genres.map(genre => genre.name).join(', ');

  const markup = `<button class="more-info-modal__close-btn">
    X
  </button>
  <div class="container-modal">
    <img class="more-info-modal__poster" loading="lazy" src="${foundSrc}"  />
    <div class="more-info-modal__description">
      <h1 class="more-info-modal__title">${example.title}</h1>
      <div class="more-info-modal__details">
      <ul>
      <li class='more-info-modal__details--header'>Vote/Votes</li>
      <li class='more-info-modal__details--header'>Popularity</li>
      <li class='more-info-modal__details--header'>Original Title</li>
      <li class='more-info-modal__details--header'>Genre</li>
      </ul>

      <ul>
      <li class='more-info-modal__details--text'>
      <span class='more-info-modal__details--average'>${example.vote_average}</span>
      /
      <span class='more-info-modal__details--count'>${example.vote_count}</span>
      </li>

      <li class="more-info-modal__details--text">${example.popularity}</li>
      <li class="more-info-modal__details--text">${example.original_title}</li>
      <li class="more-info-modal__details--text">${parsedGenres}</li>
      </ul>
      </div>

      <h3 class='more-info-modal__subtitle'>ABOUT</h3>
      <p class='more-info-modal__text'>
        ${example.overview}
      </p>
      <div class="more-info-modal__btn-box">
      <button id='${LOCAL_STORAGE_WATCHED_KEY}' class='more-info-modal__btn'>
      </button>
      <button id='${LOCAL_STORAGE_QUEUE_KEY}' class='more-info-modal__btn'>
      </button>
    </div>

    </div>
  </div>`;

  moreInfoModal.innerHTML = markup;

  body.classList.add('no-scroll');

  toggleButtonsInStorageIndicator(example.id);
  initModalListeners(example);
  modalSection.classList.remove('is-hidden');
};

modalSection.addEventListener('click', event => {
  if (event.target.closest('.more-info-modal__btn-box')) {
    return;
  }

  modalSection.classList.add('is-hidden');
  body.classList.remove('no-scroll');
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    modalSection.classList.add('is-hidden');
    modalSection.classList.remove('backdrop');
  }
});

// ccreate localStorage//
const LOCAL_STORAGE_WATCHED_KEY = 'filmoteka-watched';
const LOCAL_STORAGE_QUEUE_KEY = 'filmoteka-queue';
const MODAL_BUTTON_IN_STORAGE_CLASS = 'in-storage';

function selectButtonLabelBasedOnLocalStorageKey(isInStorage, localStorageKey) {
  if (isInStorage) {
    return localStorageKey === LOCAL_STORAGE_WATCHED_KEY
      ? 'REMOVE FROM WATCHED'
      : 'REMOVE FROM QUEUE';
  } else {
    return localStorageKey === LOCAL_STORAGE_WATCHED_KEY
      ? 'ADD TO WATCHED'
      : 'ADD TO QUEUE';
  }
}

function toggleButtonsInStorageIndicator(movieId) {
  const modalButtons = document.querySelectorAll('.more-info-modal__btn');
  modalButtons.forEach(button => {
    const localStorageKey = button.getAttribute('id');
    const isMovieInStorage = isMovieInSelectedStorage(localStorageKey, movieId);
    if (!isMovieInStorage) {
      button.classList.remove(MODAL_BUTTON_IN_STORAGE_CLASS);
    } else {
      button.classList.add(MODAL_BUTTON_IN_STORAGE_CLASS);
    }
    button.innerHTML = selectButtonLabelBasedOnLocalStorageKey(
      isMovieInStorage,
      localStorageKey
    );
  });
}

function initModalListeners(movieData) {
  const modalButtons = document.querySelectorAll('.more-info-modal__btn');
  modalButtons?.forEach(button =>
    button.addEventListener('click', e => {
      const localStorageKey = e.target.getAttribute('id');
      if (!isMovieInSelectedStorage(localStorageKey, movieData.id)) {
        addMovieToSelectedStorage(localStorageKey, movieData);
      } else {
        removeMovieFromSelectedStorage(localStorageKey, movieData.id);
      }
      const sectionButtons = document.querySelectorAll(
        '.my-library-space__btn'
      );
      if (sectionButtons.length > 0) {
        const ACTIVE_SECTION_CLASS = 'active';
        const activeButtonId = Array.from(sectionButtons)
          .find(button => button.classList.contains(ACTIVE_SECTION_CLASS))
          .getAttribute('id');
        if (localStorageKey === activeButtonId) {
          populateSection(button);
        }
      }
    })
  );
}

function isMovieInSelectedStorage(localStorageId, movieId) {
  const storageJson = localStorage.getItem(localStorageId);
  if (!storageJson) {
    return false;
  }
  const storageElements = JSON.parse(localStorage.getItem(localStorageId));
  return storageElements.some(movie => movie.id === movieId);
}

function addMovieToSelectedStorage(localStorageId, movieData) {
  const posterHostPath = 'https://image.tmdb.org/t/p/w300';
  const movieDataDto = {
    title: movieData.title,
    categories:
      movieData.genres?.length > 0
        ? movieData.genres.map(genre => genre.name).join(', ')
        : null,
    year: movieData.release_date ? movieData.release_date.slice(0, 4) : null,
    score: movieData.vote_average ? movieData.vote_average.toFixed(1) : null,
    imageSrc: movieData.poster_path
      ? `${posterHostPath}${movieData.poster_path}`
      : null,
    id: movieData.id,
  };
  const storageJson = localStorage.getItem(localStorageId);
  if (!storageJson) {
    localStorage.setItem(localStorageId, JSON.stringify([movieDataDto]));
  }
  const storageElements = JSON.parse(storageJson);
  localStorage.setItem(
    localStorageId,
    JSON.stringify([...storageElements, movieDataDto])
  );
  toggleButtonsInStorageIndicator(movieData.id);
}

function removeMovieFromSelectedStorage(localStorageId, movieId) {
  const storageJson = localStorage.getItem(localStorageId);
  const storageElements = JSON.parse(storageJson);
  const newArray = storageElements
    .slice()
    .filter(movie => movie.id !== movieId);
  localStorage.setItem(localStorageId, JSON.stringify([...newArray]));
  toggleButtonsInStorageIndicator(movieId);
}
