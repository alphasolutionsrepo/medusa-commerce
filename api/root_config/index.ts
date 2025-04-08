/* eslint-disable */
/* @typescript-eslint/naming-convention */
const root_config: any = {
  URI_ENDPOINTS: {
    product: "catalog/products",
    category: "catalog/categories",
  },
  //getSeparateProdCat: true,
  PRODUCT_URL_PARAMS: "",

  SENSITIVE_CONFIG_KEYS: "",

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getHeaders: (key?: any) => ({
    "Content-Type": "application/json",
    'x-publishable-api-key': key.MedusaPublishableKey,
  }),

  getAuthToken: (key?: any) => {
    const authToken: any = key?.configField2 ?? "";
    return authToken;
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getUrl: (
    key?: any,
    query?: any,
    searchParam?: any,
    searchCategories?: any,
    id?: any,
    page?: any,
    limit?: any
  ) => {
    let baseUrl = `${key.MedusaBackendUrl}/store`;
    const params = new URLSearchParams();

    const searchParamArray = new URLSearchParams(searchParam);
    const searchKeyword = searchParamArray.get('keyword') ?? '';
    if(searchKeyword && searchKeyword !== 'undefined') {
      params.append('q', searchKeyword);
    }

    if (query === 'product') {
      baseUrl += `/products`;

      if (id) {
        params.append('id', id);
      }
      else {
        if (page) {
          const offset = (page - 1) * limit;
          if (Number.isInteger(offset))
            params.append('offset', offset.toString());
        }
        if (limit) {
          params.append('limit', limit.toString());
        }
      }
    }
    else if( query === 'category') {
      baseUrl += `/product-categories`;

      if (id) {
        params.append('id', id);
      }
      else {
        if (page) {
          const offset = (page - 1) * limit;
          if (Number.isInteger(offset))
            params.append('offset', offset.toString());
        }
        if (limit) {
          params.append('limit', limit.toString());
        }
      }
    }
    
    // if (query) {
    //   params.append('query', query);
    // }
    // if (searchParam) {
    //   params.append('searchParam', searchParam);
    // }
    // if (searchCategories) {
    //   params.append('searchCategories', searchCategories);
    // }
    // if (id) {
    //   params.append('id', id);
    // }
    
    const url = new URL(baseUrl);

    url.search = params.toString();
    return url.toString();
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getSelectedProductandCatUrl: (data: any, key: any) => {
    // Add the url for fetching the data from selector page to the custom field here
    console.log('getSelectedProductandCatUrl', data, key);

    let baseUrl = `${key.MedusaBackendUrl}/store`;

    if(data.query === 'product') {
      baseUrl += `/products`;
    }
    else if(data.query === 'category') {
      baseUrl += `/product-categories`;
    }

    const url = new URL(baseUrl);
    const params = new URLSearchParams();

    if (data?.['id:in'])
      params.append('id[]', data['id:in'].split(',').filter((id: any) => id !== "").join(','));


    url.search = params.toString();
    return url.toString();
  },
};

export default root_config;
