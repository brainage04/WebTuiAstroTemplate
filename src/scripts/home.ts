const statusOutput = document.getElementById('status-output');
const statusButton = document.getElementById('status-button');

if (statusOutput instanceof HTMLParagraphElement && statusButton instanceof HTMLButtonElement) {
  statusButton.addEventListener('click', () => {
    const timestamp = new Intl.DateTimeFormat(undefined, {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    }).format(new Date());

    statusOutput.textContent = `Template script wired at ${timestamp}.`;
  });
}
