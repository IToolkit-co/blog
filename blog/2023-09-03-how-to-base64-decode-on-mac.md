---
title: How to Base64 Decode on Mac | IToolkit
path: /how-to-base64-decode-on-mac
date: 2021-10-18
summary: Learn how to decode base64 on Mac using Terminal commands like base64 or free online Base64 decoder tools.
tags: ['Base64']
categories: ['Base64']
thumbnail: ./2023-09-03-how-to-base64-decode-on-mac.png
is_archived: false
sidebar: Alternative
---

> ## Excerpt
>
> Learn how to decode base64 on Mac using Terminal commands like base64 or free online Base64 decoder tools.

Encoding data into Base64 format is a very common process used to securely transmit information over networks and the internet. Base64 encoding converts binary data into a text format that can be safely sent between systems.

However, you’ll often find yourself needing to decode Base64 encoded data on your Mac. Whether it’s an API response, file attachment, or secret key, being able to quickly decode Base64 is a handy skill for any Mac user.

In this article, we’ll explore some easy ways to decode Base64 strings using built-in Mac commands and online tools.

## Using base64 to Decode in Terminal

MacOS comes with a handy base64 command line utility that can encode and decode Base64 strings right in Terminal.

To decode a Base64 string using base64:

1.  Open the Terminal app

2.  Type `base64 -D` and hit enter. This puts Terminal into decode mode.

3.  Now paste or type your Base64 encoded string after the command and hit enter again.

4.  Finally, enter `ctrl+d` to signal the end of input.

### Decoding and Printing

![Animated gif showing how to base64 decode a string in the Mac terminal](https://itoolkit.co/blog/2023/09/how-to-base64-decode-on-mac//blog-how-to-base64-decode-on-mac.gif)

The decoded output will print.

For example:

```shell
base64 -D

SVRvb2xraXQ=

[ctrl+d]
```

Prints:

```shell
IToolkit
```

The -D flag tells base64 to decode the input.

You need to hit enter after `base64 -D` before pasting the encoded string. Then `ctrl+d` after pasting to decode.

This ensures base64 is ready and waiting for input before you paste, and knows when the input is complete.

### Decoding Output to a File

You can also redirect the decoded output to a file instead of printing to the terminal:

```shell
base64 -D > decoded.txt

[Paste encoded string]

[ctrl+d]
```

The base64 command provides an easy way to decode Base64 strings directly in your terminal.

The base64 command makes it straightforward to decode even longer strings and file contents as well. You can also pipe data directly from your clipboard using pbpaste, which we’ll cover next.

## Integrate Base64 Decoding with Your Clipboard

MacOS includes a handy command called pbpaste that lets you pipe the contents of your clipboard directly to other commands.

This means you can instantly decode any copied Base64 data without needing to type or paste it into the terminal.

To decode clipboard data just run:

```shell
pbpaste | base64 -D
```

pbpaste will output your clipboard contents, the pipe | sends it to base64 -D for decoding.

For example, if you copy this Base64 string `SVRvb2xraXQ=` to your clipboard, then running the above command will instantly print:

```shell
IToolkit
```

No need to manually type out long encoded strings anymore!

## Decode Full Base64 Encoded Files

In addition to short strings, you may also encounter larger Base64 encoded files on your Mac that need decoding.

The base64 utility can handle these as well with the -i option:

```shell
base64 -i file.txt
```

This will read file.txt, decode the Base64 contents, and print the output to the terminal.

You can then redirect the output to a new file like so:

```shell
base64 -i file.txt > decoded.txt
```

This will save the decoded version to decoded.txt.

Tip: You can also pipe the file decoding to pbcopy to copy the output straight to your clipboard.

```shell
base64 -i file.txt | pbcopy
```

## Use Online Base64 Decoders

While the Terminal commands provide a quick way to decode Base64 on your Mac, there are also many free online Base64 decoder tools available. Online decoders give an option for users who may not be comfortable using the command line yet.

### Benefits of Online Decoders

- Easy to use, no command line knowledge needed
- Accessible from any device’s web browser
- Provide instant decoding

### Recommended Online Base64 Decoders

- [IToolkit Base64 Decoder](https://itoolkit.co/app/base64-decode) - Fast and secure, does not send data to server, beautiful and user-friendly interface
- [Base64Decode.org](http://www.base64decode.org/) - Simple and intuitive interface
- [Base64Decode.net](https://www.base64decode.net/) - Supports batch decoding

The online tools from IToolkit aim to provide fast and easy solutions. Our Base64 Decoder supports much larger files than most online offerings. We invite you to explore the other free online tools available in the [IToolkit](https://itoolkit.co).

## Conclusion

Being able to easily decode Base64 encoded strings is invaluable for every Mac user. Using Terminal commands like base64 and pbpaste provides a quick way to decode Base64 right from your command line.

Tools like pbpaste even let you instantly decode clipboard contents without any copying and pasting. Online Base64 decoders offer another option accessible from any web browser.

Hopefully this article has shown you several methods to approach Base64 decoding on your Mac using built-in tools and online utilities. The next time you encounter encoded data, you’ll know exactly how to handle it.

At IToolkit our mission is empowering productivity by providing helpful tools accessible to everyone. We invite you to explore the many time-saving web apps available in our toolkit.
