import { redirect } from 'next/navigation';

// Permanent redirect to canonical URL
export default function WhatsAppChatbotRedirect() {
  redirect('/whatsapp-chatbot/');
}

export async function generateMetadata() {
  return {
    robots: { index: false, follow: false },
    alternates: { canonical: 'https://factoryjet.com/whatsapp-chatbot/' },
  };
}
