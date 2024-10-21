document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.querySelector('.search-input');
    const searchIcon = document.querySelector('.search-icon');
    const profileButton = document.getElementById('profile-button');

    searchIcon.addEventListener('click', function () {
        searchInput.classList.toggle('active');
        searchIcon.classList.toggle('active');
        if (searchInput.classList.contains('active')) {
            searchInput.focus();
        }
    });

    document.addEventListener('click', function (e) {
        if (!document.querySelector('.search-wrapper').contains(e.target) && !searchIcon.contains(e.target)) {
            searchInput.classList.remove('active');
            searchIcon.classList.remove('active');
        }
    });

    searchInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            searchInput.classList.remove('active');
            searchIcon.classList.remove('active');
        }
    });

    profileButton.addEventListener('click', function () {
        profileButton.classList.toggle('active');
    });
});
