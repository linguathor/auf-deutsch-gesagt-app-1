/**
 * One-shot script to add missing exercises (TF, speak-2, write-2) to modules 2-11.
 * Run: node scripts/patch-exercises.mjs
 * Then regenerate modules.ts: node scripts/generate-modules.mjs
 */
import { readFileSync, writeFileSync } from "fs";

let content = readFileSync("scripts/generate-modules.mjs", "utf8");

// ---------------------------------------------------------------
// TRUE/FALSE exercises for modules 3-11 (modules 1, 2, 12 already have them)
// ---------------------------------------------------------------
const tfExercises = {
  3: `{
        id: "m3-tf-1", type: "true-false", skill: "lesen",
        instruction: "Richtig oder falsch? Entscheide basierend auf der Geschichte.",
        statements: [
          { statement: "Alex organisiert den Spieleabend.", correct: true },
          { statement: "Niemand bringt etwas zum Essen mit.", correct: false },
          { statement: "Ben nimmt sich kein Blatt vor den Mund.", correct: true },
          { statement: "Das Kochen geht schneller als geplant.", correct: false },
          { statement: "Am Ende ist der Abend ein Selbstläufer.", correct: true },
        ],
      }`,
  4: `{
        id: "m4-tf-1", type: "true-false", skill: "lesen",
        instruction: "Richtig oder falsch? Entscheide basierend auf der Geschichte.",
        statements: [
          { statement: "Zwei Europaletten stehen vor der Bürotür.", correct: true },
          { statement: "Alex hat den Hubwagen selbst abgestellt.", correct: false },
          { statement: "Die Firma hat neue Leute eingestellt.", correct: true },
          { statement: "Die Monteure haben sich vorher angekündigt.", correct: false },
          { statement: "Am Ende wird das Problem gelöst.", correct: true },
        ],
      }`,
  5: `{
        id: "m5-tf-1", type: "true-false", skill: "lesen",
        instruction: "Richtig oder falsch? Entscheide basierend auf der Geschichte.",
        statements: [
          { statement: "Alex und Ben treffen sich im Café.", correct: true },
          { statement: "Ben schaut auf sein Smartphone, als Alex ankommt.", correct: true },
          { statement: "Alex versteht sofort, worum es geht.", correct: false },
          { statement: "Eine schwierige Entscheidung steht bevor.", correct: true },
          { statement: "Am Ende stehen beide auf dem Schlauch.", correct: false },
        ],
      }`,
  6: `{
        id: "m6-tf-1", type: "true-false", skill: "lesen",
        instruction: "Richtig oder falsch? Entscheide basierend auf der Geschichte.",
        statements: [
          { statement: "Das Büro riecht nach frischem Kaffee.", correct: true },
          { statement: "Es regnet am Dienstagmorgen.", correct: false },
          { statement: "Alex übergibt Aufgaben an Jule.", correct: true },
          { statement: "Frau Krüger gibt den Ton an.", correct: true },
          { statement: "Am Ende gibt Alex auf.", correct: false },
        ],
      }`,
  7: `{
        id: "m7-tf-1", type: "true-false", skill: "lesen",
        instruction: "Richtig oder falsch? Entscheide basierend auf der Geschichte.",
        statements: [
          { statement: "Alex will am Samstagabend spazieren gehen.", correct: true },
          { statement: "Die Woche im Büro war entspannt.", correct: false },
          { statement: "Jule setzt sich am Ende durch.", correct: true },
          { statement: "Niemand legt Wert auf Erholung.", correct: false },
          { statement: "Die Arbeit setzt Alex ganz schön zu.", correct: true },
        ],
      }`,
  8: `{
        id: "m8-tf-1", type: "true-false", skill: "lesen",
        instruction: "Richtig oder falsch? Entscheide basierend auf der Geschichte.",
        statements: [
          { statement: "Die Geschichte spielt auf einer Messe.", correct: true },
          { statement: "Die Menschen tragen Stofftaschen.", correct: true },
          { statement: "Das Team legt sich nicht richtig ins Zeug.", correct: false },
          { statement: "Der Messetermin wurde kurzfristig festgelegt.", correct: false },
          { statement: "Am Stand werden Broschüren ausgelegt.", correct: true },
        ],
      }`,
  9: `{
        id: "m9-tf-1", type: "true-false", skill: "lesen",
        instruction: "Richtig oder falsch? Entscheide basierend auf der Geschichte.",
        statements: [
          { statement: "Die Geschichte spielt am Freitagnachmittag.", correct: true },
          { statement: "Alex will am Wochenende arbeiten.", correct: false },
          { statement: "Kurz vor Feierabend kommt eine dringende E-Mail.", correct: true },
          { statement: "Die Freizeit kommt bei Alex nicht zu kurz.", correct: false },
          { statement: "Alex will endlich runterkommen.", correct: true },
        ],
      }`,
  10: `{
        id: "m10-tf-1", type: "true-false", skill: "lesen",
        instruction: "Richtig oder falsch? Entscheide basierend auf der Geschichte.",
        statements: [
          { statement: "Alex steht in der Straßenbahn.", correct: true },
          { statement: "Ein Lieferwagen steht im Gleisbereich.", correct: true },
          { statement: "Alex kann sich leicht zurückhalten.", correct: false },
          { statement: "Der Fahrer hält an, weil der Weg blockiert ist.", correct: true },
          { statement: "Alle Fahrgäste bleiben entspannt.", correct: false },
        ],
      }`,
  11: `{
        id: "m11-tf-1", type: "true-false", skill: "lesen",
        instruction: "Richtig oder falsch? Entscheide basierend auf der Geschichte.",
        statements: [
          { statement: "Die Geschichte spielt am Mittwochabend.", correct: true },
          { statement: "Alex würde normalerweise direkt nach Hause fahren.", correct: true },
          { statement: "Die Firma nimmt an einer Fitness-Challenge teil.", correct: true },
          { statement: "Die Zeit im Studio vergeht langsam.", correct: false },
          { statement: "Alex bereut den Besuch im Studio.", correct: false },
        ],
      }`,
};

