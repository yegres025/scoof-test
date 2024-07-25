import { nanoid } from "nanoid";

const first = {
  question: "Любимый вид завтрака",
  variants: [
    { name: "Бананово-клубничный смузи", value: 0 },
    { name: "Блинчики с повидлом", value: 1 },
    { name: "Яичница с сосисками", value: 2 },
    { name: "Пиво с говяжьим дошираком", value: 3 },
  ],
  img: "https://img.gazeta.ru/files3/450/14906450/allinclusiv__1_-pic_32ratio_1200x800-1200x800-69534.jpg",
  id: nanoid(),
};

const second = {
  question: "Выходные провожу:",
  variants: [
    { name: "Играю в World of Tanks со сменщиком под беленькую", value: 3 },
    { name: "Активный спорт с семьей", value: 0 },
    { name: "Поездка за продуктами, уборка квартиры или гаража", value: 1 },
    { name: "Рыбалка/охота с сыном", value: 2 },
  ],
  img: "https://imageup.ru/img220/4548938/ac1b4e0f-ba53-460e-a9c8-bab5a53c4e29.jpeg",
  id: nanoid(),
};

const third = {
  question: "Как зовут твоего сына?",
  variants: [
    { name: "Володя", value: 3 },
    { name: "Владимир", value: 2 },
    { name: "Ян", value: 1 },
    { name: "Майкл", value: 0 },
  ],
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdQeNz9HGoXntbnTgVB9WJ5pBf57XZyPzEbg&s",
  id: nanoid(),
};

const fourth = {
  question: "После работы ты:",
  variants: [
    { name: "Играешь с детьми и проверяешь уроки", value: 0 },
    { name: "Смотришь 'уральские пельмени'", value: 3 },
    {
      name: "Залипаешь на видео в ОК 'как поймать карася на кукурузу'",
      value: 3,
    },
    { name: "Готовишь ужин на семью и на завтрашний день", value: 1 },
  ],
  img: "https://cs13.pikabu.ru/post_img/big/2019/01/27/4/1548567810162154975.jpg",
  id: nanoid(),
};

const fifth = {
  question: "Твой стиль одежды:",
  variants: [
    { name: "Спортивные штаны, рубаха в клетку, сланцы на носки", value: 3 },
    {
      name: "Льняные шорты, майка в сеточку,сандалии и соломенная шляпа",
      value: 3,
    },
    { name: "Классический стиль", value: 1 },
    {
      name: "Скинни джинсы, поло или футболка известного бренда и кеды",
      value: 0,
    },
  ],
  img: "https://cdn.regnum.ru/uploads/pictures/news/2024/01/13/regnum_picture_17051451763829_big.jpg",
  id: nanoid(),
};

const sixth = {
  question: "Какой автомобиль подарил тебе твой батя?",
  variants: [
    { name: "Свежую иномарочку", value: 0 },
    { name: "У меня нет бати", value: 0 },
    { name: "Отправил ездить на камазе в армию", value: 2 },
    { name: "Мотоблок марки 'Нева'", value: 3 },
  ],
  img: "https://avatars.dzeninfra.ru/get-zen_doc/5231507/pub_61d43404adf20f709d5cb8a2_61db7a20cd29b04c145a564b/scale_1200",
  id: nanoid(),
};

const seventh = {
  question: "Твой любимый инструмент",
  variants: [
    { name: "Гитара", value: 0 },
    { name: "Баян", value: 3 },
    { name: "Маникюрный интрумент", value: 1 },
    { name: "Пассатижи", value: 3 },
    { name: "Паяльник", value: 2 },
  ],
  img: "https://cs.pikabu.ru/post_img/2013/09/05/7/1378376242_848720393.jpg",
  id: nanoid(),
};

const eighth = {
  question: "На день рождения ты бы хотел",
  variants: [
    { name: "Спининг", value: 2 },
    { name: "Резину на твою ласточку", value: 2 },
    { name: "Годовой запас воблы", value: 3 },
  ],
  img: "https://images.pond5.com/fat-bald-white-man-wears-footage-033829496_iconl.jpeg",
  id: nanoid(),
};

const ninth = {
  question: "Какую сеть ты предпочтешь?",
  variants: [
    { name: "Москитная", value: 1 },
    { name: "Соц. сеть 'Одноклассники'", value: 2 },
    { name: "Компьютерная", value: 1 },
    { name: "Рыболовная", value: 3 },
    { name: "Интимные", value: 1 },
  ],
  img: "https://us.123rf.com/450wm/ekaterina1525/ekaterina15252004/ekaterina1525200400161/143939642-lazy-plump-man-in-a-t-shirt-and-headphones-wanders-the-web-people-like-computer-games-the-concept-of.jpg?ver=6",
  id: nanoid(),
};

const tenth = {
    question: "Что пьешь с бодуна?",
    variants: [
      { name: "Огуречный рассол", value: 2 },
      { name: "Охота крепкая или Балтика 9", value: 3 },
      { name: "Домашний квасок", value: 2 },
      { name: "Продолжаю квасить", value: 3 },
      { name: "Фраппе с корицей", value: 0 },
    ],
    img: "https://aif-s3.aif.ru/images/029/284/4d9c9b2c014d1f95978d4809d753c573.jpg",
    id: nanoid(),
}

export const scoofData = [
  first,
  second,
  third,
  fourth,
  fifth,
  sixth,
  seventh,
  eighth,
  ninth,
  tenth
];
