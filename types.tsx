export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  Search: undefined;
};

export type HomeParamList = {
  WelcomeScreen: undefined;
  AlbumsScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type AlbumDTO = {
  id: string;
  artistsHeadline: string;
  imageUri: string;
};

export type SongDTO = {
  id: string;
  title: string;
  imageUri: string;
  artist: string;
};
