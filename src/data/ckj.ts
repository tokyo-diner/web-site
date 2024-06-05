import { Message } from '../app/types';

export const ckj = (): Message => ({
  header: '広尾/中華 <span class="font-rubik">CKJ</span>',
  subHeader: '中華とワイン、ただそれだけ。',
  message:
    'こだわりの食材に惜しむことのない手間を重ねた一皿。それに寄り添うようにグラスに注がれる個性豊かなワイン達。「中華が」ではなく「ワインが」でもなく、「中華とワイン」のマリアージュをお楽しみいただけます。',
  attribute: [
    {
      icon: 'call',
      value: '電話　<a href="tel:070-8969-2128">070-8969-2128</a>',
    },
    {
      icon: 'sunny',
      value: 'ランチ　12:00〜15:00',
    },
    {
      icon: 'moon',
      value: 'ディナー　17:30〜22:30',
    },
    {
      icon: 'lock-closed',
      value: '定休日　日曜日',
    },
    {
      icon: 'map',
      value: '東京都渋谷区広尾1-1-36 PASEO恵比寿 3F',
    },
    {
      icon: 'bookmark',
      value: '<a href="https://ckj-ebis.com/" target="_blank">ckj-ebis.com</a>',
    },
  ],
});
