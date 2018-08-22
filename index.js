Ejemplo

Parte 3


Parte 4


Parte 5

Parte 6


Prueba de dev

<!>
<html>
</html>



<Last login: Wed Aug 22 11:17:37 on ttys000
TLSCPU0689:~ alumno07-1001$ git
usage: git [--version] [--help] [-C <path>] [-c name=value]
           [--exec-path[=<path>]] [--html-path] [--man-path] [--info-path]
           [-p | --paginate | --no-pager] [--no-replace-objects] [--bare]
           [--git-dir=<path>] [--work-tree=<path>] [--namespace=<name>]
           <command> [<args>]

These are common Git commands used in various situations:

start a working area (see also: git help tutorial)
   clone      Clone a repository into a new directory
   init       Create an empty Git repository or reinitialize an existing one

work on the current change (see also: git help everyday)
   add        Add file contents to the index
   mv         Move or rename a file, a directory, or a symlink
   reset      Reset current HEAD to the specified state
   rm         Remove files from the working tree and from the index

examine the history and state (see also: git help revisions)
   bisect     Use binary search to find the commit that introduced a bug
   grep       Print lines matching a pattern
   log        Show commit logs
   show       Show various types of objects
   status     Show the working tree status

grow, mark and tweak your common history
   branch     List, create, or delete branches
   checkout   Switch branches or restore working tree files
   commit     Record changes to the repository
   diff       Show changes between commits, commit and working tree, etc
   merge      Join two or more development histories together
   rebase     Reapply commits on top of another base tip
   tag        Create, list, delete or verify a tag object signed with GPG

collaborate (see also: git help workflows)
   fetch      Download objects and refs from another repository
   pull       Fetch from and integrate with another repository or a local branch
   push       Update remote refs along with associated objects

'git help -a' and 'git help -g' list available subcommands and some
concept guides. See 'git help <command>' or 'git help <concept>'
to read about a specific subcommand or concept.
TLSCPU0689:~ alumno07-1001$ mkdir
usage: mkdir [-pv] [-m mode] directory ...
TLSCPU0689:~ alumno07-1001$ mkdir initialRepository
TLSCPU0689:~ alumno07-1001$ cd initialRepository/
TLSCPU0689:initialRepository alumno07-1001$ git init
Initialized empty Git repository in /Users/alumno07-1001/initialRepository/.git/
TLSCPU0689:initialRepository alumno07-1001$ git status
On branch master

Initial commit

nothing to commit (create/copy files and use "git add" to track)
TLSCPU0689:initialRepository alumno07-1001$ touch index.js
TLSCPU0689:initialRepository alumno07-1001$ git status
On branch master

Initial commit

Untracked files:


Initial commiInitial commiInitial commiInitial cInitial commiInitial Initial commiInitial committcommittommittInitial committt
# Please enter the commit message for your changes. Lines starting
  (use "git add <file>..." to include in what will be committed)

	index.js

nothing added to commit but untracked files present (use "git add" to track)
TLSCPU0689:initialRepository alumno07-1001$ git add index.js
TLSCPU0689:initialRepository alumno07-1001$ git status
On branch master

Initial commit

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)

	new file:   index.js

TLSCPU0689:initialRepository alumno07-1001$ git committed
git: 'committed' is not a git command. See 'git --help'.

Did you mean this?
	commit-tree
TLSCPU0689:initialRepository alumno07-1001$ i
-bash: i: command not found
TLSCPU0689:initialRepository alumno07-1001$ git commit


Initial commit
error: There was a problem with the editor 'vi'.
Please supply the message using either -m or -F option.
TLSCPU0689:initialRepository alumno07-1001$ git remote add origin https://github.com/ronald715/prueba.git
TLSCPU0689:initialRepository alumno07-1001$ git push -u origin master
error: src refspec master does not match any.
error: failed to push some refs to 'https://github.com/ronald715/prueba.git'
TLSCPU0689:initialRepository alumno07-1001$ git remote add origin https://github.com/ronald715/prueba.git
fatal: remote origin already exists.
TLSCPU0689:initialRepository alumno07-1001$ git push
fatal: The current branch master has no upstream branch.
To push the current branch and set the remote as upstream, use

    git push --set-upstream origin master

TLSCPU0689:initialRepository alumno07-1001$ git remote add origin https://github.com/ronald715/prueba.git
fatal: remote origin already exists.
TLSCPU0689:initialRepository alumno07-1001$ git push -u origin master
error: src refspec master does not match any.
error: failed to push some refs to 'https://github.com/ronald715/prueba.git'
TLSCPU0689:initialRepository alumno07-1001$ git branch -l
TLSCPU0689:initialRepository alumno07-1001$ git commit
[master (root-commit) 1ffb903] Initial commit
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 index.js
TLSCPU0689:initialRepository alumno07-1001$ git branch -l
* master
TLSCPU0689:initialRepository alumno07-1001$ git push -u origin master
Username for 'https://github.com': ronald715
Password for 'https://ronald715@github.com':
Counting objects: 3, done.
Writing objects: 100% (3/3), 210 bytes | 0 bytes/s, done.
Total 3 (delta 0), reused 0 (delta 0)
To https://github.com/ronald715/prueba.git
 * [new branch]      master -> master
Branch master set up to track remote branch master from origin.
TLSCPU0689:initialRepository alumno07-1001$ mv>