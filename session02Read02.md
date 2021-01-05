# What is a command terminal ?

A command line, or terminal, is a text based interface to the system. You are able to enter commands by typing them on the keyboard and feedback will be given to you similarly as text.

The command line typically presents you with a prompt. As you type, it will be displayed after the prompt. Most of the time you will be issuing commands. Here is an example:

1. **`user@bash$`**  ls -l /home/ryan
1. total 3
1. drwxr-xr-x  2 ryan users 4096 Mar 23 13:34 bin
1. drwxr-xr-x 18 ryan users 4096 Feb 17 09:12 Documents
1. drwxr-xr-x  2 ryan users 4096 May 05 17:25 public_html
1. **`user@bash$`**

+ Line 1 presents us with a prompt ( user@bash ). After that we entered a command ( ls ). Typically a command is always the first thing you type. After that we have what are referred to as command line arguments ( -l /home/ryan ). Important to note, these are separated by spaces (there must be a space between the command and the first command line argument also). The first command line argument ( -l ) is also referred to as an option. Options are typically used to modify the behaviour of the command. Options are usually listed before other arguments and typically start with a dash ( - ).

+ Lines 2 - 5 are output from running the command. Most commands produce output and it will be listed straight under the issuing of the command. Other commands just perform their task and don't display any information unless there was an error.

+ Line 6 presents us with a prompt again. After the command has run and the terminal is ready for you to enter another command the prompt will be displayed. If no prompt is displayed then the command may still be running (you will learn later how to deal with this).
Your terminal probably won't have line numbers on it. I have just included them here to make it easier to refer to different parts of the material.

## more commands

### pwd
Print Working Directory - ie. Where are we currently.
###ls
List the contents of a directory.
###cd
Change Directories - ie. move to another directory.

### Relative path
A file or directory location relative to where we currently are in the file system.
### Absolute path
A file or directory location in relation to the root of the file system.
