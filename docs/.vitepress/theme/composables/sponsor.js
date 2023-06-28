import { ref, onMounted } from 'vue'

// shared data across instances so we load only once.
const data = ref()

const dataHost = 'https://sponsors.vuejs.org'
const dataUrl = `${dataHost}/vite.json`

const viteSponsors = {
  special: [
    // sponsors patak-dev
    {
      name: '交流群',
      url: '',
      img: '../../../public/img/communication-group.jpg',
    },
  ],
  gold: [],
}

export function useSponsor() {
  onMounted(async () => {
    if (data.value) {
      return
    }

    const result = await fetch(dataUrl)
    const json = await result.json()

    data.value = mapSponsors(json)
  })

  return {
    data,
  }
}

function mapSponsors(sponsors) {
  return [
    {
      tier: '交流',
      size: 'big',
      items: viteSponsors['special'],
    },
    // {
    //   tier: 'Platinum Sponsors',
    //   size: 'big',
    //   items: mapImgPath(sponsors['platinum']),
    // },
    // {
    //   tier: 'Gold Sponsors',
    //   size: 'medium',
    //   items: viteSponsors['gold'].concat(mapImgPath(sponsors['gold'])),
    // },
  ]
}

const viteSponsorNames = new Set(
  Object.values(viteSponsors).flatMap((sponsors) =>
    sponsors.map((s) => s.name),
  ),
)

/**
 * Map Vue/Vite sponsors data to objects and filter out Vite-specific sponsors
 */
function mapImgPath(sponsors) {
  return sponsors
    .filter((sponsor) => !viteSponsorNames.has(sponsor.name))
    .map((sponsor) => ({
      ...sponsor,
      img: `${dataHost}/images/${sponsor.img}`,
    }))
}