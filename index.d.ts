// Generated by dts-bundle-generator v5.9.0

export declare type Json = undefined | null | boolean | number | string | Json[] | {
	[prop: string]: Json;
};
export declare type FabricCallbackData<T extends Json = null> = {
	code: "fabric_catched_error" | string;
	data: T;
};
export declare type FabricDebugOptions<T> = {
	enableDebug: T;
};
export declare type FabricDebugCallbackData<R extends Json> = FabricCallbackData<{
	enabled: R;
}>;
/**
 * comments for fabric utils.
 */
export declare const fabricUtils: {
	setDebugStatus: <T extends Json, R extends Json>(options: FabricDebugOptions) => FabricDebugCallbackData;
};
export declare const fabricX: () => string;

export {};
