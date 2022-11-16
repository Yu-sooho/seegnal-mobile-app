import { images } from './images'

export { themeColor } from './colors'
export { themeFonts } from './fonts'
export * from './images'
export * from './types'

//회원가입 동의 목록
export const AGREELIST = {
    SERVICE: 'SERVICE',
    PERSNAL: 'PERSNAL',
    SENSTIVE: 'SENSTIVE',
    MAKETING: 'MAKETING'
}

//성별
export const GENDER = {
    MAN: '남성',
    WOMAN: '여성'
}

//메인탭바
export const TAB_BAR_LABEL = {
    HOME:'HomeScreen',
    HISTORY:'HistoryScreen',
    GRAPH:'GraphTab',
    SETTING:'SettingScreen'
}

//플로팅버튼
export const STATUS_BUTTONS = {
    WOMAN: [
        {
            image: images.img_seegnal_invite,
            keyword: '오늘의 씨그날',
            id: 0
        },
        {
            image: images.img_seegnal_hi,
            keyword: '피임 안했어요',
            id: 1
        },
        {
            image: images.img_seegnal_hi,
            keyword: '피임 했어요',
            id: 2
        },
        {
            image: images.img_seegnal_hi,
            keyword: '피임약 복용',
            id: 3
        },
        {
            image: images.img_seegnal_hi,
            keyword: '생리 종료',
            id: 4
        },
        {
            image: images.img_seegnal_hi,
            keyword: '생리 시작',
            id: 5
        },
    ],
    MAN: [
        {
            image: images.img_seegnal_hi,
            keyword: '오늘의 씨그날',
            id: 0
        },
        {
            image: images.img_seegnal_hi,
            keyword: '피임 안했어요',
            id: 1
        },
        {
            image: images.img_seegnal_hi,
            keyword: '피임 했어요',
            id: 2
        }
    ]
}

//기분 목록
export const EMOTION = [
    {
        // LOVE
        id:0,
        image: images.img_emotion_love,
        keyword: '사랑해요',
    },
    {
        // MISS
        id:1,
        image: images.img_emotion_miss,
        keyword: '보고싶어요',
    },
    {
        // DEPRESSED
        id:2,
        image: images.img_emotion_despressed,
        keyword: '우울해요',
    },
    {
        // EXCITED 
        id:3,
        image: images.img_emotion_excited,
        keyword: '신나요',
    },
    {
        // FLUTTER
        id:4,
        image: images.img_emotion_flutter,
        keyword: '설레요',
    },
    {
        // SAD
        id:5,
        image: images.img_emotion_sad,
        keyword: '슬퍼요',
    },
    {
        // SENSITIVE
        id:6,
        image: images.img_emotion_sensitive,
        keyword: '예민해요',
    },
    {
        // SOSO 
        id:7,
        image: images.img_emotion_soso,
        keyword: '모르겠어요',
    },
    {
        // UPSET
        id:8,
        image: images.img_emotion_upset,
        keyword: '화나요',
    }
]

//몸상태 목록
export const CONDITION = [
    {
        // ALIVE
        id:0,
        image: images.img_condition_alive,
        keyword: '썡썡햬요',
    },
    {
        //BAD
        id:1,
        image: images.img_condition_bad,
        keyword: '안 좋아요',
    },
    {
        //GOOD
        id:2,
        image: images.img_condition_good,
        keyword: '좋아요',
    },
    {
        // HARD
        id:3,
        image: images.img_condition_hard,
        keyword: '힘들어요',
    },
    {
        // POWER
        id:4,
        image: images.img_condition_power,
        keyword: '힘이 넘쳐요',
    },
    {
        // SICK
        id:5,
        image: images.img_condition_sick,
        keyword: '아파요',
    },
    {
        // SLEEPY
        id:6,
        image: images.img_condition_sleepy,
        keyword: '졸려요',
    },
    {
        // SOSO
        id:7,
        image: images.img_condition_soso,
        keyword: '모르겠어요',
    },
    {
        //TIRED
        id:8,
        image: images.img_condition_tired,
        keyword: '피곤해요',
    },
]


export const DAYS = [
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat',
    'Sun'
]
