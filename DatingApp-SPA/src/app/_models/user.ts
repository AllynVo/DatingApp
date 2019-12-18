import { Photo } from './photo';

export interface User {
    id: number;
    username: string;
    age: number;
    gender: string;
    created: Date;
    lastActive: Date;
    photoUrl: string;
    city: string;
    country: string;

    // Optional properties always have to come after the required
    knownAs?: string; // Didn't include in backend
    interests?: string;
    introduction?: string;
    lookingFor?: string;
    photos?: Photo[];
}
