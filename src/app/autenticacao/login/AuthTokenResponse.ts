export interface AuthTokenResponse {
  access_token: string;
  expires_in: number;
  refresh_expires_in: number;
  refresh_token: string;
  token_type: TokenType;
  'not-before-policy': number;
  session_state: string;
  scope: Scope;
}

// TokenType poderia ser um tipo de união se você espera diferentes tipos de tokens,
// mas aqui estamos assumindo que sempre será "Bearer".
type TokenType = 'Bearer';

// Supondo que o campo "scope" possa incluir uma variedade de permissões separadas por espaço,
// isso poderia ser representado como uma união de strings.
// Ajuste conforme necessário com base nas permissões específicas que você espera.
type Scope = 'profile' | 'email' | 'profile email' | 'email profile';
