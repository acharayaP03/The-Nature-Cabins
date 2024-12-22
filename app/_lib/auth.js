import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';
import { getGuest, createGuest } from './data-service';

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
		/**
		 * @description
		 * this willl be called when the user sign in,
		 * guest will be checked their email exist in supabase, if not it will be created
		 * supabase will return the user object if it exist, if not it will return null
		 */
		async signIn({ user }) {
			try {
				const existingGuest = await getGuest(user.email);
				if (!existingGuest) {
					await createGuest({ email: user.email, full_name: user.name });
				}
				return true;
			} catch {
				return false;
			}
		},
		/**
		 * once the new user is created, the session needs to be updated with the new guestId,
		 * so that we can show their reservations
		 * @param {*} param0
		 * @returns updated session
		 */
		async session({ session }) {
			const guest = await getGuest(session.user.email);
			session.user.guestId = guest.id;
			return session;
		},
	},
	pages: {
		signIn: '/login',
	},
};

export const {
	auth,
	signIn,
	signOut,
	handlers: { GET, POST },
} = NextAuth(authConfig);
