# teams-hide-message-from-user-css
A css selector to hide messages from a user, usable with stylus

# Instructions

## Install a style manager 

**Userscript tested only with the stylus style manager :**
https://github.com/openstyles/stylus?tab=readme-ov-file#releases

## Install the style :
https://userstyles.world/style/26699/tl9-teams-hide-messages-from-user

## Configure a user to hide :

On this lines of the style

```css
div[class*="fui-ChatMessage"]:has(img[src*="LASTNAME"]) div[data-message-content],

div[class*="fui-ChatMessage"]:has(img[src*="LASTNAME"]):hover div[data-message-content],
```

replace LASTNAME with the LASTNAME of the user to hide

## Add another user to hide

Duplicates line with the lastname of the second user to hide

```css
div[class*="fui-ChatMessage"]:has(img[src*="LASTNAME"]) div[data-message-content],
div[class*="fui-ChatMessage"]:has(img[src*="LASTNAME2"]) div[data-message-content],

div[class*="fui-ChatMessage"]:has(img[src*="LASTNAME"]):hover div[data-message-content],
div[class*="fui-ChatMessage"]:has(img[src*="LASTNAME2"]):hover div[data-message-content],
```

replace LASTNAME2 with the LASTNAME of the second user to hide

**Duplicate the lines as many times as there are users to hide**

# TODO :

- [ ] User interface for adding hidden users (javascript that inserts CSS ?)
