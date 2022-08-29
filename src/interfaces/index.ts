/**
 * POSTs Interfaces
 *  */
export interface IPostCard {
  imgUrl: string;
  altText: string;
  createdAt: string;
  title: string;
  body: string;
}
/**--------------- */

/**
 *  useEffect interfaces
 *  */
export interface IImageFormat {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: null;
  width: number;
  height: number;
  size: number;
  url: string;
}

export interface IData {
  id: number;
  attributes: {
    title: string;
    body: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    image: {
      data: {
        id: number;
        attributes: {
          name: string;
          alternativeText: string;
          caption: string;
          width: number;
          height: number;
          formats: {
            thumbnail: IImageFormat;
            small: IImageFormat;
          };
        };
      };
    };
  };
}

export interface IMeta {
  pagination: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
}

export interface IError {
  message: string;
}

/**------------------- */
