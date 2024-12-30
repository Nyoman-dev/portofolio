/** @format */

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	eslint: {
		ignoreDuringBuilds: true, // Menonaktifkan linting selama build
	},
};

export default nextConfig;
