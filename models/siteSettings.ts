export interface SiteSettings {
  _type: 'siteSettings';
  siteTitle: string;
  siteUrl: string;
  seo: {
    metaDesc: string;
    metaTitle?: string;
    shareDesc?: string;
    shareGraphic?: {
      asset: {
        _ref: string;
        _type: string;
      };
    };
  };
}
