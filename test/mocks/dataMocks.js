const gif1 = {
  id: 1,
  rating: 'g',
  images: {
    downsized: {
      url: 'http://fakeimg.pl/100/'
    },
    original: {
      url: 'fakeOriginalUrl1'
    }
  }
}

const gif2 = {
  id: 2,
  rating: 'g',
  images: {
    downsized: {
      url: 'http://fakeimg.pl/200/'
    },
    original: {
      url: 'fakeOriginalUrl2'
    }
  }
}
const gif3 = {
  id: 3,
  rating:
    'g',
  images:
    {
      downsized: {
        url: 'http://fakeimg.pl/300/'
      }
      ,
      original: {
        url: 'fakeOriginalUrl3'
      }
    }
}


const favoritesMap = new Map()
favoritesMap.set(1, gif1)
favoritesMap.set(2, gif2)


const gifsList = [gif1, gif2, gif3]

export {
  gif1, gif2, gif3, favoritesMap, gifsList
}
