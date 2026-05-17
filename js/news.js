// ── NEWS DATA ──
// Add, remove, or edit articles here.
// title, description, category support { en: "...", he: "..." } for bilingual display.
// Fields: title, description, category, date, source, url (optional)

// ── ARCHIVE DATA ──
// Each entry represents a previous week. Add new objects to prepend older editions.
const ARCHIVE_WEEKS = [
  {
    week: { en: "Week of May 10, 2026", he: "שבוע 10 במאי 2026" },
    items: [
      {
        title: { en: "PDC Skills Competition", he: "תחרות Skills של PDC" },
        description: {
          en: "We recently launched our first Skills Competition within the PDC. Skills are pre-written instructions that guide AI agents on how to perform specific tasks - similar to a cheat sheet the agent reads before taking action.\n\nThe competition focuses on skills that demonstrate business value, productivity impact, practical usability, and creativity. Stay tuned over the next two weeks to discover which employees and skills will win.",
          he: "לאחרונה השקנו את תחרות ה-Skills הראשונה שלנו ב-PDC. מיומנויות הן הוראות כתובות מראש המנחות סוכני AI כיצד לבצע משימות ספציפיות - דומה לדף צ'יטים שהסוכן קורא לפני שפועל.\n\nהתחרות מתמקדת ב-Skills המדגימות ערך עסקי, השפעה על פרודוקטיביות, שימושיות מעשית ויצירתיות. הישארו מעודכנים במהלך שבועיים הקרובים כדי לגלות אילו עובדים ואילו Skills ינצחו."
        },
        category: { en: "AI Tools", he: "כלי AI" },
        date: "May 11, 2026",
        source: "Q-nomy AI"
      },
      {
        title: { en: "Claude Code Can Dream!", he: "Claude Code יכול לחלום!" },
        description: {
          en: "Memory is becoming a major focus for the latest foundation models and AI platforms, and Claude Code has now introduced \"Dreams.\"\n\nDreams is a feature where Claude asynchronously reviews its accumulated memory stores and past session transcripts, then reorganizes and cleans them into a more optimized memory structure. This enables Claude to become more helpful, perform better, and respond more efficiently over time.",
          he: "זיכרון הופך לנושא מרכזי עבור מודלי הבסיס ופלטפורמות ה-AI האחרונות. Claude Code הציגה כעת את \"Dreams\".\n\nDreams הוא פיצ'ר שבו Claude סוקר באופן אסינכרוני את מאגרי הזיכרון שצבר ותמלולי ה-session הקודמים, ואז מארגן ומנקה אותם למבנה זיכרון אופטימלי יותר. זה מאפשר ל-Claude להפוך מועיל יותר, לבצע טוב יותר ולהגיב ביעילות רבה יותר לאורך זמן."
        },
        category: { en: "AI Tools", he: "כלי AI" },
        date: "May 11, 2026",
        source: "Anthropic"
      },
      {
        title: { en: "Claude Code Routines", he: "Routines ב-Claude Code" },
        description: {
          en: "Routines in Claude Code are automations configured once - including prompts, repositories, and connectors - and then executed on a schedule. They can run either locally on your machine or in the cloud.\n\nIn the software development world, you can imagine a Routine triggering whenever a new requirement is added, immediately feeding it into Claude Code to begin generating the implementation automatically.",
          he: "Routines ב-Claude Code הן אוטומציות המוגדרות פעם אחת - כולל פרומפטים, מאגרי קוד וחיבורים - ולאחר מכן מבוצעות לפי לוח זמנים. הן יכולות לפעול מקומית על המחשב שלך או בענן.\n\nבעולם פיתוח התוכנה, אפשר לדמיין Routine שמופעלת בכל פעם שדרישה חדשה מתווספת, ומייד מזינה אותה ל-Claude Code כדי להתחיל ליצור את המימוש אוטומטית."
        },
        category: { en: "AI Tools", he: "כלי AI" },
        date: "May 11, 2026",
        source: "Anthropic"
      },
      {
        title: { en: "Claude Code Outcomes", he: "Outcomes ב-Claude Code" },
        description: {
          en: "Imagine being able to tell an AI agent: \"This is what success looks like for this task\" and having the agent continuously work until it fully achieves that outcome - regardless of how many writing and review iterations are required. (If you are not paying for it of course)\n\nSimilar to the \"/goal\" capability in Codex, Claude Code now supports this concept as well.",
          he: "דמיינו שאתם יכולים לומר לסוכן AI: \"כך נראית הצלחה עבור משימה זו\" - והסוכן יעבוד ברציפות עד שישיג לחלוטין את התוצאה הזו, ללא קשר לכמה איטרציות כתיבה וסקירה נדרשות. (אם אתם כמובן לא משלמים עליו)\n\nדומה ליכולת \"/goal\" ב-Codex, Claude Code תומכת כעת גם היא במושג זה."
        },
        category: { en: "AI Tools", he: "כלי AI" },
        date: "May 11, 2026",
        source: "Anthropic"
      },
      {
        title: { en: "Spec-Driven Development", he: "פיתוח מונחה-Spec" },
        description: {
          en: "Today, software development is largely based on business and design requirements, open issues, and \"human-readable\" documentation. In the near future, as AI agents increasingly write code themselves, requirements will need to be provided in a format better suited for them.\n\nEnter Spec-Driven Development - a coding approach where you first create a detailed mini-specification and then use it as the blueprint for implementation. You can already imagine a BRD being transformed into multiple specifications generated and consumed by AI agents.",
          he: "כיום, פיתוח תוכנה מבוסס במידה רבה על דרישות עסקיות ועיצוביות, issues פתוחים ותיעוד \"קריא לאדם\". בעתיד הקרוב, כשסוכני AI יכתבו יותר ויותר קוד בעצמם, יהיה צורך לספק דרישות בפורמט המתאים יותר עבורם.\n\nכאן נכנס Spec-Driven Development - גישה שבה תחילה יוצרים מיני דרישה מפורטת, ואז משתמשים בה כתוכנית לביצוע. כבר אפשר לדמיין BRD שמתורגם למספר מפרטים שנוצרים ונצרכים על ידי סוכני AI."
        },
        category: { en: "AI Concepts", he: "מושגי AI" },
        date: "May 11, 2026",
        source: "Q-nomy AI"
      },
      {
        title: { en: "Anthropic Keeping Their Models Close to the Chest", he: "Anthropic מגבילה גישה למודליה" },
        description: {
          en: "Due to the growing demand for Anthropic models (Opus, Sonnet, and Haiku), Anthropic has started limiting usage rates for products outside of the Anthropic ecosystem.\n\nThis is already being felt in platforms such as GitHub Copilot, where the latest Opus versions are no longer available, as well as in OpenClaw's base plans.",
          he: "בשל הביקוש ההולך וגדל למודלי Anthropic (Opus, Sonnet ו-Haiku), Anthropic החלה להגביל את קצב השימוש עבור מוצרים מחוץ למערכת האקולוגית שלה.\n\nזה כבר מורגש בפלטפורמות כגון GitHub Copilot, שבה גרסאות ה-Opus האחרונות אינן זמינות עוד, וכן בתוכניות הבסיס של OpenClaw."
        },
        category: { en: "AI Models", he: "מודלי AI" },
        date: "May 11, 2026",
        source: "Anthropic"
      },
      {
        title: { en: "GPT Images 2.0", he: "GPT Images 2.0" },
        description: {
          en: "OpenAI recently released GPT Images 2.0, its latest image generation and editing model focused on high-quality visuals, strong prompt understanding, realistic rendering, and accurate text generation within images.\n\nThe capability is built directly into ChatGPT and fully integrated into the platform.",
          he: "OpenAI שחררה לאחרונה את GPT Images 2.0, מודל יצירת ועריכת התמונות האחרון שלה, המתמקד בויזואלים איכותיים, הבנת פרומפטים חזקה, רינדור ריאליסטי ויצירת טקסט מדויקת בתוך תמונות.\n\nהיכולת בנויה ישירות לתוך ChatGPT ומשולבת במלואה בפלטפורמה."
        },
        category: { en: "AI Models", he: "מודלי AI" },
        date: "May 11, 2026",
        source: "OpenAI"
      },
      {
        title: { en: "Codex Is the New Claude Cowork", he: "Codex הוא Claude Cowork החדש" },
        description: {
          en: "Codex, OpenAI's AI software engineering platform capable of running code (similar to Claude Code, Cursor, and others), is evolving into a \"super app.\"\n\nIt can now also perform actions directly on your computer - similar to Claude Cowork and OpenClaw - while operating anonymously.",
          he: "Codex, פלטפורמת הנדסת התוכנה של OpenAI המסוגלת להריץ קוד (דומה ל-Claude Code, Cursor ואחרים), מתפתחת ל\"סופר-אפ\".\n\nכעת הוא יכול גם לבצע פעולות ישירות על המחשב שלך - דומה ל-Claude Cowork ו-OpenClaw - תוך פעולה בעילום שם."
        },
        category: { en: "AI Tools", he: "כלי AI" },
        date: "May 11, 2026",
        source: "OpenAI"
      }
    ]
  },
  {
    week: { en: "Week of May 3, 2026", he: "שבוע 3 במאי 2026" },
    items: [
      {
        title: { en: "Model Comparison", he: "השוואת מודלים" },
        description: {
          en: "Ever wondered which model is \"best\"? The answer depends on your specific needs. Industry benchmarks are commonly used to assess performance, but Hugging Face takes a different approach: it shows you two outputs for the same prompt without revealing which model generated each one. You choose the better result, and over time this feedback is aggregated to rank models. Check the new Model Comparison page to see the current standings.",
          he: "תמיד תהיתם איזה מודל הוא \"הטוב ביותר\"? התשובה תלויה בצרכים הספציפיים שלכם. מדדי תעשייה נפוצים לבדיקת ביצועים, אך Hugging Face נוקטת גישה שונה: היא מציגה שתי תוצאות לאותו פרומפט מבלי לחשוף איזה מודל הפיק כל אחת. אתם בוחרים את התוצאה הטובה יותר, ועם הזמן המשוב הזה מצטבר לדירוג מודלים. בדקו את עמוד השוואת המודלים החדש לדירוגים הנוכחיים."
        },
        category: { en: "Pro Tips", he: "טיפים" },
        date: "May 3, 2026",
        source: "Q-nomy AI"
      },
      {
        title: { en: "Reasoning", he: "Reasoning" },
        description: {
          en: "The ability to process information step-by-step, connecting facts and logic to reach a conclusion rather than simply retrieving patterns. In practice, the model plans how to answer by breaking problems into multi-step tasks, processing them, and validating the result before responding. The level of reasoning can often be controlled to avoid unnecessary token usage.",
          he: "היכולת לעבד מידע צעד אחר צעד, לחבר עובדות והיגיון כדי להגיע למסקנה במקום לאחזר דפוסים בלבד. בפועל, המודל מתכנן כיצד לענות על ידי פירוק בעיות למשימות מרובות שלבים, עיבודן ואימות התוצאה לפני המענה. ניתן לעיתים קרובות לשלוט ברמת ה-Reasoning כדי למנוע שימוש מיותר בטוקנים."
        },
        category: { en: "AI Concepts", he: "מושגי AI" },
        date: "May 3, 2026",
        source: "Q-nomy AI"
      },
      {
        title: { en: "Agent Harness", he: "Agent Harness" },
        description: {
          en: "The runtime framework that manages how an AI agent operates - handling inputs, invoking tools, managing context, and orchestrating workflows. It acts as the \"execution layer\" around the model, ensuring the agent behaves reliably, follows rules, and integrates with external systems, as per what you define. In other words: this is essentially everything you supply the model with outside of your User Prompt.",
          he: "מסגרת זמן הריצה שמנהלת כיצד סוכן AI פועל - טיפול בקלטים, הפעלת כלים, ניהול הקשר ותזמור תהליכי עבודה. הוא פועל כ\"שכבת הביצוע\" סביב המודל, ומבטיח שהסוכן מתנהג באופן אמין, עוקב אחר הכללים ומשתלב עם מערכות חיצוניות, בהתאם להגדרות שלכם. במילים אחרות: זה בעצם כל מה שאתם מספקים למודל מחוץ לפרומפט המשתמש שלכם."
        },
        category: { en: "AI Concepts", he: "מושגי AI" },
        date: "May 3, 2026",
        source: "Q-nomy AI"
      },
      {
        title: { en: "Muse Spark", he: "Muse Spark" },
        description: {
          en: "A new model from Meta, positioned as a more capable, multimodal AI system with improved performance compared to earlier releases.",
          he: "מודל חדש מ-Meta, הממוצב כמערכת AI רב-מודלית מתקדמת יותר עם ביצועים משופרים בהשוואה לגרסאות קודמות."
        },
        category: { en: "AI Models", he: "מודלי AI" },
        date: "May 3, 2026",
        source: "Meta"
      },
      {
        title: { en: "NotebookLM in Gemini", he: "NotebookLM ב-Gemini" },
        description: {
          en: "Google has integrated NotebookLM directly into Gemini, effectively connecting both platforms.",
          he: "Google שילבה את NotebookLM ישירות ב-Gemini, ומחברת למעשה את שתי הפלטפורמות."
        },
        category: { en: "Pro Tips", he: "טיפים" },
        date: "May 3, 2026",
        source: "Google"
      },
      {
        title: { en: "File Generation in Gemini", he: "יצירת קבצים ב-Gemini" },
        description: {
          en: "Gemini can now generate multiple file types as output, including PPT, DOCX, MD, PDF, and more.",
          he: "Gemini יכולה כעת ליצור סוגי קבצים מרובים כפלט, כולל PPT, DOCX, MD, PDF ועוד."
        },
        category: { en: "Pro Tips", he: "טיפים" },
        date: "May 3, 2026",
        source: "Google"
      }
    ]
  },
  {
    week: { en: "Week of Apr 26, 2026", he: "שבוע 26 באפריל 2026" },
    items: [
      {
        title: { en: "Model", he: "Model" },
        description: {
          en: "The \"brain\" responsible for generating responses to incoming user prompts. It is based on LLMs or SLMs - trained language models. There is significant variation between models in terms of performance, speed, token consumption, and capabilities. It is important to note that there is no inherently \"better\" model - only a model that is more suitable for a given use case and cost considerations.",
          he: "ה\"מוח\" האחראי על יצירת תגובות לפרומפטים הנכנסים. הוא מבוסס על LLMs או SLMs - מודלי שפה מאומנים. קיים פער משמעותי בין מודלים שונים מבחינת ביצועים, מהירות, צריכת טוקנים ויכולות. חשוב לציין שאין מודל \"טוב יותר\" באופן מוחלט - יש רק מודל שמתאים יותר לצורך הספציפי ולשיקולי העלות."
        },
        category: { en: "AI Concepts", he: "מושגי AI" },
        date: "Apr 21, 2026",
        source: "Q-nomy AI"
      },
      {
        title: { en: "Agents", he: "Agents" },
        description: {
          en: "An agent is a software layer that acts as a mediator between the user prompt and the model. While the model is responsible for analyzing the input and generating the response, the agent determines what additional context or information - beyond the user prompt - is sent to the model. It is responsible for actively searching for relevant skills, loading the appropriate tools, and passing them to the model. On certain platforms such as Claude Code and Cursor, it also has the ability to delegate actions for execution to sub-agents.",
          he: "סוכן הוא שכבת תוכנה המתפקדת כמתווך בין פרומפט המשתמש לבין המודל. בעוד שהמודל אחראי על ניתוח הקלט ויצירת התגובה, הסוכן קובע איזה הקשר ומידע נוסף - מעבר לפרומפט - יישלח למודל. הסוכן אחראי על חיפוש מיומנויות רלוונטיות, טעינת הכלים המתאימים והעברתם למודל. בפלטפורמות כגון Claude Code ו-Cursor, יש לו גם יכולת להאציל פעולות לסוכני-משנה."
        },
        category: { en: "AI Concepts", he: "מושגי AI" },
        date: "Apr 21, 2026",
        source: "Q-nomy AI"
      },
      {
        title: { en: "Tools", he: "Tools" },
        description: {
          en: "In practice, the \"hands\" of the agent. Through tools - which are essentially standard functions - the agent can perform actions such as calling APIs or interacting with databases. These are typically used to execute external operations. Each tool includes a description, which the model reads and uses to decide whether to invoke it, based on the incoming user prompt.",
          he: "ה\"ידיים\" של הסוכן. באמצעות כלים - שהם למעשה פונקציות רגילות - הסוכן יכול לבצע פעולות כגון קריאה ל-APIs או אינטראקציה עם בסיסי נתונים. כל כלי כולל תיאור שהמודל קורא ומשתמש בו כדי להחליט אם להפעיל אותו בהתאם לפרומפט הנכנס."
        },
        category: { en: "AI Concepts", he: "מושגי AI" },
        date: "Apr 21, 2026",
        source: "Q-nomy AI"
      },
      {
        title: { en: "MCP Servers", he: "שרתי MCP" },
        description: {
          en: "Until about a year ago, every tool had to be adapted individually for each agent in order to be usable. Anthropic introduced an open-source protocol that has since been adopted across the industry. This protocol effectively \"wraps\" tools, enabling them to be developed once and then used by any agent. Today, almost all platforms support this standard - including Claude Code, Cursor, GitHub Copilot, Codex, and more.",
          he: "עד לפני כשנה, כל כלי היה צריך להיות מותאם בנפרד לכל סוכן. Anthropic הציגה פרוטוקול קוד פתוח שאומץ מאז בכל התעשייה. הפרוטוקול \"עוטף\" כלים, מאפשר פיתוח פעם אחת ושימוש בכל סוכן. כיום כמעט כל הפלטפורמות תומכות בסטנדרט זה - כולל Claude Code, Cursor, GitHub Copilot, Codex ועוד."
        },
        category: { en: "AI Concepts", he: "מושגי AI" },
        date: "Apr 21, 2026",
        source: "Q-nomy AI"
      },
      {
        title: { en: "Skills", he: "Skills" },
        description: {
          en: "An open-source protocol developed by Anthropic and adopted by the industry. In practice, it is a folder consisting of a Markdown file (typically called skill.md) along with code scripts and other components. Unlike tools, these components usually run locally within the working environment. Additionally, skills are not fully loaded into the model - only their descriptions are initially provided, which helps reduce token usage. Only if the model determines that a skill is relevant will it load the remaining components.",
          he: "פרוטוקול קוד פתוח שפותח על ידי Anthropic ואומץ בתעשייה. בפועל, זוהי תיקייה המורכבת מקובץ Markdown (בדרך כלל skill.md) יחד עם סקריפטים ורכיבים נוספים. בשונה מכלים, רכיבים אלה פועלים מקומית. המיומנויות אינן נטענות במלואן לתוך המודל - רק התיאורים שלהן מסופקים תחילה. רק אם המודל יקבע שמיומנות רלוונטית יטעון את הרכיבים הנותרים."
        },
        category: { en: "AI Concepts", he: "מושגי AI" },
        date: "Apr 21, 2026",
        source: "Q-nomy AI"
      },
      {
        title: { en: "System Prompts", he: "System Prompts" },
        description: {
          en: "The \"settings\" that define how the agent should behave and operate. In different platforms they are referred to by various names: System Prompt (Claude API), Custom Instructions (Claude.ai), Custom Instructions (GitHub Copilot), and Rules (Cursor). 💡 Tip: use AI to write your system prompts.",
          he: "ה\"הגדרות\" שמגדירות כיצד הסוכן אמור להתנהג ולפעול. בפלטפורמות שונות הן מכונות בשמות שונים: System Prompt (Claude API), Custom Instructions (Claude.ai), Custom Instructions (GitHub Copilot), ו-Rules (Cursor). 💡 טיפ: השתמשו ב-AI לכתיבת הוראות המערכת שלכם."
        },
        category: { en: "AI Concepts", he: "מושגי AI" },
        date: "Apr 21, 2026",
        source: "Q-nomy AI"
      },
      {
        title: { en: "RAG - Retrieval-Augmented Generation", he: "RAG - Retrieval-Augmented Generation" },
        description: {
          en: "This refers to the ability to incorporate documents and various file types into the model's context. RAG is the technique the agent uses to retrieve these components, based on needs determined by the model in response to the user prompt. Each file is broken down into smaller chunks, and each chunk has a summarized representation - based on this, the model decides whether to load the full chunk or not (Semantic Search). There are many advanced techniques for chunking and for deciding which chunks should be retrieved and used.",
          he: "היכולת לשלב מסמכים וסוגי קבצים שונים בהקשר של המודל. RAG היא הטכניקה שהסוכן משתמש בה לאחזור רכיבים אלה בהתאם לצרכים שנקבעו על ידי המודל. כל קובץ מחולק לחתיכות קטנות, ולכל חתיכה יש ייצוג מסוכם - על בסיסו המודל מחליט אם לטעון את החתיכה המלאה (חיפוש סמנטי). קיימות טכניקות מתקדמות רבות לחלוקה ולהחלטה אילו חתיכות לאחזר."
        },
        category: { en: "AI Concepts", he: "מושגי AI" },
        date: "Apr 21, 2026",
        source: "Q-nomy AI"
      },
      {
        title: { en: "Context", he: "Context" },
        description: {
          en: "Everything that is loaded into the model and used when generating a response. This includes all of the above components - model instructions, agent configuration, tools, skills, RAG results - as well as additional elements depending on the need or those introduced dynamically at runtime. Context Engineering is the \"art\" of keeping the context as small as possible (minimum token usage) while still getting the best results.",
          he: "כל מה שנטען למודל ומשמש ביצירת תגובה. זה כולל את כל הרכיבים הנ\"ל - הוראות מודל, תצורת סוכן, כלים, מיומנויות, תוצאות RAG - וכן אלמנטים נוספים בהתאם לצורך. Context Engineering היא \"האמנות\" של שמירת ההקשר כמינימלי ככל האפשר (שימוש מינימלי בטוקנים) תוך קבלת התוצאות הטובות ביותר."
        },
        category: { en: "AI Concepts", he: "מושגי AI" },
        date: "Apr 21, 2026",
        source: "Q-nomy AI"
      },
      {
        title: { en: "Opus 4.7", he: "Opus 4.7" },
        description: {
          en: "The successor to Opus 4.6, which was considered one of the strongest models for complex coding tasks. Opus 4.7 introduces cybersecurity capabilities, though opinions about it are mixed. It is significantly more expensive per token, and so far the performance improvements do not appear to justify the cost.",
          he: "יורשו של Opus 4.6, שנחשב לאחד המודלים החזקים ביותר למשימות קוידינג מורכבות. Opus 4.7 מציג יכולות אבטחת סייבר, אם כי הדעות לגביו מעורבות. הוא יקר משמעותית יותר לטוקן, ועד כה שיפורי הביצועים אינם נראים מצדיקים את העלות."
        },
        category: { en: "AI Models", he: "מודלי AI" },
        date: "Apr 21, 2026",
        source: "Anthropic"
      },
      {
        title: { en: "GPT-5.5", he: "GPT-5.5" },
        description: {
          en: "Released just a few days ago by OpenAI. Surprisingly, it has received very positive reviews - especially notable given that Anthropic models have led in performance until now. It specializes in long tasks and executing them efficiently at lower cost.",
          he: "שוחרר לפני מספר ימים על ידי OpenAI. באופן מפתיע, קיבל ביקורות חיוביות מאוד - מה שבולט במיוחד כיוון שמודלי Anthropic הובילו בביצועים עד כה. הוא מתמחה במשימות ארוכות וביצוען ביעילות בעלות נמוכה יותר."
        },
        category: { en: "AI Models", he: "מודלי AI" },
        date: "Apr 21, 2026",
        source: "OpenAI"
      },
      {
        title: { en: "Gemma 4", he: "Gemma 4" },
        description: {
          en: "A new open model from Google. Being open means its weights can be modified, allowing customization for specific needs and specialization. It is designed to run locally - lightweight yet powerful, usable offline, and capable of running on mobile devices while still delivering strong performance.",
          he: "מודל \"פתוח\" חדש מ-Google. היותו פתוח משמעה שניתן לשנות את משקולות שלו, מה שמאפשר התאמה אישית לצרכים ספציפיים. הוא מתוכנן לפעול מקומית - קל אך עוצמתי, ניתן לשימוש ללא חיבור לאינטרנט, ומסוגל לפעול על מכשירים ניידים תוך שמירה על ביצועים חזקים."
        },
        category: { en: "AI Models", he: "מודלי AI" },
        date: "Apr 21, 2026",
        source: "Google"
      },
      {
        title: { en: "Mythos", he: "Mythos" },
        description: {
          en: "A mysterious and powerful model from Anthropic - so mysterious that it is not publicly available, reportedly because it is \"too powerful.\" It focuses on identifying security vulnerabilities in legacy code. Anthropic has made it available only to a limited group of 40+ companies for internal use in detecting and addressing security issues. The jury is still out on whether this is a publicity stunt or a real leap in model capability.",
          he: "מודל מסתורי ועוצמתי מ-Anthropic - כה מסתורי שאינו זמין לציבור, לכאורה כי הוא \"חזק מדי\". הוא מתמקד בזיהוי פרצות אבטחה בקוד ישן. Anthropic הפך אותו לזמין רק לקבוצה מצומצמת של 40+ חברות לשימוש פנימי. עדיין לא ברור אם זו תרגיל יחסי ציבור או קפיצה אמיתית ביכולות המודל."
        },
        category: { en: "AI Models", he: "מודלי AI" },
        date: "Apr 21, 2026",
        source: "Anthropic"
      },
      {
        title: { en: "Don't Write to Agents - Speak with Them", he: "אל תכתבו לסוכנים - דברו איתם" },
        description: {
          en: "Many users still \"chat\" with agents or chatbots, but this approach is becoming slower and somewhat outdated. Today, there are tools that convert your speech to text in fractions of a second and insert it wherever your cursor is - enabling a much faster and more natural way to interact with agents. One example is Wispr Flow, which supports Hebrew and has proven effective in practice.",
          he: "משתמשים רבים עדיין \"מצ'טים\" עם סוכנים, אך גישה זו הופכת לאיטית ומיושנת. כיום קיימים כלים שממירים את דיבורכם לטקסט בשניות ומכניסים אותו היישר לסביבת העבודה - מה שמאפשר אינטראקציה מהירה וטבעית הרבה יותר. דוגמה אחת היא Wispr Flow, התומך בעברית ונמצא יעיל בפועל."
        },
        category: { en: "Pro Tips", he: "טיפים" },
        date: "Apr 21, 2026",
        source: "Q-nomy AI"
      },
      {
        title: { en: "GitHub Copilot Workshops", he: "סדנאות GitHub Copilot" },
        description: {
          en: "Last week, we kicked off a four-part workshop with an external instructor focused on using agents within GitHub Copilot. Many new concepts will be covered - some familiar, some less so. While the workshop centers on GitHub Copilot, it is relevant to everyone, as modern platforms are increasingly converging around the same standards. From my perspective, Claude Code currently leads with Cursor close behind, while GitHub Copilot is still catching up - but the workshop provides significant value for everyone.",
          he: "בשבוע שעבר השקנו סדנה של ארבעה חלקים עם מדריך חיצוני המתמקד בשימוש בסוכנים ב-GitHub Copilot. יחשפו לנו מושגים חדשים רבים - חלקם מוכרים, חלקם פחות. חשוב לציין שלמרות שהסדנה ממוקדת ב-GitHub Copilot, היא רלוונטית לכולם, שכן פלטפורמות מודרניות מתכנסות סביב אותם סטנדרטים. מנקודת מבטי, Claude Code מוביל עם Cursor קרוב אחריו, ובעוד GitHub Copilot עדיין מדביק פיגור - הסדנה מספקת ערך משמעותי לכולם."
        },
        category: { en: "Workshops", he: "סדנאות" },
        date: "Apr 21, 2026",
        source: "Q-nomy AI"
      }
    ]
  }
];