// ---------------------------------------------------------------
// SPEAKING-2 exercises for modules 2-11
// ---------------------------------------------------------------
const speak2Exercises = {
  2: `{
        id: "m2-speak-2", type: "speaking", skill: "sprechen",
        prompt: "Beschreibe eine Situation, in der du jemandem eine Überraschung bereitet hast. Benutze mindestens 3 Redewendungen mit «bringen».",
        mustUseWords: ["auf den Punkt bringen", "in Ordnung bringen", "zum Lachen bringen"],
        instruction: "Sprich frei und verwende die Redewendungen.",
        modelAnswer: "Letzte Woche wollte ich meiner Freundin eine Überraschung bereiten. Ich habe versucht, sie zum Lachen zu bringen, während ich alles vorbereitete. Am Ende sagte sie: Bring es auf den Punkt, was gibt es? Ich musste noch ein paar Dinge in Ordnung bringen, aber es hat geklappt.",
      }`,
  3: `{
        id: "m3-speak-2", type: "speaking", skill: "sprechen",
        prompt: "Beschreibe einen Abend, an dem etwas mehr Zeit in Anspruch genommen hat als geplant. Benutze mindestens 3 Redewendungen mit «nehmen».",
        mustUseWords: ["in Anspruch nehmen", "auf den Arm nehmen", "Rücksicht nehmen"],
        instruction: "Sprich frei und verwende die Redewendungen.",
        modelAnswer: "Letzte Woche hat das Kochen viel mehr Zeit in Anspruch genommen als gedacht. Mein Freund hat mich deswegen auf den Arm genommen. Aber er hat auch Rücksicht genommen und mir beim Abwasch geholfen.",
      }`,
  4: `{
        id: "m4-speak-2", type: "speaking", skill: "sprechen",
        prompt: "Beschreibe eine Situation, in der du jemanden vor vollendete Tatsachen gestellt hast oder gestellt wurdest. Benutze «stellen»-Redewendungen.",
        mustUseWords: ["vor vollendete Tatsachen stellen", "feststellen", "sicherstellen"],
        instruction: "Sprich frei und verwende die Redewendungen.",
        modelAnswer: "Einmal hat mein Chef mich vor vollendete Tatsachen gestellt: Wir ziehen nächste Woche um. Ich habe festgestellt, dass nichts vorbereitet war. Ich musste sicherstellen, dass alles rechtzeitig fertig wurde.",
      }`,
  5: `{
        id: "m5-speak-2", type: "speaking", skill: "sprechen",
        prompt: "Erzähle von einer Situation, in der du auf dem Schlauch standest. Benutze mindestens 3 «stehen»-Redewendungen.",
        mustUseWords: ["auf dem Schlauch stehen", "im Raum stehen", "bevorstehen"],
        instruction: "Sprich frei und verwende die Redewendungen.",
        modelAnswer: "Letzte Woche stand ich total auf dem Schlauch, als mein Freund mir etwas erklären wollte. Eine wichtige Entscheidung stand im Raum. Mir war klar, dass eine Veränderung bevorstand.",
      }`,
  6: `{
        id: "m6-speak-2", type: "speaking", skill: "sprechen",
        prompt: "Erzähle von einer Situation, in der du eine Aufgabe übergeben oder übernommen hast. Benutze «geben»-Redewendungen.",
        mustUseWords: ["den Ton angeben", "Gas geben", "zugeben"],
        instruction: "Sprich frei und verwende die Redewendungen.",
        modelAnswer: "In meinem alten Job hat die Chefin immer den Ton angegeben. Wenn es stressig wurde, mussten wir alle Gas geben. Ich muss zugeben, dass es manchmal sehr schwierig war.",
      }`,
  7: `{
        id: "m7-speak-2", type: "speaking", skill: "sprechen",
        prompt: "Beschreibe eine Situation, in der du dich in die Nesseln gesetzt hast. Benutze «setzen»-Redewendungen.",
        mustUseWords: ["sich in die Nesseln setzen", "fortsetzen", "voraussetzen"],
        instruction: "Sprich frei und verwende die Redewendungen.",
        modelAnswer: "Einmal habe ich mich ganz schön in die Nesseln gesetzt, als ich im Meeting einen Fehler machte. Das setzte voraus, dass ich mich sofort entschuldigte. Danach konnte ich die Arbeit ohne Probleme fortsetzen.",
      }`,
  8: `{
        id: "m8-speak-2", type: "speaking", skill: "sprechen",
        prompt: "Erzähle von einer Situation, in der du dich richtig ins Zeug legen musstest. Benutze «legen»-Redewendungen.",
        mustUseWords: ["sich ins Zeug legen", "nahelegen", "festlegen"],
        instruction: "Sprich frei und verwende die Redewendungen.",
        modelAnswer: "Letzte Woche war eine wichtige Präsentation und ich musste mich richtig ins Zeug legen. Mein Chef hat mir nahegelegt, alles doppelt zu prüfen. Den Termin hatte er schon Wochen vorher festgelegt.",
      }`,
  9: `{
        id: "m9-speak-2", type: "speaking", skill: "sprechen",
        prompt: "Beschreibe, wie du auf den Geschmack für ein neues Hobby gekommen bist. Benutze «kommen»-Redewendungen.",
        mustUseWords: ["auf den Geschmack kommen", "mitkommen", "rauskommen"],
        instruction: "Sprich frei und verwende die Redewendungen.",
        modelAnswer: "Letztes Jahr bin ich auf den Geschmack gekommen, regelmäßig zu joggen. Ein Freund hat gefragt, ob ich mitkommen will. Am Ende ist dabei rausgekommen, dass ich jetzt dreimal pro Woche laufe.",
      }`,
  10: `{
        id: "m10-speak-2", type: "speaking", skill: "sprechen",
        prompt: "Erzähle von einer Situation im öffentlichen Verkehr, die deine Geduld auf die Probe stellte. Benutze «halten»-Redewendungen.",
        mustUseWords: ["aushalten", "einhalten", "den Rücken freihalten"],
        instruction: "Sprich frei und verwende die Redewendungen.",
        modelAnswer: "Letzte Woche war der Bus so voll, dass es kaum auszuhalten war. Trotzdem musste ich meinen Termin einhalten. Mein Kollege hat mir den Rücken freigehalten und die Kunden informiert.",
      }`,
  11: `{
        id: "m11-speak-2", type: "speaking", skill: "sprechen",
        prompt: "Beschreibe, warum du eine neue sportliche Aktivität ausprobiert hast. Benutze «gehen»-Redewendungen.",
        mustUseWords: ["einen Schritt weitergehen", "in sich gehen", "eingehen"],
        instruction: "Sprich frei und verwende die Redewendungen.",
        modelAnswer: "Letzten Monat bin ich in mich gegangen und habe gemerkt, dass ich mehr Sport brauche. Ich bin auf das Angebot meines Kollegen eingegangen und bin mitgekommen. Jetzt will ich einen Schritt weitergehen und mich für einen Lauf anmelden.",
      }`,
};

