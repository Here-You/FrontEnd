const WEATHER_ICON_LIST = [
  {
    id: 1,
    iconUrl: '/icons/Cloud.svg',
    iconName: 'CLOUDY',
  },
  {
    id: 2,
    iconUrl: '/icons/CloudLight.svg',
    iconName: 'PARTLY_CLOUDY',
  },
  {
    id: 3,
    iconUrl: '/icons/Rain.svg',
    iconName: 'RAINY',
  },
  {
    id: 4,
    iconUrl: '/icons/Winter.svg',
    iconName: 'SNOWY',
  },
  {
    id: 5,
    iconUrl: '/icons/Sun.svg',
    iconName: 'SUNNY',
  },
];

const MOOD_ICON_LIST = [
  {
    id: 1,
    iconUrl: '/icons/Angry.svg',
    iconName: 'ANGRY',
  },
  {
    id: 2,
    iconUrl: '/icons/Happy.svg',
    iconName: 'HAPPY',
  },
  {
    id: 3,
    iconUrl: '/icons/Lol.svg',
    iconName: 'SMILE',
  },
  {
    id: 4,
    iconUrl: '/icons/Sad.svg',
    iconName: 'SAD',
  },
  {
    id: 5,
    iconUrl: '/icons/Wow.svg',
    iconName: 'SHOCKED',
  },
];

//weather: 날씨. 가능한 값은'CLOUDY', 'RAINY', 'SNOWY', 'PARTLY_CLOUDY', 'SUNNY'
//mood: 기분. 가능한 값은 'ANGRY', 'SAD', 'SMILE', 'HAPPY', 'SHOCKED'

export { WEATHER_ICON_LIST, MOOD_ICON_LIST };
