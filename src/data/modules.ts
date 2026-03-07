import { CourseModule } from "@/types";

const module1: CourseModule = {
  id: 1,
  slug: "unter-strom",
  title: "Unter Strom",
  subtitle: "machen \u2013 die Kraft des Machens",
  focusVerb: "machen",
  learningGoals: [
    "Redewendungen mit \u2018machen\u2019 sicher verwenden",
    "Eine Geschichte im Pr\u00e4teritum verstehen",
    "Neue Ausdr\u00fccke im Kontext erkennen",
    "Kurze Texte mit Pflicht-Vokabular schreiben",
  ],
  estimatedMinutes: 45,
  story: {
    text: [
      "Lena stand am Fenster und starrte auf die Stra\u00dfe. Die Ampel sprang auf Gr\u00fcn, aber sie machte sich nicht auf den Weg. Irgendetwas machte ihr zu schaffen.",
      "",
      "Seit Wochen machte sie sich Sorgen um ihre Arbeit. Ihr Chef hatte ihr klargemacht, dass Ver\u00e4nderungen kommen w\u00fcrden. \u00abWir m\u00fcssen das Beste daraus machen\u00bb, hatte er gesagt, aber seine Stimme machte wenig Mut.",
      "",
      "Am Morgen hatte sie sich fertiggemacht und war zum B\u00fcro gelaufen. Auf dem Weg machte sie Halt bei ihrem Lieblingscaf\u00e9. Der Kaffee machte sie wach, aber die Gedanken blieben schwer.",
      "",
      "Im B\u00fcro machte sich Unruhe breit. Kollegen machten Witze, um die Stimmung aufzulockern, aber alle wussten: Heute w\u00fcrde man N\u00e4gel mit K\u00f6pfen machen.",
      "",
      "Um 14 Uhr machte der Chef endlich den Mund auf. \u00abWir machen einen Neuanfang\u00bb, sagte er. \u00abKeine Entlassungen, aber neue Projekte. Wer mitmacht, kann etwas bewegen.\u00bb",
      "",
      "Lena machte gro\u00dfe Augen. Das hatte sie nicht erwartet. Pl\u00f6tzlich machte alles Sinn. Sie meldete sich als Erste \u2013 und machte damit den Anfang.",
    ].join("\n"),
    paragraphs: [
      "Lena stand am Fenster und starrte auf die Stra\u00dfe. Die Ampel sprang auf Gr\u00fcn, aber sie machte sich nicht auf den Weg. Irgendetwas machte ihr zu schaffen.",
      "Seit Wochen machte sie sich Sorgen um ihre Arbeit. Ihr Chef hatte ihr klargemacht, dass Ver\u00e4nderungen kommen w\u00fcrden. \u00abWir m\u00fcssen das Beste daraus machen\u00bb, hatte er gesagt, aber seine Stimme machte wenig Mut.",
      "Am Morgen hatte sie sich fertiggemacht und war zum B\u00fcro gelaufen. Auf dem Weg machte sie Halt bei ihrem Lieblingscaf\u00e9. Der Kaffee machte sie wach, aber die Gedanken blieben schwer.",
      "Im B\u00fcro machte sich Unruhe breit. Kollegen machten Witze, um die Stimmung aufzulockern, aber alle wussten: Heute w\u00fcrde man N\u00e4gel mit K\u00f6pfen machen.",
      "Um 14 Uhr machte der Chef endlich den Mund auf. \u00abWir machen einen Neuanfang\u00bb, sagte er. \u00abKeine Entlassungen, aber neue Projekte. Wer mitmacht, kann etwas bewegen.\u00bb",
      "Lena machte gro\u00dfe Augen. Das hatte sie nicht erwartet. Pl\u00f6tzlich machte alles Sinn. Sie meldete sich als Erste \u2013 und machte damit den Anfang.",
    ],
    sentences: [
      { start: 0, end: 3.5, text: "Lena stand am Fenster und starrte auf die Stra\u00dfe." },
      { start: 3.5, end: 7.2, text: "Die Ampel sprang auf Gr\u00fcn, aber sie machte sich nicht auf den Weg." },
      { start: 7.2, end: 10.0, text: "Irgendetwas machte ihr zu schaffen." },
      { start: 10.0, end: 14.5, text: "Seit Wochen machte sie sich Sorgen um ihre Arbeit." },
      { start: 14.5, end: 19.0, text: "Ihr Chef hatte ihr klargemacht, dass Ver\u00e4nderungen kommen w\u00fcrden." },
      { start: 19.0, end: 24.0, text: "\u00abWir m\u00fcssen das Beste daraus machen\u00bb, hatte er gesagt, aber seine Stimme machte wenig Mut." },
      { start: 24.0, end: 28.5, text: "Am Morgen hatte sie sich fertiggemacht und war zum B\u00fcro gelaufen." },
      { start: 28.5, end: 32.0, text: "Auf dem Weg machte sie Halt bei ihrem Lieblingscaf\u00e9." },
      { start: 32.0, end: 36.0, text: "Der Kaffee machte sie wach, aber die Gedanken blieben schwer." },
      { start: 36.0, end: 39.5, text: "Im B\u00fcro machte sich Unruhe breit." },
      { start: 39.5, end: 44.0, text: "Kollegen machten Witze, um die Stimmung aufzulockern, aber alle wussten:" },
      { start: 44.0, end: 47.0, text: "Heute w\u00fcrde man N\u00e4gel mit K\u00f6pfen machen." },
      { start: 47.0, end: 51.0, text: "Um 14 Uhr machte der Chef endlich den Mund auf." },
      { start: 51.0, end: 55.5, text: "\u00abWir machen einen Neuanfang\u00bb, sagte er." },
      { start: 55.5, end: 60.0, text: "\u00abKeine Entlassungen, aber neue Projekte. Wer mitmacht, kann etwas bewegen.\u00bb" },
      { start: 60.0, end: 63.0, text: "Lena machte gro\u00dfe Augen." },
      { start: 63.0, end: 65.5, text: "Das hatte sie nicht erwartet." },
      { start: 65.5, end: 68.0, text: "Pl\u00f6tzlich machte alles Sinn." },
      { start: 68.0, end: 72.0, text: "Sie meldete sich als Erste \u2013 und machte damit den Anfang." },
    ],
  },
  coreVerbs: [
    { german: "sich auf den Weg machen", english: "to set off / head out", example: "Sie machte sich auf den Weg zur Arbeit." },
    { german: "jemandem zu schaffen machen", english: "to give someone trouble", example: "Die Hitze macht mir zu schaffen." },
    { german: "sich Sorgen machen", english: "to worry", example: "Mach dir keine Sorgen!" },
    { german: "klarmachen", english: "to make clear", example: "Er hat mir klargemacht, was er will." },
    { german: "das Beste daraus machen", english: "to make the best of it", example: "Wir m\u00fcssen das Beste daraus machen." },
    { german: "sich fertigmachen", english: "to get ready", example: "Ich mache mich schnell fertig." },
    { german: "Halt machen", english: "to make a stop", example: "Wir machten Halt an einer Tankstelle." },
    { german: "Witze machen", english: "to make jokes", example: "Er macht immer Witze \u00fcber alles." },
    { german: "N\u00e4gel mit K\u00f6pfen machen", english: "to do something properly / take decisive action", example: "Jetzt machen wir N\u00e4gel mit K\u00f6pfen!" },
    { german: "den Mund aufmachen", english: "to speak up", example: "Mach endlich den Mund auf!" },
    { german: "gro\u00dfe Augen machen", english: "to be wide-eyed / surprised", example: "Sie machte gro\u00dfe Augen, als sie es h\u00f6rte." },
    { german: "Sinn machen", english: "to make sense", example: "Das macht keinen Sinn." },
    { german: "den Anfang machen", english: "to make a start / go first", example: "Wer macht den Anfang?" },
  ],
  idioms: [
    { german: "unter Strom stehen", english: "to be under pressure / wired", example: "Ich stehe total unter Strom." },
    { german: "mit K\u00f6pfchen machen", english: "to do something cleverly", example: "Das muss man mit K\u00f6pfchen machen." },
    { german: "etwas aus dem \u00c4rmel machen", english: "to pull something out of thin air", example: "Er macht das einfach aus dem \u00c4rmel." },
  ],
  exercises: [
    {
      id: "m1-mc-1",
      type: "multiple-choice",
      skill: "lesen",
      instruction: "Beantworte die Fragen zur Geschichte.",
      questions: [
        {
          question: "Warum machte Lena sich nicht auf den Weg?",
          options: [
            "Die Ampel war rot.",
            "Irgendetwas machte ihr zu schaffen.",
            "Sie hatte keinen Kaffee.",
            "Sie wollte zu Hause bleiben.",
          ],
          correctIndex: 1,
        },
        {
          question: "Was sagte der Chef um 14 Uhr?",
          options: [
            "Es gibt Entlassungen.",
            "Alle sollen nach Hause gehen.",
            "Wir machen einen Neuanfang.",
            "Das B\u00fcro wird geschlossen.",
          ],
          correctIndex: 2,
        },
        {
          question: "Was bedeutet \u00abN\u00e4gel mit K\u00f6pfen machen\u00bb?",
          options: [
            "Handwerklich arbeiten",
            "Etwas richtig und entschlossen anpacken",
            "Sich beschweren",
            "Vorsichtig sein",
          ],
          correctIndex: 1,
        },
      ],
    },
    {
      id: "m1-tf-1",
      type: "true-false",
      skill: "lesen",
      instruction: "Richtig oder falsch? Entscheide basierend auf der Geschichte.",
      statements: [
        { statement: "Lena machte sich sofort auf den Weg.", correct: false },
        { statement: "Der Kaffee machte Lena wach.", correct: true },
        { statement: "Der Chef k\u00fcndigte Entlassungen an.", correct: false },
        { statement: "Lena meldete sich als Erste f\u00fcr die neuen Projekte.", correct: true },
      ],
    },
    {
      id: "m1-gf-1",
      type: "gap-fill",
      skill: "hoeren",
      instruction: "Erg\u00e4nze die S\u00e4tze mit dem richtigen Ausdruck mit \u00abmachen\u00bb.",
      sentences: [
        { text: "Die Situation ___ ihr zu schaffen.", answer: "machte" },
        { text: "Er hat mir ___, was er erwartet.", answer: "klargemacht" },
        { text: "Im B\u00fcro ___ sich Unruhe breit.", answer: "machte" },
        { text: "Wir m\u00fcssen das ___ daraus machen.", answer: "Beste" },
        { text: "Sie ___ gro\u00dfe Augen.", answer: "machte" },
      ],
    },
    {
      id: "m1-match-1",
      type: "matching",
      skill: "hoeren",
      instruction: "Verbinde die Redewendungen mit den richtigen Bedeutungen.",
      pairs: [
        { left: "sich auf den Weg machen", right: "losgehen" },
        { left: "Halt machen", right: "anhalten / stoppen" },
        { left: "den Mund aufmachen", right: "etwas sagen" },
        { left: "gro\u00dfe Augen machen", right: "\u00fcberrascht sein" },
        { left: "Sinn machen", right: "logisch sein" },
      ],
    },
    {
      id: "m1-speak-1",
      type: "speaking",
      skill: "sprechen",
      prompt: "Erz\u00e4hle in 3\u20134 S\u00e4tzen: Was passiert in der Geschichte? Benutze mindestens 3 Ausdr\u00fccke mit \u00abmachen\u00bb.",
      mustUseWords: ["sich Sorgen machen", "klarmachen", "den Anfang machen"],
      instruction: "Sprich laut und nimm dich auf. Benutze die Pflicht-Ausdr\u00fccke.",
      modelAnswer: "Lena machte sich Sorgen um ihre Arbeit. Der Chef hatte ihr klargemacht, dass es Ver\u00e4nderungen geben w\u00fcrde. Am Ende gab es gute Nachrichten und Lena machte den Anfang bei den neuen Projekten.",
    },
    {
      id: "m1-write-1",
      type: "open-writing",
      skill: "schreiben",
      prompt: "Schreibe einen kurzen Absatz (5\u20136 S\u00e4tze) \u00fcber einen stressigen Tag bei der Arbeit. Benutze mindestens 4 Ausdr\u00fccke mit \u00abmachen\u00bb.",
      mustUseWords: ["sich fertigmachen", "sich auf den Weg machen", "zu schaffen machen", "das Beste daraus machen"],
      instruction: "Schreibe deinen Text unten. Benutze die Pflicht-Ausdr\u00fccke.",
      modelAnswer: "Heute war ein stressiger Tag. Ich habe mich fr\u00fch fertiggemacht und mich um 7 Uhr auf den Weg gemacht. Die viele Arbeit hat mir zu schaffen gemacht. Mein Kollege hat Witze gemacht, um die Stimmung zu verbessern. Am Ende haben wir das Beste daraus gemacht und alle Aufgaben geschafft.",
    },
  ],
  reviewItems: [],
};

