# teams-hide-message-from-user-css
A css selector to hide messages from a user, usable with stylus

# Instructions

## Install a style manager 

**Userscript tested only with the stylus style manager :**
https://github.com/openstyles/stylus?tab=readme-ov-file#releases

## Install the style :
https://userstyles.world/style/26699/tl9-teams-hide-messages-from-user

## Configure a user to hide :

```css
/* hide message content from user LASTNAME*/
div[class*="fui-ChatMessage"]:has(img[src*="LASTNAME"]) div[data-message-content],
empty
{
    display:none;
}

/*show message from user LASTNAME on hover*/
div[class*="fui-ChatMessage"]:has(img[src*="LASTNAME"]):hover div[data-message-content],
empty {
 display:unset;   
}
```

replace LASTNAME with the LASTNAME of the users to hide

# TODO :

- [ ] User interface for adding hidden users
