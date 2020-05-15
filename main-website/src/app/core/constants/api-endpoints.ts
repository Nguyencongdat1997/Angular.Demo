import { environment } from 'src/environments/environment';

export const ApiEndpoints: { [key: string]: string } = {
  GetToken: environment.services.authenticationService.oauthApi + 'api/connect/token',
};

