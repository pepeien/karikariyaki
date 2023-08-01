import { HttpClient } from '@angular/common/http';

// Types
import { ApiV1EventOrderRegistry, ApiV1EventRegistry } from '@types';

export class Registry {
    private _client: HttpClient;

    constructor(client: HttpClient) {
        this._client = client;
    }

    public get event() {
        return new ApiV1EventRegistry(this._client);
    }

    public get eventOrder() {
        return new ApiV1EventOrderRegistry(this._client);
    }
}
