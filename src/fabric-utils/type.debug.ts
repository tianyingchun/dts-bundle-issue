import { FabricCallbackData } from './type.common';

export type FabricDebugOptions = {
  enableDebug: boolean;
};


export type FabricDebugCallbackData = FabricCallbackData<{
 
  enabled: boolean;
}>;
