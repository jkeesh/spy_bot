Simple bot to tweet out spy quotes.

## Directions to install.

1. Create an app on twitter.

Save the key and secret, as well as token and secret.

Create an app here: https://apps.twitter.com/

2. Create a secrets.js file in your working folder.

To use this, you must create a secrets.js file with your bot and keys of the format

For bots that just use the twitter api this format can work

```
module.exports = {
    consumer_key:         'xxx'
  , consumer_secret:      'xxx'
  , access_token:         'xxx'
  , access_token_secret:  'xxx'
};
```

For bots that use the twitter api and the barchart api, this format is what I used

module.exports = {
    'twitter': {
        consumer_key:         'xxx'
      , consumer_secret:      'xxx'
      , access_token:         'xx-xx'
      , access_token_secret:  'xxx'
    },
    'stocks': 'yy'
};


You can rename secrets-sample.js to secrets.js and add your twitter secrete keys to
make it work.

3. Test locally by creating a tweet.

4. Deploy to your server.

Create a new directory in a bots/ folder. Then create a new remote repository using
the create_repo.py script. Add this as a web remote.

5. Set up the cronjob.

crontab -e

Add your cronjob. This runs it every 20 minutes.

*/20 * * * * cd /home/jkeesh/bots/spy_bot/ && /usr/local/bin/node main.js >> /home/jkeesh/logs/cronlog 2>&1
