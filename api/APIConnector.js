import axios from "axios";
// We only want one instance at a time!
const API_URL = process.env.NEXT_PUBLIC_API_URL;
const accessToken = '';

export async function getHomePageData(){
    const res = await call('get', `globalSetting/globaldata`);
    return errorHandling(res, 'getHomePageData()'); 
}

export async function getFooterListings(){
  const res = await call('get', `globalSetting/getFooterDetails`);
  return errorHandling(res, 'getFooterListings()'); 
}

export async function getABoutPageData(){
  const res = await call('get', `page/aboutdata`);
  return errorHandling(res, 'getABoutPageData()'); 
}

export async function getTermandconData(){
  const res = await call('get', `page/termandcon`);
  return errorHandling(res, 'getTermandconData()'); 
}

export async function getPrivacyPolicyData(){
  const res = await call('get', `page/privacypolicy`);
  return errorHandling(res, 'getPrivacyPolicyData()'); 
}

export async function getRefundPolicyData(){
  const res = await call('get', `page/refundpolicy`);
  return errorHandling(res, 'getRefundPolicyData()'); 
}

export async function getHeaderListings(){
    return [];
}

async function callAPI(method, endpoint, body) {
    const headers =   {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
        'accept': 'application/json',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers":
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
      } ;

      const res =  await axios.request({
        url: `${API_URL}/${endpoint}`,
        method: method,
        data:body
      }); 
    const response = { 
      status: res.status,
      data: res.data
    }
    return response;
  }

  async function call(method, endpoint, body) {
    return  await callAPI(method, endpoint, body);
  }

    /**
  * Flattens API object errors.
  * @param {API response} res - Error object returned within an API response.
  * @return {array} - Array of error strings.
  */
    function flattenAPIErrors(res) {
   let finalArray = [];
   let errorsArray = [];
   if (res.message) finalArray.push(res.message);
   if (res.errors) {
     errorsArray = flatMap(res.errors, errors => {
       return flatten(errors);
     });
   }

   finalArray = finalArray.concat(errorsArray);
   return finalArray;
 }

   /**
   * Helper function: error handling.
   * @param {API response object} res - API response.
   * @param {string} calledFrom - Function that is calling this; used in logs.
   * @param {boolean} returnData - Whether or not to return res.data.
   * @return {object} - Either an object containing an error object
   *  or the full response.
   */
   function errorHandling(res, calledFrom, returnData) {
    // 401 is 'unauthorized', meaning that the current token
    // (if any) is invalid, so the current token (if any) needs
    // to be unset and the user needs to log back in.
    if (res.status === 401) {
      console.log('[update] Unauthorized actioon, removing access token and logging user out')
      userLogout()
    }
    // 403 is 'forbidden', meaning that the current token doesn't
    // have the proper scopes/privilages, so we need to redirect
    // users back to home page.
    else if (res.status === 403) {
      console.log('[update] Some console log explaining more')
      // Router.push('/')
    }
    else if (res.status === 422) {
      // Return a readable error
      const errors = flattenAPIErrors(res);
      return { error: errors };
    } else if (isClientError(res.status)) {
      if (dev) console.error('API Call Failed. Called from: ', calledFrom, res.message, res);
      // Return a readable error
      const errors = flattenAPIErrors(res);
      return { error: errors };
    } else if (isAPIError(res.status)) {
      if (dev) console.error('Server Error. Called from: ', calledFrom, res.message, res);
      return { error: ['Server Error'] };
    }

    return returnData !== true ? res : res.data;
  }


  /**
   * Determines if the given number is in the 400 range.
   * @param {number} num - value to check.
   * @return {boolean}
   */
  function isClientError(num) {
    if (num >= 400 && num <= 499) return true;
    return false;
  }

  /**
   * Determines if it's Brody's fault.
   * @param {number} num - value to check.
   * @return {boolean}
   */
  function isAPIError(num) {
    if (num == 500) return true;
    return false;
  }


