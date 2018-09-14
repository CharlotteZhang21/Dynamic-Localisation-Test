var lang = null;

function getBrowserLanguage() {
	// var lang;
    if (navigator.userLanguage) {
        lang = navigator.userLanguage;
        lang = lang.split("-")[0];
    } else if (navigator.language) {
        lang = navigator.language;
        lang = lang.split("-")[0];
    } else {
        lang = "en";
    }
    // return lang;

}

function getLocalisedInstructions() {
    if(lang==null)
        getBrowserLanguage();

    var moveButtonText = "hold to aim";
    var introText = "Target practice";
    var hintText = "shoot as many as you can";
    var score = "score";
    var fireButtonText = "Tap to fire";
    var retry = "retry";
    var font = 'DINCond';
    var fontSize = null;


    switch (lang) {
        case "en":
            break;
        case "ja":
            
            introText = "射撃練習";
            moveButtonText = "狙いを定める";
            fireButtonText = "タップして発砲";
            hintText = "できるだけ多く撃ちましょう";
            retry = 'もう一度';
            score = 'スコア';            
            break;
        case "ko":
            introText = "조준 연습";
            moveButtonText = "에임을 유지하세요";
            fireButtonText = "탭하여 발사";
            hintText = "할 수 있는 최대한 많이 발사하세요";
            score = '점수';
            retry = "재시도";
            font = 'asian';
            // marginLeft = 35;
            break;
        case "zh":
            introText = "瞄准训练";
            moveButtonText = "按住瞄准";
            fireButtonText = "点击射击";
            hintText = "射中越多越好";
            score = '得分';
            retry = '再来一次';
            font = 'asian';
            // marginLeft = 35;
            break;
        case "ru":
            introText = "Стрельба по мишеням";
            moveButtonText = "Удерживайте для прицела";
            fireButtonText = "Нажмите, \nчтобы открыть огонь";
            hintText = "сделайте столько\nвыстрелов,\nсколько сможете";
            score = 'счет';
            retry = 'повторить';
            font = 'asian';
            fontSize = 30;
            // marginLeft = 35;
            break;
        }
    return {
        'moveButtonText': moveButtonText,
        'introText': introText, 
        'hintText': hintText,
        'fireButtonText': fireButtonText,
        'score': score,
        'retry': retry,
        'font': font,
        'fontSize': fontSize,
    }
}

function getLocalisedCta() {
	 if(lang==null)
        getBrowserLanguage();

    var downloadText = "DOWNLOAD";
    var font = 'DINCond';
    var marginLeft = 20;
    var fontSizeMultiplier = 0.5;
    switch (lang) {
        case "en":
            downloadText = "DOWNLOAD";
            downloadText.toUpperCase();
            // marginLeft = 18;
            break;
        case "ja":
            downloadText = "ダウンロード";
            font = 'asian';
            marginLeft = 18;
            fontSizeMultiplier = 0.35;
            break;
        case "ko":
            downloadText = "다운로드";
            font = 'asian';
            // marginLeft = 35;
            break;
        case "zh":
            downloadText = "立即下载";
            font = 'asian';
            // marginLeft = 35;
            break;
        case "ru":
            downloadText = "Скачать";
            downloadText.toUpperCase();
            font = 'asian';
            // marginLeft = 35;
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
        // case "tr":
        //     downloadText = "Indir";
        //     break;
        // case "nl":
        //     downloadText = "Play Now";
        //     break;
        // case "sv":
        //     downloadText = "Ladda ner";
        //     break;
        // case "id":
        //     downloadText = "Play Now";
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
    return {'text' : downloadText, 'font' : font, 'marginLeft': marginLeft, 'fontSizeMultiplier': fontSizeMultiplier};
}