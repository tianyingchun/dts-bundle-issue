import { FabricDebugCallbackData, FabricDebugOptions } from './type.debug';

/**
 * comments for method `setDebugStatus`
 * @param options 
 * @returns 
 */
export const setDebugStatus = (options: FabricDebugOptions): FabricDebugCallbackData => {
  console.log('options', options)
  return {} as FabricDebugCallbackData;
};
