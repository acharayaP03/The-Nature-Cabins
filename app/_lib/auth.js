import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';

const authConfig = {
	providers: [
		Google({
			clientId: process.env.AUTH_GOOGLE_ID,
			clientSecret: process.env.AUTH_GOOGLE_SECRET,
		}),
	],
	// call back to check if user is authorized, this is necessary if you want to protect some routes
	// which in our case '/account'
	callbacks: {
		authorized({ auth, request }) {
			return !!auth?.user;
		},
	},
};

export const {
	auth,
	handlers: { GET, POST },
} = NextAuth(authConfig);
