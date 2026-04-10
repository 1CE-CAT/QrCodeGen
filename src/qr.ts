import * as QRCode from 'qrcode'

export async function generateQRCode(text: string, size?: number): Promise<string> {
    try { 
        const qrCodeDataURL = await QRCode.toString(text, { type: 'terminal', scale: size })
        return qrCodeDataURL
    } catch (error) {
        console.error('Error generating QR code:', error)
    }
    return ''
}