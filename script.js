const preferenceButtons = Array.from(
  document.querySelectorAll('#notification-preference-button button')
).reverse();
const total = preferenceButtons.length;

unsubscribeFromChannels();

function unsubscribeFromChannels() {
  console.log(`Unsubscribing from ${preferenceButtons.length}/${total}`);
  if (preferenceButtons.length === 0) {
    console.log('Done!');
    return;
  }
  const button = preferenceButtons.pop();
  button.click();
  button.scrollIntoView();

  setTimeout(() => {
    Array.from(document.querySelector('#contentWrapper #items').children)
      .slice(-1)[0]
      .click();
    setTimeout(() => {
      const confirm = document.querySelector(
        '#main .buttons button[aria-label="Unsubscribe"]'
      );
      confirm.click();
      setTimeout(unsubscribeFromChannels, 200);
    }, 200);
  }, 400);
}
