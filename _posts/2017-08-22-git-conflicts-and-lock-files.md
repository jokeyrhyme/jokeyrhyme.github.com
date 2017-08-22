---
title: git conflicts and lock files
date: 2017-08-22 00:00:00 Z
layout: post
summary: In this post, I discuss dependency lock files, version control, and how I
  deal with inevitable merge conflicts
author: Ron
---

## {{ page.title }}

{{ page.summary }}


### tl;dr

Note the commands you executed that changed the lock file, restore a known-good copy of your lock file (e.g. from master), manually re-run those commands, and mark as resolved!


### what are dependency lock files?

Lock files for project dependencies are becoming an increasingly prevalent ingredient for [reproducible builds](https://martinfowler.com/bliki/ReproducibleBuild.html). I’ll briefly outline the lock file systems that I’m most familiar with, although this is by no means exhaustive:

-   Ruby projects and their [Gemfile.lock files](https://richonrails.com/articles/how-does-the-gemfile-lock-file-work) are where I first encountered the idea of lock files

-   JavaScript projects now feature [yarn.lock](https://yarnpkg.com/en/docs/yarn-lock) or [package-lock.json](https://docs.npmjs.com/files/package-lock.json) files, note that npm 4.x and older do not produce a lock file

-   Go / Golang projects may have [glide.lock](https://github.com/Masterminds/glide) or [Gopkg.lock](https://github.com/golang/dep) files

-   Rust projects may have a [Cargo.lock](http://doc.crates.io/guide.html#cargotoml-vs-cargolock) file

Lock files are usually machine-generated using their associated tooling, and are based on a human-maintained file that more-loosely specifies the desired dependencies and their versions. To fulfil their purpose, [lock files should be committed to version control](https://yarnpkg.com/blog/2016/11/24/lockfiles-for-all/).

Installing, uninstalling, or updating dependencies may cause minor or drastic changes to the lock file, and multiple team members making such changes will very likely result in a merge conflict that needs to be manually resolved.


### how to deal with conflicts within your lock file

My version control system of choice is `git`, and the example will be a JavaScript project using npm 5.x, so I leave it as an exercise for the reader to map these steps to alternatives


#### A. getting conflicting changes from master into your branch

1.  Make sure your copy of the master branch is up to date:

    `git checkout master; git pull` 

1.  Checkout your branch again:

    `git checkout my-branch`

1.  Either `git rebase master` or `git merge master`, we’ll assume that this operation is interrupted due to conflicts between master’s copy of the lock file and the copy in your branch


#### B. resolving conflicts in your lock file

Remember, lock files are machine-generated, and a human is poorly-equipped to correctly resolve dozens or hundreds of conflicting lines

1.  We’ll start by restoring master’s copy of the lock file, as it should be in a known-working state:

    `git checkout master -- package-lock.json`

1.  Now we manually re-run the dependency change we made earlier, which we can hopefully either remember clearly or read from the commit message, in this example:

    `npm install lodash`

1.  Now the lock file will have been modified by the dependency tool that created it, and no humans were harmed by any crazy line-by-line decision-making

1.  Mark the lock file as resolved:

    `git add package-lock.json`


#### C. finishing the rebase / merge

1.  Continue resolving other conflicts and marking them as such, the remainder of these should hopefully be in human-created files, where a human has a some chance of figuring out a resolution

1.  If you are merging, you can finish with:

    `git commit`

1.  Otherwise, if you are rebasing, you can continue with:

    `git rebase --continue`
    
    You will have to repeat the process of resolving conflicts on a per-commit basis, until there are no more conflicts and no more commits to process

1.  Finally, if you had previously pushed your branch to a central remote repository (e.g. “origin”), then you’ll want to force push (ONLY for your branch, NEVER for master):

    `git push -f origin my-branch`


### version control tips

These recommendations help make conflict resolution a little less painful, but they are optional and the process should work out to be same (just a bit trickier):

-   Try to treat your lock files as though they were inscrutable binary blobs: just because they are (usually) plain text files does not mean you should be tempted to hand-edit them

-   Do your work within a branch, and merge your branch back into its parent branch when your work is completed and reviewed: this helps to keep your master branch in a known-working state, and allows you to rebase in your branch with reckless abandon

-   Consider keeping your commits as [atomic](https://www.freshconsulting.com/atomic-commits/) as they can be, at least within your branch: this gives you the ability to revert, bisect, and/or rebase more easily, and can help tell a story for your code reviewers to follow

-   When committing the change to your lock file, take note of the type of operation (install, uninstall, or update), preferably in the commit message: remembering or recording this change is very important when resolving conflicts later

-   If you use `git`, then become comfortable with `git rebase` as an alternative to `git merge`: this is very powerful, and quite safe within your branches, and will allow you to deal with conflicts on a per-commit basis (multiple smaller change sets instead of one massive one)

-   Once you’re comfortable with `git rebase`, you can commit to your own branch as early and often as you please: you have the power to tidy up, split, combine, or reword your commits before the actual code review

-   One important case for `git merge` is that it is always safe to use when you are making changes to the master branch: `git rebase` should almost NEVER be used to make changes to your master branch


### closing remarks

Whilst this approach has been most useful to me for dealing with lock files, I believe this approach is equally useful when applied to other conflicting files that are machine-generated, such as minified or compiled code (if you happen to version such things), or even binary data such as multimedia assets.