const module2: CourseModule = {
  id: 2,
  slug: "in-der-schwebe",
  title: "In der Schwebe",
  subtitle: "gehen \u2013 wohin das Leben geht",
  focusVerb: "gehen",
  learningGoals: [
    "Redewendungen mit \u00abgehen\u00bb verstehen und anwenden",
    "Kontextuelle Bedeutungen von \u00abgehen\u00bb unterscheiden",
    "\u00dcber pers\u00f6nliche Ver\u00e4nderungen sprechen",
    "Texte mit Pflicht-Vokabular schreiben",
  ],
  estimatedMinutes: 45,
  story: {
    text: [
      "Moritz ging seit Tagen mit einem seltsamen Gef\u00fchl durch die Stadt. Irgendetwas ging ihm nicht aus dem Kopf. Es ging um seine Zukunft \u2013 und um eine Entscheidung, die er seit Monaten vor sich herschob.",
      "",
      "Alles hatte angefangen, als sein bester Freund ins Ausland gegangen war. \u00abEs geht mir gut\u00bb, schrieb Jonas aus Lissabon. Aber Moritz ging es anders. Ihm ging die Routine auf die Nerven.",
      "",
      "An einem Mittwoch ging er los, ohne Plan. Er ging durch den Park, am Fluss entlang. Ein \u00e4lterer Mann ging auf ihn zu und fragte: \u00abGeht es Ihnen gut? Sie sehen aus, als ginge die Welt unter.\u00bb",
      "",
      "Moritz musste lachen. \u00abEs geht schon\u00bb, sagte er. Aber eigentlich ging es um mehr.",
      "",
      "Am Abend ging er eine alte Liste durch \u2013 Dinge, die er immer machen wollte. Ganz oben stand: \u00abEs wagen.\u00bb Er wusste nicht genau, was das bedeutete. Aber er wusste: So geht es nicht weiter.",
    ].join("\n"),
    paragraphs: [
      "Moritz ging seit Tagen mit einem seltsamen Gef\u00fchl durch die Stadt. Irgendetwas ging ihm nicht aus dem Kopf. Es ging um seine Zukunft \u2013 und um eine Entscheidung, die er seit Monaten vor sich herschob.",
      "Alles hatte angefangen, als sein bester Freund ins Ausland gegangen war. \u00abEs geht mir gut\u00bb, schrieb Jonas aus Lissabon. Aber Moritz ging es anders. Ihm ging die Routine auf die Nerven.",
      "An einem Mittwoch ging er los, ohne Plan. Er ging durch den Park, am Fluss entlang. Ein \u00e4lterer Mann ging auf ihn zu und fragte: \u00abGeht es Ihnen gut? Sie sehen aus, als ginge die Welt unter.\u00bb",
      "Moritz musste lachen. \u00abEs geht schon\u00bb, sagte er. Aber eigentlich ging es um mehr.",
      "Am Abend ging er eine alte Liste durch \u2013 Dinge, die er immer machen wollte. Ganz oben stand: \u00abEs wagen.\u00bb Er wusste nicht genau, was das bedeutete. Aber er wusste: So geht es nicht weiter.",
    ],
    sentences: [
      { start: 0, end: 4.0, text: "Moritz ging seit Tagen mit einem seltsamen Gef\u00fchl durch die Stadt." },
      { start: 4.0, end: 7.5, text: "Irgendetwas ging ihm nicht aus dem Kopf." },
      { start: 7.5, end: 12.0, text: "Es ging um seine Zukunft \u2013 und um eine Entscheidung, die er seit Monaten vor sich herschob." },
      { start: 12.0, end: 16.5, text: "Alles hatte angefangen, als sein bester Freund ins Ausland gegangen war." },
      { start: 16.5, end: 20.0, text: "\u00abEs geht mir gut\u00bb, schrieb Jonas aus Lissabon." },
      { start: 20.0, end: 23.0, text: "Aber Moritz ging es anders." },
      { start: 23.0, end: 26.5, text: "Ihm ging die Routine auf die Nerven." },
      { start: 26.5, end: 30.0, text: "An einem Mittwoch ging er los, ohne Plan." },
      { start: 30.0, end: 33.5, text: "Er ging durch den Park, am Fluss entlang." },
      { start: 33.5, end: 39.0, text: "Ein \u00e4lterer Mann ging auf ihn zu und fragte: \u00abGeht es Ihnen gut?\u00bb" },
      { start: 39.0, end: 43.0, text: "\u00abSie sehen aus, als ginge die Welt unter.\u00bb" },
      { start: 43.0, end: 45.5, text: "Moritz musste lachen." },
      { start: 45.5, end: 48.0, text: "\u00abEs geht schon\u00bb, sagte er." },
      { start: 48.0, end: 51.0, text: "Aber eigentlich ging es um mehr." },
      { start: 51.0, end: 56.0, text: "Am Abend ging er eine alte Liste durch \u2013 Dinge, die er immer machen wollte." },
      { start: 56.0, end: 59.0, text: "Ganz oben stand: \u00abEs wagen.\u00bb" },
      { start: 59.0, end: 62.0, text: "Er wusste nicht genau, was das bedeutete." },
      { start: 62.0, end: 66.0, text: "Aber er wusste: So geht es nicht weiter." },
    ],
  },
  coreVerbs: [
    { german: "jemandem aus dem Kopf gehen", english: "to leave someone's mind", example: "Das Lied geht mir nicht aus dem Kopf." },
    { german: "es geht um", english: "it's about", example: "Es geht um deine Zukunft." },
    { german: "auf die Nerven gehen", english: "to get on someone's nerves", example: "Der L\u00e4rm geht mir auf die Nerven." },
    { german: "losgehen", english: "to set off / to start", example: "Wir gehen um 8 Uhr los." },
    { german: "auf jemanden zugehen", english: "to approach someone", example: "Sie ging auf mich zu und l\u00e4chelte." },
    { german: "es geht (jemandem) gut/schlecht", english: "someone is doing well/poorly", example: "Mir geht es heute gut." },
    { german: "die Welt geht unter", english: "the world is ending (expr.)", example: "So schlimm ist es nicht \u2013 die Welt geht nicht unter!" },
    { german: "etwas durchgehen", english: "to go through something", example: "Gehen wir die Liste nochmal durch." },
    { german: "so geht es nicht weiter", english: "this can't go on like this", example: "So geht es nicht weiter, wir brauchen einen Plan." },
  ],
  idioms: [
    { german: "in der Schwebe sein", english: "to be up in the air / undecided", example: "Meine Pl\u00e4ne sind noch in der Schwebe." },
    { german: "seinen Weg gehen", english: "to go one's own way", example: "Er ist seinen eigenen Weg gegangen." },
  ],
  exercises: [
    {
      id: "m2-mc-1",
      type: "multiple-choice",
      skill: "lesen",
      instruction: "Beantworte die Fragen zur Geschichte.",
      questions: [
        {
          question: "Was ging Moritz nicht aus dem Kopf?",
          options: [
            "Ein Lied",
            "Seine Zukunft und eine Entscheidung",
            "Ein Streit mit Jonas",
            "Seine Arbeit",
          ],
          correctIndex: 1,
        },
        {
          question: "Was stand ganz oben auf seiner alten Liste?",
          options: ["Reisen", "Es wagen", "Sport machen", "Jonas besuchen"],
          correctIndex: 1,
        },
      ],
    },
    {
      id: "m2-gf-1",
      type: "gap-fill",
      skill: "hoeren",
      instruction: "Erg\u00e4nze die S\u00e4tze mit dem richtigen Ausdruck mit \u00abgehen\u00bb.",
      sentences: [
        { text: "Es ___ um seine Zukunft.", answer: "ging" },
        { text: "Ihm ___ die Routine auf die Nerven.", answer: "ging" },
        { text: "So ___ es nicht weiter.", answer: "geht" },
        { text: "Der Mann ___ auf ihn zu.", answer: "ging" },
      ],
    },
    {
      id: "m2-write-1",
      type: "open-writing",
      skill: "schreiben",
      prompt: "Schreibe einen kurzen Text (4\u20135 S\u00e4tze) \u00fcber eine schwierige Entscheidung. Benutze mindestens 3 Ausdr\u00fccke mit \u00abgehen\u00bb.",
      mustUseWords: ["es geht um", "auf die Nerven gehen", "losgehen"],
      instruction: "Schreibe deinen Text unten. Benutze die Pflicht-Ausdr\u00fccke.",
      modelAnswer: "Es geht um eine gro\u00dfe Entscheidung. Seit Wochen geht mir die Unsicherheit auf die Nerven. Gestern bin ich einfach losgegangen und habe nachgedacht. Am Ende wusste ich: So geht es nicht weiter.",
    },
  ],
  reviewItems: [],
};

