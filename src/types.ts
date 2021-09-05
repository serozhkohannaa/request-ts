export type Status =
  | "OK"
  | "ERROR"
  | "INVALID_REQUEST"
  | "OVER_QUERY_LIMIT"
  | "NOT_FOUND"
  | "REQUEST_DENIED"
  | "UNKNOWN_ERROR"
  | "ZERO_RESULTS";

export type Position = "northeast" | "southwest";
export type PlaceRating = number;
export type PlusCode = "compound_code" | "global_code";


