const fileDatabase = [
  { keyword: "26.02.00000025", url: "https://annovex.sharepoint.com/:b:/s/Annovex/IQCC7YFFIKEaSrR33xIqQ7b1AXQcrP0TW4iKwQbEptNmpnA?e=tdyZcg" },
  { keyword: "26.02.00000028", url: "https://annovex.sharepoint.com/:b:/s/Annovex/IQC0B0rXft3fTbkHQUyPxyHPATjHcIPa0Sa-Nedo_G4uM28?e=TKqrom" },
  { keyword: "26.02.00000029", url: "https://annovex.sharepoint.com/:b:/s/Annovex/IQDaqY_vlwI_RalDMumCos-BAWMOhaQfssfZ5QPMX-Jsnm8?e=CWACqz" },
  { keyword: "26.03.00000007", url: "https://annovex.sharepoint.com/:b:/s/Annovex/IQCC7YFFIKEaSrR33xIqQ7b1AXQcrP0TW4iKwQbEptNmpnA?e=tdyZcg" },
  { keyword: "26.03.00000034", url: "https://annovex.sharepoint.com/:b:/s/Annovex/IQAYmVu5OyZaTZ5vH1h3UhZsARMQrfml7hS5_jA0WDlgzow?e=Jd5Ehc" },
  { keyword: "26.03.00000052", url: "https://annovex.sharepoint.com/:b:/s/Annovex/IQB5Iy8k5pwoR5pZsq8FM-KAARPEynwJzUtoZatKwLXnbrw?e=p7wQ7I" },
  { keyword: "26.04.00000019", url: "https://annovex.sharepoint.com/:b:/s/Annovex/IQAp5W4tH5lmTIO_GtxyJuCyAd-tBaYMZqdHOm65vux3tCc?e=h8VQbc" },
  { keyword: "26.05.00000006", url: "https://annovex.sharepoint.com/:b:/s/Annovex/IQD0dQMTK2crT4HOoaKZvXWpAcRscGk0f-RbImvnD67vfOA?e=ZON8gr" },
  { keyword: "26.05.00000018", url: "https://annovex.sharepoint.com/:b:/s/Annovex/IQA5He1VncIjT7UhVdse1S2YAXIFqjf-mTI0gPmEpJPAVGE?e=ZiNRQn" },
  { keyword: "26.04.00000011", url: "https://annovex.sharepoint.com/:b:/s/Annovex/IQARMumQ0PWJTKLdAq_lJHlWAXao4PRcInMZ7DHES9KwBmw?e=39rl8O" },
  { keyword: "26.02.00000030", url: "https://annovex.sharepoint.com/:b:/s/Annovex/IQAlHrJp76_1TqNZ-d8EQg2aAbOO76dQPtlWyr-l1Xxqxe0?e=Jv0ars" },
  { keyword: "26.03.00000010", url: "https://annovex.sharepoint.com/:b:/s/Annovex/IQCBGkpN-dwUTrLJ4GNahDPIAdTKpE0bD8SNL-ZgMDr2ASE?e=c5Qfze" },
  { keyword: "26.03.00000028", url: "https://annovex.sharepoint.com/:b:/s/Annovex/IQDrUKDIv2F3QKiFmVq6DfJKAWteqls66YGGdR1wqFxxHb0?e=NW1mdH" },
  { keyword: "26.04.00000001", url: "https://annovex.sharepoint.com/:b:/s/Annovex/IQD7OJy50rEvTLXtoQgVZsS5AS8yh3XGkxrndd7QuiVL0kg?e=6tqUqQ" },
  { keyword: "26.04.00000016", url: "https://annovex.sharepoint.com/:b:/s/Annovex/IQBwFCmejho1QIz2XEmKGh2YAYV_uJMYfvw_lsYIXgrAmek?e=INHZzr" },
  { keyword: "26.04.00000015", url: "https://annovex.sharepoint.com/:b:/s/Annovex/IQAtcHp5azi4TJYWA5y1JlCAAVGuADJ4KKDrIrvHIwqUqe8?e=5SyTzb" },
  { keyword: "26.05.00000014", url: "https://annovex.sharepoint.com/:b:/s/Annovex/IQBDcW3tVpzMRZ4Jo2gIMnDUAU8JtcXgqHFoC2EZcFqU26I?e=jClXWV" },
  { keyword: "26.05.00000019", url: "https://annovex.sharepoint.com/:b:/s/Annovex/IQAV_ewnySQESKACPebRtjWwAcX73NBnRCmGq-dAQR9UnZg?e=HW7mzM" }
];

function performSearch() {
  const query = document
    .getElementById('searchInput')
    .value
    .trim()
    .toLowerCase();

  const resultDiv = document.getElementById('result');

  const match = fileDatabase.find(
    file => file.keyword.toLowerCase() === query
  );

  if (match) {
    resultDiv.innerHTML =
      `<a href="${match.url}" target="_blank">Lot# ${match.keyword}</a>`;
  } else {
    resultDiv.textContent = "No exact match found.";
  }
}

// Search button click
document
  .getElementById('searchButton')
  .addEventListener('click', performSearch);

// Enter key press
document
  .getElementById('searchInput')
  .addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      performSearch();
    }
  });
