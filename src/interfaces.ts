import { Position, PlaceRating, PlusCode } from './types';

export interface IApiResponse<T> {
  html_attributions: string[];
  next_page_token: string;
  results: T[];
  status: string;
};

export interface IPlace {
  business_status: string;
  geometry: {
    location: Required<ILocation>;
    viewport: Record<Position, IKeyValue<number>>;
  };
  icon: string;
  icon_background_color: string;
  icon_mask_base_uri: string;
  name: string;
  opening_hours?: IKeyValue<boolean>;
  photos: IPhotos[];
  place_id: string;
  plus_code: Record<PlusCode, string>;
  rating: PlaceRating;
  reference: string;
  scope: string;
  types: string[];
  user_ratings_total: PlaceRating;
  vicinity: string;
};

interface ILocation {
  lat: number;
  lng: number;
};

interface IPhotos {
  height: number;
  html_attributions: string[];
  photo_reference: string;
  width: number;
};

interface IKeyValue<T> {
  [prop: string]: T;
};


