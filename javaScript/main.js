// الاقسام
const dugDivision = ['جميع الادوية','الادوية المتوفرة','الادوية الغير متوفرة','ادوية السكر','ادوية الضغط','ادوية ادرار البول','الدهون-او-الكوليستيرول','ادوية السيولة','ادوية القلب والدعامة','ادوية اخرى','الادوية الخاصة بي'];
let myList = [];
window.localStorage.getItem('myDrugs') ? myList = JSON.parse(window.localStorage.getItem('myDrugs')) : myList = myList;
// انشاء اسماء الاقسام من المصفوفة
const ulList = document.querySelector(".drugs-list");
function creatDivisions(divs){
    let liList = ``;
    divs.forEach(li => {
        liList += `<li class="drug-item">${li}</li>`
    })
    ulList.innerHTML = liList;
    let allList = document.querySelectorAll('li.drug-item');
    allList[8].classList.add('heart-div');
    allList[allList.length - 1].classList.add('my-own');
}
creatDivisions(dugDivision);
// selectors
const everydrugtemplate = document.querySelector('.every-drug-template').content;
const list = document.querySelectorAll(".drug-item");
const title = document.querySelector(".section-title");
const drugsCards = document.querySelector(".drugs-cards");
const searchBox = document.querySelector(".search");
let drugToShow = ``;
// let start = 0;
// ارسال طلب تحميل البيانات
// const drugData = new XMLHttpRequest();
// // drugData.open("get","https://pastebin.com/raw/XRPkzFb3",true);
// drugData.open("get","json/drugs.json",true);
// drugData.send();
    // const allData = JSON.parse(drugData.responseText);
    function amrShowAll(allData){
        allData.forEach(drug => {
            let everyDrug = everydrugtemplate.cloneNode(true).children[0]
            everyDrug.className = `every-drug ${drug.availability}`;
            everyDrug.querySelector('.drug-img').src = drug.image
            everyDrug.querySelector('.info .name').textContent = drug.drugName;
            everyDrug.querySelector('.used-for').textContent = drug.traditionalInfo
             everyDrug.querySelector('.details-container .availability').className = `availability ${drug.availability}`;
            everyDrug.querySelector('.details h3').textContent = drug.drugName;
            let allAlternative = everyDrug.querySelector('.details .info-container .info');
            for(let i = 0; i < drug.alternatives.names.length; i++){
                let altP = document.createElement('p');    altP.appendChild(document.createTextNode(drug.alternatives.names[i]))
                allAlternative.appendChild(altP)
            }
            everyDrug.querySelector('.details .info-container .recomended-use p').textContent = drug.administration
            
    
    
            document.querySelector('.drugs-cards').appendChild(everyDrug)
        }) 
    }





    searchBox.addEventListener('input',()=>{
        if(!drugsCards.querySelector('.every-drug')){
            amrShowAll(allData);
            title.innerText = 'نتائج البحث'
        }
    
        
        let allDrugs = drugsCards.querySelectorAll('.every-drug');
        allDrugs.forEach(drug => {
    
    drug.style.display = "none"})
    
    
        allDrugs.forEach(drug => {
            let searchText = "";
            searchText += ` ${drug.querySelector('.info .name').textContent}`
    drug.querySelectorAll('.info p').forEach(node =>{
        searchText += ` ${node.textContent}`;
    })
    
            if(searchText.includes(searchBox.value)){
                drug.style.display = "block";
                
            }
            
        })
    })






