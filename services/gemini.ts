import { ZodiacSign, HoroscopeResult } from '../types';
import { CompatibilityResult } from '../types';

// Simple compatibility stub. Replace with real algorithm or API later.
export async function getCompatibility(a: ZodiacSign, b: ZodiacSign): Promise<CompatibilityResult> {
  const seed = (a + b).split('').reduce((s, c) => s + c.charCodeAt(0), 0);
  const score = (seed % 61) + 20; // range 20-80

  let matchType = 'Challenging';
  if (score > 80) matchType = 'Excellent';
  else if (score > 65) matchType = 'Very Good';
  else if (score > 50) matchType = 'Good';
  else if (score > 35) matchType = 'Mixed';

  const analysis = `A ${matchType.toLowerCase()} match with a compatibility score of ${score}%. Elements and planetary positions will refine this result.`;

  await new Promise((r) => setTimeout(r, 400));

  return { score, matchType, analysis };
}

// Simple daily horoscope stub. Returns a friendly deterministic horoscope.
export async function getDailyHoroscope(sign: ZodiacSign): Promise<HoroscopeResult> {
  const phrases = [
    'A surprising opportunity appears — be ready to act.',
    'Today is for reflection; find stillness before deciding.',
    'Your energy attracts helpful people; accept support.',
    'Take care with finances today; double-check commitments.',
    'A creative spark will solve a nagging problem.'
  ];

  const seed = sign.split('').reduce((s, c) => s + c.charCodeAt(0), 0);
  const prediction = phrases[seed % phrases.length];
  const luckyNumber = (seed % 9) + 1;
  const colors = ['Red', 'Blue', 'Green', 'Yellow', 'Purple', 'Amber', 'Teal'];
  const luckyColor = colors[seed % colors.length];
  const moods = ['Optimistic', 'Calm', 'Energetic', 'Reflective', 'Focused'];
  const mood = moods[seed % moods.length];

  await new Promise((r) => setTimeout(r, 250));

  return { date: new Date().toISOString().split('T')[0], prediction, luckyColor, luckyNumber, mood };
}

// Create a lightweight chat session that streams text chunks.
export function createOracleChat() {
  return {
    async *sendMessageStream({ message }: { message: string }) {
      // Create a simple oracle reply based on the message.
      const baseReply = `Astra says: "${message.slice(0, 200)}" — The stars advise patience and clarity.`;
      // Break reply into small chunks to simulate streaming
      const chunkSize = 40;
      for (let i = 0; i < baseReply.length; i += chunkSize) {
        const chunk = baseReply.slice(i, i + chunkSize);
        // small delay to simulate stream
        await new Promise((r) => setTimeout(r, 60));
        yield { text: chunk } as unknown as { text?: string };
      }
    }
  };
}
