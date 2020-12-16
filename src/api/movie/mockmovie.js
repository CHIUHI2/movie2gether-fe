const mockMovies = [
  {
    "_id": "5fd8b797b3a3dd3953b33fea",
    "genres": ["Adventure", "Comedy", "Family", "Animation"],
    "id": 211672,
    "overview": "Minions Stuart, Kevin and Bob are recruited by Scarlet Overkill, a super-villain who, alongside her inventor husband Herb, hatches a plot to take over the world.",
    "popularity": 875.581305,
    "releaseDate": {
      "$date": "2020-06-17T00:00:00.000Z"
    },
    "runtime": 91,
    "tagline": "Before Gru, they had a history of bad bosses",
    "title": "Minions",
    "voteAverage": 3.2,
    "posterUrl": "/vlOgaxUiMOA8sPDG9n3VhQabnEi.jpg",
    "onShow": false
  },
  {
    "_id": "5fd8b797b3a3dd3953b33feb",
    "genres": ["Adventure", "Drama", "Science Fiction"],
    "id": 157336,
    "overview": "Interstellar chronicles the adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.",
    "popularity": 724.247784,
    "releaseDate": {
      "$date": "2020-11-05T00:00:00.000Z"
    },
    "runtime": 169,
    "tagline": "Mankind was born on Earth. It was never meant to die here.",
    "title": "Interstellar",
    "voteAverage": 4.05,
    "posterUrl": "/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    "onShow": false
  },
  {
    "_id": "5fd8b797b3a3dd3953b33fec",
    "genres": ["Adventure", "Comedy", "Action"],
    "id": 293660,
    "overview": "Deadpool tells the origin story of former Special Forces operative turned mercenary Wade Wilson, who after being subjected to a rogue experiment that leaves him with accelerated healing powers, adopts the alter ego Deadpool. Armed with his new abilities and a dark, twisted sense of humor, Deadpool hunts down the man who nearly destroyed his life.",
    "popularity": 514.569956,
    "releaseDate": {
      "$date": "2020-02-09T00:00:00.000Z"
    },
    "runtime": 108,
    "tagline": "Witness the beginning of a happy ending",
    "title": "Deadpool",
    "voteAverage": 3.7,
    "posterUrl": "/yGSxMiF0cYuAiyuve5DA6bnWEOI.jpg",
    "onShow": false
  },
]

export const getOnShowMovies = async () => {
  return {
    data:
      mockMovies.map((movie) => ({ ...movie, posterUrl: `http://image.tmdb.org/t/p/w500/${movie.posterUrl}` }))
  };
}
