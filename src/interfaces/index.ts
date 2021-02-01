export interface UserListData {
  id: string;
  name: string;
  cityId: string;
  cityName: string;
  stateId: string;
  stateName: string;
  email: string;
  active: boolean;
  expoPushToken: string;
}

export interface UserEditData {
  id: string;
  name: string;
  username: string;
  birth_date?: string;
  email: string;
  expoPushToken: string;
  stateId: string;
  stateName: string;
  cityId: string;
  cityName: string;
  contact?: string;
  avatar_url: string;
  posts: PostListData[];
  fishing: FishingListData[];
}

export interface DailyLog {
  dayDescription: string;
  logDate: string;
  equipmentDetails?: string;
  reelType?: string;
  lineType?: string;
  fishingType?: string;
  images: string[];
}

export interface UserBasicInfo {
  name: string;
  username: string;
  avatar_url: string;
  id: string;
}

export interface FishingListData {
  id: string;
  accomodationName: string;
  accomodationOther: string;
  accomodationType: "inn" | "boat_hotel" | "hotel" | "camping" | "fish_and_pay";
  active: boolean;
  baitType?:
  | "natual_baits"
  | "artificial_baits"
  | "fly_fishing"
  | "Pesca vertical"
  | "vertical_fishing";
  baitTypeOther?: string;
  cityId: number;
  cityName: string;
  coverImage: string;
  createdBy: string;
  created_at: number;
  dailyLog?: DailyLog[];
  deleted: boolean;
  description: string;
  fishSpecies: string;
  fishingPlace: string;
  fishingType?:
  | "river"
  | "lake"
  | "dam"
  | "high_seas"
  | "coastal"
  | "mangrove"
  | "fish_and_pay";
  fishingTypeOther?: string;
  from: string;
  hasToUpdateOnDB?: boolean;
  location: string;
  moonPhase: "full_moon" | "crescent_moon" | "waning_moon" | "new_moon";
  public: boolean;
  rating?: {
    average: number;
    fishing: number;
    hosting_structure: number;
    treatment: number;
    food: number;
    fishings: number;
    guides: number;
  };
  riverStatus: "full_river" | "low_river" | "river_in_drought";
  shuttleWay:
  | "aerial"
  | "terrestrial"
  | "Aéreo e terrestre"
  | "aerial_and_terrestrial";
  siteId?: string;
  stateId?: number;
  stateName?: string;
  teamAmount: number;
  teamName?: string;
  tideStatus?: "high_tide" | "low_tide";
  title: string;
  userInfo: UserBasicInfo;
  until: string;
  wasBeingCreated?: boolean;
  wasBeingUpdated?: boolean;
}

export interface Comment {
  created_at: number;
  id: string;
  text: string;
  rawText: string;
  createdBy: string;
  userInfo: UserBasicInfo;
}

export interface PostListData {
  cityId?: number;
  cityName?: string;
  countryId?: string;
  countryName?: string;
  createdBy: string;
  created_at: number;
  deleted: boolean;
  description: string;
  rawDescription?: string;
  id: string;
  location?: string;
  totalLikes?: number;
  media: { uri: string; type: "image" | "video" };
  siteId?: string;
  stateId?: number;
  stateName?: string;
  totalComments?: number;
  userLikedIt?: boolean;
  userInfo: UserBasicInfo;
  lastComment?: Comment;
  comments?: Comment[];
}

export interface SiteListData {
  active: boolean;
  actions: {
    edit: boolean;
    access: boolean;
  };
  cnpj: string;
  category: string;
  cityId: string;
  cityName: string;
  contact?: string;
  created_at: number;
  description?: string;
  email: string;
  contactEmail?: string;
  facebook: string;
  fantasy_name: string;
  id: string;
  instagram: string;
  location: string;
  lat?: number;
  lng?: number;
  photos: string[];
  ratingAverage?: number;
  state: string;
  stateName: string;
  sitename: string;
  subscriptionIsActive?: boolean;
  userFavoritedIt?: boolean;
  userRating: number;
  cep: string;
  neighborhood: string;
  street: string;
  number: string;
  complement?: string;
  whatsapp?: string;
}

export interface SponsorListData {
  id: string;
  fantasy_name: string;
  cnpj: string;
  category: string;
  city: string;
  state: string;
  email: string;
  active: boolean;
  logo: string;
}

export interface MessageList {
  author: string;
  created_at: number;
  deleted: boolean;
  id: string;
  text: string;
  time?: string;
}

export interface ChatList {
  updated_at: number;
  deleted: boolean;
  totalMessages: number;
  created_at: number;
  users: string[];
  id: string;
  userInfo: UserBasicInfo;
  lastMessage?: MessageList;
  unreadMessages?: number;
}

export interface City {
  label: string;
  value: string;
}

export type Collection =
  | "notifications"
  | "users"
  | "posts"
  | "messages"
  | "fishingTrips";
