// encryption.service.ts
import { Injectable } from '@nestjs/common';
import * as crypto from 'crypto';

@Injectable()
export class EncryptionService {
    private readonly algorithm = 'aes-256-cbc'; // Using AES encryption with a 256-bit key
    private readonly key: Buffer; // Buffer to hold the key

    constructor() {
        // Generate a random key of 32 bytes (256 bits)
        this.key = crypto.randomBytes(32);
    }

    encrypt(text: string): string {
        const iv = crypto.randomBytes(16); // Generate a random IV (Initialization Vector)
        const cipher = crypto.createCipheriv(this.algorithm, this.key, iv);
        let encrypted = cipher.update(text, 'utf8', 'hex');
        encrypted += cipher.final('hex');
        return iv.toString('hex') + ':' + encrypted; // Prepend the IV to the encrypted data
    }

    decrypt(text: string): string {
        const textParts = text.split(':'); // Split IV and encrypted data
        const iv = Buffer.from(textParts.shift(), 'hex'); // Extract IV
        const encryptedText = textParts.join(':'); // Extract encrypted data
        const decipher = crypto.createDecipheriv(this.algorithm, this.key, iv);
        let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
        decrypted += decipher.final('utf8');
        return decrypted;
    }
    
    
}
