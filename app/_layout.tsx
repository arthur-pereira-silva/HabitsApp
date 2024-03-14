import { Slot } from 'expo-router'
import { GluestackUIProvider } from '@gluestack-ui/themed'
import { config } from '@gluestack-ui/config'
import { AuthProvider } from '../hooks/auth'

// esse layout na raiz já deixa uma herança para o outro layout dentro da tabs
export default function Layout(){
    return (
        <AuthProvider>
            <GluestackUIProvider config={config}>
                <Slot />
            </GluestackUIProvider>
        </AuthProvider>
    )
}   