const NEWS_ITEMS = [
  {
    title: { en: "Codex on Mobile", he: "Codex במובייל" },
    description: {
      en: "OpenAI is closing the gap with tools like Claude Code and Claude Cowork faster than expected. Codex is now coming to mobile as part of the ChatGPT app on both iOS and Android, allowing users to perform coding and broader computer-related tasks directly from their phones.",
      he: "OpenAI סוגרת את הפער מול כלים כמו Claude Code ו-Claude Cowork מהר יותר מהצפוי. Codex מגיע כעת למובייל כחלק מאפליקציית ChatGPT ב-iOS וב-Android, ומאפשר למשתמשים לבצע משימות קודינג ומשימות מחשב רחבות יותר ישירות מהטלפון."
    },
    category: { en: "AI Tools", he: "כלי AI" },
    date: "May 17, 2026",
    source: "OpenAI"
  },
  {
    title: { en: "Android AI", he: "Android AI" },
    description: {
      en: "Gemini Intelligence is coming to Android this summer, bringing a wide range of AI-powered features. These include \"Rambler,\" an advanced voice-to-text capability, AI-generated custom widgets, Gemini integration within Chrome on mobile, and cross-app actions that can intelligently work across your connected accounts and applications.",
      he: "Gemini Intelligence מגיעה לאנדרואיד הקיץ הזה, ומביאה מגוון רחב של פיצ'רים מבוססי AI. אלה כוללים את \"Rambler\" יכולת מתקדמת להמרת קול לטקסט, ווידג'טים מותאמים אישית שנוצרים על ידי AI, שילוב Gemini בתוך Chrome במובייל, ופעולות חוצות-אפליקציות שיכולות לעבוד בצורה חכמה על פני החשבונות והאפליקציות המחוברות שלך."
    },
    category: { en: "AI Tools", he: "כלי AI" },
    date: "May 17, 2026",
    source: "Google"
  },
  {
    title: { en: "OpenAI Agents Workspace", he: "OpenAI Agents Workspace" },
    description: {
      en: "Want to create and share AI Agents without writing code, while still benefiting from Skills, MCPs, and advanced integrations? Several platforms already support this approach, and now OpenAI is joining the list with its own Agents Workspace capabilities.",
      he: "רוצים ליצור ולשתף סוכני AI מבלי לכתוב קוד, תוך שמירה על היתרונות של Skills, MCPs ואינטגרציות מתקדמות? מספר פלטפורמות כבר תומכות בגישה זו, ועכשיו OpenAI מצטרפת לרשימה עם יכולות Agents Workspace משלה."
    },
    category: { en: "AI Tools", he: "כלי AI" },
    date: "May 17, 2026",
    source: "OpenAI"
  },
  {
    title: { en: "Anthropic & SpaceX Team Up", he: "Anthropic ו-SpaceX מתאחדות" },
    description: {
      en: "A few weeks ago, we mentioned that Anthropic appeared compute-constrained, which partly explained its cautious model usage policies. That has now changed: Anthropic and SpaceX have announced a partnership that significantly expands Anthropic's available compute capacity.",
      he: "לפני מספר שבועות ציינו שנראה שאנתרופיק הייתה מוגבלת בכוח המחשוב, מה שהסביר בחלקו את מדיניות השימוש המאופקת שלה במודלים. זה השתנה כעת: Anthropic ו-SpaceX הכריזו על שותפות המרחיבה משמעותית את קיבולת המחשוב הזמינה של Anthropic."
    },
    category: { en: "AI Tools", he: "כלי AI" },
    date: "May 17, 2026",
    source: "Anthropic"
  }
];