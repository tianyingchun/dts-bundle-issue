export declare type Json = undefined | null | boolean | number | string | Json[] | {
	[prop: string]: Json;
};

export declare type FabricCallbackData<T extends Json = null> = {

   code: "fabric_catched_error" | string;

   data: T;
}