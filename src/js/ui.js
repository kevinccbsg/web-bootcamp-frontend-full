
const navbar = document.getElementById('navbar');
const searchIcon = document.getElementById('navbar-search');
const closeIcon = document.getElementById('navbar-close');

searchIcon.addEventListener('click', () => {
  navbar.classList.remove('no-search');
  navbar.classList.add('search');
});

closeIcon.addEventListener('click', () => {
  navbar.classList.remove('search');
  navbar.classList.add('no-search');
});

const openHeader = (id) => (evt) => {
  const element = document.getElementById(id);
  element.classList.toggle('close');
};

const loadingRender = (id, className = 'loader') => {
  return {
    render: () => {
      document.getElementById(id).innerHTML = `
        <div class="${className}">
          <i class="fas fa-spinner fa-spin"></i>
        </div>
      `;
    },
  };
};

module.exports = {
  openHeader,
  loadingRender,
};
