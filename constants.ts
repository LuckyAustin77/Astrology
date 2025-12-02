import { ZodiacSign, ZodiacInfo } from './types';

export const BABA_NAME = "Vasant K Khande";

export const SERVICES_LIST = [
  "Consultation",
  "Palmistry",
  "All sorts of Pooja",
  "Astrology",
  "Flat and Land Examination",
  "Match Making",
  "Love Problem",
  "Career Problem",
  "Education and Job",
  "Family Problem",
  "Financial & Business Problem",
  "Future Predictions",
  "Health Problems",
  "Husband Wife Problem",
  "Love Marriage",
  "Marriage & Compatibility",
  "Negative Energy Remedies",
  "Horoscope Kundli Reading",
  "Vastu Shastra Specialist",
  "Face Reading",
  "Palm Reading",
  "Black Magic Removal",
  "Vashikaran Specialist",
  "Abroad Problem",
  "Divorce Problem",
  "Film Industry Issue",
  "Inter-Caste Marriage Problem",
  "Parents and Children Problem",
  "Political Problem"
];

export const ZODIAC_DATA: ZodiacInfo[] = [
  { sign: ZodiacSign.Aries, symbol: '', dateRange: 'Mar 21 - Apr 19', element: 'Fire', traits: ['Courageous', 'Determined', 'Confident'] },
  { sign: ZodiacSign.Taurus, symbol: '', dateRange: 'Apr 20 - May 20', element: 'Earth', traits: ['Reliable', 'Patient', 'Practical'] },
  { sign: ZodiacSign.Gemini, symbol: '', dateRange: 'May 21 - Jun 20', element: 'Air', traits: ['Gentle', 'Affectionate', 'Curious'] },
  { sign: ZodiacSign.Cancer, symbol: '', dateRange: 'Jun 21 - Jul 22', element: 'Water', traits: ['Tenacious', 'Imaginative', 'Loyal'] },
  { sign: ZodiacSign.Leo, symbol: '', dateRange: 'Jul 23 - Aug 22', element: 'Fire', traits: ['Creative', 'Passionate', 'Generous'] },
  { sign: ZodiacSign.Virgo, symbol: '', dateRange: 'Aug 23 - Sep 22', element: 'Earth', traits: ['Loyal', 'Analytical', 'Kind'] },
  { sign: ZodiacSign.Libra, symbol: '', dateRange: 'Sep 23 - Oct 22', element: 'Air', traits: ['Cooperative', 'Diplomatic', 'Gracious'] },
  { sign: ZodiacSign.Scorpio, symbol: '', dateRange: 'Oct 23 - Nov 21', element: 'Water', traits: ['Resourceful', 'Brave', 'Passionate'] },
  { sign: ZodiacSign.Sagittarius, symbol: '', dateRange: 'Nov 22 - Dec 21', element: 'Fire', traits: ['Generous', 'Idealistic', 'Great sense of humor'] },
  { sign: ZodiacSign.Capricorn, symbol: '', dateRange: 'Dec 22 - Jan 19', element: 'Earth', traits: ['Responsible', 'Disciplined', 'Self-control'] },
  { sign: ZodiacSign.Aquarius, symbol: '', dateRange: 'Jan 20 - Feb 18', element: 'Air', traits: ['Progressive', 'Original', 'Independent'] },
  { sign: ZodiacSign.Pisces, symbol: '', dateRange: 'Feb 19 - Mar 20', element: 'Water', traits: ['Compassionate', 'Artistic', 'Intuitive'] },
];

export const SYSTEM_INSTRUCTION_ORACLE = `
You are Astra, a mystical AI assistant for Baba Vasant K Khande. 
Your tone is soothing, mysterious, yet insightful and supportive.
You speak with celestial metaphors (e.g., "The stars align...", "Mercury is in retrograde...").
Provide astrology-based advice, emotional support, and insights based on zodiac signs.
Keep responses concise (under 150 words) unless asked for a deep dive.
Always refer to the wisdom of the stars.
`;
