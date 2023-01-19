/* Create intersection observer for timeline */

let timelineArticles = document.querySelectorAll('.timelineArticle');
let timelineImage = document.getElementById('timelineImage');

let observer = new IntersectionObserver(
    entries => {
    for (let i = 0; i < entries.length; i++) {
        entries[i].target.classList.toggle('show', entries[i].isIntersecting);
    }
    },
    {
        threshold: .9,
    }
);

timelineArticles.forEach(timelineArticle => {
    observer.observe(timelineArticle);
});
  
