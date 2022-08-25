import JSConfetti from "js-confetti";
export async function doConfetti() {
  const jsConfetti = new JSConfetti();
  await jsConfetti.addConfetti({
    confettiRadius: 6,
    confettiNumber: 500,
  });
}