const allData = [
        {
            "drugName": "بيزوكارد 5 بلس",
            "drugNameEN": "bisocard 5 plus",
            "drugCode": "4258",
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
            "drugCode": "742",
            "image": "imgs/concor5.jpg",
            "activeConstituent": "bisoprolol 5mg",
            "alternatives": {
                "names": ['كونكور 5'],
                "images" : ['imgs/concor5.jpg']
            },
            "traditionalInfo": "علاج الضغط",
            "administration": "قرص قبل الفطار وفي حالة وجود علاج ضغط اخر تصبح الجرعة من الكونكور قرص مساءا وعلاج الضغط الاخر صباحا",
            "division1": "ادوية الضغط",
            "division2": "",
            "availability": "available"
        },
        {
            "drugName": "سينوبريل 10",
            "drugNameEN": "sinopril 10",
            "drugCode": "3327",
            "image": "imgs/sinopril.jpg",
            "activeConstituent": "lisinopril 10mg",
            "alternatives": {
                "names": ['سينوبريل 10'],
                "images" : ['imgs/sinopril.jpg']
            },
            "traditionalInfo": "علاج الضغط",
            "administration": "قرص مرة يوميا قبل الفطار على حسب ارشادات الطبيب",
            "division1": "ادوية الضغط",
            "division2": "",
            "availability": "available"
        },
        {
            "drugName": "سينوبريل كو",
            "drugNameEN": "sinopril co",
            "drugCode": "3328",
            "image": "imgs/sinopril-co.jpg",
            "activeConstituent": "lisinopril 20mg + hydrochlorothiazide 25mg",
            "alternatives": {
                "names": ['سينوبريل كو','ليزينوبريل كو'],
                "images" : ['imgs/sinopril-co.jpg']
            },
            "traditionalInfo": "علاج الضغط",
            "administration": "قرص قبل الفطار",
            "division1": "ادوية الضغط",
            "division2": "",
            "availability": "available"
        },
        {
            "drugName": "كارفيد 6.25",
            "drugNameEN": "carvid 6.25",
            "drugCode": "2661",
            "image": "imgs/carvid6.25.jpg",
            "activeConstituent": "carvedilol 6.25mg",
            "alternatives": {
                "names": ['كارفيد 6.25','كارديلول 6.25'],
                "images" : ['imgs/carvid6.25.jpg','imgs/cardilol6.25.jpg']
            },
            "traditionalInfo": "علاج الضغط",
            "administration": "قرص مرة يوميا على حسب ارشادات الطبيب",
            "division1": "ادوية الضغط",
            "division2": "",
            "availability": "available"
        },
        {
            "drugName": "كارفيبريس 12.5",
            "drugNameEN": "Carvipress 12.5",
            "drugCode": "2659",
            "image": "imgs/carvipress.jpg",
            "activeConstituent": "carvidilol 12.5mg",
            "alternatives": {
                "names": ["كارفيبريس 12.5"],
                "images" : ["imgs/carvipress.jpg"]
            },
            "traditionalInfo": "علاج الضغط",
            "administration": "قرص مرة يوميا على حسب ارشادات الطبيب",
            "division1": "ادوية الضغط",
            "division2": "",
            "availability": "available"
        },
        {
            "drugName": "ايرستابكس 20",
            "drugNameEN": "erastapex 20",
            "drugCode": "4838",
            "image": "imgs/erastapex20.jpg",
            "activeConstituent": "omlesartan 20mg",
            "alternatives": {
                "names": ["ايرستابكس 20"],
                "images" : ["imgs/erastapex20.jpg"]
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
            "drugCode": "2728",
            "image": "imgs/erastapexco20.jpg",
            "activeConstituent": "omlesartan 5mg + amlodipine 5mg",
            "alternatives": {
                "names": ["ايرستابكس كو 20/5"],
                "images" : ["imgs/erastapexco20.jpg"]
            },
            "traditionalInfo": "علاج الضغط",
            "administration": "قرص قبل الفطار",
            "division1": "ادوية الضغط",
            "division2": "",
            "availability": "available"
        },
        {
            "drugName": "ايرستابكس تريو",
            "drugNameEN": "erastapex trio",
            "drugCode": "2727",
            "image": "imgs/erastapextrio.jpg",
            "activeConstituent": "omlesartan 5mg + amlodipine 5mg + hydrochlorothiazide 25",
            "alternatives": {
                "names": ["ايرستابكس تريو"],
                "images" : ["imgs/erastapextrio.jpg"]
            },
            "traditionalInfo": "علاج الضغط",
            "administration": "قرص قبل الفطار",
            "division1": "ادوية الضغط",
            "division2": "",
            "availability": "not-available"
        },
        {
            "drugName": "ايرستابكس بلس",
            "drugNameEN": "erastapex plus",
            "drugCode": "4770",
            "image": "imgs/erastapexplus.jpg",
            "activeConstituent": "omlesartan 5mg + hydrochlorothiazide 25",
            "alternatives": {
                "names": ["ايرستابكس بلس"],
                "images" : ["imgs/erastapexplus.jpg"]
            },
            "traditionalInfo": "علاج الضغط",
            "administration": "قرص قبل الفطار",
            "division1": "ادوية الضغط",
            "division2": "",
            "availability": "available"
        },
        {
            "drugName": "افيفافاسك 5/160",
            "drugNameEN": "avivavasc 5/160",
            "drugCode": "4528",
            "image": "imgs/avivavasc5160.jpg",
            "activeConstituent": "amlodipine 5mg + valsartan 160mg",
            "alternatives": {
                "names": ['افيفافاسك 5/160','بلوكاتنس 5/160','اكسفورج 5/160'],
                "images" : ["imgs/avivavasc5160.jpg" , "imgs/blokatens5160.jpg" , "imgs/exforg5160.jpg"]
            },
            "traditionalInfo": "علاج الضغط",
            "administration": "قرص قبل الفطار",
            "division1": "ادوية الضغط",
            "division2": "",
            "availability": "not-available"
        },
        {
            "drugName": "افيفافاسك 10/16",
            "drugNameEN": "avivavasc 10/160",
            "drugCode": "4794",
            "image": "imgs/avivavasc10160.jpg",
            "activeConstituent": "amlodipine 10mg + valsartan 160mg",
            "alternatives": {
                "names": ['افيفافاسك 10/160','بلوكاتنس 10/160','اكسفورج 10/160'],
                "images" : ["imgs/avivavasc10160.jpg" , 'imgs/blokatens10160.jpg', "imgs/exforg10160.jpg"]
            },
            "traditionalInfo": "علاج الضغط",
            "administration": "قرص قبل الفطار",
            "division1": "ادوية الضغط",
            "division2": "",
            "availability": "not-available"
        },
        {
            "drugName": "ترياكور 5/5",
            "drugNameEN": "triacor 5/5",
            "drugCode": "3607",
            "image": "imgs/triacor55.jpg",
            "activeConstituent": "felodipine 5mg + ramipril 5mg",
            "alternatives": {
                "names": ["ترياكور 5/5"],
                "images" : ["imgs/triacor55.jpg"]
            },
            "traditionalInfo": "علاج الضغط",
            "administration": "قرص قبل الفطار",
            "division1": "ادوية الضغط",
            "division2": "",
            "availability": "available"
        },
        {
            "drugName": "تريتاس ماكس",
            "drugNameEN": "tritace max",
            "drugCode": "4372",
            "image": "imgs/tritacemax.jpg",
            "activeConstituent": "olmesartan 40mg",
            "alternatives": {
                "names": [],
                "images" : []
            },
            "traditionalInfo": "علاج الضغط",
            "administration": "قرص قبل الفطار",
            "division1": "ادوية الضغط",
            "division2": "",
            "availability": "not-available"
        },
        {
            "drugName": "تريتاس 5",
            "drugNameEN": "tritace5",
            "drugCode": "69",
            "image": "imgs/tritace5.jpg",
            "activeConstituent": "olmesartan 5mg",
            "alternatives": {
                "names": [],
                "images" : []
            },
            "traditionalInfo": "علاج الضغط",
            "administration": "قرص مرة يوميا وعلى حسب ارشادات الطبيب",
            "division1": "ادوية الضغط",
            "division2": "",
            "availability": "not-available"
        },
        {
            "drugName": "تريتاس 2.5",
            "drugNameEN": "tritace 2.5",
            "drugCode": "68",
            "image": "imgs/tritace2-5.jpg",
            "activeConstituent": "olmesartan 2.5mg",
            "alternatives": {
                "names": [],
                "images" : []
            },
            "traditionalInfo": "علاج الضغط",
            "administration": "قرص مرة يوميا وعلى حسب ارشادات الطبيب",
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
                "names": ["كلوبكس 75","كلاتكس 75","بورجافكس 75","انجوسموث  75"],
                "images" : ["imgs/clopex.jpg","imgs/clatex.jpg","imgs/borgavex.jpg","imgs/angosmooth.jpg"]
            },
            "traditionalInfo": "علاج الجلطة والدعامة والقسطرة",
            "administration": "قرص بعد الغداء",
            "division1": "ادوية القلب والدعامة",
            "division2": "ادوية السيولة",
            "availability": "not-available"
        },
        {
            "drugName": "كاردكسين",
            "drugNameEN": "cardexin",
            "drugCode": "2970",
            "image": "imgs/cardixin.jpg",
            "activeConstituent": "diltiazem",
            "alternatives": {
                "names": [],
                "images" : []
            },
            "traditionalInfo": "علاج اضطرابات ضربات القلب",
            "administration": "قرص يوميا ماعدا الجمعة",
            "division1": "ادوية القلب والدعامة",
            "division2": "",
            "availability": "available"
        },
        {
            "drugName": "بيتاكور 80",
            "drugNameEN": "betacor 80",
            "drugCode": "822",
            "image": "imgs/betacor.jpg",
            "activeConstituent": "bisoprolol",
            "alternatives": {
                "names": [],
                "images" : []
            },
            "traditionalInfo": "علاج الضغط واضطرابات ضربات القلب",
            "administration": "قرص كل 12 ساعة وحسب ارشادات الطبيب",
            "division1": "ادوية الضغط",
            "division2": "ادوية القلب والدعامة",
            "availability": "available"
        },
        {
            "drugName": "ادانكور 10",
            "drugNameEN": "adancor 10",
            "drugCode": "4325",
            "image": "imgs/adancor10.jpg",
            "activeConstituent": "adalat",
            "alternatives": {
                "names": [],
                "images" : []
            },
            "traditionalInfo": "علاج الذبحة الصدرية",
            "administration": "قرص كل 12 ساعة",
            "division1": "ادوية القلب والدعامة",
            "division2": "",
            "availability": "not-available"
        },
        {
            "drugName": "رانديل 20",
            "drugNameEN": "randil 20",
            "drugCode": "3549",
            "image": "imgs/randil20.jpg",
            "activeConstituent": "nicorandil 20mg",
            "alternatives": {
                "names": [],
                "images" : []
            },
            "traditionalInfo": "علاج الذبحة الصدرية",
            "administration": "قرص كل 12 ساعة",
            "division1": "ادوية القلب والدعامة",
            "division2": "",
            "availability": "available"
        },
        {
            "drugName": "ترايكارديا",
            "drugNameEN": "triacardia - vastarel MR",
            "drugCode": "310",
            "image": "imgs/tricardia.jpg",
            "activeConstituent": "verapamil",
            "alternatives": {
                "names": ['ترايكارديا','ميتاكارديا','فاستاريل ام ار'],
                "images" : []
            },
            "traditionalInfo": "علاج الذبحة الصدرية",
            "administration": "قرص كل 12 ساعة",
            "division1": "ادوية القلب والدعامة",
            "division2": "",
            "availability": "available"
        },
        {
            "drugName": "كوردارون 200",
            "drugNameEN": "cordaron 200",
            "drugCode": "64",
            "image": "imgs/cordarone.jpg",
            "activeConstituent": "amiodarone",
            "alternatives": {
                "names": [],
                "images" : []
            },
            "traditionalInfo": "علاج اضطرابات ضربات القلب",
            "administration": "قرص مرة يوميا وحسب ارشادات الطبيب",
            "division1": "ادوية القلب والدعامة",
            "division2": "",
            "availability": "available"
        },
        {
            "drugName": "ايزوبتن 80",
            "drugNameEN": "isoptin 80",
            "drugCode": "3890",
            "image": "imgs/isoptin80.jpg",
            "activeConstituent": "isoptin",
            "alternatives": {
                "names": [],
                "images" : []
            },
            "traditionalInfo": "علاج ارتفاع ضغط الدم",
            "administration": "قرص كل 12 ساعة",
            "division1": "ادوية القلب والدعامة",
            "division2": "ادوية الضغط",
            "availability": "available"
        },
        {
            "drugName": "اندرال 10",
            "drugNameEN": "inderal 10mg",
            "drugCode": "3594",
            "image": "imgs/inderal10.jpg",
            "activeConstituent": "propranolol",
            "alternatives": {
                "names": ['اندرال 10'],
                "images" : ['imgs/inderal10.jpg']
            },
            "traditionalInfo": "علاج ضغط الدم المرتفع وضربات القلب",
            "administration": "قرص كل 12 ساعة وحسب ارشادات الطبيب",
            "division1": "ادوية القلب والدعامة",
            "division2": "ادوية الضغط",
            "availability": "not-available"
        },
        {
            "drugName": "الكابرس 5",
            "drugNameEN": "alkapress 5",
            "drugCode": "2557",
            "image": "imgs/alkapress5.jpg",
            "activeConstituent": "amlodipine 5mg",
            "alternatives": {
                "names": [],
                "images" : []
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
            "drugCode": "2630",
            "image": "imgs/candelkan8.jpg",
            "activeConstituent": "candesartan 8mg",
            "alternatives": {
                "names": [],
                "images" : []
            },
            "traditionalInfo": "علاج ضغط الدم المرتفع",
            "administration": "قرص كل 12 ساعة",
            "division1": "ادوية الضغط",
            "division2": "",
            "availability": "available"
        },
        {
            "drugName": "كاندلكان 16 بلس",
            "drugNameEN": "candelkan 16 plus",
            "drugCode": "4258",
            "image": "imgs/candelkan16plus.jpg",
            "activeConstituent": "candesartan 16mg",
            "alternatives": {
                "names": [],
                "images" : []
            },
            "traditionalInfo": "علاج ضغط الدم المرتفع",
            "administration": "قرص قبل الفطار",
            "division1": "ادوية الضغط",
            "division2": "",
            "availability": "not-available"
        },
        {
            "drugName": "سيلكونزوك 100",
            "drugNameEN": "selconzoc 100",
            "drugCode": "3484",
            "image": "imgs/selokenzoc100.jpg",
            "activeConstituent": "silodosin 100mg",
            "alternatives": {
                "names": [],
                "images" : []
            },
            "traditionalInfo": "علاج الضغط",
            "administration": "قرص قبل الفطار وفي حالة وجود علاج ضغط اخر تصبح الجرعة من الكونكور قرص مساءا وعلاج الضغط الاخر صباحا",
            "division1": "ادوية الضغط",
            "division2": "",
            "availability": "available"
        },
        {
            "drugName": "نيفيلوب 5",
            "drugNameEN": "nivilop 5",
            "drugCode": "4312",
            "image": "imgs/nevilop5.jpg",
            "activeConstituent": "amlodipine 5mg",
            "alternatives": {
                "names": [],
                "images" : []
            },
            "traditionalInfo": "علاج ضغط الدم المرتفع",
            "administration": "قرص بعد الفطار",
            "division1": "ادوية الضغط",
            "division2": "",
            "availability": "available"
        },
        {
            "drugName": "نيفيلوب بلس",
            "drugNameEN": "nivilop plus",
            "drugCode": "4373",
            "image": "imgs/nevilop5plus.jpg",
            "activeConstituent": "amlodipine 5mg + valsartan 80mg",
            "alternatives": {
                "names": [],
                "images" : []
            },
            "traditionalInfo": "علاج ضغط الدم المرتفع",
            "administration": "قرص قبا الفطار",
            "division1": "ادوية الضغط",
            "division2": "",
            "availability": "not-available"
        },
        {
            "drugName": "ايفابرادين 5",
            "drugNameEN": "ivabradin 5",
            "drugCode": "4783",
            "image": "imgs/napibradine5.jpg",
            "activeConstituent": "ivabradine 5mg",
            "alternatives": {
                "names": ['ايفابرادين 5','نابيبرادين 5','بروكارلان 5'],
                "images" : []
            },
            "traditionalInfo": "علاج ضربات القلب",
            "administration": "قرص كل 12 ساعة",
            "division1": "ادوية القلب والدعامة",
            "division2": "",
            "availability": "not-available"
        },
        {
            "drugName": "ايفبرادين 7.5",
            "drugNameEN": "ivabradine 7.5mg",
            "drugCode": "4788",
            "image": "imgs/napibradine75.jpg",
            "activeConstituent": "ivabradine 7.5mg",
            "alternatives": {
                "names": ['ايفابرادين 7.5','نابيبرادين 7.5','بروكارلان 7.5'],
                "images" : []
            },
            "traditionalInfo": "علاج ضربات القلب",
            "administration": "قرص كل 12 ساعة",
            "division1": "ادوية القلب والدعامة",
            "division2": "",
            "availability": "not-available"
        },
        {
            "drugName": "اكساريتيك 20",
            "drugNameEN": "exaretic 20",
            "drugCode": "3853",
            "image": "imgs/exaretic20.jpg",
            "activeConstituent": "torasemide 20mg",
            "alternatives": {
                "names": [],
                "images" : []
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
            "drugCode": "3020",
            "image": "imgs/lasix40.jpg",
            "activeConstituent": "furosemide 40mg",
            "alternatives": {
                "names": [],
                "images" : []
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
            "drugCode": "3695",
            "image": "imgs/aldactone25.jpg",
            "activeConstituent": "spironolactone 25mg",
            "alternatives": {
                "names": [],
                "images" : []
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
            "drugCode": "4934",
            "image": "imgs/carfalone25.jpg",
            "activeConstituent": "carvedilol 25mg",
            "alternatives": {
                "names": [],
                "images" : []
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
            "drugCode": "3655",
            "image": "imgs/cholerose10.jpg",
            "activeConstituent": "atorvastatin 10mg",
            "alternatives": {
                "names": [],
                "images" : []
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
            "drugCode": "",
            "image": "imgs/atoreza1020.jpg",
            "activeConstituent": "atorvastatin 10mg + ezetimibe 20mg",
            "alternatives": {
                "names": [],
                "images" : []
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
            "drugCode": "4261",
            "image": "imgs/atoreza1040.jpg",
            "activeConstituent": "atorvastatin 10mg + ezetimibe 40mg",
            "alternatives": {
                "names": [],
                "images" : []
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
            "drugCode": "774",
            "image": "imgs/ator20.jpg",
            "activeConstituent": "atorvastatin 20mg",
            "alternatives": {
                "names": [],
                "images" : []
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
            "drugCode": "2744",
            "image": "imgs/ator40.jpg",
            "activeConstituent": "atorvastatin 40mg",
            "alternatives": {
                "names": [],
                "images" : []
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
            "drugCode": "3167",
            "image": "imgs/lipanthyl.jpg",
            "activeConstituent": "fenofibrate",
            "alternatives": {
                "names": [],
                "images" : []
            },
            "traditionalInfo": "علاج الدهون الثلاثية",
            "administration": "قرص بعد العشاء",
            "division1": "الدهون-او-الكوليستيرول",
            "division2": "",
            "availability": "not-available"
        },
        {
            "drugName": "دينيترا 5",
            "drugNameEN": "",
            "drugCode": "705",
            "image": "imgs/dinitra5.jpg",
            "activeConstituent": "trazodone 5mg",
            "alternatives": {
                "names": [],
                "images" : []
            },
            "traditionalInfo": "علاج ازمات القلب",
            "administration": "قرص تحت اللسان عند اللزوم، بعد مرور 5 دقايق بدون تحسن قرص ثاني، بعد مرور 5 دقايق اخري بدون تحسن القرص الثالث تحت اللسان",
            "division1": "ادوية اخرى",
            "division2": "",
            "availability": "available"
        },
        {
            "drugName": "نتروماك 2.5",
            "drugNameEN": "",
            "drugCode": "3058",
            "image": "imgs/nitromak.jpg",
            "activeConstituent": "nitroglycerin 2.5mg",
            "alternatives": {
                "names": [],
                "images" : []
            },
            "traditionalInfo": "علاج ألم الصدر وانقباض الشرايين القلبية",
            "administration": "كبسولة الساعة ال 9 صباحا والساعة ال 5 المغرب، مهم وجود 8 ساعات فارق ليس اقل بكثير ولا اكثر بكثير",
            "division1": "ادوية القلب والدعامة",
            "division2": "",
            "availability": "not-available"
        },
        {
            "drugName": "ماريفان 1",
            "drugNameEN": "",
            "drugCode": "146",
            "image": "imgs/marevan1.jpg",
            "activeConstituent": "warfarin 1mg",
            "alternatives": {
                "names": [],
                "images" : []
            },
            "traditionalInfo": "علاج تخثر الدم والأوعية الدموية",
            "administration": "الجرعة طبقا لتحليل السيولة",
            "division1": "ادوية السيولة",
            "division2": "",
            "availability": "available"
        },
        {
            "drugName": "ماريفان 3",
            "drugNameEN": "",
            "drugCode": "",
            "image": "imgs/marevan3.jpg",
            "activeConstituent": "warfarin 3mg",
            "alternatives": {
                "names": [],
                "images" : []
            },
            "traditionalInfo": "علاج تخثر الدم والأوعية الدموية",
            "administration": "الجرعة طبقا لتحليل السيولة",
            "division1": "ادوية السيولة",
            "division2": "",
            "availability": "not-available"
        },
        {
            "drugName": "ماريفان 5",
            "drugNameEN": "",
            "drugCode": "4312",
            "image": "imgs/marevan5.jpg",
            "activeConstituent": "warfarin 5mg",
            "alternatives": {
                "names": [],
                "images" : []
            },
            "traditionalInfo": "علاج تخثر الدم والأوعية الدموية",
            "administration": "الجرعة طبقا لتحليل السيولة",
            "division1": "ادوية السيولة",
            "division2": "",
            "availability": "available"
        },
        {
            "drugName": "اسبوسيد (اسبرين)",
            "drugNameEN": "",
            "drugCode": "305",
            "image": "imgs/aspocid.jpg",
            "activeConstituent": "aspirin",
            "alternatives": {
                "names": [],
                "images" : []
            },
            "traditionalInfo": "علاج السيولة",
            "administration": "2 قرص بعد الغداء",
            "division1": "ادوية السيولة",
            "division2": "",
            "availability": "available"
        },
        {
            "drugName": "ابيكسبان 5",
            "drugNameEN": "",
            "drugCode": "4999",
            "image": "imgs/vaxa5.jpg",
            "activeConstituent": "rivaroxaban 5mg",
            "alternatives": {
                "names": [],
                "images" : []
            },
            "traditionalInfo": "علاج تخثر الدم والأوعية الدموية",
            "administration": "قرص كل 12 ساعة بعد الاكل",
            "division1": "ادوية القلب والدعامة",
            "division2": "ادوية السيولة",
            "availability": "not-available"
        },
        
        {
            "drugName": "فاكساتو 15",
            "drugNameEN": "",
            "drugCode": "4786",
            "image": "imgs/vaxa15.jpg",
            "activeConstituent": "rivaroxaban 5mg",
            "alternatives": {
                "names": [],
                "images" : []
            },
            "traditionalInfo": "علاج تخثر الدم والأوعية الدموية",
            "administration": "قرص بعد الغداء",
            "division1": "ادوية القلب والدعامة",
            "division2": "ادوية السيولة",
            "availability": "available"
        },
        
        {
            "drugName": "فاكساتو 20",
            "drugNameEN": "",
            "drugCode": "4785",
            "image": "imgs/vaxa20.jpg",
            "activeConstituent": "rivaroxaban 5mg",
            "alternatives": {
                "names": [],
                "images" : []
            },
            "traditionalInfo": "علاج تخثر الدم والأوعية الدموية",
            "administration": "قرص بعد الغداء",
            "division1": "ادوية القلب والدعامة",
            "division2": "ادوية السيولة",
            "availability": "not-available"
        },
        {
            "drugName": "انسولين",
            "drugNameEN": "insulin",
            "drugCode": "3202",
            "image": "imgs/insulin.jpg",
            "activeConstituent": "insulin",
            "alternatives": {
                "names": ['انسولين 70/30','ميكستارد'],
                "images" : []
            },
            "traditionalInfo": "علاج مرض السكري",
            "administration": "طبقا لكل مريض والاشهر 30 وحدة صباحا و 15 وحدة مساءا",
            "division1": "ادوية السكر",
            "division2": "",
            "availability": "not-available"
        },
        {
            "drugName": "شوجارلو بلس",
            "drugNameEN": "suglarlo - vildagliptin - jalbets",
            "drugCode": "3104",
            "image": "imgs/vildagluse.jpg",
            "activeConstituent": "vildagliptin",
            "alternatives": {
                "names": ['شوجارلو بلس','فلداجلوز بلس','جليبتس بلس'],
                "images" : []
            },
            "traditionalInfo": "علاج مرض السكري",
            "administration": "قرص قبل الاكل مباشرة مرة واحدة او مرتين طبقا لحالة المريض",
            "division1": "ادوية السكر",
            "division2": "",
            "availability": "not-available"
        },
        {
            "drugName": "جليميت فورت",
            "drugNameEN": "glimet fort",
            "drugCode": "",
            "image": "imgs/glimet-fort.jpg",
            "activeConstituent": "glimepiride 2mg + metformin 500mg",
            "alternatives": {
                "names": ['جليميت فورت'],
                "images" : []
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
            "drugCode": "3043",
            "image": "imgs/diamedizin.jpg",
            "activeConstituent": "gliclazide 60mg",
            "alternatives": {
                "names": ['دياميكرون 60','دياميديزين 60'],
                "images" : []
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
            "drugCode": "3046",
            "image": "imgs/amaryl3.jpg",
            "activeConstituent": "glimepiride 3mg",
            "alternatives": {
                "names": ['اماريل 3','جليميبرايد 3'],
                "images" : []
            },
            "traditionalInfo": "علاج مرض السكري",
            "administration": "قرص قبل الفطار",
            "division1": "ادوية السكر",
            "division2": "",
            "availability": "not-available"
        },
        {
            "drugName": "سيدوفاج 500 او 850",
            "drugNameEN": "sydovag 500",
            "drugCode": "3470",
            "image": "imgs/cidophage500.jpg",
            "activeConstituent": "metformin 500mg",
            "alternatives": {
                "names": ['سيدوفاج 500','ميبافاج 500'],
                "images" : []
            },
            "traditionalInfo": "علاج مرض السكري",
            "administration": "قرص بعد الفطار والغداء",
            "division1": "ادوية السكر",
            "division2": "",
            "availability": "not-available"
        },
        {
            "drugName": "مليتوفكس 10",
            "drugNameEN": "forfloxin - ambacosa - mletofex",
            "drugCode": "5410",
            "image": "imgs/forflozin10.jpg",
            "activeConstituent": "fluoxetine 20mg",
            "alternatives": {
                "names": ['مليتوفكس 10','فورفلوزين 10','دياكيوريماب 10'],
                "images" : []
            },
            "traditionalInfo": "علاج السكر والقلب",
            "administration": "قرص قبل الفطار",
            "division1": "ادوية السكر",
            "division2": "ادوية القلب والدعامة",
            "availability": "not-available"
        },
        {
            "drugName": "بانتوبي - بانتوبرازول",
            "drugNameEN": "pantobi - pantoprazole",
            "drugCode": "3413",
            "image": "imgs/futaban40.jpg",
            "activeConstituent": "pantoprazole",
            "alternatives": {
                "names": [],
                "images" : []
            },
            "traditionalInfo": "علاج قرحة المعدة",
            "administration": "قرص قبل الفطار بنصف ساعة",
            "division1": "ادوية اخرى",
            "division2": "",
            "availability": "not-available"
        },
        {
            "drugName": "حقنة البنسيلين",
            "drugNameEN": "penicillin injection",
            "drugCode": "",
            "image": "imgs/depo-pen.jpg",
            "activeConstituent": "penicillin",
            "alternatives": {
                "names": [],
                "images" : []
            },
            "traditionalInfo": "علاج الحمى الروماتيزمية",
            "administration": "حقنة كل 15 يوم او 21 يوم او شهر على حسب حالة المريض",
            "division1": "ادوية اخرى",
            "division2": "",
            "availability": "not-available"
        },
        {
            "drugName": "الميلجا",
            "drugNameEN": "milga",
            "drugCode": "",
            "image": "imgs/milga.jpg",
            "activeConstituent": "multivitamins",
            "alternatives": {
                "names": [],
                "images" : []
            },
            "traditionalInfo": "فيتامينات الاعصاب",
            "administration": "قرص بعد الغداء",
            "division1": "ادوية اخرى",
            "division2": "",
            "availability": "not-available"
        },
        {
            "drugName": "حقن الفيتامينات",
            "drugNameEN": "vitamins injection",
            "drugCode": "",
            "image": "imgs/depovit.jpg",
            "activeConstituent": "vitamins",
            "alternatives": {
                "names": [],
                "images" : []
            },
            "traditionalInfo": "فيتامينات الاعصاب",
            "administration": "حقنة كل 3 ايام او كل اسبوع",
            "division1": "ادوية اخرى",
            "division2": "",
            "availability": "not-available"
        },
        {
            "drugName": "ثيوتاسيد 600",
            "drugNameEN": "thyotacide 600",
            "drugCode": "3834",
            "image": "imgs/thiotacid600.jpg",
            "activeConstituent": "thyotacide 600mg",
            "alternatives": {
                "names": [],
                "images" : []
            },
            "traditionalInfo": "مضادات الاكسدة للحماية",
            "administration": "قرص بعد الغداء",
            "division1": "ادوية اخرى",
            "division2": "",
            "availability": "not-available"
        }
    ]
    ;
    // معلومة تاكيد تحميل البيانات
    title.innerText = "اختر القسم لعرض معلومات الادوية"
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
            }else if(e.target.innerText === 'الادوية الغير متوفرة' && drug.availability === "not-available"){
                getDrugs(drug);
            }
            else if(e.target.innerText === 'الادوية الخاصة بي' && myList.includes(drug.drugName)){
                getDrugs(drug);
            }else if(drug.division1 === e.target.innerText || drug.division2 === e.target.innerText){
                getDrugs(drug);
            }
        })
    setTimeout(()=>{
        title.scrollIntoView({ behavior: 'smooth'})
    },500)
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
    // creat div container for details
    let detailsContainer = document.createElement('div');
    detailsContainer.className = 'details-container';
    // creat available button
    let drugAviliableBTN = document.createElement('span');
    drugAviliableBTN.className = `availability ${oneDrug.availability}`;
    // drugAviliableBTN.appendChild(document.createTextNode('متوفر'));
    detailsContainer.appendChild(drugAviliableBTN);
    // creat span for more details
    let moreDetails = document.createElement('span');
    moreDetails.className = 'more-details';
    let moreDetailsText = document.createTextNode('عرض معلومات الدواء');
    moreDetails.appendChild(moreDetailsText);
    detailsContainer.appendChild(moreDetails);
    // create favorite button
    let favoritBTN = document.createElement('span');
    favoritBTN.className = 'favorite';
    favoritBTN.appendChild(document.createTextNode('اضافة الى ادويتي'));
    detailsContainer.appendChild(favoritBTN);
// create remove button
let removeBTN = document.createElement('span');
removeBTN.className = 'remove';
removeBTN.appendChild(document.createTextNode('حذف من ادويتي'));
detailsContainer.appendChild(removeBTN);

    divInfo.appendChild(detailsContainer);

    // add drug info to the drug main card // everydrug
    everyDrug.appendChild(divInfo);

    // add drug to the cards Container
    drugsCards.appendChild(everyDrug);

    createDetails(everyDrug);
    selectDrugs(everyDrug);
    addToFavorite(everyDrug);
    removeFromFavorite(everyDrug);
    toggleHideClass(oneDrug,everyDrug);
}
// create deatails div function
function createDetails(theDrug){
    let drugOPJ = allData.find(opj => opj.drugName === `${theDrug.querySelector('.info h4').innerText}`);
    // console.log(drugOPJ.alternatives);

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
let mainh3Text = document.createTextNode(drugOPJ.drugName);
// let mainh3Text = document.createTextNode('معلومات عن الدواء - والبدائل');
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
infoDiv.appendChild(infoDivH4);

for(let i = 0; i < drugOPJ.alternatives.names.length;i++){
  let infoDivP = document.createElement('p');
  let pText = document.createTextNode(`${drugOPJ.alternatives.names[i]}`);
  infoDivP.appendChild(pText);
  infoDiv.appendChild(infoDivP);
}
// add info to the info-container
infoContainer.appendChild(infoDiv);


// create recommended use div
let recomendedUseDiv = document.createElement('div');
recomendedUseDiv.className = 'recomended-use';

// create info h4 and p
let recomendedUseDivH4 = document.createElement('h4');
let recomendedUseDivh4Text = document.createTextNode('الاستخدام الشائع');
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
    event.currentTarget.parentElement.parentElement.parentElement.querySelector('.details').classList.add('active');
    let closeBTN = event.currentTarget.parentElement.parentElement.parentElement.querySelector('.close');
    // console.log(closeBTN);
    closeBTN.addEventListener("click",function(event){
        event.currentTarget.parentElement.parentElement.querySelector('.details').classList.remove('active');
    })
})

}

// add to favortite
function addToFavorite(theDrug){
    theDrug.querySelector('.favorite').addEventListener('click',function(event){
        let myDrug = event.currentTarget.parentElement.parentElement.querySelector('.name').innerText;
        !myList.includes(myDrug) ? myList.push(myDrug) : false ;
        window.localStorage.setItem('myDrugs',JSON.stringify(myList));
        theDrug.querySelector('.favorite').classList.add('hide');
        theDrug.querySelector('.remove').classList.remove('hide');

    })
}

// remove from favorite
function removeFromFavorite(theDrug){
    theDrug.querySelector('.remove').addEventListener('click',function(event){
        let myDrug = event.currentTarget.parentElement.parentElement.querySelector('.name').innerText;
        myList = myList.filter(drug => drug != myDrug)
        window.localStorage.setItem('myDrugs',JSON.stringify(myList));
        theDrug.querySelector('.remove').classList.add('hide');
        theDrug.querySelector('.favorite').classList.remove('hide');

    })
}
// toggle hide class to favorites drugs
function toggleHideClass(oneDrug,everyDrug){
    if(myList.includes(oneDrug.drugName)){
        everyDrug.querySelector('.favorite').classList.add('hide');
    }else {
        everyDrug.querySelector('.remove').classList.add('hide');

    }
}
// function to get alternatives images
function getAlternativesImages(divToAppend,drugToFetch){
    if(drugToFetch.alternatives.images.length > 1){
    // creat slide show container
    let slideShow = document.createElement('div');
    slideShow.className = 'slide-show';
    slideShow.dataset.startNumber = '0';
    // create slide show title
    let slideShowTitle = document.createElement('h5');
    slideShowTitle.className = 'slide-title'
    slideShowTitle.appendChild(document.createTextNode('قد يتوفر بأي من هذه الأشكال'))
    slideShow.appendChild(slideShowTitle);
    // create arrow spans
    let rightArrow = document.createElement('i');
    rightArrow.className = 'right-arrow fa-solid fa-chevron-right';
    rightArrow.addEventListener('click',(e)=>{nextSlideShow(e)});

    let leftArrow = document.createElement('i');
    leftArrow.className = 'left-arrow fa-solid fa-chevron-left';
    leftArrow.addEventListener('click',(e)=>{preSlideShow(e)});

    slideShow.appendChild(rightArrow);
    slideShow.appendChild(leftArrow);
    for(let i = 0; i < drugToFetch.alternatives.images.length ; i++){
        // create div drug container
        let alternativDrugDiv = document.createElement('div');
        alternativDrugDiv.className = 'alternative-drug';
        if(i === 0){
        alternativDrugDiv.className = 'alternative-drug show';
        }
        // create image to show
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
        // append to slide show container
        slideShow.appendChild(alternativDrugDiv);
    }
    divToAppend.appendChild(slideShow);
    
}
// slideShow(divToAppend);

}
// Next Arrow Slide show Function
function nextSlideShow(e){
    let allAlternatives = e.currentTarget.parentElement.querySelectorAll('.alternative-drug');
    if(e.currentTarget.parentElement.dataset.startNumber >= allAlternatives.length - 1){
        e.currentTarget.parentElement.dataset.startNumber = -1;
    }
    let start = parseInt(e.currentTarget.parentElement.dataset.startNumber) + 1;
    allAlternatives.forEach((item) => {
        item.classList.remove('show');
    })
    allAlternatives[start].classList.add('show');
    e.currentTarget.parentElement.dataset.startNumber = start;
}

// Previous Arrow Slide show Function
function preSlideShow(e){
    let allAlternatives = e.currentTarget.parentElement.querySelectorAll('.alternative-drug');
    if(e.currentTarget.parentElement.dataset.startNumber <= 0){
        e.currentTarget.parentElement.dataset.startNumber = allAlternatives.length;
    }
    let start = parseInt(e.currentTarget.parentElement.dataset.startNumber) - 1;
    allAlternatives.forEach((item) => {
        item.classList.remove('show');
    })
    allAlternatives[start].classList.add('show');
    e.currentTarget.parentElement.dataset.startNumber = start;
}