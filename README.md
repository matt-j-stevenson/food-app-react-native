# Restaurant Search/Pricing App - React Native

[React Native Docs](https://facebook.github.io/react-native/docs/getting-started)

### Run:

```javascript
    npm install npm@latest -g

    npm start

    *outdated*
```

#### A restaurant searching Application developed in React Native in conjuction with the Yelp API. The App allows users to search a specific area/location for restaurants based on genre, e.g. Fast Food, Pizza, Pasta etc. The App pulls down information on the restaurants via the Yelp API and with the help of Axio, not the built in fetch functionality - when it does this, it orders restaurants based on their price rating, which can be '£', '££' or '£££' and aligns them into horizontally scrollable components, the App also portrays information on their Star rating and how many reviews the restaurant has. The elements are also made clickable and more images can be viewed.

#### Although this is a simple project, it's really helped me grasp the concept of RN more thorougly and the use of external API calls to pull in information from outside sources.

###### The App as stated, allows a user to browse a series of Restaurants in different geographic areas, based on Pricing/Cost. Below is the home screen of the application - set to fetch restaurants in Carrickfergus, Northern Ireland. We also pull in information from Yelp regarding reviews numbers and star ratings.

[![IMG-3417.png](https://i.postimg.cc/yYMKv57r/IMG-3417.png)](https://postimg.cc/zVF4fxbn)

###### The user can then search a location, here, we search Belfast.

[![IMG-3419.png](https://i.postimg.cc/rygCGXNM/IMG-3419.png)](https://postimg.cc/5jYC1rrR)

###### When pressing 'Search', the user is met with a list of restaurants in that area based on pricing. Here, we receive information about some 'More Pricey' restaurants available.

[![IMG-3420.png](https://i.postimg.cc/sfpfbsNC/IMG-3420.png)](https://postimg.cc/mhgGHf4m)

###### Finally, and quite simplistically, the user can then click on a desired restaurant and view a series of images (maximum of 3), to get a better feel of what that diner may be like to vist.

[![IMG-3421.png](https://i.postimg.cc/8PQ4PB4r/IMG-3421.png)](https://postimg.cc/dD6r5Czq)
