/**
 * translations.js - 다국어 번역 객체
 *
 * 4개 언어(EN, KO, JA, ES)의 모든 UI 텍스트를 담고 있습니다.
 * 외부 API 없이 코드 내부에서 관리합니다.
 */

const translations = {
    // ===== 영어 (English) =====
    en: {
        // --- 메타 ---
        langName: "English",
        langFlag: "🇺🇸",

        // --- 헤더 ---
        siteTitle: "Word & Character Counter",
        siteSubtitle: "Real-time text analysis — free, fast, and private",

        // --- 텍스트 에디터 ---
        placeholder: "Start typing or paste your text here...",
        clearBtn: "Clear All",
        copyBtn: "Copy Text",
        copiedBtn: "Copied!",

        // --- 통계 라벨 ---
        statWords: "Words",
        statCharacters: "Characters",
        statCharsNoSpaces: "Characters (no spaces)",
        statSentences: "Sentences",
        statParagraphs: "Paragraphs",
        statReadingTime: "Reading Time",
        statMinutes: "min",
        statSeconds: "sec",

        // --- SEO 섹션: 이 툴을 사용해야 하는 이유 ---
        seoWhyTitle: "Why Use This Tool?",
        seoWhyItems: [
            {
                title: "Lightning Fast",
                desc: "All calculations happen instantly in your browser. No server delays, no waiting. Your text never leaves your device.",
            },
            {
                title: "100% Free & Private",
                desc: "No sign-up required. No data is collected or stored. Your writing stays completely private.",
            },
            {
                title: "Multi-Language Support",
                desc: "Accurately counts words in English, Korean, Japanese, Chinese, Spanish and more. CJK characters are counted individually.",
            },
            {
                title: "Perfect for Professionals",
                desc: "Ideal for writers, students, SEO specialists, social media managers, and anyone who needs accurate text statistics.",
            },
        ],

        // --- SEO 섹션: 글자 수 세기가 왜 중요한가? ---
        seoImportanceTitle: "Why Character Counting Matters",
        seoImportanceContent: [
            "Character and word counting is essential in today's digital world. Social media platforms have strict character limits — Twitter/X allows 280 characters, Instagram captions max at 2,200, and LinkedIn posts cap at 3,000 characters.",
            "For professionals, accurate text measurement is crucial. Korean resumes often require exact character counts (excluding spaces). Academic essays must meet specific word count requirements. SEO meta descriptions perform best between 150-160 characters.",
            "Our tool provides six different metrics simultaneously, giving you a complete picture of your text at a glance. Whether you're crafting a tweet, writing an essay, or optimizing your SEO content, instant feedback helps you write more effectively.",
        ],

        // --- FAQ ---
        faqTitle: "Frequently Asked Questions",
        faqItems: [
            {
                q: "How are words counted for different languages?",
                a: "For English and other space-separated languages, words are counted by splitting on whitespace. For CJK languages (Korean, Japanese, Chinese), each character is counted as one word, which is the standard convention.",
            },
            {
                q: "Is my text data safe?",
                a: "Absolutely. All processing happens 100% in your browser. Your text is never sent to any server, stored, or shared. Close the tab and everything is gone.",
            },
            {
                q: "How is reading time calculated?",
                a: "Reading time is based on average reading speeds: approximately 200 words per minute for English text and 500 characters per minute for CJK languages.",
            },
            {
                q: "Can I use this on mobile devices?",
                a: "Yes! The tool is fully responsive and works perfectly on phones and tablets.",
            },
            {
                q: "What counts as a sentence?",
                a: "Sentences are counted based on terminal punctuation marks: periods (.), exclamation marks (!), and question marks (?), including their East Asian equivalents (。！？).",
            },
        ],

        // --- 새 기능 UI 텍스트 ---
        goalToggle: "Set Goal",
        goalPlaceholder: "e.g. 500",
        goalDesc: "Set a target word or character count and track your progress with a visual progress bar.",
        transformLabel: "Transform:",
        transformUpper: "UPPER",
        transformLower: "lower",
        transformTitle: "Title",
        transformRemoveBreaks: "No Breaks",
        transformRemoveSpaces: "Trim",
        transformDesc: "Instantly convert your text — uppercase, lowercase, title case, or remove extra spaces and line breaks.",
        darkModeLabel: "Dark Mode",
        autoSaveRestored: "Previous text restored",
        autoSaveDesc: "Your text is automatically saved. Come back anytime — your work will be right where you left it.",

        // --- 추가 기능 ---
        keywordTitle: "Keyword Frequency",
        keywordDesc: "See the top 10 most-used words in your text.",
        keywordEmpty: "Type some text to see keyword analysis.",
        seoDensityTitle: "SEO Keyword Density",
        seoDensityDesc: "Target 1-3% density for optimal SEO performance.",
        seoDensityInput: "Enter target keyword...",
        seoDensityEmpty: "Enter a keyword above to analyze density.",
        seoDensityResult: "Density:",
        seoDensityCount: "Count:",
        seoDensityGood: "Optimal",
        seoDensityLow: "Too Low",
        seoDensityHigh: "Too High",
        platformTitle: "Platform Check",
        platformDesc: "Check if your text fits within popular platform limits.",
        readabilityTitle: "Readability",
        readabilityDesc: "Analyze how easy your text is to read (Flesch Score).",
        readabilityEmpty: "Need at least 3 words and 1 sentence to analyze.",
        readabilityVeryEasy: "Very Easy",
        readabilityEasy: "Easy",
        readabilityNormal: "Average",
        readabilityHard: "Hard",
        readabilityVeryHard: "Very Hard",
        readabilityWordsPerSentence: "Words/Sentence",
        readabilitySyllablesPerWord: "Syllables/Word",
        readabilityCJKWarning: "Readability score is optimized for English. CJK results are approximate.",
        findReplaceTitle: "Find & Replace",
        findReplaceDesc: "Search and replace text with regex support.",
        findLabel: "Find",
        replaceLabel: "Replace",
        findPlaceholder: "Search text...",
        replacePlaceholder: "Replace with...",
        findCaseSensitive: "Case sensitive",
        findRegex: "Regex",
        replaceAllBtn: "Replace All",
        historyTitle: "Text History",
        historyDesc: "Auto-saved snapshots every 5 seconds. Restore previous versions.",
        historyEmpty: "No snapshots yet. Keep typing — snapshots save automatically.",
        historyClearAll: "Clear All",
        historyRestore: "Restore",
        copyWithStatsBtn: "Copy with Stats",

        // --- 푸터 ---
        footerText: "Free online word counter and character counter tool.",
        footerCopyright: "All rights reserved.",
    },

    // ===== 한국어 =====
    ko: {
        langName: "한국어",
        langFlag: "🇰🇷",

        siteTitle: "글자 수 · 단어 세기",
        siteSubtitle: "실시간 텍스트 분석 — 무료, 초고속, 완전한 개인정보 보호",

        placeholder: "여기에 텍스트를 입력하거나 붙여넣기 하세요...",
        clearBtn: "전체 지우기",
        copyBtn: "복사하기",
        copiedBtn: "복사됨!",

        statWords: "단어 수",
        statCharacters: "글자 수 (공백 포함)",
        statCharsNoSpaces: "글자 수 (공백 제외)",
        statSentences: "문장 수",
        statParagraphs: "문단 수",
        statReadingTime: "읽기 시간",
        statMinutes: "분",
        statSeconds: "초",

        seoWhyTitle: "이 툴을 사용해야 하는 이유",
        seoWhyItems: [
            {
                title: "번개처럼 빠른 속도",
                desc: "모든 계산이 브라우저에서 즉시 처리됩니다. 서버 지연 없이 실시간으로 결과를 확인하세요. 텍스트가 외부로 전송되지 않습니다.",
            },
            {
                title: "100% 무료 & 개인정보 보호",
                desc: "회원가입이 필요 없습니다. 어떤 데이터도 수집하거나 저장하지 않습니다. 당신의 글은 완벽하게 보호됩니다.",
            },
            {
                title: "다국어 지원",
                desc: "한국어, 영어, 일본어, 중국어, 스페인어 등 다양한 언어의 단어를 정확하게 세어줍니다. CJK 문자는 개별적으로 카운트됩니다.",
            },
            {
                title: "전문가를 위한 도구",
                desc: "작가, 학생, SEO 전문가, 소셜미디어 매니저 등 정확한 텍스트 통계가 필요한 모든 분께 이상적입니다.",
            },
        ],

        seoImportanceTitle: "글자 수 세기가 왜 중요한가?",
        seoImportanceContent: [
            "글자 수와 단어 수를 세는 것은 디지털 시대에 필수입니다. SNS 플랫폼은 엄격한 글자 수 제한이 있습니다 — 트위터/X는 280자, 인스타그램 캡션은 2,200자, 링크드인 게시물은 3,000자로 제한됩니다.",
            "전문가에게 정확한 텍스트 측정은 매우 중요합니다. 한국어 이력서는 공백 제외 글자 수 기준이 필수이며, 학교 과제는 특정 단어 수 요구사항을 충족해야 합니다. SEO 메타 디스크립션은 150-160자 사이일 때 최적의 성과를 냅니다.",
            "이 도구는 6가지 다른 지표를 동시에 제공하여 텍스트의 전체적인 모습을 한눈에 파악할 수 있습니다. 트윗을 작성하든, 에세이를 쓰든, SEO 콘텐츠를 최적화하든, 즉각적인 피드백이 더 효과적인 글쓰기를 도와줍니다.",
        ],

        faqTitle: "자주 묻는 질문 (FAQ)",
        faqItems: [
            {
                q: "다른 언어의 단어는 어떻게 세나요?",
                a: "영어와 같이 공백으로 구분하는 언어는 공백 기준으로 단어를 셉니다. 한국어, 일본어, 중국어(CJK) 같은 언어는 각 문자를 1단어로 카운트하며, 이는 표준 관례입니다.",
            },
            {
                q: "내 텍스트 데이터는 안전한가요?",
                a: "네, 완벽하게 안전합니다. 모든 처리가 100% 브라우저에서 이루어집니다. 텍스트가 서버로 전송되거나 저장 또는 공유되지 않습니다.",
            },
            {
                q: "읽기 시간은 어떻게 계산하나요?",
                a: "평균 읽기 속도를 기반으로 합니다: 영어 텍스트는 분당 약 200단어, CJK 언어는 분당 약 500글자를 기준으로 계산합니다.",
            },
            {
                q: "모바일에서도 사용할 수 있나요?",
                a: "네! 이 도구는 완전한 반응형이며 휴대폰과 태블릿에서도 완벽하게 작동합니다.",
            },
            {
                q: "문장은 어떤 기준으로 세나요?",
                a: "마침표(.), 느낌표(!), 물음표(?)를 기준으로 문장을 셉니다. 동아시아 문장 부호(。！？)도 포함됩니다.",
            },
        ],

        // --- 새 기능 UI 텍스트 ---
        goalToggle: "목표 설정",
        goalPlaceholder: "예: 500",
        goalDesc: "목표 글자 수 또는 단어 수를 설정하면 프로그레스바로 진행률을 확인할 수 있습니다.",
        transformLabel: "변환:",
        transformUpper: "대문자",
        transformLower: "소문자",
        transformTitle: "첫글자 대문자",
        transformRemoveBreaks: "줄바꿈 제거",
        transformRemoveSpaces: "공백 정리",
        transformDesc: "텍스트를 클릭 한 번으로 변환하세요 — 대문자, 소문자, 첫글자 대문자, 줄바꿈 제거, 공백 정리.",
        darkModeLabel: "다크 모드",
        autoSaveRestored: "이전 텍스트가 복원되었습니다",
        autoSaveDesc: "텍스트가 자동 저장됩니다. 언제든 돌아오면 작업하던 그대로 대기하고 있습니다.",

        // --- 추가 기능 ---
        keywordTitle: "키워드 빈도",
        keywordDesc: "텍스트에서 가장 많이 사용된 단어 Top 10을 확인하세요.",
        keywordEmpty: "텍스트를 입력하면 키워드 분석이 표시됩니다.",
        seoDensityTitle: "SEO 타겟 키워드 밀도",
        seoDensityDesc: "검색 최적화를 위해 1~3% 밀도를 목표로 하세요.",
        seoDensityInput: "타겟 키워드 입력...",
        seoDensityEmpty: "위 입력창에 분석할 키워드를 입력하세요.",
        seoDensityResult: "키워드 밀도:",
        seoDensityCount: "등장 횟수:",
        seoDensityGood: "최적 (좋음)",
        seoDensityLow: "부족함",
        seoDensityHigh: "너무 많음",
        platformTitle: "플랫폼 체크",
        platformDesc: "주요 SNS 플랫폼의 글자 수 제한에 맞는지 실시간으로 확인하세요.",
        readabilityTitle: "가독성 점수",
        readabilityDesc: "텍스트의 읽기 쉬운 정도를 분석합니다 (Flesch 점수).",
        readabilityEmpty: "분석하려면 최소 3단어, 1문장이 필요합니다.",
        readabilityVeryEasy: "매우 쉽다",
        readabilityEasy: "쉽다",
        readabilityNormal: "보통",
        readabilityHard: "어렵다",
        readabilityVeryHard: "매우 어렵다",
        readabilityWordsPerSentence: "단어/문장",
        readabilitySyllablesPerWord: "음절/단어",
        readabilityCJKWarning: "가독성 점수는 영어에 최적화되어 있습니다. CJK 결과는 참고용입니다.",
        findReplaceTitle: "찾기 & 바꾸기",
        findReplaceDesc: "텍스트를 검색하고 일괄 치환합니다. 정규식 지원.",
        findLabel: "찾기",
        replaceLabel: "바꾸기",
        findPlaceholder: "검색어 입력...",
        replacePlaceholder: "바꿀 텍스트...",
        findCaseSensitive: "대소문자 구분",
        findRegex: "정규식",
        replaceAllBtn: "전체 바꾸기",
        historyTitle: "텍스트 히스토리",
        historyDesc: "5초마다 자동 스냅샷 저장. 이전 버전으로 복원 가능.",
        historyEmpty: "아직 스냅샷이 없습니다. 계속 입력하면 자동 저장됩니다.",
        historyClearAll: "전체 삭제",
        historyRestore: "복원",
        copyWithStatsBtn: "통계와 함께 복사",

        footerText: "무료 온라인 글자 수 세기 & 단어 수 세기 도구",
        footerCopyright: "All rights reserved.",
    },

    // ===== 일본어 (日本語) =====
    ja: {
        langName: "日本語",
        langFlag: "🇯🇵",

        siteTitle: "文字数・単語カウンター",
        siteSubtitle: "リアルタイムテキスト分析 — 無料・高速・完全プライバシー保護",

        placeholder: "ここにテキストを入力または貼り付けてください...",
        clearBtn: "全削除",
        copyBtn: "コピー",
        copiedBtn: "コピー済み！",

        statWords: "単語数",
        statCharacters: "文字数（空白含む）",
        statCharsNoSpaces: "文字数（空白除く）",
        statSentences: "文数",
        statParagraphs: "段落数",
        statReadingTime: "読了時間",
        statMinutes: "分",
        statSeconds: "秒",

        seoWhyTitle: "このツールを使うべき理由",
        seoWhyItems: [
            {
                title: "超高速",
                desc: "すべての計算はブラウザ内で即座に行われます。サーバー遅延なし、待ち時間なし。テキストはデバイスの外に出ません。",
            },
            {
                title: "100%無料＆プライバシー保護",
                desc: "登録不要。データの収集・保存は一切ありません。あなたの文章は完全に保護されます。",
            },
            {
                title: "多言語対応",
                desc: "英語、韓国語、日本語、中国語、スペイン語など多くの言語に対応。CJK文字は個別にカウントされます。",
            },
            {
                title: "プロフェッショナル向け",
                desc: "ライター、学生、SEO専門家、ソーシャルメディアマネージャーなど、正確なテキスト統計が必要なすべての方に最適です。",
            },
        ],

        seoImportanceTitle: "文字数カウントが重要な理由",
        seoImportanceContent: [
            "文字数と単語数のカウントは、デジタル時代に不可欠です。SNSプラットフォームには厳格な文字数制限があります — Twitter/Xは280文字、Instagramのキャプションは2,200文字、LinkedInの投稿は3,000文字が上限です。",
            "プロフェッショナルにとって、正確なテキスト測定は非常に重要です。日本語の履歴書では正確な文字数が求められ、学術論文は特定の単語数要件を満たす必要があります。SEOメタディスクリプションは150-160文字の間が最適です。",
            "このツールは6つの異なる指標を同時に提供し、テキストの全体像を一目で把握できます。ツイートの作成、エッセイの執筆、SEOコンテンツの最適化など、即座のフィードバックがより効果的な執筆を支援します。",
        ],

        faqTitle: "よくある質問（FAQ）",
        faqItems: [
            {
                q: "異なる言語の単語はどのようにカウントされますか？",
                a: "英語などスペースで区切る言語はスペース基準で単語をカウントします。日本語、韓国語、中国語（CJK）は各文字を1単語としてカウントします（標準的な慣例）。",
            },
            {
                q: "テキストデータは安全ですか？",
                a: "はい、完全に安全です。すべての処理は100%ブラウザで行われます。テキストがサーバーに送信されたり、保存・共有されることはありません。",
            },
            {
                q: "読了時間はどのように計算されますか？",
                a: "平均読書速度に基づきます：英語テキストは1分あたり約200語、CJK言語は1分あたり約500文字を基準に計算します。",
            },
            {
                q: "モバイルでも使えますか？",
                a: "はい！完全なレスポンシブデザインで、スマートフォンやタブレットでも完璧に動作します。",
            },
            {
                q: "文はどの基準でカウントされますか？",
                a: "句点（。）、感嘆符（！）、疑問符（？）などの終止符に基づいて文をカウントします。",
            },
        ],

        // --- 新機能UIテキスト ---
        goalToggle: "目標設定",
        goalPlaceholder: "例: 500",
        goalDesc: "目標文字数または単語数を設定し、プログレスバーで進捗を確認できます。",
        transformLabel: "変換:",
        transformUpper: "大文字",
        transformLower: "小文字",
        transformTitle: "先頭大文字",
        transformRemoveBreaks: "改行を削除",
        transformRemoveSpaces: "空白を整理",
        transformDesc: "テキストをワンクリックで変換 — 大文字、小文字、タイトルケース、改行削除、空白整理。",
        darkModeLabel: "ダークモード",
        autoSaveRestored: "前回のテキストが復元されました",
        autoSaveDesc: "テキストは自動保存されます。いつでも戻ってくれば、作業がそのまま待っています。",

        // --- 追加機能 ---
        keywordTitle: "キーワード頻度",
        keywordDesc: "テキストで最も多く使われた単語Top 10を確認。",
        keywordEmpty: "テキストを入力するとキーワード分析が表示されます。",
        seoDensityTitle: "SEO キーワード密度",
        seoDensityDesc: "検索最適化のため、1〜3%の密度を目指しましょう。",
        seoDensityInput: "ターゲットキーワードを入力...",
        seoDensityEmpty: "上の入力欄にキーワードを入力してください。",
        seoDensityResult: "密度:",
        seoDensityCount: "出現回数:",
        seoDensityGood: "最適",
        seoDensityLow: "少なすぎる",
        seoDensityHigh: "多すぎる",
        platformTitle: "プラットフォームチェック",
        platformDesc: "主要SNSの文字数制限をリアルタイムで確認。",
        readabilityTitle: "可読性スコア",
        readabilityDesc: "テキストの読みやすさを分析（Fleschスコア）。",
        readabilityEmpty: "分析には最低3単語、1文が必要です。",
        readabilityVeryEasy: "とても簡単",
        readabilityEasy: "簡単",
        readabilityNormal: "普通",
        readabilityHard: "難しい",
        readabilityVeryHard: "とても難しい",
        readabilityWordsPerSentence: "単語/文",
        readabilitySyllablesPerWord: "音節/単語",
        readabilityCJKWarning: "可読性スコアは英語に最適化されています。CJKの結果は参考値です。",
        findReplaceTitle: "検索＆置換",
        findReplaceDesc: "テキストを検索して一括置換。正規表現対応。",
        findLabel: "検索",
        replaceLabel: "置換",
        findPlaceholder: "検索テキスト...",
        replacePlaceholder: "置換テキスト...",
        findCaseSensitive: "大文字小文字を区別",
        findRegex: "正規表現",
        replaceAllBtn: "全て置換",
        historyTitle: "テキスト履歴",
        historyDesc: "5秒ごとに自動スナップショット保存。以前のバージョンに復元可能。",
        historyEmpty: "まだスナップショットがありません。入力を続けると自動保存されます。",
        historyClearAll: "全て削除",
        historyRestore: "復元",
        copyWithStatsBtn: "統計付きコピー",

        footerText: "無料オンライン文字数カウント＆単語カウントツール",
        footerCopyright: "All rights reserved.",
    },

    // ===== 스페인어 (Español) =====
    es: {
        langName: "Español",
        langFlag: "🇪🇸",

        siteTitle: "Contador de Palabras y Caracteres",
        siteSubtitle: "Análisis de texto en tiempo real — gratis, rápido y privado",

        placeholder: "Comienza a escribir o pega tu texto aquí...",
        clearBtn: "Borrar Todo",
        copyBtn: "Copiar Texto",
        copiedBtn: "¡Copiado!",

        statWords: "Palabras",
        statCharacters: "Caracteres",
        statCharsNoSpaces: "Caracteres (sin espacios)",
        statSentences: "Oraciones",
        statParagraphs: "Párrafos",
        statReadingTime: "Tiempo de Lectura",
        statMinutes: "min",
        statSeconds: "seg",

        seoWhyTitle: "¿Por Qué Usar Esta Herramienta?",
        seoWhyItems: [
            {
                title: "Velocidad Relámpago",
                desc: "Todos los cálculos se realizan instantáneamente en tu navegador. Sin demoras, sin esperas. Tu texto nunca sale de tu dispositivo.",
            },
            {
                title: "100% Gratis y Privado",
                desc: "No requiere registro. No se recopilan ni almacenan datos. Tu escritura permanece completamente privada.",
            },
            {
                title: "Soporte Multilingüe",
                desc: "Cuenta palabras con precisión en inglés, coreano, japonés, chino, español y más. Los caracteres CJK se cuentan individualmente.",
            },
            {
                title: "Perfecto para Profesionales",
                desc: "Ideal para escritores, estudiantes, especialistas en SEO, gestores de redes sociales y cualquiera que necesite estadísticas de texto precisas.",
            },
        ],

        seoImportanceTitle: "¿Por Qué Importa Contar Caracteres?",
        seoImportanceContent: [
            "Contar caracteres y palabras es esencial en el mundo digital actual. Las plataformas de redes sociales tienen límites estrictos: Twitter/X permite 280 caracteres, los subtítulos de Instagram tienen un máximo de 2.200, y las publicaciones de LinkedIn se limitan a 3.000 caracteres.",
            "Para los profesionales, una medición precisa del texto es crucial. Los currículos coreanos requieren conteos exactos de caracteres (sin espacios). Los ensayos académicos deben cumplir requisitos específicos de conteo de palabras. Las meta descripciones SEO funcionan mejor entre 150 y 160 caracteres.",
            "Nuestra herramienta proporciona seis métricas diferentes simultáneamente, brindándote una imagen completa de tu texto de un vistazo. Ya sea que estés creando un tweet, escribiendo un ensayo u optimizando tu contenido SEO, la retroalimentación instantánea te ayuda a escribir de manera más efectiva.",
        ],

        faqTitle: "Preguntas Frecuentes (FAQ)",
        faqItems: [
            {
                q: "¿Cómo se cuentan las palabras en diferentes idiomas?",
                a: "Para el inglés y otros idiomas separados por espacios, las palabras se cuentan dividiendo por espacios en blanco. Para idiomas CJK (coreano, japonés, chino), cada carácter se cuenta como una palabra, según la convención estándar.",
            },
            {
                q: "¿Están seguros mis datos de texto?",
                a: "Absolutamente. Todo el procesamiento se realiza al 100% en tu navegador. Tu texto nunca se envía a ningún servidor, ni se almacena ni se comparte.",
            },
            {
                q: "¿Cómo se calcula el tiempo de lectura?",
                a: "El tiempo de lectura se basa en velocidades de lectura promedio: aproximadamente 200 palabras por minuto para texto en inglés y 500 caracteres por minuto para idiomas CJK.",
            },
            {
                q: "¿Puedo usar esto en dispositivos móviles?",
                a: "¡Sí! La herramienta es totalmente responsive y funciona perfectamente en teléfonos y tabletas.",
            },
            {
                q: "¿Qué cuenta como una oración?",
                a: "Las oraciones se cuentan según los signos de puntuación finales: puntos (.), signos de exclamación (!) y signos de interrogación (?), incluidos sus equivalentes en Asia Oriental.",
            },
        ],

        // --- Textos de nuevas funciones ---
        goalToggle: "Fijar Objetivo",
        goalPlaceholder: "ej. 500",
        goalDesc: "Establece un objetivo de palabras o caracteres y sigue tu progreso con una barra visual.",
        transformLabel: "Transformar:",
        transformUpper: "MAYÚS",
        transformLower: "minús",
        transformTitle: "Título",
        transformRemoveBreaks: "Sin Saltos",
        transformRemoveSpaces: "Recortar",
        transformDesc: "Convierte tu texto al instante — mayúsculas, minúsculas, título, eliminar saltos de línea o espacios extra.",
        darkModeLabel: "Modo Oscuro",
        autoSaveRestored: "Texto anterior restaurado",
        autoSaveDesc: "Tu texto se guarda automáticamente. Vuelve cuando quieras — tu trabajo estará esperando.",

        // --- Funciones adicionales ---
        keywordTitle: "Frecuencia de Palabras",
        keywordDesc: "Ve las 10 palabras más usadas en tu texto.",
        keywordEmpty: "Escribe texto para ver el análisis de palabras clave.",
        seoDensityTitle: "Densidad de Palabras Clave SEO",
        seoDensityDesc: "Apunta a una densidad del 1-3% para optimizar el SEO.",
        seoDensityInput: "Introduce la palabra clave...",
        seoDensityEmpty: "Introduce una palabra clave arriba.",
        seoDensityResult: "Densidad:",
        seoDensityCount: "Apariciones:",
        seoDensityGood: "Óptimo",
        seoDensityLow: "Muy Baja",
        seoDensityHigh: "Muy Alta",
        platformTitle: "Verificar Plataforma",
        platformDesc: "Comprueba si tu texto cumple con los límites de las plataformas populares.",
        readabilityTitle: "Legibilidad",
        readabilityDesc: "Analiza qué tan fácil es leer tu texto (Puntuación Flesch).",
        readabilityEmpty: "Se necesitan al menos 3 palabras y 1 oración para analizar.",
        readabilityVeryEasy: "Muy Fácil",
        readabilityEasy: "Fácil",
        readabilityNormal: "Promedio",
        readabilityHard: "Difícil",
        readabilityVeryHard: "Muy Difícil",
        readabilityWordsPerSentence: "Palabras/Oración",
        readabilitySyllablesPerWord: "Sílabas/Palabra",
        readabilityCJKWarning: "La puntuación está optimizada para inglés. Los resultados CJK son aproximados.",
        findReplaceTitle: "Buscar y Reemplazar",
        findReplaceDesc: "Busca y reemplaza texto con soporte para expresiones regulares.",
        findLabel: "Buscar",
        replaceLabel: "Reemplazar",
        findPlaceholder: "Texto a buscar...",
        replacePlaceholder: "Reemplazar con...",
        findCaseSensitive: "Distinguir mayús/minús",
        findRegex: "Regex",
        replaceAllBtn: "Reemplazar Todo",
        historyTitle: "Historial de Texto",
        historyDesc: "Capturas automáticas cada 5 seg. Restaura versiones anteriores.",
        historyEmpty: "Aún no hay capturas. Sigue escribiendo y se guardarán automáticamente.",
        historyClearAll: "Borrar Todo",
        historyRestore: "Restaurar",
        copyWithStatsBtn: "Copiar con Estadísticas",

        footerText: "Herramienta gratuita de contador de palabras y caracteres en línea.",
        footerCopyright: "Todos los derechos reservados.",
    },
};

export default translations;
