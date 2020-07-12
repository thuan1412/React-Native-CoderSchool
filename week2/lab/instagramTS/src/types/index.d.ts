export interface Post {
  id: string;
  userName: string;
  image: any;
  avatar: any;
  caption: string;
  likes: number;
}

export interface ImageInfo {
  id: string;
  width: number;
  height: number;
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  };
}
