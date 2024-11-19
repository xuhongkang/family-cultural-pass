/**
 * @file Initialize Firebase Admin SDK.
 */
import * as dotenv from 'dotenv';
import * as admin from 'firebase-admin';
dotenv.config();

admin.initializeApp();

import { CreateRegistration } from './callable/create-registration';

export {
    CreateRegistration
};
