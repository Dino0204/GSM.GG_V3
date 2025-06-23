import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type React from "react";
import { useState } from "react";

type RQProviderProps = {
	children: React.ReactNode;
};

function RQProvider({ children }: RQProviderProps) {
	const [client] = useState(
		new QueryClient({
			defaultOptions: {
				// react-query 전역 설정
				queries: {
					refetchOnWindowFocus: false,
					retryOnMount: true,
					refetchOnReconnect: false,
					retry: false,
				},
			},
		}),
	);

	return (
		<QueryClientProvider client={client}>
			{children}
			<ReactQueryDevtools />
		</QueryClientProvider>
	);
}

export default RQProvider;
