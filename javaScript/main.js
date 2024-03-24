// الاقسام
const dugDivision = ['جميع الادوية','الادوية المتوفرة','الادوية الناقصة','ادوية السكر','ادوية الضغط','ادوية ادرار البول','الدهون-او-الكوليستيرول','ادوية السيولة','ادوية القلب والدعامة','ادوية اخرى'];
// انشاء اسماء الاقسام من المصفوفة
const ulList = document.querySelector(".drugs-list");
function creatDivisions(divs){
    let liList = ``;
    divs.forEach(li => {
        liList += `<li class="drug-item">${li}</li>`
    })
    ulList.innerHTML = liList;
}
creatDivisions(dugDivision);
// selectors
const list = document.querySelectorAll(".drug-item");
const title = document.querySelector(".section-title");
const drugsCards = document.querySelector(".drugs-cards");
let drugToShow = ``;
// ارسال طلب تحميل البيانات
// const drugData = new XMLHttpRequest();
// // drugData.open("get","https://pastebin.com/raw/XRPkzFb3",true);
// drugData.open("get","json/drugs.json",true);
// drugData.send();
    // const allData = JSON.parse(drugData.responseText);
    const allData = [
        {
            "drugName": "بيزوكارد 5 بلس",
            "drugNameEN": "bisocard 5 plus",
            "drugCode": "4878",
            "image": "imgs/bisoocard5-plus.jpg",
            "activeConstituent": "bisoprolol 5mg + hydrochlorothiazide 12.5mg",
            "alternatives": {
                "names": ['بيزوكارد 5 بلس','كونكور 5 بلس'],
                "images" : ['imgs/bisoocard5-plus.jpg','imgs/concor5plus.jpg']
            },
            "traditionalInfo": "علاج الضغط",
            "administration": "قرص ع الريق صباحا",
            "division1": "ادوية الضغط",
            "division2": "",
            "availability": "available"
        },
        {
            "drugName": "كونكور 5",
            "drugNameEN": "concor 5",
            "drugCode": "4878",
            "image": "imgs/concor5.jpg",
            "activeConstituent": "bisoprolol 5mg",
            "alternatives": {
                "names": ['كونكور 5','بيزوكارد 5'],
                "images" : ['imgs/sinopril-co.jpg','imgs/sinopril-co.jpg']
            },
            "traditionalInfo": "علاج الضغط",
            "administration": "قرص مرة يوميا على حسب ارشادات الطبيب",
            "division1": "ادوية الضغط",
            "division2": "",
            "availability": "available"
        },
        {
            "drugName": "سينوبريل 10",
            "drugNameEN": "sinopril 10",
            "drugCode": "4878",
            "image": "imgs/sinopril.jpg",
            "activeConstituent": "lisinopril 10mg",
            "alternatives": {
                "names": ['سينوبريل 10'],
                "images" : ['imgs/sinopril-co.jpg','imgs/sinopril-co.jpg']
            },
            "traditionalInfo": "علاج الضغط",
            "administration": "قرص مرة يوميا على حسب ارشادات الطبيب",
            "division1": "ادوية الضغط",
            "division2": "",
            "availability": "available"
        },
        {
            "drugName": "سينوبريل كو",
            "drugNameEN": "sinopril co",
            "drugCode": "4878",
            "image": "imgs/sinopril-co.jpg",
            "activeConstituent": "lisinopril 20mg + hydrochlorothiazide 25mg",
            "alternatives": {
                "names": ['سينوبريل كو','ليزينوبريل كو'],
                "images" : ['imgs/sinopril-co.jpg','imgs/sinopril-co.jpg']
            },
            "traditionalInfo": "علاج الضغط",
            "administration": "قرص بعد الفطار",
            "division1": "ادوية الضغط",
            "division2": "",
            "availability": "available"
        },
        {
            "drugName": "كارفيد 6.25",
            "drugNameEN": "carvid 6.25",
            "drugCode": "4878",
            "image": "imgs/carvid.jpg",
            "activeConstituent": "carvedilol 6.25mg",
            "alternatives": {
                "names": ['مليتوفكس 10','فورفلوزين 10','دياكيوريماب 10'],
                "images" : ['imgs/sinopril-co.jpg','imgs/sinopril-co.jpg']
            },
            "traditionalInfo": "علاج القلب",
            "administration": "قرص بعد الفطار",
            "division1": "ادوية الضغط",
            "division2": "",
            "availability": "available"
        },
        {
            "drugName": "كارفيبريس 12.5",
            "drugNameEN": "Carvipress 12.5",
            "drugCode": "4878",
            "image": "imgs/carvipress.jpg",
            "activeConstituent": "carvidilol 12.5mg",
            "alternatives": {
                "names": ['مليتوفكس 10','فورفلوزين 10','دياكيوريماب 10'],
                "images" : ['imgs/sinopril-co.jpg','imgs/sinopril-co.jpg']
            },
            "traditionalInfo": "علاج القلب",
            "administration": "قرص بعد الفطار",
            "division1": "ادوية الضغط",
            "division2": "",
            "availability": "available"
        },
        {
            "drugName": "ايرستابكس 20",
            "drugNameEN": "erastapex 20",
            "drugCode": "4878",
            "image": "imgs/erastapex20.jpg",
            "activeConstituent": "omlesartan 20mg",
            "alternatives": {
                "names": ['مليتوفكس 10','فورفلوزين 10','دياكيوريماب 10'],
                "images" : ['imgs/sinopril-co.jpg','imgs/sinopril-co.jpg']
            },
            "traditionalInfo": "علاج الضغط",
            "administration": "قرص قبل الفطار",
            "division1": "ادوية الضغط",
            "division2": "",
            "availability": "available"
        },
        {
            "drugName": "ايرستابكس كو 20/5",
            "drugNameEN": "erastapex co 20/5",
            "drugCode": "4878",
            "image": "imgs/erastapexco20.jpg",
            "activeConstituent": "omlesartan 5mg + amlodipine 5mg",
            "alternatives": {
                "names": ['مليتوفكس 10','فورفلوزين 10','دياكيوريماب 10'],
                "images" : ['imgs/sinopril-co.jpg','imgs/sinopril-co.jpg']
            },
            "traditionalInfo": "علاج قرحة المعدة",
            "administration": "قرص قبل الفطار",
            "division1": "ادوية الضغط",
            "division2": "",
            "availability": "available"
        },
        {
            "drugName": "ايرستابكس تريو",
            "drugNameEN": "erastapex trio",
            "drugCode": "4878",
            "image": "imgs/erastapextrio.jpg",
            "activeConstituent": "esomeprazole 20mg + amoxicillin 1000mg + clarithromycin 500mg",
            "alternatives": {
                "names": ['مليتوفكس 10','فورفلوزين 10','دياكيوريماب 10'],
                "images" : ['imgs/sinopril-co.jpg','imgs/sinopril-co.jpg']
            },
            "traditionalInfo": "علاج قرحة المعدة",
            "administration": "قرص قبل الفطار",
            "division1": "ادوية الضغط",
            "division2": "",
            "availability": "available"
        },
        {
            "drugName": "ايرستابكس بلس",
            "drugNameEN": "erastapex plus",
            "drugCode": "4878",
            "image": "imgs/erastapexplus.jpg",
            "activeConstituent": "esomeprazole 40mg",
            "alternatives": {
                "names": ['مليتوفكس 10','فورفلوزين 10','دياكيوريماب 10'],
                "images" : ['imgs/sinopril-co.jpg','imgs/sinopril-co.jpg']
            },
            "traditionalInfo": "علاج قرحة المعدة",
            "administration": "قرص قبل الفطار",
            "division1": "ادوية الضغط",
            "division2": "",
            "availability": "available"
        },
        {
            "drugName": "افيفافاسك 5/160",
            "drugNameEN": "avivavasc 5/160",
            "drugCode": "4878",
            "image": "imgs/avivavasc5160.jpg",
            "activeConstituent": "amlodipine 5mg + valsartan 160mg",
            "alternatives": {
                "names": ['افيفافاسك','بلوكاتنس','اكسفورج'],
                "images" : ['imgs/sinopril-co.jpg','imgs/sinopril-co.jpg']
            },
            "traditionalInfo": "علاج الضغط",
            "administration": "قرص بعد الفطار",
            "division1": "ادوية الضغط",
            "division2": "",
            "availability": "not-available"
        },
        {
            "drugName": "افيفافاسك 10/16",
            "drugNameEN": "avivavasc 10/160",
            "drugCode": "4878",
            "image": "imgs/avivavasc10160.jpg",
            "activeConstituent": "amlodipine 10mg + valsartan 160mg",
            "alternatives": {
                "names": ['مليتوفكس 10','فورفلوزين 10','دياكيوريماب 10'],
                "images" : ['imgs/sinopril-co.jpg','imgs/sinopril-co.jpg']
            },
            "traditionalInfo": "علاج الضغط",
            "administration": "قرص بعد الفطار",
            "division1": "ادوية الضغط",
            "division2": "",
            "availability": "not-available"
        },
        {
            "drugName": "ترياكور 5/5",
            "drugNameEN": "triacor 5/5",
            "drugCode": "4878",
            "image": "imgs/triacor55.jpg",
            "activeConstituent": "amlodipine 5mg + perindopril 5mg",
            "alternatives": {
                "names": ['مليتوفكس 10','فورفلوزين 10','دياكيوريماب 10'],
                "images" : ['imgs/sinopril-co.jpg','imgs/sinopril-co.jpg']
            },
            "traditionalInfo": "علاج الضغط",
            "administration": "قرص بعد الفطار",
            "division1": "ادوية الضغط",
            "division2": "",
            "availability": "available"
        },
        {
            "drugName": "تريتاس ماكس",
            "drugNameEN": "tritace max",
            "drugCode": "4878",
            "image": "imgs/tritacemax.jpg",
            "activeConstituent": "olmesartan 40mg",
            "alternatives": {
                "names": ['مليتوفكس 10','فورفلوزين 10','دياكيوريماب 10'],
                "images" : ['imgs/sinopril-co.jpg','imgs/sinopril-co.jpg']
            },
            "traditionalInfo": "علاج الضغط",
            "administration": "قرص بعد الفطار",
            "division1": "ادوية الضغط",
            "division2": "",
            "availability": "available"
        },
        {
            "drugName": "تريتاس 5",
            "drugNameEN": "tritace5",
            "drugCode": "4878",
            "image": "imgs/tritace5.jpg",
            "activeConstituent": "olmesartan 5mg",
            "alternatives": {
                "names": ['مليتوفكس 10','فورفلوزين 10','دياكيوريماب 10'],
                "images" : ['imgs/sinopril-co.jpg','imgs/sinopril-co.jpg']
            },
            "traditionalInfo": "علاج الضغط",
            "administration": "قرص بعد الفطار",
            "division1": "ادوية الضغط",
            "division2": "",
            "availability": "available"
        },
        {
            "drugName": "تريتاس 2.5",
            "drugNameEN": "tritace 2.5",
            "drugCode": "4878",
            "image": "imgs/tritace2-5.jpg",
            "activeConstituent": "olmesartan 2.5mg",
            "alternatives": {
                "names": ['مليتوفكس 10','فورفلوزين 10','دياكيوريماب 10'],
                "images" : ['imgs/sinopril-co.jpg','imgs/sinopril-co.jpg']
            },
            "traditionalInfo": "علاج الضغط",
            "administration": "قرص بعد الفطار",
            "division1": "ادوية الضغط",
            "division2": "",
            "availability": "not-available"
        },
        {
            "drugName": "كلوبكس 75",
            "drugNameEN": "clopex 75mg",
            "drugCode": "4878",
            "image": "imgs/clopex.jpg",
            "activeConstituent": "clopidogrel 75mg",
            "alternatives": {
                "names": ['مليتوفكس 10','فورفلوزين 10','دياكيوريماب 10'],
                "images" : ['imgs/sinopril-co.jpg','imgs/sinopril-co.jpg']
            },
            "traditionalInfo": "علاج تخثر الدم والأوعية الدموية",
            "administration": "قرص بعد الفطار",
            "division1": "ادوية القلب والدعامة",
            "division2": "ادوية السيولة",
            "availability": "not-available"
        },
        {
            "drugName": "كاردكسين",
            "drugNameEN": "cardexin",
            "drugCode": "4878",
            "image": "imgs/cardixin.jpg",
            "activeConstituent": "diltiazem",
            "alternatives": {
                "names": ['مليتوفكس 10','فورفلوزين 10','دياكيوريماب 10'],
                "images" : ['imgs/sinopril-co.jpg','imgs/sinopril-co.jpg']
            },
            "traditionalInfo": "علاج اضطرابات ضربات القلب",
            "administration": "قرص بعد الفطار",
            "division1": "ادوية القلب والدعامة",
            "division2": "",
            "availability": "available"
        },
        {
            "drugName": "بيتاكور 80",
            "drugNameEN": "betacor 80",
            "drugCode": "4878",
            "image": "imgs/betacor.jpg",
            "activeConstituent": "bisoprolol",
            "alternatives": {
                "names": ['مليتوفكس 10','فورفلوزين 10','دياكيوريماب 10'],
                "images" : ['imgs/sinopril-co.jpg','imgs/sinopril-co.jpg']
            },
            "traditionalInfo": "علاج الضغط واضطرابات ضربات القلب",
            "administration": "قرص بعد الفطار",
            "division1": "ادوية الضغط",
            "division2": "ادوية القلب والدعامة",
            "availability": "available"
        },
        {
            "drugName": "ادانكور 10",
            "drugNameEN": "adancor 10",
            "drugCode": "4878",
            "image": "imgs/adancor10.jpg",
            "activeConstituent": "adalat",
            "alternatives": {
                "names": ['مليتوفكس 10','فورفلوزين 10','دياكيوريماب 10'],
                "images" : ['imgs/sinopril-co.jpg','imgs/sinopril-co.jpg']
            },
            "traditionalInfo": "علاج الضغط",
            "administration": "قرص بعد الفطار",
            "division1": "ادوية القلب والدعامة",
            "division2": "",
            "availability": "available"
        },
        {
            "drugName": "رانديل 20",
            "drugNameEN": "randil 20",
            "drugCode": "4878",
            "image": "imgs/randil20.jpg",
            "activeConstituent": "nicorandil 20mg",
            "alternatives": {
                "names": ['مليتوفكس 10','فورفلوزين 10','دياكيوريماب 10'],
                "images" : ['imgs/sinopril-co.jpg','imgs/sinopril-co.jpg']
            },
            "traditionalInfo": "علاج الضغط",
            "administration": "قرص بعد الفطار",
            "division1": "ادوية القلب والدعامة",
            "division2": "",
            "availability": "available"
        },
        {
            "drugName": "ترايكارديا",
            "drugNameEN": "triacardia - vastarel MR",
            "drugCode": "4878",
            "image": "imgs/tricardia.jpg",
            "activeConstituent": "verapamil",
            "alternatives": {
                "names": ['ترايكارديا','ميتاكارديا','فاستاريل ام ار'],
                "images" : ['imgs/sinopril-co.jpg','imgs/sinopril-co.jpg']
            },
            "traditionalInfo": "علاج القلب",
            "administration": "قرص بعد الفطار",
            "division1": "ادوية القلب والدعامة",
            "division2": "",
            "availability": "available"
        },
        {
            "drugName": "كوردارون 200",
            "drugNameEN": "cordaron 200",
            "drugCode": "4878",
            "image": "imgs/cordarone.jpg",
            "activeConstituent": "amiodarone",
            "alternatives": {
                "names": ['مليتوفكس 10','فورفلوزين 10','دياكيوريماب 10'],
                "images" : ['imgs/sinopril-co.jpg','imgs/sinopril-co.jpg']
            },
            "traditionalInfo": "علاج اضطرابات ضربات القلب",
            "administration": "قرص بعد الفطار",
            "division1": "ادوية القلب والدعامة",
            "division2": "",
            "availability": "available"
        },
        {
            "drugName": "ايزوبتن 80",
            "drugNameEN": "isoptin 80",
            "drugCode": "4878",
            "image": "imgs/isoptin80.jpg",
            "activeConstituent": "isoptin",
            "alternatives": {
                "names": ['مليتوفكس 10','فورفلوزين 10','دياكيوريماب 10'],
                "images" : ['imgs/sinopril-co.jpg','imgs/sinopril-co.jpg']
            },
            "traditionalInfo": "علاج ارتفاع ضغط الدم",
            "administration": "قرص بعد الفطار",
            "division1": "ادوية القلب والدعامة",
            "division2": "ادوية الضغط",
            "availability": "not-available"
        },
        {
            "drugName": "اندرال 10",
            "drugNameEN": "inderal 10mg",
            "drugCode": "4878",
            "image": "imgs/inderal10.jpg",
            "activeConstituent": "propranolol",
            "alternatives": {
                "names": ['مليتوفكس 10','فورفلوزين 10','دياكيوريماب 10'],
                "images" : ['imgs/sinopril-co.jpg','imgs/sinopril-co.jpg']
            },
            "traditionalInfo": "علاج ضغط الدم المرتفع وضربات القلب",
            "administration": "قرص بعد الفطار",
            "division1": "ادوية القلب والدعامة",
            "division2": "ادوية الضغط",
            "availability": "not-available"
        },
        {
            "drugName": "الكابرس 5",
            "drugNameEN": "alkapress 5",
            "drugCode": "4878",
            "image": "imgs/alkapress5.jpg",
            "activeConstituent": "amlodipine 5mg",
            "alternatives": {
                "names": ['مليتوفكس 10','فورفلوزين 10','دياكيوريماب 10'],
                "images" : ['imgs/sinopril-co.jpg','imgs/sinopril-co.jpg']
            },
            "traditionalInfo": "علاج ضغط الدم المرتفع",
            "administration": "قرص بعد الفطار",
            "division1": "ادوية الضغط",
            "division2": "",
            "availability": "available"
        },
        {
            "drugName": "كاندلكان 8",
            "drugNameEN": "candelkan 8",
            "drugCode": "4878",
            "image": "imgs/candelkan8.jpg",
            "activeConstituent": "candesartan 8mg",
            "alternatives": {
                "names": ['مليتوفكس 10','فورفلوزين 10','دياكيوريماب 10'],
                "images" : ['imgs/sinopril-co.jpg','imgs/sinopril-co.jpg']
            },
            "traditionalInfo": "علاج ضغط الدم المرتفع",
            "administration": "قرص بعد الفطار",
            "division1": "ادوية الضغط",
            "division2": "",
            "availability": "not-available"
        },
        {
            "drugName": "كاندلكان 16 بلس",
            "drugNameEN": "candelkan 16 plus",
            "drugCode": "4878",
            "image": "imgs/candelkan16plus.jpg",
            "activeConstituent": "candesartan 16mg",
            "alternatives": {
                "names": ['مليتوفكس 10','فورفلوزين 10','دياكيوريماب 10'],
                "images" : ['imgs/sinopril-co.jpg','imgs/sinopril-co.jpg']
            },
            "traditionalInfo": "علاج ضغط الدم المرتفع",
            "administration": "قرص بعد الفطار",
            "division1": "ادوية الضغط",
            "division2": "",
            "availability": "not-available"
        },
        {
            "drugName": "سيلكونزوك 100",
            "drugNameEN": "selconzoc 100",
            "drugCode": "4878",
            "image": "imgs/selokenzoc100.jpg",
            "activeConstituent": "silodosin 100mg",
            "alternatives": {
                "names": ['مليتوفكس 10','فورفلوزين 10','دياكيوريماب 10'],
                "images" : ['imgs/sinopril-co.jpg','imgs/sinopril-co.jpg']
            },
            "traditionalInfo": "علاج الضغط",
            "administration": "قرص بعد الفطار",
            "division1": "ادوية الضغط",
            "division2": "",
            "availability": "available"
        },
        {
            "drugName": "نيفيلوب 5",
            "drugNameEN": "nivilop 5",
            "drugCode": "4878",
            "image": "imgs/nevilop5.jpg",
            "activeConstituent": "amlodipine 5mg",
            "alternatives": {
                "names": ['مليتوفكس 10','فورفلوزين 10','دياكيوريماب 10'],
                "images" : ['imgs/sinopril-co.jpg','imgs/sinopril-co.jpg']
            },
            "traditionalInfo": "علاج ضغط الدم المرتفع",
            "administration": "قرص بعد الفطار",
            "division1": "ادوية الضغط",
            "division2": "",
            "availability": "not-available"
        },
        {
            "drugName": "نيفيلوب بلس",
            "drugNameEN": "nivilop plus",
            "drugCode": "4878",
            "image": "imgs/nevilop5plus.jpg",
            "activeConstituent": "amlodipine 5mg + valsartan 80mg",
            "alternatives": {
                "names": ['مليتوفكس 10','فورفلوزين 10','دياكيوريماب 10'],
                "images" : ['imgs/sinopril-co.jpg','imgs/sinopril-co.jpg']
            },
            "traditionalInfo": "علاج ضغط الدم المرتفع",
            "administration": "قرص بعد الفطار",
            "division1": "ادوية الضغط",
            "division2": "",
            "availability": "not-available"
        },
        {
            "drugName": "ايفابرادين 5",
            "drugNameEN": "ivabradin 5",
            "drugCode": "4878",
            "image": "imgs/napibradine5.jpg",
            "activeConstituent": "ivabradine 5mg",
            "alternatives": {
                "names": ['ايفابرادين 5','نابيبرادين 5','بروكارلان 5'],
                "images" : ['imgs/sinopril-co.jpg','imgs/sinopril-co.jpg']
            },
            "traditionalInfo": "علاج ضربات القلب",
            "administration": "قرص بعد الفطار",
            "division1": "ادوية القلب والدعامة",
            "division2": "",
            "availability": "not-available"
        },
        {
            "drugName": "ايفبرادين 7.5",
            "drugNameEN": "ivabradine 7.5mg",
            "drugCode": "4878",
            "image": "imgs/napibradine75.jpg",
            "activeConstituent": "ivabradine 7.5mg",
            "alternatives": {
                "names": ['ايفابرادين 7.5','نابيبرادين 7.5','بروكارلان 7.5'],
                "images" : ['imgs/sinopril-co.jpg','imgs/sinopril-co.jpg']
            },
            "traditionalInfo": "علاج ضربات القلب",
            "administration": "قرص بعد الفطار",
            "division1": "ادوية القلب والدعامة",
            "division2": "",
            "availability": "not-available"
        },
        {
            "drugName": "اكساريتيك 20",
            "drugNameEN": "exaretic 20",
            "drugCode": "4878",
            "image": "imgs/exaretic20.jpg",
            "activeConstituent": "torasemide 20mg",
            "alternatives": {
                "names": ['مليتوفكس 10','فورفلوزين 10','دياكيوريماب 10'],
                "images" : ['imgs/sinopril-co.jpg','imgs/sinopril-co.jpg']
            },
            "traditionalInfo": "علاج الضغط ومدر البول",
            "administration": "قرص قبل الفطار ع الريق صباحا",
            "division1": "ادوية ادرار البول",
            "division2": "ادوية الضغط",
            "availability": "available"
        },
        {
            "drugName": "لازكس 40",
            "drugNameEN": "lasix 40mg",
            "drugCode": "4878",
            "image": "imgs/lasix40.jpg",
            "activeConstituent": "furosemide 40mg",
            "alternatives": {
                "names": ['مليتوفكس 10','فورفلوزين 10','دياكيوريماب 10'],
                "images" : ['imgs/sinopril-co.jpg','imgs/sinopril-co.jpg']
            },
            "traditionalInfo": "علاج الضغط ومدر البول",
            "administration": "قرص قبل الفطار ع الريق صباحا",
            "division1": "ادوية ادرار البول",
            "division2": "ادوية الضغط",
            "availability": "available"
        },
        {
            "drugName": "الداكتون 25",
            "drugNameEN": "aldactone 25mg",
            "drugCode": "4878",
            "image": "imgs/aldactone25.jpg",
            "activeConstituent": "spironolactone 25mg",
            "alternatives": {
                "names": ['مليتوفكس 10','فورفلوزين 10','دياكيوريماب 10'],
                "images" : ['imgs/sinopril-co.jpg','imgs/sinopril-co.jpg']
            },
            "traditionalInfo": "علاج الضغط ومدر البول",
            "administration": "قرص قبل الفطار ع الريق صباحا",
            "division1": "ادوية ادرار البول",
            "division2": "ادوية الضغط",
            "availability": "available"
        },
        {
            "drugName": "كارفالون 25",
            "drugNameEN": "carfalone 25mg",
            "drugCode": "4878",
            "image": "imgs/carfalone25.jpg",
            "activeConstituent": "carvedilol 25mg",
            "alternatives": {
                "names": ['مليتوفكس 10','فورفلوزين 10','دياكيوريماب 10'],
                "images" : ['imgs/sinopril-co.jpg','imgs/sinopril-co.jpg']
            },
            "traditionalInfo": "علاج الضغط ومدر البول",
            "administration": "قرص قبل الفطار ع الريق صباحا",
            "division1": "ادوية ادرار البول",
            "division2": "ادوية الضغط",
            "availability": "not-available"
        },
        {
            "drugName": "كوليروز 10",
            "drugNameEN": "Cholerose 10mg",
            "drugCode": "4878",
            "image": "imgs/cholerose10.jpg",
            "activeConstituent": "atorvastatin 10mg",
            "alternatives": {
                "names": ['مليتوفكس 10','فورفلوزين 10','دياكيوريماب 10'],
                "images" : ['imgs/sinopril-co.jpg','imgs/sinopril-co.jpg']
            },
            "traditionalInfo": "علاج الدهون",
            "administration": "قرص بعد العشاء",
            "division1": "الدهون-او-الكوليستيرول",
            "division2": "",
            "availability": "not-available"
        },
        {
            "drugName": "اتوريزا 10/20",
            "drugNameEN": "",
            "drugCode": "4878",
            "image": "imgs/atoreza1020.jpg",
            "activeConstituent": "atorvastatin 10mg + ezetimibe 20mg",
            "alternatives": {
                "names": ['مليتوفكس 10','فورفلوزين 10','دياكيوريماب 10'],
                "images" : ['imgs/sinopril-co.jpg','imgs/sinopril-co.jpg']
            },
            "traditionalInfo": "علاج الدهون",
            "administration": "قرص بعد العشاء",
            "division1": "الدهون-او-الكوليستيرول",
            "division2": "",
            "availability": "not-available"
        },
        {
            "drugName": "اتوريزا 10/40",
            "drugNameEN": "",
            "drugCode": "4878",
            "image": "imgs/atoreza1040.jpg",
            "activeConstituent": "atorvastatin 10mg + ezetimibe 40mg",
            "alternatives": {
                "names": ['مليتوفكس 10','فورفلوزين 10','دياكيوريماب 10'],
                "images" : ['imgs/sinopril-co.jpg','imgs/sinopril-co.jpg']
            },
            "traditionalInfo": "علاج الدهون",
            "administration": "قرص بعد العشاء",
            "division1": "الدهون-او-الكوليستيرول",
            "division2": "",
            "availability": "not-available"
        },
        {
            "drugName": "اتور 20",
            "drugNameEN": "",
            "drugCode": "4878",
            "image": "imgs/ator20.jpg",
            "activeConstituent": "atorvastatin 20mg",
            "alternatives": {
                "names": ['مليتوفكس 10','فورفلوزين 10','دياكيوريماب 10'],
                "images" : ['imgs/sinopril-co.jpg','imgs/sinopril-co.jpg']
            },
            "traditionalInfo": "علاج الدهون",
            "administration": "قرص بعد العشاء",
            "division1": "الدهون-او-الكوليستيرول",
            "division2": "",
            "availability": "not-available"
        },
        {
            "drugName": "اتور 40",
            "drugNameEN": "",
            "drugCode": "4878",
            "image": "imgs/ator40.jpg",
            "activeConstituent": "atorvastatin 40mg",
            "alternatives": {
                "names": ['مليتوفكس 10','فورفلوزين 10','دياكيوريماب 10'],
                "images" : ['imgs/sinopril-co.jpg','imgs/sinopril-co.jpg']
            },
            "traditionalInfo": "علاج الدهون",
            "administration": "قرص بعد العشاء",
            "division1": "الدهون-او-الكوليستيرول",
            "division2": "",
            "availability": "not-available"
        },
        {
            "drugName": "ليبانتيل",
            "drugNameEN": "",
            "drugCode": "4878",
            "image": "imgs/lipanthyl.jpg",
            "activeConstituent": "fenofibrate",
            "alternatives": {
                "names": ['مليتوفكس 10','فورفلوزين 10','دياكيوريماب 10'],
                "images" : ['imgs/sinopril-co.jpg','imgs/sinopril-co.jpg']
            },
            "traditionalInfo": "علاج الدهون الثلاثية",
            "administration": "قرص بعد العشاء",
            "division1": "الدهون-او-الكوليستيرول",
            "division2": "",
            "availability": "not-available"
        },
        {
            "drugName": "داينترا 5",
            "drugNameEN": "",
            "drugCode": "4878",
            "image": "imgs/dinitra5.jpg",
            "activeConstituent": "trazodone 5mg",
            "alternatives": {
                "names": ['مليتوفكس 10','فورفلوزين 10','دياكيوريماب 10'],
                "images" : ['imgs/sinopril-co.jpg','imgs/sinopril-co.jpg']
            },
            "traditionalInfo": "علاج الاكتئاب والقلق",
            "administration": "قرص قبل النوم",
            "division1": "ادوية اخرى",
            "division2": "",
            "availability": "available"
        },
        {
            "drugName": "نتروماك 2.5 - Nitromac 2.5",
            "drugNameEN": "",
            "drugCode": "4878",
            "image": "imgs/nitromak.jpg",
            "activeConstituent": "nitroglycerin 2.5mg",
            "alternatives": {
                "names": ['مليتوفكس 10','فورفلوزين 10','دياكيوريماب 10'],
                "images" : ['imgs/sinopril-co.jpg','imgs/sinopril-co.jpg']
            },
            "traditionalInfo": "علاج ألم الصدر وانقباض الشرايين القلبية",
            "administration": "قرص تحت اللسان",
            "division1": "أدوية القلب",
            "division2": "",
            "availability": "available"
        },
        {
            "drugName": "ماريفان 1",
            "drugNameEN": "",
            "drugCode": "4878",
            "image": "imgs/marevan1.jpg",
            "activeConstituent": "warfarin 1mg",
            "alternatives": {
                "names": ['مليتوفكس 10','فورفلوزين 10','دياكيوريماب 10'],
                "images" : ['imgs/sinopril-co.jpg','imgs/sinopril-co.jpg']
            },
            "traditionalInfo": "علاج تخثر الدم والأوعية الدموية",
            "administration": "قرص بعد الفطار",
            "division1": "ادوية السيولة",
            "division2": "",
            "availability": "available"
        },
        {
            "drugName": "ماريفان 3",
            "drugNameEN": "",
            "drugCode": "4878",
            "image": "imgs/marevan3.jpg",
            "activeConstituent": "warfarin 3mg",
            "alternatives": {
                "names": ['مليتوفكس 10','فورفلوزين 10','دياكيوريماب 10'],
                "images" : ['imgs/sinopril-co.jpg','imgs/sinopril-co.jpg']
            },
            "traditionalInfo": "علاج تخثر الدم والأوعية الدموية",
            "administration": "قرص بعد الفطار",
            "division1": "ادوية السيولة",
            "division2": "",
            "availability": "not-available"
        },
        {
            "drugName": "ماريفان 5",
            "drugNameEN": "",
            "drugCode": "4878",
            "image": "imgs/marevan5.jpg",
            "activeConstituent": "warfarin 5mg",
            "alternatives": {
                "names": ['مليتوفكس 10','فورفلوزين 10','دياكيوريماب 10'],
                "images" : ['imgs/sinopril-co.jpg','imgs/sinopril-co.jpg']
            },
            "traditionalInfo": "علاج تخثر الدم والأوعية الدموية",
            "administration": "قرص بعد الفطار",
            "division1": "ادوية السيولة",
            "division2": "",
            "availability": "available"
        },
        {
            "drugName": "اسبوسيد (اسبرين)",
            "drugNameEN": "",
            "drugCode": "4878",
            "image": "imgs/aspocid.jpg",
            "activeConstituent": "aspirin",
            "alternatives": {
                "names": ['مليتوفكس 10','فورفلوزين 10','دياكيوريماب 10'],
                "images" : ['imgs/sinopril-co.jpg','imgs/sinopril-co.jpg']
            },
            "traditionalInfo": "علاج ارتفاع ضغط الدم",
            "administration": "قرص بعد الفطار",
            "division1": "ادوية السيولة",
            "division2": "",
            "availability": "available"
        },
        {
            "drugName": "فاكساتو 5",
            "drugNameEN": "",
            "drugCode": "4878",
            "image": "imgs/vaxa5.jpg",
            "activeConstituent": "rivaroxaban 5mg",
            "alternatives": {
                "names": ['مليتوفكس 10','فورفلوزين 10','دياكيوريماب 10'],
                "images" : ['imgs/sinopril-co.jpg','imgs/sinopril-co.jpg']
            },
            "traditionalInfo": "علاج تخثر الدم والأوعية الدموية",
            "administration": "قرص بعد الفطار",
            "division1": "ادوية القلب والدعامة",
            "division2": "ادوية السيولة",
            "availability": "not-available"
        },
        
        {
            "drugName": "فاكساتو 15",
            "drugNameEN": "",
            "drugCode": "4878",
            "image": "imgs/vaxa15.jpg",
            "activeConstituent": "rivaroxaban 5mg",
            "alternatives": {
                "names": ['مليتوفكس 10','فورفلوزين 10','دياكيوريماب 10'],
                "images" : ['imgs/sinopril-co.jpg','imgs/sinopril-co.jpg']
            },
            "traditionalInfo": "علاج تخثر الدم والأوعية الدموية",
            "administration": "قرص بعد الفطار",
            "division1": "ادوية القلب والدعامة",
            "division2": "ادوية السيولة",
            "availability": "not-available"
        },
        
        {
            "drugName": "فاكساتو 20",
            "drugNameEN": "",
            "drugCode": "4878",
            "image": "imgs/vaxa20.jpg",
            "activeConstituent": "rivaroxaban 5mg",
            "alternatives": {
                "names": ['مليتوفكس 10','فورفلوزين 10','دياكيوريماب 10'],
                "images" : ['imgs/sinopril-co.jpg','imgs/sinopril-co.jpg']
            },
            "traditionalInfo": "علاج تخثر الدم والأوعية الدموية",
            "administration": "قرص بعد الفطار",
            "division1": "ادوية القلب والدعامة",
            "division2": "ادوية السيولة",
            "availability": "not-available"
        },
        {
            "drugName": "انسولين",
            "drugNameEN": "insulin",
            "drugCode": "4878",
            "image": "imgs/insulin.jpg",
            "activeConstituent": "insulin",
            "alternatives": {
                "names": ['انسولين 70/30','ميكستارد'],
                "images" : ['imgs/sinopril-co.jpg','imgs/sinopril-co.jpg']
            },
            "traditionalInfo": "علاج مرض السكري",
            "administration": "حقن تحت الجلد",
            "division1": "ادوية السكر",
            "division2": "",
            "availability": "not-available"
        },
        {
            "drugName": "شوجارلو بلس",
            "drugNameEN": "suglarlo - vildagliptin - jalbets",
            "drugCode": "4878",
            "image": "imgs/vildagluse.jpg",
            "activeConstituent": "vildagliptin",
            "alternatives": {
                "names": ['شوجارلو بلس','فلداجلوز بلس','جليبتس بلس'],
                "images" : ['imgs/sinopril-co.jpg','imgs/sinopril-co.jpg']
            },
            "traditionalInfo": "علاج مرض السكري",
            "administration": "قرص بعد الفطار",
            "division1": "ادوية السكر",
            "division2": "",
            "availability": "not-available"
        },
        {
            "drugName": "جليميت فورت",
            "drugNameEN": "glimet fort",
            "drugCode": "4878",
            "image": "imgs/glimet-fort.jpg",
            "activeConstituent": "glimepiride 2mg + metformin 500mg",
            "alternatives": {
                "names": ['جليميت فورت'],
                "images" : ['imgs/sinopril-co.jpg','imgs/sinopril-co.jpg']
            },
            "traditionalInfo": "علاج مرض السكري",
            "administration": "قرص بعد الفطار",
            "division1": "ادوية السكر",
            "division2": "",
            "availability": "not-available"
        },
        {
            "drugName": "دياميكرون 60",
            "drugNameEN": "diamicron 60",
            "drugCode": "4878",
            "image": "imgs/diamedizin.jpg",
            "activeConstituent": "gliclazide 60mg",
            "alternatives": {
                "names": ['دياميكرون 60','دياميديزين 60'],
                "images" : ['imgs/sinopril-co.jpg','imgs/sinopril-co.jpg']
            },
            "traditionalInfo": "علاج مرض السكري",
            "administration": "قرص قبل الفطار",
            "division1": "ادوية السكر",
            "division2": "",
            "availability": "available"
        },
        {
            "drugName": "اماريل 3",
            "drugNameEN": "amaryl 3",
            "drugCode": "4878",
            "image": "imgs/amaryl3.jpg",
            "activeConstituent": "glimepiride 3mg",
            "alternatives": {
                "names": ['اماريل 3','جليميبرايد 3'],
                "images" : ['imgs/sinopril-co.jpg','imgs/sinopril-co.jpg']
            },
            "traditionalInfo": "علاج مرض السكري",
            "administration": "قرص قبل الفطار",
            "division1": "ادوية السكر",
            "division2": "",
            "availability": "not-available"
        },
        {
            "drugName": "سيدوفاج 500",
            "drugNameEN": "sydovag 500",
            "drugCode": "4878",
            "image": "imgs/cidophage500.jpg",
            "activeConstituent": "metformin 500mg",
            "alternatives": {
                "names": ['سيدوفاج 500','ميبافاج 500'],
                "images" : ['imgs/sinopril-co.jpg','imgs/sinopril-co.jpg']
            },
            "traditionalInfo": "علاج مرض السكري",
            "administration": "قرص بعد الفطار",
            "division1": "ادوية السكر",
            "division2": "",
            "availability": "not-available"
        },
        {
            "drugName": "مليتوفكس 10",
            "drugNameEN": "forfloxin - ambacosa - mletofex",
            "drugCode": "4878",
            "image": "imgs/forflozin10.jpg",
            "activeConstituent": "fluoxetine 20mg",
            "alternatives": {
                "names": ['مليتوفكس 10','فورفلوزين 10','دياكيوريماب 10'],
                "images" : ['imgs/sinopril-co.jpg','imgs/sinopril-co.jpg']
            },
            "traditionalInfo": "علاج الاكتئاب",
            "administration": "قرص بعد الفطار",
            "division1": "ادوية السكر",
            "division2": "ادوية القلب والدعامة",
            "availability": "not-available"
        },
        {
            "drugName": "بانتوبي - بانتوبرازول",
            "drugNameEN": "pantobi - pantoprazole",
            "drugCode": "4878",
            "image": "imgs/futaban40.jpg",
            "activeConstituent": "pantoprazole",
            "alternatives": {
                "names": ['مليتوفكس 10','فورفلوزين 10','دياكيوريماب 10'],
                "images" : ['imgs/sinopril-co.jpg','imgs/sinopril-co.jpg']
            },
            "traditionalInfo": "علاج قرحة المعدة",
            "administration": "قرص قبل الفطار",
            "division1": "ادوية اخرى",
            "division2": "",
            "availability": "not-available"
        },
        {
            "drugName": "حقنة البنسيلين",
            "drugNameEN": "penicillin injection",
            "drugCode": "4878",
            "image": "imgs/depo-pen.jpg",
            "activeConstituent": "penicillin",
            "alternatives": {
                "names": ['مليتوفكس 10','فورفلوزين 10','دياكيوريماب 10'],
                "images" : ['imgs/sinopril-co.jpg','imgs/sinopril-co.jpg']
            },
            "traditionalInfo": "علاج العدوى",
            "administration": "حقن عضلي",
            "division1": "ادوية اخرى",
            "division2": "",
            "availability": "not-available"
        },
        {
            "drugName": "الميلجا",
            "drugNameEN": "milga",
            "drugCode": "4878",
            "image": "imgs/milga.jpg",
            "activeConstituent": "multivitamins",
            "alternatives": {
                "names": ['مليتوفكس 10','فورفلوزين 10','دياكيوريماب 10'],
                "images" : ['imgs/sinopril-co.jpg','imgs/sinopril-co.jpg']
            },
            "traditionalInfo": "فيتامينات الاعصاب",
            "administration": "قرص بعد الفطار",
            "division1": "ادوية اخرى",
            "division2": "",
            "availability": "not-available"
        },
        {
            "drugName": "حقن الفيتامينات",
            "drugNameEN": "vitamins injection",
            "drugCode": "4878",
            "image": "imgs/depovit.jpg",
            "activeConstituent": "vitamins",
            "alternatives": {
                "names": ['مليتوفكس 10','فورفلوزين 10','دياكيوريماب 10'],
                "images" : ['imgs/sinopril-co.jpg','imgs/sinopril-co.jpg']
            },
            "traditionalInfo": "فيتامينات الاعصاب",
            "administration": "حقن عضلي",
            "division1": "ادوية اخرى",
            "division2": "",
            "availability": "not-available"
        },
        {
            "drugName": "ثيوتاسيد 600",
            "drugNameEN": "thyotacide 600",
            "drugCode": "4878",
            "image": "imgs/thiotacid600.jpg",
            "activeConstituent": "thyotacide 600mg",
            "alternatives": {
                "names": ['مليتوفكس 10','فورفلوزين 10','دياكيوريماب 10'],
                "images" : ['imgs/sinopril-co.jpg','imgs/sinopril-co.jpg']
            },
            "traditionalInfo": "مضادات الاكسدة للحماية",
            "administration": "قرص بعد الفطار",
            "division1": "ادوية اخرى",
            "division2": "",
            "availability": "not-available"
        }
    ]
    ;
    // معلومة تاكيد تحميل البيانات
    title.innerText = "اختار القسم لعرض معلومات الادوية"
    // اظهار اسم القسم
    list.forEach(item => {
        item.addEventListener('click', e => {
            removeClassactive(list);
            addClassactive(item);
            title.textContent = e.target.innerText;
            drugsCards.innerHTML = drugToShow;
            // فلتر الادوية
            allData.forEach(drug => {
            if(e.target.innerText === 'جميع الادوية'){
                getDrugs(drug);
            }else if(e.target.innerText === 'الادوية المتوفرة' && drug.availability === "available"){
                getDrugs(drug);
            }else if(e.target.innerText === 'الادوية الناقصة' && drug.availability === "not-available"){
                getDrugs(drug);
            }else if(drug.division1 === e.target.innerText || drug.division2 === e.target.innerText){
                getDrugs(drug);
            }
        })
    })
});
// Start Functions
function addClassactive (ele){
    ele.classList.add("active");
}
function removeClassactive (allElements){
    allElements.forEach(ele =>{
        ele.classList.remove("active");
    })
}
// filter function
function getDrugs(oneDrug){
    let everyDrug = document.createElement("div");
    everyDrug.className = `every-drug ${oneDrug.availability}`;

    // creat img element
    let image = document.createElement("img");
    image.className = "drug-img";
    image.src = `${oneDrug.image}`;
    everyDrug.appendChild(image);

    // creat div info
    let divInfo = document.createElement("div");
    divInfo.className = 'info'
    // creat h4 for drug name
    let nameh4 = document.createElement("h4");
    nameh4.className = 'name'
    let name4InnerText = document.createTextNode(`${oneDrug.drugName}`);
    nameh4.appendChild(name4InnerText);
    divInfo.appendChild(nameh4);
    // creat h6 for drug info
    let nameh6 = document.createElement("h6");
    nameh6.className = 'used-for';
    let name6InnerText = document.createTextNode(`${oneDrug.traditionalInfo}`);
    nameh6.appendChild(name6InnerText);
    divInfo.appendChild(nameh6);
    // creat span for more details
    let moreDetails = document.createElement('span');
    moreDetails.className = 'more-details';
    let moreDetailsText = document.createTextNode('عرض معلومات الدواء');
    moreDetails.appendChild(moreDetailsText);
    divInfo.appendChild(moreDetails);

    // add drug info to the drug main card // everydrug
    everyDrug.appendChild(divInfo);

    // add drug to the cards Container
    drugsCards.appendChild(everyDrug);

    createDetails(everyDrug);
    selectDrugs(everyDrug);

}
// create deatails div function
function createDetails(theDrug){
    let drugOPJ = allData.find(opj => opj.drugName === `${theDrug.querySelector('.info h4').innerText}`);
// creat fixed div to show more details
let detailsDiv = document.createElement("div");
detailsDiv.className = 'details';

// create close button
let closebtn = document.createElement("button");
closebtn.className = 'close';
let closebtnText = document.createTextNode('اغلاق');
closebtn.appendChild(closebtnText);
detailsDiv.appendChild(closebtn);

// creat main h3
let mainh3 = document.createElement('h3');
let mainh3Text = document.createTextNode('معلومات عن الدواء - والبدائل');
mainh3.appendChild(mainh3Text);
detailsDiv.appendChild(mainh3);

// creat info container
let infoContainer = document.createElement('div');
infoContainer.className = 'info-container';

// create info div
let infoDiv = document.createElement('div');
infoDiv.className = 'info';

// create info h4 and p
let infoDivH4 = document.createElement('h4');
let h4Text = document.createTextNode('اسماء البدائل');
infoDivH4.appendChild(h4Text);
let infoDivP = document.createElement('p');
let pText = document.createTextNode(`${drugOPJ.alternatives.names.join(" - ")}`);
// let pText = document.createTextNode(`${drugOPJ.drugName}`);
// let pText = document.createTextNode('كلوبكس - كلاتكس - انجيوفوكس - بلافيكارد');
infoDivP.appendChild(pText);

infoDiv.appendChild(infoDivH4);
infoDiv.appendChild(infoDivP);
// add info to the info-container
infoContainer.appendChild(infoDiv);


// create recommended use div
let recomendedUseDiv = document.createElement('div');
recomendedUseDiv.className = 'recomended-use';

// create info h4 and p
let recomendedUseDivH4 = document.createElement('h4');
let recomendedUseDivh4Text = document.createTextNode('الاستحدام الشائع');
recomendedUseDivH4.appendChild(recomendedUseDivh4Text);
let recomendedUseDivP = document.createElement('p');
let recomendedUseDivpText = document.createTextNode(`${drugOPJ.administration}`);
recomendedUseDivP.appendChild(recomendedUseDivpText);

recomendedUseDiv.appendChild(recomendedUseDivH4);
recomendedUseDiv.appendChild(recomendedUseDivP);
// add recomended Use Div to the info-container
infoContainer.appendChild(recomendedUseDiv);

// create alternatives container
let alternativesContainer = document.createElement('div');
alternativesContainer.className = 'alternatives-container';


// add infocontainer to the details div
detailsDiv.appendChild(infoContainer);

// create alternativesDrugsContainer
let altDrugsImagesContainer = document.createElement('div');
altDrugsImagesContainer.className = 'alt-imgs-container';

getAlternativesImages(altDrugsImagesContainer,drugOPJ);

detailsDiv.appendChild(altDrugsImagesContainer);
theDrug.appendChild(detailsDiv);

}

