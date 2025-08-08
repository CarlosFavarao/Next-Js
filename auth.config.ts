import type { NextAuthConfig } from 'next-auth'

export const authConfig = {
    pages: {
        signIn: '/login',
    },
    callbacks: {
        authorized({ auth, request: { nextUrl } }){
            const isLoggedIn = !!auth?.user;
            const isOnDashboard = nextUrl.pathname.startsWith('/dashboard')
            if (isOnDashboard){
                if (isLoggedIn) {
                    return true
                }
                return false //Redireciona o não autenticado para a página de Login
            } else if (isLoggedIn) {
                return Response.redirect(new URL('/dashboard', nextUrl))
            }
            return true
        },
    },
    providers: [], //Adiciona os providers com um array vazio, por enquanto
} satisfies NextAuthConfig

