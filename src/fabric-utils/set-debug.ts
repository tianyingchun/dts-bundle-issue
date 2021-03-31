import { FabricDebugCallbackData, FabricDebugOptions } from './type.debug';

export const setDebugStatus = (options: FabricDebugOptions): FabricDebugCallbackData => {
  console.log('options', options)
  return {} as FabricDebugCallbackData;
};
