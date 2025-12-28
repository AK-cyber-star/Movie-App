// scripts/seedMovies.ts
import { connect } from "mongoose";
import { Movie } from "../models/Movie";
import env from "../config/env.config";

const seedMovies = async () => {
  await connect(env.MONGODB_URI)

  // Clear existing movies
  await Movie.deleteMany({});
  console.log("Cleared existing movies...");

  const movies = [
    {
      title: "The Shawshank Redemption",
      description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      year: 1994,
      releaseDate: new Date("1994-09-23"),
      duration: 142,
      rating: 9.3,
      posterUrl: "https://duckduckgo.com/i/905a37a3d41517bb.jpg",
      imdbId: "tt0111161"
    },
    {
      title: "The Godfather",
      description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
      year: 1972,
      releaseDate: new Date("1972-03-24"),
      duration: 175,
      rating: 9.2,
      posterUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FM%2FMV5BNGEwYjgwOGQtYjg5ZS00Njc1LTk2ZGEtM2QwZWQ2NjdhZTE5XkEyXkFqcGc%40._V1__SX500&f=1&h=500",
      imdbId: "tt0068646"
    },
    {
      title: "The Dark Knight",
      description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      year: 2008,
      releaseDate: new Date("2008-07-18"),
      duration: 152,
      rating: 9.0,
      posterUrl: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
      imdbId: "tt0468569"
    },
    {
      title: "The Godfather Part II",
      description: "The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.",
      year: 1974,
      releaseDate: new Date("1974-12-20"),
      duration: 202,
      rating: 9.0,
      posterUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FM%2FMV5BMDIxMzBlZDktZjMxNy00ZGI4LTgxNDEtYWRlNzRjMjJmOGQ1XkEyXkFqcGc%40._V1__SX500&f=1&h=500",
      imdbId: "tt0071562"
    },
    {
      title: "12 Angry Men",
      description: "A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.",
      year: 1957,
      releaseDate: new Date("1957-04-13"),
      duration: 96,
      rating: 9.0,
      posterUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FM%2FMV5BYjE4NzdmOTYtYjc5Yi00YzBiLWEzNDEtNTgxZGQ2MWVkN2NiXkEyXkFqcGc%40._V1__SX500&f=1&h=500",
      imdbId: "tt0050083"
    },
    {
      title: "Schindler's List",
      description: "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
      year: 1993,
      releaseDate: new Date("1993-12-15"),
      duration: 195,
      rating: 9.0,
      posterUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FM%2FMV5BNjM1ZDQxYWUtMzQyZS00MTE1LWJmZGYtNGUyNTdlYjM3ZmVmXkEyXkFqcGc%40._V1__SX500&f=1&h=500",
      imdbId: "tt0108052"
    },
    {
      title: "The Lord of the Rings: The Return of the King",
      description: "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
      year: 2003,
      releaseDate: new Date("2003-12-17"),
      duration: 201,
      rating: 9.0,
      posterUrl: "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
      imdbId: "tt0167260"
    },
    {
      title: "Pulp Fiction",
      description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
      year: 1994,
      releaseDate: new Date("1994-10-14"),
      duration: 154,
      rating: 8.9,
      posterUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FM%2FMV5BYTViYTE3ZGQtNDBlMC00ZTAyLTkyODMtZGRiZDg0MjA2YThkXkEyXkFqcGc%40._V1__SX500&f=1&h=500",
      imdbId: "tt0110912"
    },
    {
      title: "The Lord of the Rings: The Fellowship of the Ring",
      description: "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the dark lord Sauron.",
      year: 2001,
      releaseDate: new Date("2001-12-19"),
      duration: 178,
      rating: 8.9,
      posterUrl: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg",
      imdbId: "tt0120737"
    },
    {
      title: "The Good, the Bad and the Ugly",
      description: "A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.",
      year: 1966,
      releaseDate: new Date("1967-12-29"),
      duration: 161,
      rating: 8.8,
      posterUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FM%2FMV5BMWM5ZjQxM2YtNDlmYi00ZDNhLWI4MWUtN2VkYjBlMTY1ZTkwXkEyXkFqcGc%40._V1__SX500&f=1&h=500",
      imdbId: "tt0060196"
    },
    {
      title: "Forrest Gump",
      description: "The history of the United States from the 1950s to the '70s unfolds from the perspective of an Alabama man with an IQ of 75, who yearns to be reunited with his childhood sweetheart.",
      year: 1994,
      releaseDate: new Date("1994-07-06"),
      duration: 142,
      rating: 8.8,
      posterUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FM%2FMV5BNDYwNzVjMTItZmU5YS00YjQ5LTljYjgtMjY2NDVmYWMyNWFmXkEyXkFqcGc%40._V1__SX500&f=1&h=500",
      imdbId: "tt0109830"
    },
    {
      title: "Inception",
      description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
      year: 2010,
      releaseDate: new Date("2010-07-16"),
      duration: 148,
      rating: 8.8,
      posterUrl: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
      imdbId: "tt1375666"
    },
    {
      title: "The Lord of the Rings: The Two Towers",
      description: "While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron's new ally, Saruman, and his hordes of Isengard.",
      year: 2002,
      releaseDate: new Date("2002-12-18"),
      duration: 179,
      rating: 8.8,
      posterUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FM%2FMV5BMGQxMDdiOWUtYjc1Ni00YzM1LWE2NjMtZTg3Y2JkMjEzMTJjXkEyXkFqcGc%40._V1__SX500&f=1&h=500",
      imdbId: "tt0167261"
    },
    {
      title: "Fight Club",
      description: "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into something much more.",
      year: 1999,
      releaseDate: new Date("1999-10-15"),
      duration: 139,
      rating: 8.8,
      posterUrl: "https://m.media-amazon.com/images/M/MV5BNDIzNDU0YzEtYzE5Ni00ZjlkLTk5ZjgtNjM3NWE4YzA3Nzk3XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg",
      imdbId: "tt0137523"
    },
    {
      title: "Star Wars: Episode V - The Empire Strikes Back",
      description: "After the Rebels are brutally overpowered by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda, while his friends are pursued by Darth Vader.",
      year: 1980,
      releaseDate: new Date("1980-06-20"),
      duration: 124,
      rating: 8.7,
      posterUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FM%2FMV5BMTkxNGFlNDktZmJkNC00MDdhLTg0MTEtZjZiYWI3MGE5NWIwXkEyXkFqcGc%40._V1__SX500&f=1&h=500",
      imdbId: "tt0080684"
    },
    {
      title: "The Matrix",
      description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
      year: 1999,
      releaseDate: new Date("1999-03-31"),
      duration: 136,
      rating: 8.7,
      posterUrl: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
      imdbId: "tt0133093"
    },
    {
      title: "Goodfellas",
      description: "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate.",
      year: 1990,
      releaseDate: new Date("1990-09-19"),
      duration: 145,
      rating: 8.7,
      posterUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FM%2FMV5BN2E5NzI2ZGMtY2VjNi00YTRjLWI1MDUtZGY5OWU1MWJjZjRjXkEyXkFqcGc%40._V1__SX500&f=1&h=500",
      imdbId: "tt0099685"
    },
    {
      title: "One Flew Over the Cuckoo's Nest",
      description: "A criminal pleads insanity and is admitted to a mental institution, where he rebels against the oppressive nurse and rallies up the scared patients.",
      year: 1975,
      releaseDate: new Date("1975-11-19"),
      duration: 133,
      rating: 8.7,
      posterUrl: "https://duckduckgo.com/i/c7419ef2dc07230d.jpg",
      imdbId: "tt0073486"
    },
    {
      title: "Se7en",
      description: "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.",
      year: 1995,
      releaseDate: new Date("1995-09-22"),
      duration: 127,
      rating: 8.6,
      posterUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FM%2FMV5BY2IzNzMxZjctZjUxZi00YzAxLTk3ZjMtODFjODdhMDU5NDM1XkEyXkFqcGc%40._V1__SX500&f=1&h=500",
      imdbId: "tt0114369"
    },
    {
      title: "It's a Wonderful Life",
      description: "A young angel is sent to Earth to help a desperately frustrated businessman by showing him what life would have been like if he had never existed.",
      year: 1946,
      releaseDate: new Date("1946-12-20"),
      duration: 130,
      rating: 8.6,
      posterUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FM%2FMV5BMDM4OWFhYjEtNTE5Yy00NjcyLTg5N2UtZDQwNDZlYjlmNDU5XkEyXkFqcGc%40._V1__SX500&f=1&h=500",
      imdbId: "tt0038650"
    },
    {
      title: "Interstellar",
      description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      year: 2014,
      releaseDate: new Date("2014-11-07"),
      duration: 169,
      rating: 8.6,
      posterUrl: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
      imdbId: "tt0816692"
    },
    {
      title: "City of God",
      description: "In the slums of Rio, two kids' paths diverge as one struggles to become a photographer and the other a kingpin.",
      year: 2002,
      releaseDate: new Date("2003-02-13"),
      duration: 130,
      rating: 8.6,
      posterUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FM%2FMV5BYjY4NGI5OTUtY2ZlZS00Zjk4LTk5N2MtN2JmYWVjNGNmMGRlXkEyXkFqcGc%40._V1__SX500&f=1&h=500",
      imdbId: "tt0317248"
    },
    {
      title: "Saving Private Ryan",
      description: "Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action.",
      year: 1998,
      releaseDate: new Date("1998-07-24"),
      duration: 169,
      rating: 8.6,
      posterUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FM%2FMV5BZGZhZGQ1ZWUtZTZjYS00MDJhLWFkYjctN2ZlYjE5NWYwZDM2XkEyXkFqcGc%40._V1__SX500&f=1&h=500",
      imdbId: "tt0120815"
    },
    {
      title: "The Green Mile",
      description: "The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.",
      year: 1999,
      releaseDate: new Date("1999-12-10"),
      duration: 189,
      rating: 8.6,
      posterUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FM%2FMV5BMTUxMzQyNjA5MF5BMl5BanBnXkFtZTYwOTU2NTY3._V1__SX500&f=1&h=500",
      imdbId: "tt0120689"
    },
    {
      title: "Life Is Beautiful",
      description: "When an open-minded Jewish librarian and his son become victims of the Holocaust, he uses a perfect mixture of humor, imagination, and innocence to protect his son from the horrors around them.",
      year: 1997,
      releaseDate: new Date("1998-10-30"),
      duration: 116,
      rating: 8.6,
      posterUrl: "https://m.media-amazon.com/images/M/MV5BYmJmM2Q4NmMtYThmNC00ZjRlLWEyZmItZTIwOTBlZDQ3NTQ1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
      imdbId: "tt0118799"
    },
    {
        title: "Star Wars",
        description: "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the evil Darth Vader.",
        year: 1977,
        releaseDate: new Date("1977-05-25"),
        duration: 121,
        rating: 8.6,
        posterUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FM%2FMV5BOGUwMDk0Y2MtNjBlNi00NmRiLTk2MWYtMGMyMDlhYmI4ZDBjXkEyXkFqcGc%40._V1__SX500&f=1&h=500",
        imdbId: "tt0076759"
    },
    {
        title: "Terminator 2: Judgment Day",
        description: "A cyborg, identical to the one who failed to kill Sarah Connor, must now protect her teenage son, John Connor, from a more advanced and powerful cyborg.",
        year: 1991,
        releaseDate: new Date("1991-07-03"),
        duration: 137,
        rating: 8.6,
        posterUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FM%2FMV5BNGMyMGNkMDUtMjc2Ni00NWFlLTgyODEtZTY2MzBiZTg0OWZiXkEyXkFqcGc%40._V1__SX500&f=1&h=500",
        imdbId: "tt0103064"
    },
    {
        title: "Back to the Future",
        description: "Marty McFly, a 17-year-old high school student, is accidentally sent thirty years into the past in a time-traveling DeLorean invented by his close friend, Dr. Emmett Brown.",
        year: 1985,
        releaseDate: new Date("1985-07-03"),
        duration: 116,
        rating: 8.5,
        posterUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FM%2FMV5BZmM3ZjE0NzctNjBiOC00MDZmLTgzMTUtNGVlOWFlOTNiZDJiXkEyXkFqcGc%40._V1__SX500&f=1&h=500",
        imdbId: "tt0088763"
    },
    {
        title: "Spirited Away",
        description: "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.",
        year: 2001,
        releaseDate: new Date("2002-09-20"),
        duration: 125,
        rating: 8.6,
        posterUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FM%2FMV5BNTEyNmEwOWUtYzkyOC00ZTQ4LTllZmUtMjk0Y2YwOGUzYjRiXkEyXkFqcGc%40._V1__SX500&f=1&h=500",
        imdbId: "tt0245429"
    },
    {
        title: "Psycho",
        description: "A Phoenix secretary embezzles $40,000 from her employer's client, goes on the run and checks into a remote motel run by a young man under the domination of his mother.",
        year: 1960,
        releaseDate: new Date("1960-08-15"),
        duration: 109,
        rating: 8.5,
        posterUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FM%2FMV5BYjZhMzFiZjItODA3ZC00MmRhLWIzMGYtMmVjOWUwYTA3MTRjXkEyXkFqcGc%40._V1__SX500&f=1&h=500",
        imdbId: "tt0054215"
    },
    {
        title: "Whiplash",
        description: "A promising young American drummer enrolls at a cut-throat music conservatory where his dreams are mentored by an instructor who will stop at nothing to realize a student's potential.",
        year: 2014,
        releaseDate: new Date("2014-10-10"),
        duration: 107,
        rating: 8.5,
        posterUrl: "https://duckduckgo.com/i/1e3e8029432dcb41.jpg",
        imdbId: "tt2582802"
    },
    {
        title: "The Silence of the Lambs",
        description: "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
        year: 1991,
        releaseDate: new Date("1991-02-14"),
        duration: 118,
        rating: 8.6,
        posterUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FM%2FMV5BNDdhOGJhYzctYzYwZC00YmI2LWI0MjctYjg4ODdlMDExYjBlXkEyXkFqcGc%40._V1__SX500&f=1&h=500",
        imdbId: "tt0102926"
    },
    {
        title: "Gladiator",
        description: "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
        year: 2000,
        releaseDate: new Date("2000-05-05"),
        duration: 155,
        rating: 8.5,
        posterUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FM%2FMV5BYWQ4YmNjYjEtOWE1Zi00Y2U4LWI4NTAtMTU0MjkxNWQ1ZmJiXkEyXkFqcGc%40._V1__SX500&f=1&h=500",
        imdbId: "tt0172495"
    },
    {
        title: "Grave of the Fireflies",
        description: "A young boy and his little sister struggle to survive in Japan during World War II.",
        year: 1988,
        releaseDate: new Date("1988-04-16"),
        duration: 89,
        rating: 8.5,
        posterUrl: "https://m.media-amazon.com/images/M/MV5BZmY2NjUzNDQtNTgxNC00M2Q4LTljOWQtMjNjNDBjNWUxNmJlXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg",
        imdbId: "tt0095327"
    },
    {
        title: "North by Northwest",
        description: "A New York City advertising executive goes on the run after being mistaken for a government agent by a group of foreign spies.",
        year: 1959,
        releaseDate: new Date("1959-07-08"),
        duration: 136,
        rating: 8.3,
        posterUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FM%2FMV5BZWIzODI2OGItMzM0Ny00OGRmLTlkNmItMDQxMTFmMTk3YmQwXkEyXkFqcGc%40._V1__SX500&f=1&h=500",
        imdbId: "tt0053125"
    },
    {
        title: "The Apartment",
        description: "A man tries to rise in his company by letting its executives use his apartment for trysts, but complications and a romance of his own ensue.",
        year: 1960,
        releaseDate: new Date("1960-06-21"),
        duration: 125,
        rating: 8.3,
        posterUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FM%2FMV5BNDdhMzVhOWQtNDU2Mi00ZmZmLWJiZDMtY2QxMjhjY2Y1ZTI5XkEyXkFqcGc%40._V1__SX500&f=1&h=500",
        imdbId: "tt0052515"
    },
    {
        title: "Memento",
        description: "A man with short-term memory loss attempts to track down his wife's murderer, using an intricate system of notes and tattoos to guide him.",
        year: 2000,
        releaseDate: new Date("2001-05-25"),
        duration: 113,
        rating: 8.4,
        posterUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FM%2FMV5BMGQ3Y2Q4NjktN2E4Ny00Y2Q2LTliZDUtZTNiNjRhY2I0NGIyXkEyXkFqcGc%40._V1__SX500&f=1&h=500",
        imdbId: "tt0209144"
    },
    {
        title: "Indiana Jones and the Last Crusade",
        description: "In 1938, an art collector appeals to Indiana Jones to embark on a search for the Holy Grail. He learns that another archaeologist and collector has vanished from a dig site.",
        year: 1989,
        releaseDate: new Date("1989-05-24"),
        duration: 127,
        rating: 8.2,
        posterUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FM%2FMV5BNGIxNzQ0YzYtMjNmYi00YjBlLWFjNzEtNGE3ZGFmYTczM2MwXkEyXkFqcGc%40._V1__SX500&f=1&h=500",
        imdbId: "tt0097576"
    },
    {
        title: "Alien",
        description: "The crew of a commercial spacecraft encounter a deadly lifeform after investigating a mysterious transmission from a nearby planet.",
        year: 1979,
        releaseDate: new Date("1979-05-25"),
        duration: 117,
        rating: 8.5,
        posterUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FM%2FMV5BN2NhMDk2MmEtZDQzOC00MmY5LThhYzAtMDdjZGFjOGZjMjdjXkEyXkFqcGc%40._V1__SX500&f=1&h=500",
        imdbId: "tt0078748"
    },
    {
        title: "Django Unchained",
        description: "With the help of a German bounty hunter, a freed slave sets out to rescue his wife from a brutal Mississippi plantation owner.",
        year: 2012,
        releaseDate: new Date("2012-12-25"),
        duration: 165,
        rating: 8.5,
        posterUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FM%2FMV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA%40%40._V1__SX500&f=1&h=500",
        imdbId: "tt1853728"
    },
    {
        title: "The Prestige",
        description: "After a tragic accident, two stage magicians engage in a battle to create the ultimate illusion while sacrificing everything they have to outwit each other.",
        year: 2006,
        releaseDate: new Date("2006-10-20"),
        duration: 130,
        rating: 8.5,
        posterUrl: "https://m.media-amazon.com/images/M/MV5BMjA4NDI0MTIxNF5BMl5BanBnXkFtZTYwNTM0MzY2._V1_.jpg",
        imdbId: "tt0482571"
    },
    {
        title: "The Lion King",
        description: "Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.",
        year: 1994,
        releaseDate: new Date("1994-06-15"),
        duration: 88,
        rating: 8.5,
        posterUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FM%2FMV5BZGRiZDZhZjItM2M3ZC00Y2IyLTk3Y2MtMWY5YjliNDFkZTJlXkEyXkFqcGc%40._V1__SX500&f=1&h=500",
        imdbId: "tt0110349"
    },
    {
        title: "Raiders of the Lost Ark",
        description: "In 1936, archaeologist and adventurer Indiana Jones is hired by the U.S. government to find the Ark of the Covenant before the Nazis.",
        year: 1981,
        releaseDate: new Date("1981-06-12"),
        duration: 115,
        rating: 8.4,
        posterUrl: "https://duckduckgo.com/i/e9cc3340c325f470.jpg",
        imdbId: "tt0082971"
    },
    {
        title: "American History X",
        description: "A former neo-nazi skinhead tries to prevent his younger brother from going down the same wrong path that he did.",
        year: 1998,
        releaseDate: new Date("1998-11-20"),
        duration: 119,
        rating: 8.5,
        posterUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FM%2FMV5BMzhiOTQ0NDItOTg0Zi00OGVmLWE0OGEtMTI4NDM0NWMxZWU4XkEyXkFqcGc%40._V1__SX500&f=1&h=500",
        imdbId: "tt0120586"
    },
    {
        title: "Avengers: Infinity War",
        description: "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",
        year: 2018,
        releaseDate: new Date("2018-04-27"),
        duration: 149,
        rating: 8.4,
        posterUrl: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_.jpg",
        imdbId: "tt4154756"
    },
    {
        title: "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
        description: "An insane general triggers a path to nuclear holocaust that a war room of politicians and generals frantically tries to stop.",
        year: 1964,
        releaseDate: new Date("1964-01-29"),
        duration: 95,
        rating: 8.4,
        posterUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FM%2FMV5BMjFjYzBlOTktMTI2OS00ZWVhLTgxMDUtNzAwODY2NmI3YTAzXkEyXkFqcGc%40._V1__SX500&f=1&h=500",
        imdbId: "tt0057012"
    },
    {
        title: "The Pianist",
        description: "A Polish Jewish musician struggles to survive the destruction of the Warsaw ghetto of World War II.",
        year: 2002,
        releaseDate: new Date("2003-03-28"),
        duration: 150,
        rating: 8.5,
        posterUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FM%2FMV5BMjEwNmEwYjgtNTk3ZC00NjljLTg5ZDctZTY3ZGQwZjRkZmQxXkEyXkFqcGc%40._V1__SX500&f=1&h=500",
        imdbId: "tt0253474"
    },
    {
        title: "The Departed",
        description: "An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston.",
        year: 2006,
        releaseDate: new Date("2006-10-06"),
        duration: 151,
        rating: 8.5,
        posterUrl: "https://m.media-amazon.com/images/M/MV5BMTI1MTY2OTIxNV5BMl5BanBnXkFtZTYwNjQ4NjY3._V1_.jpg",
        imdbId: "tt0407887"
    },
    {
        title: "Parasite",
        description: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
        year: 2019,
        releaseDate: new Date("2019-10-11"),
        duration: 132,
        rating: 8.5,
        posterUrl: "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg",
        imdbId: "tt6751668"
    },
    {
        title: "Reservoir Dogs",
        description: "After a simple jewelry heist goes terribly wrong, the surviving criminals begin to suspect that one of them is a police informant.",
        year: 1992,
        releaseDate: new Date("1992-10-23"),
        duration: 99,
        rating: 8.3,
        posterUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FM%2FMV5BMmMzYjg4NDctYWY0Mi00OGViLWIzMTMtYWNlZGY5ZDJmYjk3XkEyXkFqcGc%40._V1__SX500&f=1&h=500",
        imdbId: "tt0105236"
    },
    {
        title: "Joker",
        description: "An aging comedian with a failed career descends into insanity and crime, turning Gotham City into chaos.",
        year: 2019,
        releaseDate: new Date("2019-10-04"),
        duration: 122,
        rating: 8.4,
        posterUrl: "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
        imdbId: "tt7286456"
    },
    {
        title: "Once Upon a Time in the West",
        description: "A mysterious stranger with a harmonica joins forces with a notorious desperado to protect a beautiful widow from a ruthless assassin working for the railroad.",
        year: 1968,
        releaseDate: new Date("1969-08-04"),
        duration: 166,
        rating: 8.5,
        posterUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FM%2FMV5BZjYyNGY1MDEtN2I1MC00MGVhLTljZTYtODQ1NzQ0ODc2NzZlXkEyXkFqcGc%40._V1__SX500&f=1&h=500",
        imdbId: "tt0064116"
    },
    {
        title: "Aliens",
        description: "Ellen Ripley is rescued by a child rescue ship, waking face to face with a royal extraterrestrial breeder.",
        year: 1986,
        releaseDate: new Date("1986-07-18"),
        duration: 137,
        rating: 8.4,
        posterUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FM%2FMV5BZjIyNGJhYzYtN2I1My00OTVhLWEyMzItZTVjNDMzOTVkYWViXkEyXkFqcGc%40._V1__SX500&f=1&h=500",
        imdbId: "tt0090605"
    },
    {
        title: "Full Metal Jacket",
        description: "A pragmatic U.S. Marine observes the dehumanizing effects the Vietnam War has on his fellow recruits from their brutal boot camp training to the bloody street fighting in Hue.",
        year: 1987,
        releaseDate: new Date("1987-07-15"),
        duration: 116,
        rating: 8.3,
        posterUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FM%2FMV5BYWUzNzZkNzUtNDdiYy00Nzk5LTgxMmItNTk0MjRjNjdjNDA0XkEyXkFqcGc%40._V1__SX500&f=1&h=500",
        imdbId: "tt0093058"
    },
    {
        title: "The Shining",
        description: "A family heads to an isolated hotel for the winter where a sinister presence influences the father into violence, while his psychic son sees horrific forebodings from both past and future.",
        year: 1980,
        releaseDate: new Date("1980-05-23"),
        duration: 146,
        rating: 8.4,
        posterUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FM%2FMV5BNmM5ZThhY2ItOGRjOS00NzZiLWEwYTItNDgyMjFkOTgxMmRiXkEyXkFqcGc%40._V1__SX500&f=1&h=500",
        imdbId: "tt0081505"
    },
    {
        title: "Apocalypse Now",
        description: "A U.S. Army officer serving in Vietnam is tasked with assassinating a renegade Special Forces Colonel who sees himself as a god.",
        year: 1979,
        releaseDate: new Date("1979-08-15"),
        duration: 147,
        rating: 8.4,
        posterUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FM%2FMV5BZDhiMTljYjYtODc1Yy00MmEwLTg2OTYtYmE1YTRmNDE4MmEwXkEyXkFqcGc%40._V1__SX500&f=1&h=500",
        imdbId: "tt0078788"
    },
    {
        title: "Oldboy",
        description: "After being kidnapped and imprisoned for fifteen years without explanation, a man is released and given five days to find his captor.",
        year: 2003,
        releaseDate: new Date("2004-11-05"),
        duration: 120,
        rating: 8.4,
        posterUrl: "https://m.media-amazon.com/images/M/MV5BMTI3NTQyMzU5M15BMl5BanBnXkFtZTcwMTM2MjgyMQ@@._V1_.jpg",
        imdbId: "tt0364569"
    },
    {
        title: "Braveheart",
        description: "Scottish warrior William Wallace leads his countrymen in a rebellion to free his homeland from the tyranny of English rule.",
        year: 1995,
        releaseDate: new Date("1995-05-24"),
        duration: 178,
        rating: 8.3,
        posterUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FM%2FMV5BNGMxZDBhNGQtYTZlNi00N2UzLWI4NDEtNmUzNWM2NTdmZDA0XkEyXkFqcGc%40._V1__SX500&f=1&h=500",
        imdbId: "tt0112573"
    },
    {
        title: "Toy Story",
        description: "A cowboy doll is profoundly threatened and jealous when a new spaceman figure supplants him as top toy in a boy's room.",
        year: 1995,
        releaseDate: new Date("1995-11-22"),
        duration: 81,
        rating: 8.3,
        posterUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FM%2FMV5BZTA3OWVjOWItNjE1NS00NzZiLWE1MjgtZDZhMWI1ZTlkNzYwXkEyXkFqcGc%40._V1__SX500&f=1&h=500",
        imdbId: "tt0114709"
    },
    {
        title: "Das Boot",
        description: "A German submarine hunts allied ships during the Second World War, but it soon becomes the hunted.",
        year: 1981,
        releaseDate: new Date("1982-02-19"),
        duration: 149,
        rating: 8.4,
        posterUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FM%2FMV5BNGU0MWZlMTUtM2Y3Ny00NGNmLWE5NmEtN2YxOWQzMGM3ZWYzXkEyXkFqcGc%40._V1__SX500&f=1&h=500",
        imdbId: "tt0082096"
    },
    {
        title: "Princess Mononoke",
        description: "On a journey to find the cure for a Tatarigami's curse, Ashitaka finds himself in the middle of a war between the forest gods and Tatara, a mining colony.",
        year: 1997,
        releaseDate: new Date("1999-10-29"),
        duration: 134,
        rating: 8.4,
        posterUrl: "https://duckduckgo.com/i/98a44d46f70b55b7.png",
        imdbId: "tt0119698"
    },
    {
        title: "Amadeus",
        description: "The life, success and troubles of Wolfgang Amadeus Mozart, as told by Antonio Salieri, the contemporaneous composer who was deeply jealous of Mozart's talent.",
        year: 1984,
        releaseDate: new Date("1984-09-19"),
        duration: 160,
        rating: 8.4,
        posterUrl: "https://duckduckgo.com/i/24a7542920cec8b7.jpg",
        imdbId: "tt0086879"
    }
  ];

  await Movie.insertMany(movies);
  console.log(`Seeded ${movies.length} movies successfully!...`);

  const count = await Movie.countDocuments();
  console.log(`Total movies in DB: ${count}...`);

  process.exit(0);
};

seedMovies().catch(console.error);
