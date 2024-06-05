import { Message } from '../app/types';

export const rece = (): Message => ({
  header: '日本橋/イタリアン <span class="font-rubik">race</span>',
  subHeader: 'ソムリエがいるイタリアン。',
  message:
    '最初のひとくちから最後のひとくちまで驚きと感動を与える、原点回帰の王道イタリアン。 イタリア政府公認店で腕をふるったシェフと、ソムリエが織りなす至福のひとときをお楽しみください。',
  attribute: [
    {
      icon: 'call',
      value: '電話　<a href="tel:03-6875-0791">03-6875-0791</a>',
    },
    {
      icon: 'sunny',
      value: 'ランチ　12:00〜15:00（土日祝のみ）',
    },
    {
      icon: 'moon',
      value: 'ディナー　17:30〜23:30',
    },
    {
      icon: 'lock-closed',
      value: '定休日　月曜日',
    },
    {
      icon: 'map',
      value: '東京都中央区日本橋2-16-3 ブリリアンビル 1F',
    },
    {
      icon: 'bookmark',
      value:
        '<a href="https://rece-nihombashi.com/" target="_blank">rece-nihombashi.com</a>',
    },
  ],
});