// Placeholder modules 3-12
function createPlaceholderModule(
  id: number,
  slug: string,
  title: string,
  subtitle: string,
  focusVerb: string
): CourseModule {
  return {
    id,
    slug,
    title,
    subtitle,
    focusVerb,
    learningGoals: ["Wird bald freigeschaltet"],
    estimatedMinutes: 45,
    story: { text: "", paragraphs: [], sentences: [] },
    coreVerbs: [],
    idioms: [],
    exercises: [],
    reviewItems: [],
  };
}

const allModules: CourseModule[] = [
  module1,
  module2,
  createPlaceholderModule(3, "auf-eigene-faust", "Auf eigene Faust", "nehmen \u2013 nehmen und genommen werden", "nehmen"),
  createPlaceholderModule(4, "zwischen-den-zeilen", "Zwischen den Zeilen", "geben \u2013 was man gibt und was man bekommt", "geben"),
  createPlaceholderModule(5, "auf-messers-schneide", "Auf Messers Schneide", "stehen \u2013 Stillstand und Standhaftigkeit", "stehen"),
  createPlaceholderModule(6, "im-trueben-fischen", "Im Tr\u00fcben fischen", "kommen \u2013 Ank\u00fcnfte und Ver\u00e4nderungen", "kommen"),
  createPlaceholderModule(7, "den-faden-verlieren", "Den Faden verlieren", "lassen \u2013 loslassen und zulassen", "lassen"),
  createPlaceholderModule(8, "auf-wolke-sieben", "Auf Wolke sieben", "fallen \u2013 Hinfallen und Auffallen", "fallen"),
  createPlaceholderModule(9, "mit-allen-wassern", "Mit allen Wassern gewaschen", "halten \u2013 festhalten und aushalten", "halten"),
  createPlaceholderModule(10, "ins-schwarze-treffen", "Ins Schwarze treffen", "bringen \u2013 was man bringt und mitbringt", "bringen"),
  createPlaceholderModule(11, "gegen-den-strom", "Gegen den Strom", "ziehen \u2013 anziehen und durchziehen", "ziehen"),
  createPlaceholderModule(12, "am-ende-des-tages", "Am Ende des Tages", "setzen \u2013 einsetzen und umsetzen", "setzen"),
];

export default allModules;

export function getModuleBySlug(slug: string): CourseModule | undefined {
  return allModules.find((m) => m.slug === slug);
}

export function getModuleById(id: number): CourseModule | undefined {
  return allModules.find((m) => m.id === id);
}
