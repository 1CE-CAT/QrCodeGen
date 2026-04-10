import { generateQRCode } from './qr';
import { Command } from 'commander';

const program = new Command();

program
  .name('qr-cli')
  .description('Генератор QR-кодов для терминала')
  .version('1.0.0');
  program.command('generate <text>')
  .description('Генерация QR-кода')
  .option('-s, --size <number>', 'Размер QR-кода', '4')
  .action(async (text, options) => {

    const size = parseInt(options.size)

    const qr = await generateQRCode(text, size)

    console.log(qr)
  })


program.parse(process.argv);