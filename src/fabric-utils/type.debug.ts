import { FabricCallbackData, Json } from './type.common';

export type FabricDebugOptions<T> = {
  enableDebug: T;
};


export type FabricDebugCallbackData<R extends Json> = FabricCallbackData<{
  enabled: R;
}>;
