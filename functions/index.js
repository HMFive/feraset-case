/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const { onDocumentCreated } = require("firebase-functions/v2/firestore");
const admin = require("firebase-admin");

admin.initializeApp();
const db = admin.firestore();

exports.onPromptCreated = onDocumentCreated(
  "prompts/{docId}",
  async (event) => {
    const docId = event.params.docId;

    const randomNumber = getRandomInt(30, 60);

    setTimeout(async () => {
      await db.collection("prompts").doc(docId).update({
        status: "ready",
        secondsToGenerate: randomNumber,
      });
    }, randomNumber * 1000);
  },
);

function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}
