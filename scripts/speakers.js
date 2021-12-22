const speakersData = [
  {
    id: 1,
    name: 'Hossam Heikal',
    topic: ' how to become influncer to convice people',
    bio: 'Hossam is writer of the book “Al Wassya” s it’d sold more than 14,000 copies',
    urlImage: './assets/HossamHeikal2.jpeg',
  },
  {
    id: 2,
    name: 'Dr. Khaled El-Nakib',
    topic: 'How to get in to project Management',
    bio: 'he is a project management consultant in Egypt and the Middle East.',
    urlImage: './assets/khalid.jpg',
  },
  {
    id: 3,
    name: 'James Chursh',
    topic: 'Become an Investable Entrepreneur',
    bio: ' James has been featured on numerous industry blogs and podcasts.',
    urlImage: './assets/james.jpg',
  },
  {
    id: 4,
    name: 'Omar Abdelrhaman',
    topic: 'How professional branding can transform your Business',
    bio: 'he is a Founder & CEO of Gateway English Community, but he’s known most for his YouTube channel.',
    urlImage: './assets/omarabdo.jpg',
  },
  {
    id: 5,
    name: 'Hunter Bergman',
    topic: 'Story Telling - Entrepreneurship In Nebraska',
    bio: 'he serves as the Culture Coordinator for the UNL Center for Entrepreneurship.',
    urlImage: './assets/hunter.jpg',
  },
  {
    id: 6,
    name: 'Nadeem Barkat',
    topic: 'Partnerships the wining coin',
    bio: 'he is now taking over the commercial department at R2S Ecommerce Logistics leader in Egypt',
    urlImage: './assets/Nadeem.jpg',
  },
];

// create works project dynamically
const speakersContainer = document.querySelector('.speakers__container');
speakersData.forEach((speaker) => {
  const speakerProject = document.createElement('div');
  let speakerContent = '';
  speakerContent = `   <div class="speakers__list__item">
  <div class="speaker__list__item__img">
      <img src=${speaker.urlImage} alt="${speaker.name}" />
  </div>
  <div class="speaker__list__item__content">
      <h3>${speaker.name}</h3>
      <p class="speaker__list__item__content__bio">
         ${speaker.topic}
      </p>
      <div class="speakers__bio__line">

      </div>
      <p>
      ${speaker.bio}
      </p>
  </div>
</div>
`;

  speakerProject.innerHTML = speakerContent;
  speakersContainer.appendChild(speakerProject);
});
