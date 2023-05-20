export const GENRES = [
  //"breakbeat",
  //"detroit-techno",
  //"chicago-house",
  "electro pop",
  "deep house",
  "detroit house",
  "progressive house",
  "drum and bass",
  "dubstep",
  "edm",
  "hardstyle",
  "house",
  "idm",
  "minimal techno",
  "techno",
  "trance",
  "trip hop",
  "uk garage",
  "afro house",
  "electro swing",
] as const;

export type Genre = (typeof GENRES)[number];

export const GENRE_PLAYLIST_IDS: Record<Genre, string> = {
  trance: "37i9dQZF1DXbtYAdenGE9U",
  idm: "37i9dQZF1DXbjZQOVqxNHv",
  "progressive house": "37i9dQZF1EIfwlfJi9BTMY",
  edm: "1lS6v9h4MXOw6f6y8MkS8w",
  dubstep: "37i9dQZF1DX4arVIN5Cg4U",
  "drum and bass": "0Zarq4BVkFkZOWkmqsfrjA",
  "electro pop": "37i9dQZF1EIh0T9WVKv1CC",
  "trip hop": "37i9dQZF1DWVXbA4kjkg6G",
  house: "37i9dQZF1EQpoj8u9Hn81e",
  "deep house": "6vDGVr652ztNWKZuHvsFvx",
  hardstyle: "37i9dQZF1DX0pH2SQMRXnC",
  techno: "7mwPa6HjqoiUrsk3C2Hitk",
  "minimal techno": "6yUIpOBRbwNxUwJB0Q2BFH",
  "detroit house": "3kTp9OY5VZODroxNgAsZum",
  "uk garage": "37i9dQZF1DX0RJRF55W5lt",
  "afro house": "6znL9OMTh5JBeSKB11Yyti",
  "electro swing": "37i9dQZF1DX3bH0P2uDnWA",
};

export const GENRE_WIKIPEDIA_ENTRIES: Record<Genre, string | null> = {
  trance: "Trance_music",
  idm: "Intelligent_dance_music",
  "progressive house": "Progressive_house",
  edm: "Electronic_dance_music",
  dubstep: "Dubstep",
  "drum and bass": "Drum_and_bass",
  "electro pop": "Electropop",
  "trip hop": "Trip_hop",
  house: "House_music",
  "deep house": "Deep_house",
  hardstyle: "Hardstyle",
  techno: "Techno",
  "minimal techno": "Minimal_techno",
  "detroit house": null,
  "uk garage": "UK_garage",
  "afro house": "Styles_of_house_music",
  "electro swing": "Electro_swing",
};
