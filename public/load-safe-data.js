// load-safe-data.js
// Fetches ./safe-data.json and renders the dashboard.
// Designed to work on GitHub Pages / Vercel (relative fetch; same-origin).

const DATA_PATH = './safe-data.json'; // relative, avoids CORS issues
const SIGNER_ADDRESS = '0xFDf84a0e7D07bC56f7De56696fc409704cC83a24'.toLowerCase(); // your signer (ends with 24)
let showBalances = false; // default: hidden
let safeData = null;

const el = {
  list: document.getElementById('safe-list'),
  err: document.getElementById('error-message'),
  toggleBtn: document.getElementById('toggleHidden'),
  refreshBtn: document.getElementById('refreshBtn')
};

el.toggleBtn.addEventListener('click', () => {
  showBalances = !showBalances;
  el.toggleBtn.textContent = showBalances ? 'Hide Balances' : 'Show Balances';
  render();
});

el.refreshBtn.addEventListener('click', () => {
  loadData(true);
});

async function loadData(skipCache=false){
  el.err.textContent = '';
  el.list.innerHTML = 'Loading Safe data…';
  try {
    const url = skipCache ? `${DATA_PATH}?_=${Date.now()}` : DATA_PATH;
    const r = await fetch(url, {cache: 'no-store'});
    if (!r.ok) throw new Error(`Failed to load ${DATA_PATH}: ${r.status} ${r.statusText}`);
    safeData = await r.json();
    // sanity-check structure
    if (!safeData.addedSafes || !safeData.addressBook) {
      console.warn('safeData loaded but missing expected keys; continuing.');
    }
    render();
  } catch (err) {
    console.error(err);
    el.err.textContent = `Error loading data: ${err.message}`;
    el.list.innerHTML = '';
  }
}

function ownerLabel(o){
  // o may be object {value, name} or string
  if (!o) return '';
  if (typeof o === 'string') return o;
  return o.name || o.value || '';
}

function render() {
  if (!safeData) {
    el.list.innerHTML = 'No data loaded.';
    return;
  }

  const addedSafes = safeData.addedSafes || {};
  const addressBook = safeData.addressBook || {};

  const sections = [];

  // If addedSafes is keyed by chain id -> object of safes, iterate
  for (const chainKey of Object.keys(addedSafes)) {
    const safesForChain = addedSafes[chainKey];

    // safesForChain may be object of safeAddr -> safeObj OR array of strings
    if (!safesForChain || (typeof safesForChain !== 'object')) continue;

    for (const safeAddrRaw of Object.keys(safesForChain)) {
      const safeAddr = safeAddrRaw;
      const safe = safesForChain[safeAddrRaw];
      // If safe is a string (like when addedSafes uses arrays), skip; handle arrays below
      if (!safe || typeof safe !== 'object') continue;

      const chainId = chainKey;
      const displayName = (addressBook[chainId] && addressBook[chainId][safeAddr]) 
                            ? addressBook[chainId][safeAddr] 
                            : safeAddr;

      // owners: sometimes safe.owners is array of {value,..}; sometimes addressBook maps...
      const ownersArr = Array.isArray(safe.owners) ? safe.owners : (safe.ownersList || []);
      sections.push({
        chainId, safeAddr, displayName, ownersArr, threshold: safe.threshold ?? '-'
      });
    }
  }

  // In case addedSafes uses chain -> array of addresses format (support both)
  // e.g. addedSafes: { "1": [ "0xabc...", ... ] }
  for (const chainKey of Object.keys(addedSafes)) {
    const val = addedSafes[chainKey];
    if (Array.isArray(val)) {
      for (const addr of val) {
        // find addressBook name if present
        const displayName = (safeData.addressBook && safeData.addressBook[chainKey] && safeData.addressBook[chainKey][addr])
                              ? safeData.addressBook[chainKey][addr]
                              : addr;
        sections.push({ chainId: chainKey, safeAddr: addr, displayName, ownersArr: [], threshold: '-' });
      }
    }
  }

  if (sections.length === 0) {
    el.list.innerHTML = '<div style="padding:12px">No safes found in safe-data.json</div>';
    return;
  }

  // build HTML
  el.list.inner
