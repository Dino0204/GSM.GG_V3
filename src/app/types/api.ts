import axios, { type AxiosError } from "axios";

type HTTP_METHOD = "GET" | "POST" | "DELETE" | "PUT" | "PATCH";

interface API_OPTIONS<T> {
	method: HTTP_METHOD;
	headers?: Record<string, string>;
	body?: T;
	signal?: AbortSignal;
}

interface API_RESPONSE<T> {
	success: boolean;
	data?: T;
	message?: string;
	error?: string;
	status?: number;
}

export async function API<Res, Req = any>(
	endpoint: string,
	options: API_OPTIONS<Req>,
): Promise<API_RESPONSE<Res>> {
	try {
		const res = await axios(endpoint, {
			method: options.method,
			headers: {
				...options.headers,
			},
			data: options.body,
			signal: options.signal,
		});

		return {
			success: true,
			data: res.data,
			status: res.status,
		};
	} catch (error) {
		const err = error as AxiosError;

		return {
			success: false,
			error: err.message,
			status: err.response?.status,
			message: (err.response?.data as { message?: string })?.message,
		};
	}
}