// ---------------------------------------------------------------
// WRITING-2 exercises for modules 2-11
// ---------------------------------------------------------------
const write2Exercises = {
  2: `{
        id: "m2-write-2", type: "open-writing", skill: "schreiben",
        prompt: "Schreibe 4–5 Sätze aus Jules Perspektive über ihren Geburtstag im Büro. Benutze mindestens 3 Ausdrücke mit «bringen».",
        mustUseWords: ["beibringen", "durcheinanderbringen", "rüberbringen"],
        instruction: "Schreibe deinen Text unten.",
        modelAnswer: "Die Kollegen wollten mir etwas Liebes beibringen, das war wirklich süß. Erst hat mich die ganze Aufregung etwas durcheinandergebracht. Aber die Botschaft haben sie gut rübergebracht: Wir schätzen dich. Das war das schönste Geburtstagsgeschenk.",
      }`,
  3: `{
        id: "m3-write-2", type: "open-writing", skill: "schreiben",
        prompt: "Schreibe 4–5 Sätze über die Planung eines Abends mit Freunden. Benutze mindestens 3 Ausdrücke mit «nehmen».",
        mustUseWords: ["vornehmen", "in Kauf nehmen", "übernehmen"],
        instruction: "Schreibe deinen Text unten.",
        modelAnswer: "Ich hatte mir vorgenommen, einen Kochabend zu veranstalten. Dass es teurer wird als geplant, habe ich in Kauf genommen. Jule hat freiwillig das Dessert übernommen, und am Ende waren alle begeistert.",
      }`,
  4: `{
        id: "m4-write-2", type: "open-writing", skill: "schreiben",
        prompt: "Schreibe 4–5 Sätze aus der Perspektive eines Monteurs. Benutze mindestens 3 Ausdrücke mit «stellen».",
        mustUseWords: ["aufstellen", "einstellen", "die Weichen stellen"],
        instruction: "Schreibe deinen Text unten.",
        modelAnswer: "Heute mussten wir im Büro neue Regale aufstellen. Die Firma hat mich erst letzte Woche eingestellt. Mit dieser Lieferung stellen wir die Weichen für die neue Büroausstattung.",
      }`,
  5: `{
        id: "m5-write-2", type: "open-writing", skill: "schreiben",
        prompt: "Schreibe 4–5 Sätze über ein Gespräch unter Freunden. Benutze mindestens 3 Ausdrücke mit «stehen».",
        mustUseWords: ["drüberstehen", "Rede und Antwort stehen", "zugestehen"],
        instruction: "Schreibe deinen Text unten.",
        modelAnswer: "Ben und ich saßen im Café und er musste mir Rede und Antwort stehen. Ich musste ihm zugestehen, dass er recht hatte. Am Ende sagte Ben, man muss einfach drüberstehen und nach vorne schauen.",
      }`,
  6: `{
        id: "m6-write-2", type: "open-writing", skill: "schreiben",
        prompt: "Schreibe 4–5 Sätze über einen geschäftigen Tag. Benutze mindestens 3 Redewendungen mit «geben».",
        mustUseWords: ["sich die Klinke in die Hand geben", "aufgeben", "nachgeben"],
        instruction: "Schreibe deinen Text unten.",
        modelAnswer: "Heute geben sich die Kunden die Klinke in die Hand. Obwohl der Tag stressig ist, will ich nicht aufgeben. Mein Kollege wollte Pause machen, aber er gibt nach, als er sieht, wie viel noch zu tun ist.",
      }`,
  7: `{
        id: "m7-write-2", type: "open-writing", skill: "schreiben",
        prompt: "Schreibe 4–5 Sätze über ein Wochenende mit einem sozialen Treffen. Benutze mindestens 3 «setzen»-Ausdrücke.",
        mustUseWords: ["sich hinsetzen", "alles auf eine Karte setzen", "übersetzen"],
        instruction: "Schreibe deinen Text unten.",
        modelAnswer: "Am Samstag habe ich mich auf eine Parkbank hingesetzt. Neben mir saß ein Tourist und ich habe ihm etwas übersetzt. Er hat alles auf eine Karte gesetzt und einen Neuanfang in Deutschland gewagt.",
      }`,
  8: `{
        id: "m8-write-2", type: "open-writing", skill: "schreiben",
        prompt: "Schreibe 4–5 Sätze über die Vorbereitung auf ein wichtiges Event. Benutze mindestens 3 Redewendungen mit «legen».",
        mustUseWords: ["bereitlegen", "den Finger in die Wunde legen", "sich hinlegen"],
        instruction: "Schreibe deinen Text unten.",
        modelAnswer: "Am Abend vor der Messe habe ich alles bereitgelegt. Mein Kollege hat den Finger in die Wunde gelegt und gesagt, dass unsere Broschüren veraltet sind. Nach dem ganzen Stress wollte ich mich nur noch hinlegen.",
      }`,
  9: `{
        id: "m9-write-2", type: "open-writing", skill: "schreiben",
        prompt: "Schreibe 4–5 Sätze über einen typischen Freitagabend. Benutze mindestens 3 «kommen»-Redewendungen.",
        mustUseWords: ["runterkommen", "auf keinen grünen Zweig kommen", "entgegenkommen"],
        instruction: "Schreibe deinen Text unten.",
        modelAnswer: "Am Freitagabend will ich endlich runterkommen. Mit dem Haushalt komme ich unter der Woche auf keinen grünen Zweig. Mein Partner kommt mir entgegen und übernimmt das Kochen am Wochenende.",
      }`,
  10: `{
        id: "m10-write-2", type: "open-writing", skill: "schreiben",
        prompt: "Schreibe 4–5 Sätze über eine Situation, in der du die Nerven behalten musstest. Benutze mindestens 3 «halten»-Redewendungen.",
        mustUseWords: ["die Nerven behalten", "festhalten", "dagegenhalten"],
        instruction: "Schreibe deinen Text unten.",
        modelAnswer: "In einer stressigen Besprechung musste ich die Nerven behalten. Mein Chef hat an seiner Meinung festgehalten, obwohl sie falsch war. Ich musste dagegenhalten und ihm klar erklären, warum sein Plan nicht funktioniert.",
      }`,
  11: `{
        id: "m11-write-2", type: "open-writing", skill: "schreiben",
        prompt: "Schreibe 4–5 Sätze über einen Abend im Fitnessstudio. Benutze mindestens 3 «gehen»-Redewendungen.",
        mustUseWords: ["das geht gar nicht", "übergehen", "mitgehen"],
        instruction: "Schreibe deinen Text unten.",
        modelAnswer: "Im Fitnessstudio ging die Energie der Gruppe total mit. Der Trainer wollte keine Pause machen – das geht eigentlich gar nicht! Aber er ist schnell zur nächsten Übung übergegangen und am Ende haben sich alle großartig gefühlt.",
      }`,
};

