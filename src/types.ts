export interface WalletInfo {
    chainTag?: string;
    publicAddress?: string;
}

export interface ConnextEntitiesPayload {
    success: boolean;
    error?: Error;
}
