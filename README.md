# insta-search
Instagram user details

## Installation
```
npm install insta-search
```

## Usage
```js
const insta = require("insta-search");

insta.search("xRokz").then(user => console.log(user))
```
## Response Example
### Search
```js
    user:
     { pk: string,
       username: string,
       full_name: string,
       is_private: Boolean,
       profile_pic_url: string,
       profile_pic_id: string,
       is_verified: boolean,
       has_anonymous_profile_picture: boolean,
       follower_count: integer,
       reel_auto_archive: string,
       byline: string,
       mutual_followers_count: integer,
       unseen_count: integer 
     }
```