// ---------------------------------------------------------------
// Apply patches
// ---------------------------------------------------------------

// Detect line endings
const NL = content.includes("\r\n") ? "\r\n" : "\n";

// 1. Insert TF exercises after MC (before GF) for modules 3-11
for (const moduleNum of [3, 4, 5, 6, 7, 8, 9, 10, 11]) {
  const marker = `      {${NL}        id: "m${moduleNum}-gf-1"`;
  const idx = content.indexOf(marker);
  if (idx === -1) {
    console.error(`Could not find gf-1 marker for module ${moduleNum}`);
    process.exit(1);
  }
  // Normalize TF exercise to use file's line endings
  const tfText = tfExercises[moduleNum].replace(/\n/g, NL);
  const insertion = `      ${tfText},${NL}`;
  content = content.slice(0, idx) + insertion + content.slice(idx);
}

// 2. Append speak-2 and write-2 after write-1 for modules 2-11
for (const moduleNum of [2, 3, 4, 5, 6, 7, 8, 9, 10, 11]) {
  // Find write-1's id
  const writeId = `id: "m${moduleNum}-write-1"`;
  const writeIdx = content.indexOf(writeId);
  if (writeIdx === -1) {
    console.error(`Could not find write-1 marker for module ${moduleNum}`);
    process.exit(1);
  }
  // From write-1, find the closing of the exercises array
  const closePattern = `${NL}    ],${NL}  },`;
  const closeIdx = content.indexOf(closePattern, writeIdx);
  if (closeIdx === -1) {
    console.error(`Could not find exercises close for module ${moduleNum}`);
    process.exit(1);
  }
  const speakText = speak2Exercises[moduleNum].replace(/\n/g, NL);
  const writeText = write2Exercises[moduleNum].replace(/\n/g, NL);
  const insertion = `${NL}      ${speakText},${NL}      ${writeText},`;
  content = content.slice(0, closeIdx) + insertion + content.slice(closeIdx);
}

writeFileSync("scripts/generate-modules.mjs", content, "utf8");
console.log("Successfully patched generate-modules.mjs with 27 new exercises!");
console.log("Now run: node scripts/generate-modules.mjs");
