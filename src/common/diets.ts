
type DayDiets = {
    breakfast: string,
    lunch: string,
    dinner: string,
}

type Days = {
    [day_code: string]: DayDiets
}

const diets: Days = {
    20220816: {
        breakfast: "NULL",
        lunch: "쌀밥-중식(장)  \n" +
            "북어콩나물국(장)9완  (5.6.8.9.13.18.)\n" +
            "양파채/겨자초간장소스(신완완)  (5.6.13.)\n" +
            "바베큐불닭/또띠아쌈(신)6완  (1.2.4.5.6.12.13.15.16.18.)\n" +
            "배추김치(장)  (9.13.)\n" +
            "요구르트-비피더스 사과(신)3완  (2.)\n" +
            "양념(신)8완  (5.6.13.)\n" +
            "로메인시저샐러드(신)완6  (1.2.5.6.10.12.13.)",
        dinner: "쌀밥-석식(장)  \n" +
            "브로콜리스프(장)6완  (2.5.6.13.16.)\n" +
            "고구마단호박범벅(장)6완  (1.2.5.13.)\n" +
            "샐러드파스타(신)11완  (2.5.6.12.13.18.)\n" +
            "흑돼지돈가스(장)  (1.6.10.)\n" +
            "배추김치(장)  (9.13.)"
    },
    20220817: {
        breakfast: "쌀밥-아침(장)  \n" +
            "건새우무국-아침(장)  (5.6.9.13.18.)\n" +
            "구멍어묵볶음(장)6완  (1.5.6.13.16.18.)\n" +
            "신김치순살닭찜(장)9완-아침  (5.6.9.13.15.16.18.)\n" +
            "깻잎김치(신완완)  (9.13.)\n" +
            "푸딩(샤인머스켓)(신)3완  ",
        lunch: "곤드레밥+달래양념장(장)  (5.6.13.18.)\n" +
            "들깨수제비국(장)6완  (5.6.13.18.)\n" +
            "오징어채소무침(장)  (5.6.13.17.)\n" +
            "지파이(신)11완  (2.5.6.12.15.)\n" +
            "배추김치(장)  (9.13.)\n" +
            "자두쥬스  ",
        dinner: "율무밥-석식(장)  \n" +
            "닭개장(장)6완  (5.6.13.15.18.)\n" +
            "잔멸치해바라기씨볶음(신)9완  (5.6.13.)\n" +
            "순살고등어구이(장)  (7.13.)\n" +
            "소떡소떡(장)  (5.6.10.13.)\n" +
            "깍두기(장)  (9.13.)"
    },
    20220818: {
        breakfast: "칼슘쌀밥-아침(장)  \n" +
            "맑은순두부국(장)  (5.6.8.9.13.16.18.)\n" +
            "돈육메란조림-아침(장)  (1.5.6.10.13.18.)\n" +
            "일미볶음(장)  (1.5.6.13.17.)\n" +
            "배추김치(장)  (9.13.)\n" +
            "초콜릿(신)6완  (2.5.)\n" +
            "멜론한조각(신)7~11월  ",
        lunch: "칼슘쌀밥-중식(장)  \n" +
            "참치김치찌개(장)  (5.6.8.9.13.18.)\n" +
            "아귀콩나물찜(장)  (5.)\n" +
            "유린기(장)  (1.5.6.13.15.18.)\n" +
            "해파리냉채(장)  (2.6.10.13.18.)\n" +
            "배추김치(장)  (9.13.)",
        dinner: "클로렐라쌀밥(장)  \n" +
            "부대찌개(신)9완  (1.2.5.6.8.9.10.12.13.16.18.)\n" +
            "코다리조림  (5.6.13.)\n" +
            "취나물무침(장)  (5.6.13.18.)\n" +
            "계란말이(장)6완  (1.12.)\n" +
            "총각김치(장)  (9.13.)"
    },
    20220819: {
        breakfast: "닭고기덮밥-아침(장)  (5.8.13.15.)\n" +
            "실파달걀국-아침(장)  (1.5.6.8.9.13.18.)\n" +
            "새송이버섯볶음(장)  (5.6.13.18.)\n" +
            "배추김치(장)  (9.13.)\n" +
            "떠먹는요구르트(블루베리)(신)6완  (2.)\n" +
            "파인애플불고기피자(신)8완  (1.2.5.6.10.12.13.15.16.)",
        lunch: "잔치국수-단무지채(장)  (1.5.6.8.9.13.16.18.)\n" +
            "매실장아찌(장)6완  \n" +
            "양념주먹밥  (5.6.10.13.)\n" +
            "닭꼬치-달보드레소스(신)5완  (5.6.15.)\n" +
            "배추김치(장)  (9.)\n" +
            "얼려먹는요구르트(신)3완-단종  (2.)",
        dinner: "NULL"
    }
}

export default diets