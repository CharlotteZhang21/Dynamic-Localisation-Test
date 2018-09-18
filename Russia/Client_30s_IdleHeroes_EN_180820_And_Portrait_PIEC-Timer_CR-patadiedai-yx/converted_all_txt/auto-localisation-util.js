var language = null;

function getBrowserLanguage() {
	var lang;
    if (navigator.userLanguage) {
        lang = navigator.userLanguage;
        lang = lang.split("-")[0];
    } else if (navigator.language) {
        lang = navigator.language;
        lang = lang.split("-")[0];
    } else {
        lang = "en";
    }
    return lang;

}

function getLocalisedLogo() {
    if(language == null)
        language = getBrowserLanguage();
    var logo;
    switch (language) {
        case "ja":
            logo = 'logo-JA.png';
            break;
        case "ko":
            logo = 'logo-KO.png';
            break;
        case "zh":
            logo = 'logo-CN.png';
            break;
        default:
            logo = 'logo-EN.png';

    }
    return logo;
    
}

function getLocalisedCta() {
	if(language == null)
        language = getBrowserLanguage();
    var downloadText = "Download";
    var font = "myFont";
    switch (language) {
        case "en":
            downloadText = "Download";
            break;
        case "ja":
            downloadText = "ダウンロード";
            font = 'asian';
            break;
        case "ko":
            downloadText = "다운로드";
            break;
        case "zh":
            downloadText = "立即下载";
            font = 'asian';
            break;
        // case "de":
        //     downloadText = "Herunterladen";
        //     break;
        // case "fr":
        //     downloadText = "Télécharger";
        //     break;
        // case "it":
        //     downloadText = "Scarica";
        //     break;
        // case "es":
        //     downloadText = "Descargar";
        //     break;
        // case "pt":
        //     downloadText = "Baixar";
        //     break;
        // case "ca":
        //     downloadText = "Descarregar";
        //     break;
        case "ru":
            downloadText = "Скачать";
            font = 'asian';
            break;
        // case "tr":
        //     downloadText = "Indir";
        //     break;
        // case "nl":
        //     downloadText = "Download";
        //     break;
        // case "sv":
        //     downloadText = "Ladda ner";
        //     break;
        // case "id":
        //     downloadText = "Download";
        //     break;
        // case "ro":
        //     downloadText = "Descărcare";
        //     break;
        // case "ar":
        //     downloadText = "تحميل";
        //     break;
        // case "uk":
        //     downloadText = "скачати";
        //     break;
        // case "no":
        //     downloadText = "Nedlasting";
        //     break;
        // case "nb":
        //     downloadText = "Nedlasting";
        //     break;
        // case "nn":
        //     downloadText = "Nedlasting";
        //     break;
        // case "he":
        //     downloadText = "הורד";
        //     break;
        // case "ms":
        //     downloadText = "ഡൗൺലോഡ്";
        //     break;
        // case "th":
        //     downloadText = "ดาวน์โหลด";
        //     break;
        // case "pl":
        //     downloadText = "Pobierz";
        //     break;
        // case "be":
        //     downloadText = "спампаваць";
        //     break;
        // case "el":
        //     downloadText = "κατεβάστε";
        //     break;
        // case "bg":
        //     downloadText = "изтегляне";
        //     break;
        // case "da":
        //     downloadText = "Hent";
        //     break;
        // case "sr":
        //     downloadText = "довнлоад";
        //     break;
        // case "kk":
        //     downloadText = "жүктеу";
        //     break;
        // case "vi":
        //     downloadText = "Tải về";
        //     break;
        // case "hr":
        //     downloadText = "zbirka";
        //     break;
        // case "km":
        //     downloadText = "ទាញយក";
        //     break;
        // case "sq":
        //     downloadText = "Shkarko";
        //     break;
        // case "sl":
        //     downloadText = "prenesi";
        //     break;
        // case "lt":
        //     downloadText = "parsisiųsti";
        //     break;
        // case "az":
        //     downloadText = "yükləyin";
        //     break;
        // case "zu":
        //     downloadText = "ukulanda";
        //     break;
        // case "ga":
        //     downloadText = "íoslódáil";
        //     break;
        // case "is":
        //     downloadText = "sækja";
        //     break;
        // case "hu":
        //     downloadText = "Letöltés";
        //     break;
        // case "lv":
        //     downloadText = "lejupielādēt";
        //     break;
        // case "ka":
        //     downloadText = "ჩამოტვირთვა";
        //     break;
        // case "mt":
        //     downloadText = "niżżel";
        //     break;
        // case "et":
        //     downloadText = "lae alla";
        //     break;
        // case "ne":
        //     downloadText = "डाउनलोड";
        //     break;
        // case "bn":
        //     downloadText = "ডাউনলোড";
        //     break;
        // case "eu":
        //     downloadText = "deskargatu";
        //     break;
        // case "fi":
        //     downloadText = "ladata";
        //     break;
    }
    return {'text' : downloadText.toUpperCase(), 'font' : font};
}

function getLocalisedMessage(){

    if(language == null)
        language = getBrowserLanguage();
    var messageText = "Join millions of other players<br>around the world!";
    var font = "myFont";
    switch (language) {
        case "en":
            messageText = "Join millions of other players<br>around the world!";
            break;
        case "ja":
            messageText = "世界中の何百万人ものプレイ<br>ヤーと一緒に楽しみましょう!";
            font = 'asian';
            break;
        case "ko":
            messageText = "전세계 수백만명의 사용자<br>대열에 합류하세요!";
            font = 'asian';
            break;
        case "zh":
            messageText = "加入世界各地的百万玩家！";
            font = 'asian';
            break;
        case "ru":
            messageText = "Присоединяйтесь к миллионам<br>игроков по всему миру!";
            font = 'asian';
            break;
    }
    return {'text' : messageText.toUpperCase(), 'font' : font};

}