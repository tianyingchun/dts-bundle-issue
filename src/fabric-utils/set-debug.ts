import { Json } from './type.common';
import { FabricDebugCallbackData, FabricDebugOptions } from './type.debug';

/**
 * comments for method `setDebugStatus`
 * @param options 
 * @returns 
 */
export const setDebugStatus = <T extends Json,R extends Json>(options: FabricDebugOptions<T>): FabricDebugCallbackData<R> => {
  console.log('options', options)
  return {} as FabricDebugCallbackData<R>;
};