// to open details div for every drug
function selectDrugs(theDrug) {
    theDrug.querySelector('.more-details').addEventListener('click',function (event){
        // console.log(event.currentTarget.parentElement.parentElement.querySelector('.details'));
        // console.log(event.currentTarget.parentElement.parentElement.querySelector('.info h4').innerText);
    event.currentTarget.parentElement.parentElement.querySelector('.details').classList.add('active');
    let closeBTN = event.currentTarget.parentElement.parentElement.querySelector('.close');
    // console.log(closeBTN);
    closeBTN.addEventListener("click",function(event){
        event.currentTarget.parentElement.parentElement.querySelector('.details').classList.remove('active');
    })
})

}

// function to get alternatives images
function getAlternativesImages(divToAppend,drugToFetch){
    for(let i = 0; i < drugToFetch.alternatives.images.length ; i++){
        let alternativDrugDiv = document.createElement('div');
        alternativDrugDiv.className = 'alternative-drug';
        
        let imgAlternative = document.createElement('img');
        imgAlternative.src = `${drugToFetch.alternatives.images[i]}`
        alternativDrugDiv.appendChild(imgAlternative);
        
        // create p for name
        let alternativeDrugName = document.createElement('span');
        alternativeDrugName.className = 'alt-drug-name';
        let alternativeDrugNameText = document.createTextNode(`${drugToFetch.alternatives.names[i]}`);
        alternativeDrugName.appendChild(alternativeDrugNameText);
        
        // append to details div
        alternativDrugDiv.appendChild(imgAlternative);
        alternativDrugDiv.appendChild(alternativeDrugName);
        divToAppend.appendChild(alternativDrugDiv);
}

}