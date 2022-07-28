# Turn It Off!

A very simple function to detect if user is using proxy. 


## About
- Simple compare of system and broswer timezone. Not realiable!
- Get information about client and browser IPs and is they`re equal(boolean)
- Check your `*warn* console to see client and browser IPs.

## Return
```
    {
        browser: (string),
        ip: (string),
        hasVPN: (boolean),
    }
```

## How to use 

```
checkVPN().then((res) => {
    console.warn(res);
});

```