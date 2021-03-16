export const environment = {
  production: true,
  subscriptionKey: '#{subscriptionKey}#',
  services: {
    authenticationService : {
      oauthApi: '#{oauthApi}#',
      oauthClientId: '#{oauthClientId}#',
      oauthClientSecret: '#{oauthClientSecret}#',
      otpRequestApi: '#{otpRequestApi}#',
    },
    accountService: '#{accountService}#',
    cartService: '#{cartService}#',
    catalogService: '#{catalogService}#',
    groupBuyingService: '#{groupBuyingService}#',
    homeService: '#{homeService}#'
  }
};
