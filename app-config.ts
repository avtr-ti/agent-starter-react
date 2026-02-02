export interface AppConfig {
  pageTitle: string;
  pageDescription: string;
  companyName: string;

  supportsChatInput: boolean;
  supportsVideoInput: boolean;
  supportsScreenShare: boolean;
  isPreConnectBufferEnabled: boolean;

  logo: string;
  startButtonText: string;
  accent?: string;
  logoDark?: string;
  accentDark?: string;

  // agent dispatch configuration
  agentName?: string;

  // LiveKit Cloud Sandbox configuration
  sandboxId?: string;
}

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export const APP_CONFIG_DEFAULTS: AppConfig = {
  companyName: 'Home Depot',
  pageTitle: 'Asistente virtual de Home Depot',
  pageDescription: 'Asistente virtual de Home Depot',

  supportsChatInput: true,
  supportsVideoInput: false,
  supportsScreenShare: false,
  isPreConnectBufferEnabled: true,

  logo: `${basePath}/home-depot-logo.png`,
  accent: '#002cf2',
  logoDark: `${basePath}/home-depot-logo.png`,
  accentDark: '#1fd5f9',
  startButtonText: 'Iniciar llamada',

  // agent dispatch configuration
  agentName: process.env.AGENT_NAME ?? undefined,

  // LiveKit Cloud Sandbox configuration
  sandboxId: undefined,
};
