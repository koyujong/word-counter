/**
 * seoTranslations.js - 확장 SEO 콘텐츠 번역 (4개 언어)
 *
 * 구글봇 품질 필터 통과를 위한 풍부한 콘텐츠:
 * 1. 사용 방법 (How to Use) 가이드
 * 2. 플랫폼별 글자 수 제한 비교표
 * 3. 활용 사례 (Use Cases)
 * 4. 효과적인 글쓰기 팁
 * 5. 확장 FAQ (추가 5개)
 */

const seoTranslations = {
    // ===== 영어 =====
    en: {
        howToUseTitle: "How to Use This Tool",
        howToUseSteps: [
            { step: "1", title: "Type or Paste", desc: "Enter your text directly into the editor above, or copy-paste content from any document, email, or website. The editor supports unlimited text length." },
            { step: "2", title: "View Real-Time Stats", desc: "As you type, all six metrics update instantly: word count, character count (with and without spaces), sentence count, paragraph count, and estimated reading time." },
            { step: "3", title: "Use Action Buttons", desc: "Click 'Copy Text' to copy your content to the clipboard, or 'Clear All' to start fresh. Both buttons provide instant visual feedback." },
            { step: "4", title: "Switch Language", desc: "Use the language selector in the top-right corner to switch the entire interface between English, Korean, Japanese, and Spanish." },
        ],

        platformLimitsTitle: "Character Limits by Platform (2025)",
        platformLimits: [
            { platform: "Twitter / X", limit: "280", type: "Characters", note: "Premium users get 25,000 characters" },
            { platform: "Instagram Caption", limit: "2,200", type: "Characters", note: "First 125 characters shown in feed" },
            { platform: "Instagram Bio", limit: "150", type: "Characters", note: "Keep it concise and memorable" },
            { platform: "Facebook Post", limit: "63,206", type: "Characters", note: "Optimal length is 40-80 characters" },
            { platform: "LinkedIn Post", limit: "3,000", type: "Characters", note: "First 140 characters are preview" },
            { platform: "YouTube Title", limit: "100", type: "Characters", note: "Recommended under 70 characters" },
            { platform: "YouTube Description", limit: "5,000", type: "Characters", note: "First 150 characters most important" },
            { platform: "TikTok Caption", limit: "4,000", type: "Characters", note: "Previously limited to 300" },
            { platform: "Pinterest Pin", limit: "500", type: "Characters", note: "First 50-60 characters are key" },
            { platform: "Google Meta Title", limit: "60", type: "Characters", note: "Truncated after ~580px width" },
            { platform: "Google Meta Description", limit: "160", type: "Characters", note: "Truncated after ~920px width" },
            { platform: "Email Subject Line", limit: "60", type: "Characters", note: "41 characters for mobile preview" },
        ],

        useCasesTitle: "Who Uses Character Counters?",
        useCases: [
            { title: "Content Writers & Bloggers", desc: "Professional writers use character counters to optimize headlines, meta descriptions, and social media posts. Keeping titles under 60 characters ensures they display fully in Google search results. Blog posts between 1,500-2,500 words tend to rank higher in search engines, making word counting essential for SEO strategy." },
            { title: "Students & Academics", desc: "University essays, thesis papers, and research abstracts all come with strict word count requirements. Our tool helps students track their progress in real-time without the need to switch between applications. The paragraph counter is especially useful for structuring dissertations and academic papers." },
            { title: "Social Media Managers", desc: "Managing multiple social media accounts means constantly dealing with different character limits. A tweet needs to be under 280 characters, an Instagram caption under 2,200, and a LinkedIn post under 3,000. Our tool makes it easy to craft perfectly-sized content for every platform." },
            { title: "Job Seekers (Especially in Korea)", desc: "Korean job applications frequently require precise character counts, particularly excluding spaces. Our 'Characters (no spaces)' metric is specifically designed for this purpose, helping applicants meet exact requirements for cover letters, self-introductions, and resume summaries." },
            { title: "SEO Specialists", desc: "Search engine optimization depends heavily on character counts. Title tags should be 50-60 characters, meta descriptions 150-160 characters, and H1 headings under 70 characters. Our real-time counting eliminates the guesswork from SEO copywriting." },
            { title: "Translators & Localization Teams", desc: "When translating text between languages, the character count can change dramatically. Japanese and Chinese characters convey more meaning per character than English, so translated text length varies significantly. Our multi-language counting ensures accurate metrics regardless of the language." },
        ],

        writingTipsTitle: "Tips for Effective Writing",
        writingTips: [
            { title: "Keep Sentences Short", desc: "Research shows that sentences under 20 words are easier to understand. The average adult reading level corresponds to about 15-word sentences. Use our sentence counter to identify paragraphs that may need breaking up." },
            { title: "Aim for Optimal Paragraph Length", desc: "Online readers prefer paragraphs of 2-3 sentences (roughly 40-80 words). Long walls of text cause readers to lose focus. Our paragraph counter helps you maintain reader-friendly formatting." },
            { title: "Match Your Platform", desc: "Every platform has an ideal content length. Twitter thrives on brevity (under 100 characters get 17% more engagement). LinkedIn posts between 1,900-2,000 characters generate the most engagement. Use our character counter to hit the sweet spot." },
            { title: "Consider Reading Time", desc: "The average blog reader spends 37 seconds on an article. Long-form content (7+ minutes of reading time) tends to get more shares, but only if it provides consistent value. Use our reading time estimate to gauge your content depth." },
        ],

        extraFaqItems: [
            { q: "What is the difference between 'Characters' and 'Characters (no spaces)'?", a: "'Characters' counts every single character in your text, including spaces, tabs, and line breaks. 'Characters (no spaces)' removes all whitespace before counting. The latter is especially important for Korean job applications and academic submissions where 'characters excluding spaces' (공백 제외) is the standard measurement." },
            { q: "Can I count characters in a PDF or Word document?", a: "Yes! Simply copy the text from your PDF or Word document and paste it into the editor. The tool will instantly analyze the pasted content. For best results with PDFs, use your PDF reader's 'Select All' (Ctrl+A) and 'Copy' (Ctrl+C) functions." },
            { q: "How accurate is the word count compared to Microsoft Word?", a: "Our word count is highly accurate and comparable to Microsoft Word for English text. For CJK languages, results may differ slightly because we count each CJK character as one word (the standard linguistic convention), while Word may use different counting methods." },
            { q: "Does this tool support emojis and special characters?", a: "Yes! Emojis and special characters (including accented letters, symbols, and mathematical notation) are fully supported and counted as characters. Note that some emojis may count as 2 or more characters due to Unicode encoding." },
            { q: "Is there a maximum text length?", a: "There is no artificial limit on text length. The tool runs entirely in your browser, so the only limit is your device's available memory. We've tested it with texts over 100,000 words without any issues." },
        ],
    },

    // ===== 한국어 =====
    ko: {
        howToUseTitle: "사용 방법",
        howToUseSteps: [
            { step: "1", title: "입력 또는 붙여넣기", desc: "위의 에디터에 직접 텍스트를 입력하거나, 문서·이메일·웹사이트에서 복사하여 붙여넣기 하세요. 텍스트 길이에 제한이 없습니다." },
            { step: "2", title: "실시간 통계 확인", desc: "입력하는 즉시 6가지 지표가 실시간으로 업데이트됩니다: 단어 수, 글자 수(공백 포함/제외), 문장 수, 문단 수, 예상 읽기 시간." },
            { step: "3", title: "액션 버튼 활용", desc: "'복사하기' 버튼으로 내용을 클립보드에 복사하거나, '전체 지우기' 버튼으로 새로 시작하세요. 두 버튼 모두 즉각적인 시각적 피드백을 제공합니다." },
            { step: "4", title: "언어 전환", desc: "우측 상단의 언어 선택기로 전체 인터페이스를 한국어, 영어, 일본어, 스페인어로 전환할 수 있습니다." },
        ],

        platformLimitsTitle: "플랫폼별 글자 수 제한 (2025년 기준)",
        platformLimits: [
            { platform: "트위터 / X", limit: "280", type: "자", note: "프리미엄 사용자는 25,000자" },
            { platform: "인스타그램 캡션", limit: "2,200", type: "자", note: "피드에는 첫 125자만 표시" },
            { platform: "인스타그램 바이오", limit: "150", type: "자", note: "간결하고 임팩트 있게" },
            { platform: "페이스북 게시물", limit: "63,206", type: "자", note: "최적 길이는 40-80자" },
            { platform: "링크드인 게시물", limit: "3,000", type: "자", note: "첫 140자가 미리보기" },
            { platform: "유튜브 제목", limit: "100", type: "자", note: "70자 이하 권장" },
            { platform: "유튜브 설명", limit: "5,000", type: "자", note: "첫 150자가 가장 중요" },
            { platform: "틱톡 캡션", limit: "4,000", type: "자", note: "이전에는 300자 제한" },
            { platform: "핀터레스트 핀", limit: "500", type: "자", note: "첫 50-60자가 핵심" },
            { platform: "구글 메타 타이틀", limit: "60", type: "자", note: "약 580px 너비 후 잘림" },
            { platform: "구글 메타 설명", limit: "160", type: "자", note: "약 920px 너비 후 잘림" },
            { platform: "이메일 제목", limit: "60", type: "자", note: "모바일 미리보기는 41자" },
        ],

        useCasesTitle: "누가 글자 수 세기를 사용하나요?",
        useCases: [
            { title: "콘텐츠 작가 & 블로거", desc: "전문 작가들은 헤드라인, 메타 설명, SNS 게시물을 최적화하기 위해 글자 수 세기를 사용합니다. 제목을 60자 이하로 유지하면 구글 검색 결과에 완전히 표시됩니다. 1,500-2,500단어의 블로그 게시물이 검색엔진에서 더 높은 순위를 차지하는 경향이 있어, 단어 수 관리가 SEO 전략에 필수적입니다." },
            { title: "학생 & 학계", desc: "대학 에세이, 논문, 연구 초록 모두 엄격한 단어 수 요구사항이 있습니다. 이 도구를 사용하면 앱을 전환하지 않고도 실시간으로 진행 상황을 추적할 수 있습니다. 문단 카운터는 논문과 학술 논문의 구조를 잡는 데 특히 유용합니다." },
            { title: "소셜미디어 매니저", desc: "여러 SNS 계정을 관리하려면 각 플랫폼의 다른 글자 수 제한을 항상 신경 써야 합니다. 트윗은 280자 이내, 인스타그램 캡션은 2,200자 이내, 링크드인 게시물은 3,000자 이내. 이 도구를 사용하면 모든 플랫폼에 딱 맞는 콘텐츠를 손쉽게 작성할 수 있습니다." },
            { title: "취업 준비생 (특히 한국)", desc: "한국 취업 시장에서는 자기소개서, 지원 동기서 등에 정확한 글자 수(공백 제외)를 요구하는 경우가 매우 많습니다. '글자 수(공백 제외)' 기능은 바로 이 용도로 설계되었으며, 이력서 요약, 자기소개서에 정확한 글자 수를 맞추는 데 도움을 줍니다." },
            { title: "SEO 전문가", desc: "검색엔진 최적화는 글자 수에 크게 의존합니다. 타이틀 태그는 50-60자, 메타 설명은 150-160자, H1 제목은 70자 이하가 적합합니다. 실시간 카운팅으로 SEO 카피라이팅의 추측을 없앱니다." },
            { title: "번역가 & 현지화 팀", desc: "언어 간 번역 시 글자 수가 크게 달라질 수 있습니다. 일본어와 중국어 문자는 영어보다 문자당 더 많은 의미를 전달하므로 번역된 텍스트 길이가 상당히 달라집니다. 다국어 카운팅 기능으로 언어에 관계없이 정확한 지표를 제공합니다." },
        ],

        writingTipsTitle: "효과적인 글쓰기 팁",
        writingTips: [
            { title: "문장을 짧게 유지하세요", desc: "연구에 따르면 20단어 이하의 문장이 이해하기 더 쉽습니다. 성인 평균 독해 수준은 약 15단어 문장에 해당합니다. 문장 카운터를 활용하여 너무 긴 문단을 찾아 분리할 수 있습니다." },
            { title: "최적의 문단 길이를 유지하세요", desc: "온라인 독자는 2-3문장(약 40-80단어)의 문단을 선호합니다. 긴 텍스트 덩어리는 독자의 집중력을 떨어뜨립니다. 문단 카운터로 독자 친화적인 포맷을 유지하세요." },
            { title: "플랫폼에 맞추세요", desc: "모든 플랫폼에 이상적인 콘텐츠 길이가 있습니다. 트위터에서는 100자 이하가 17% 더 높은 참여율을 보입니다. 링크드인에서는 1,900-2,000자 게시물이 가장 많은 참여를 유도합니다. 글자 수 세기로 최적의 길이를 맞추세요." },
            { title: "읽기 시간을 고려하세요", desc: "평균 블로그 독자는 기사에 37초를 사용합니다. 장문 콘텐츠(읽기 시간 7분 이상)가 더 많이 공유되는 경향이 있지만, 지속적으로 가치를 제공할 때만 그렇습니다. 예상 읽기 시간으로 콘텐츠 깊이를 가늠해 보세요." },
        ],

        extraFaqItems: [
            { q: "'글자 수(공백 포함)'과 '글자 수(공백 제외)'의 차이점은 무엇인가요?", a: "'공백 포함'은 공백, 탭, 줄바꿈을 포함한 모든 글자를 셉니다. '공백 제외'는 모든 공백을 제거한 후 세며, 한국 취업 시장에서 이력서·자기소개서 작성 시 필수적인 기준입니다." },
            { q: "PDF나 Word 문서의 글자 수도 셀 수 있나요?", a: "네! PDF나 Word 문서에서 텍스트를 복사하여 에디터에 붙여넣기만 하면 됩니다. PDF의 경우 '전체 선택(Ctrl+A)'과 '복사(Ctrl+C)' 기능을 사용하세요." },
            { q: "Microsoft Word의 단어 수와 비교하면 얼마나 정확한가요?", a: "영어 텍스트의 경우 Microsoft Word와 매우 유사한 정확도를 제공합니다. CJK 언어의 경우, 각 문자를 1단어로 카운트(표준 언어학적 관례)하기 때문에 Word와 약간 다를 수 있습니다." },
            { q: "이모지와 특수 문자도 지원하나요?", a: "네! 이모지와 특수 문자(악센트 문자, 기호, 수학 표기법 포함)를 완벽하게 지원하며 글자로 카운트됩니다. 일부 이모지는 유니코드 인코딩으로 인해 2자 이상으로 카운트될 수 있습니다." },
            { q: "텍스트 최대 길이 제한이 있나요?", a: "인위적인 길이 제한은 없습니다. 이 도구는 브라우저에서 완전히 실행되므로, 유일한 제한은 기기의 가용 메모리입니다. 100,000단어 이상의 텍스트로도 문제 없이 테스트되었습니다." },
        ],
    },

    // ===== 일본어 =====
    ja: {
        howToUseTitle: "使い方ガイド",
        howToUseSteps: [
            { step: "1", title: "入力または貼り付け", desc: "上のエディタにテキストを直接入力するか、ドキュメント・メール・ウェブサイトからコピー＆ペーストしてください。テキストの長さに制限はありません。" },
            { step: "2", title: "リアルタイム統計を確認", desc: "入力するたびに6つの指標が即座に更新されます：単語数、文字数（空白あり/なし）、文数、段落数、推定読了時間。" },
            { step: "3", title: "アクションボタンを活用", desc: "「コピー」ボタンでクリップボードに内容をコピー、「全削除」ボタンで最初からやり直せます。" },
            { step: "4", title: "言語切り替え", desc: "右上の言語セレクタで、インターフェース全体を英語、韓国語、日本語、スペイン語に切り替えられます。" },
        ],

        platformLimitsTitle: "プラットフォーム別文字数制限（2025年版）",
        platformLimits: [
            { platform: "Twitter / X", limit: "280", type: "文字", note: "プレミアムユーザーは25,000文字" },
            { platform: "Instagramキャプション", limit: "2,200", type: "文字", note: "フィードでは最初の125文字のみ表示" },
            { platform: "Instagram自己紹介", limit: "150", type: "文字", note: "簡潔で印象的に" },
            { platform: "Facebook投稿", limit: "63,206", type: "文字", note: "最適な長さは40-80文字" },
            { platform: "LinkedIn投稿", limit: "3,000", type: "文字", note: "最初の140文字がプレビュー" },
            { platform: "YouTubeタイトル", limit: "100", type: "文字", note: "70文字以下を推奨" },
            { platform: "YouTube説明文", limit: "5,000", type: "文字", note: "最初の150文字が最重要" },
            { platform: "TikTokキャプション", limit: "4,000", type: "文字", note: "以前は300文字制限" },
            { platform: "Pinterestピン", limit: "500", type: "文字", note: "最初の50-60文字が鍵" },
            { platform: "Googleメタタイトル", limit: "60", type: "文字", note: "約580px幅で切り捨て" },
            { platform: "Googleメタ説明", limit: "160", type: "文字", note: "約920px幅で切り捨て" },
            { platform: "メール件名", limit: "60", type: "文字", note: "モバイルプレビューは41文字" },
        ],

        useCasesTitle: "誰が文字カウンターを使うのか？",
        useCases: [
            { title: "コンテンツライター＆ブロガー", desc: "プロのライターは見出し、メタディスクリプション、SNS投稿を最適化するために文字カウンターを使用します。タイトルを60文字以下に保つとGoogle検索結果に完全に表示されます。" },
            { title: "学生＆研究者", desc: "大学のエッセイ、論文、研究要旨には厳格な文字数要件があります。リアルタイムで進捗を追跡でき、段落カウンターは論文の構造化に特に役立ちます。" },
            { title: "ソーシャルメディアマネージャー", desc: "複数のSNSアカウントを管理するには、各プラットフォームの異なる文字数制限に常に注意する必要があります。すべてのプラットフォームに最適なコンテンツを簡単に作成できます。" },
            { title: "就職活動者", desc: "履歴書やエントリーシートでは正確な文字数（スペース除く）が求められることが多いです。「文字数（空白除く）」機能はまさにこの目的のために設計されています。" },
            { title: "SEO専門家", desc: "SEOは文字数に大きく依存します。タイトルタグは50-60文字、メタ説明は150-160文字、H1見出しは70文字以下が適切です。" },
            { title: "翻訳者＆ローカライゼーションチーム", desc: "言語間の翻訳では文字数が大きく変わることがあります。多言語カウント機能で言語に関係なく正確な指標を提供します。" },
        ],

        writingTipsTitle: "効果的な文章を書くためのヒント",
        writingTips: [
            { title: "文を短くする", desc: "研究によると、20語以下の文が理解しやすいとされています。文カウンターを使って長すぎる段落を見つけ、分割しましょう。" },
            { title: "最適な段落の長さを保つ", desc: "オンライン読者は2-3文（約40-80語）の段落を好みます。長い文章の塊は読者の集中力を低下させます。" },
            { title: "プラットフォームに合わせる", desc: "Twitterでは100文字以下が17%高いエンゲージメントを獲得します。文字カウンターで最適な長さを狙いましょう。" },
            { title: "読了時間を考慮する", desc: "長文コンテンツ（読了7分以上）はより多くシェアされる傾向がありますが、継続的に価値を提供する場合のみです。" },
        ],

        extraFaqItems: [
            { q: "「文字数（空白含む）」と「文字数（空白除く）」の違いは？", a: "「空白含む」はスペース、タブ、改行を含むすべての文字をカウントします。「空白除く」はすべての空白を除去してからカウントし、履歴書作成時に特に重要です。" },
            { q: "PDFやWordの文字数もカウントできますか？", a: "はい！テキストをコピーしてエディタに貼り付けるだけです。PDFの場合は「全選択(Ctrl+A)」と「コピー(Ctrl+C)」を使用してください。" },
            { q: "Microsoft Wordと比較してどの程度正確ですか？", a: "英語テキストではWord同等の精度です。CJK言語では各文字を1語としてカウント（標準的な言語学的慣例）するため、Wordとわずかに異なる場合があります。" },
            { q: "絵文字や特殊文字に対応していますか？", a: "はい！絵文字と特殊文字を完全にサポートしています。一部の絵文字はUnicodeエンコーディングにより2文字以上としてカウントされる場合があります。" },
            { q: "テキストの最大長に制限はありますか？", a: "人為的な制限はありません。ブラウザで完全に動作するため、唯一の制限はデバイスの利用可能なメモリです。10万語以上のテキストでテスト済みです。" },
        ],
    },

    // ===== 스페인어 =====
    es: {
        howToUseTitle: "Cómo Usar Esta Herramienta",
        howToUseSteps: [
            { step: "1", title: "Escribe o Pega", desc: "Introduce tu texto directamente en el editor o copia y pega contenido desde cualquier documento, correo electrónico o sitio web. No hay límite de longitud." },
            { step: "2", title: "Ve las Estadísticas", desc: "Mientras escribes, las seis métricas se actualizan al instante: palabras, caracteres (con y sin espacios), oraciones, párrafos y tiempo de lectura estimado." },
            { step: "3", title: "Usa los Botones", desc: "Haz clic en 'Copiar Texto' para copiar al portapapeles, o 'Borrar Todo' para empezar de nuevo. Ambos botones proporcionan retroalimentación visual instantánea." },
            { step: "4", title: "Cambia el Idioma", desc: "Usa el selector de idioma en la esquina superior derecha para cambiar toda la interfaz entre inglés, coreano, japonés y español." },
        ],

        platformLimitsTitle: "Límites de Caracteres por Plataforma (2025)",
        platformLimits: [
            { platform: "Twitter / X", limit: "280", type: "Caracteres", note: "Usuarios Premium tienen 25,000" },
            { platform: "Instagram (Pie)", limit: "2,200", type: "Caracteres", note: "Solo se muestran los primeros 125" },
            { platform: "Instagram (Bio)", limit: "150", type: "Caracteres", note: "Mantenlo conciso y memorable" },
            { platform: "Facebook", limit: "63,206", type: "Caracteres", note: "Longitud óptima: 40-80 caracteres" },
            { platform: "LinkedIn", limit: "3,000", type: "Caracteres", note: "Los primeros 140 son vista previa" },
            { platform: "YouTube (Título)", limit: "100", type: "Caracteres", note: "Recomendado menos de 70" },
            { platform: "YouTube (Desc.)", limit: "5,000", type: "Caracteres", note: "Los primeros 150 son clave" },
            { platform: "TikTok", limit: "4,000", type: "Caracteres", note: "Antes limitado a 300" },
            { platform: "Pinterest", limit: "500", type: "Caracteres", note: "Los primeros 50-60 son esenciales" },
            { platform: "Google (Título)", limit: "60", type: "Caracteres", note: "Se trunca tras ~580px" },
            { platform: "Google (Meta Desc.)", limit: "160", type: "Caracteres", note: "Se trunca tras ~920px" },
            { platform: "Correo (Asunto)", limit: "60", type: "Caracteres", note: "Vista móvil: 41 caracteres" },
        ],

        useCasesTitle: "¿Quién Usa Contadores de Caracteres?",
        useCases: [
            { title: "Escritores y Bloggers", desc: "Los escritores profesionales usan contadores para optimizar titulares, meta descripciones y publicaciones en redes sociales. Los títulos de menos de 60 caracteres se muestran completamente en los resultados de búsqueda de Google." },
            { title: "Estudiantes y Académicos", desc: "Ensayos universitarios, tesis y resúmenes de investigación tienen requisitos estrictos de conteo de palabras. Esta herramienta permite seguir el progreso en tiempo real." },
            { title: "Community Managers", desc: "Gestionar múltiples cuentas de redes sociales significa lidiar constantemente con diferentes límites de caracteres. Nuestra herramienta facilita crear contenido perfectamente dimensionado para cada plataforma." },
            { title: "Buscadores de Empleo", desc: "Las solicitudes de empleo frecuentemente requieren conteos precisos de caracteres para cartas de presentación y resúmenes profesionales." },
            { title: "Especialistas en SEO", desc: "La optimización para motores de búsqueda depende en gran medida del conteo de caracteres. Etiquetas de título: 50-60, meta descripciones: 150-160, encabezados H1: menos de 70 caracteres." },
            { title: "Traductores", desc: "Al traducir entre idiomas, el conteo de caracteres puede cambiar drásticamente. Nuestro conteo multilingüe garantiza métricas precisas independientemente del idioma." },
        ],

        writingTipsTitle: "Consejos para Escribir Mejor",
        writingTips: [
            { title: "Mantén las Oraciones Cortas", desc: "Las investigaciones muestran que las oraciones de menos de 20 palabras son más fáciles de entender. Usa nuestro contador de oraciones para identificar párrafos que necesiten dividirse." },
            { title: "Longitud Óptima de Párrafos", desc: "Los lectores online prefieren párrafos de 2-3 oraciones (aproximadamente 40-80 palabras). Los muros de texto hacen que los lectores pierdan el enfoque." },
            { title: "Adáptate a la Plataforma", desc: "En Twitter, menos de 100 caracteres obtienen 17% más de engagement. En LinkedIn, publicaciones de 1,900-2,000 caracteres generan más interacción." },
            { title: "Considera el Tiempo de Lectura", desc: "El contenido extenso (7+ minutos de lectura) tiende a compartirse más, pero solo si proporciona valor constante. Usa nuestra estimación de tiempo para evaluar la profundidad." },
        ],

        extraFaqItems: [
            { q: "¿Cuál es la diferencia entre 'Caracteres' y 'Caracteres (sin espacios)'?", a: "'Caracteres' cuenta cada carácter incluyendo espacios, tabulaciones y saltos de línea. 'Sin espacios' elimina los espacios antes de contar, especialmente importante para aplicaciones laborales coreanas." },
            { q: "¿Puedo contar caracteres de un PDF o documento Word?", a: "¡Sí! Simplemente copia el texto y pégalo en el editor. Para PDFs, usa 'Seleccionar todo' (Ctrl+A) y 'Copiar' (Ctrl+C)." },
            { q: "¿Qué tan preciso es comparado con Microsoft Word?", a: "Altamente preciso y comparable para texto en inglés. Para idiomas CJK, los resultados pueden diferir ligeramente ya que contamos cada carácter CJK como una palabra." },
            { q: "¿Soporta emojis y caracteres especiales?", a: "¡Sí! Los emojis y caracteres especiales son totalmente compatibles. Algunos emojis pueden contar como 2 o más caracteres debido a la codificación Unicode." },
            { q: "¿Hay un límite máximo de texto?", a: "No hay límite artificial. La herramienta se ejecuta completamente en tu navegador, así que el único límite es la memoria disponible de tu dispositivo. Probado con más de 100,000 palabras." },
        ],
    },
};

export default seoTranslations;
